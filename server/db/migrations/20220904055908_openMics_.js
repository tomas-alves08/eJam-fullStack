exports.up = function (knex) {
  return knex.schema.createTable('openMics_', (table) => {
    table.increments('id')
    table.string('venue')
    table.string('city')
    table.string('location')
    table.string('day')
    table.string('start_time')
    table.string('finish_time')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('openMics_')
}
