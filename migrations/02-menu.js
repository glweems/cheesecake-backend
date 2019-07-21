exports.up = knex =>
  knex.schema.createTable('menu', table => {
    table.increments('id').primary();
    table.string('item');
  });

exports.down = knex => knex.schema.dropTable('menu');
