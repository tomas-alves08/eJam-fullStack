exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('openMics_').del()
  await knex('openMics_').insert([
    {
      id: 1,
      venue: 'Red16',
      city: 'Nelson',
      location: '10 New Street',
      day: 'Thursdays',
      start_time: '8pm',
      finish_time: '11pm',
    },
  ])
}
