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
      auth_token:
        'eyJhbGciOiJSUzI1NiIsImtpZCI6IjVkMzQwZGRiYzNjNWJhY2M0Y2VlMWZiOWQxNmU5ODM3ZWM2MTYzZWIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZWphbS03MmE0YyIsImF1ZCI6ImVqYW0tNzJhNGMiLCJhdXRoX3RpbWUiOjE2NjYxMjczMzAsInVzZXJfaWQiOiJhQTJYUFZWTllxWmNtTHF5QlNWajE2NGJyUTUzIiwic3ViIjoiYUEyWFBWVk5ZcVpjbUxxeUJTVmoxNjRiclE1MyIsImlhdCI6MTY2NjEyNzMzMCwiZXhwIjoxNjY2MTMwOTMwLCJlbWFpbCI6InRvbWFzLmFsdmVzMDhAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRvbWFzLmFsdmVzMDhAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.fgsooq-W39kXyQwYl02ppQ1f0jsSUjopZhjqy4AE-oo10sRsWhUcjiv5pubn4uvx7XINdrqmyju-jubym2gnIqrNdy_4ln6MotOnFBrTb9pomOas17LE0MxNuORfanMUM3ZbGlMMT7GgXPZ7JfPABvxelEzdNyUfSpW_CLQ9PlSkAQad73ChABOM8JHWgNdh5c34UgIg7M94d9xZh0Fwkza5EiWb2FS3u1HtbpadOhBXg4u8FHD5lkpInLrVlRNpqyn1ZBs-8Y-dky5oYSuV0LOk2kNjdxxv4p-k12nyrZGF9S3XnmHou5Dhi0N1eTYUdrEvNDO_n-Jil6Qr3kFbGQ',
    },
  ])
}
