exports.seed = knex =>
  knex('flavors')
    .del()
    .then(() =>
      knex('flavors').insert([
        { item: 1, flavor: 'Lemon', color: '#f0e68c' },
        { item: 1, flavor: 'Blueberry', color: '#4e4ed7' },
        { item: 1, flavor: 'Chocolate Chip', color: '#4e342e' },
        { item: 2, flavor: 'Original', color: '#e7c592' },
        { item: 2, flavor: 'Coffee', color: '#4e342e' },
        { item: 2, flavor: 'Spicy', color: '#b71c1c' }
      ])
    );
