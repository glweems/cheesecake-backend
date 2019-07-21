exports.seed = knex =>
  knex('flavors')
    .del()
    .then(() =>
      knex('flavors').insert([
        { item: 1, flavor: 'lemon', color: 'yellow' },
        { item: 1, flavor: 'Blueberry', color: 'blue' },
        { item: 1, flavor: 'Chocolate Chip', color: 'black' },
        { item: 2, flavor: 'Original', color: 'creme' },
        { item: 2, flavor: 'Coffee', color: 'brow' },
        { item: 2, flavor: 'Spicy', color: 'red' }
      ])
    );
