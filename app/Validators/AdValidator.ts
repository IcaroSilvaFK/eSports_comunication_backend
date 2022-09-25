import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AdValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    gameName: schema.string(),
    description: schema.string(),
    gameImage: schema.string(),
  })

  public messages: CustomMessages = {}
}
