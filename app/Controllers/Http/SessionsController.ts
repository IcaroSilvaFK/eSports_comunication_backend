import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'
import SessionValidator from 'App/Validators/SessionValidator'

export default class SessionsController {
  public async store({ request, response, auth }: HttpContextContract) {
    const { username } = await request.validate(SessionValidator)

    const user = await User.query().where('username', username).preload('ads').firstOrFail()

    const token = await auth.use('api').generate(user)

    return response.created({
      user: auth!.user,
      token,
    })
  }

  public async destroy({ response, auth }: HttpContextContract) {
    await auth.logout()

    return response.ok({})
  }
}
