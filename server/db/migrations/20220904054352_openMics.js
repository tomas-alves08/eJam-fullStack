exports.up = function (knex) {
  return knex.schema.createTable('openMics', (table) => {
    table.increments('id')
    table.string('venue')
    table.string('city')
    table.string('location')
    table.string('frequency')
    table.string('day')
    table.string('date')
    table.string('start_time')
    table.string('finish_time')
    table.string('instrument_one')
    table.string('instrument_two')
    table.string('instrument_three')
    table.string('instrument_four')
    table.string('instrument_five')
    table.string('instrument_six')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('openMics')
}
