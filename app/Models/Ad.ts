import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid'
import User from './User'

export default class Ad extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column({ columnName: 'game_name' })
  public gameName: string

  @column()
  public description: string

  @column({ columnName: 'user_id' })
  public userId: string

  @column({ columnName: 'game_image' })
  public gameImage: string

  @column({ columnName: 'is_active' })
  public isActive: boolean

  @belongsTo(() => User, {
    foreignKey: 'userId',
  })
  public author: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static assignData(ad: Ad) {
    ad.id = uuid()
  }
}
