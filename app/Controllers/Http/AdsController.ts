import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Ad from 'App/Models/Ad'
import User from 'App/Models/User'

export default class AdsController {
  public async store({ request, response, auth }: HttpContextContract) {
    const { description, gameImage, gameName } = request.only([
      'gameName',
      'description',
      'gameImage',
    ])
    const { id } = auth.user as User

    const adCreated = await Ad.create({
      description,
      gameImage,
      gameName,
      userId: id,
    })

    return response.created(adCreated)
  }

  public async getAll({ response }: HttpContextContract) {
    const ads = await Ad.query().preload('author')

    return response.ok(ads)
  }

  public async findAllBy({ response, auth }: HttpContextContract) {
    const adsToUser = await Ad.query().where('user_id', auth.user!.id)

    return response.ok({
      ads: adsToUser,
    })
  }
}
