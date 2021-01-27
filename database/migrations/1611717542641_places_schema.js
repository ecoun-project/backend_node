'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlacesSchema extends Schema {
  up () {
    this.create('places', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.text('description').notNullable()
      table.string('latitude').notNullable()
      table.string('longitude').notNullable()
      table.boolean('status').defaultTo(true)
      table.string('category').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('places')
  }
}

module.exports = PlacesSchema
