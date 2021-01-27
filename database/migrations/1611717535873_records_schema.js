'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RecordsSchema extends Schema {
  up () {
    this.create('records', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('place_id').unsigned().references('id').inTable('places')
      table.timestamps()
    })
  }

  down () {
    this.drop('records')
  }
}

module.exports = RecordsSchema
