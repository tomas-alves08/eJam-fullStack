exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('openMics').del()
  await knex('openMics').insert([
    {
      id: 1,
      region: 'South Island',
      venue: 'Red16',
      city: 'Nelson',
      location: '19 New Street',
      frequency: 'weekly',
      day: 'Thursdays',
      start_time: '8pm',
      finish_time: '11pm',
      instrument_one: 'Acoustic Guitar',
      instrument_two: 'Bass',
      instrument_three: 'Cajon',
      instrument_four: 'Saxophone',
    },
  ])
}
