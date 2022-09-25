import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/users', 'UsersController.store')
  Route.post('/sessions', 'SessionsController.store')
  Route.delete('/sessions', 'SessionsController.destroy')
  Route.post('/ads', 'AdsController.store').middleware('auth')
  Route.get('/users/ads', 'AdsController.findAllBy').middleware('auth')

  Route.get('/ads', 'AdsController.getAll')
})
