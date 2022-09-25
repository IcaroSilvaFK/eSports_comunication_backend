import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'
import CreateUserValidator from 'App/Validators/CreateUserValidator'

export default class UsersController {
  public async store({ request, response }: HttpContextContract) {
    const { username, name } = await request.validate(CreateUserValidator)

    const user = await User.create({
      username,
      name,
    })

    return response.created({
      user,
    })
  }
}
