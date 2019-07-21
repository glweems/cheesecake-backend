exports.seed = knex =>
  knex('events')
    .del()
    .then(() =>
      knex('events').insert([
        {
          title: 'Truck Round Up',
          date: '08/01/2019',
          street: 'Main street',
          city: 'Denton',
          state: 'TX',
          zip: 76210
        }
      ])
    );
