import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'ads'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id')

      table.string('game_name').notNullable()
      table.string('description').notNullable()
      table.string('game_image').defaultTo(null)
      table.boolean('is_active').defaultTo(true)
      table.string('user_id').references('id').inTable('users')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
