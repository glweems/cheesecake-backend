exports.seed = knex =>
  knex('menu')
    .del()
    .then(() =>
      knex('menu').insert([{ item: 'Cheesecake' }, { item: 'Creme Brulee' }])
    );
