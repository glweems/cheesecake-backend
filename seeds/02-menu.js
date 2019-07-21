exports.seed = knex =>
  knex('menu')
    .del()
    .then(() =>
      knex('menu').insert([{ item: 'cheesecake' }, { item: 'Creme Brulee' }])
    );
