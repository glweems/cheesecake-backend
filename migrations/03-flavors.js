exports.up = knex =>
  knex.schema.createTable('flavors', table => {
    table.increments('id').primary();
    table
      .integer('item')
      .references('id')
      .inTable('menu')
      .unsigned()
      .notNullable()
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table.string('flavor');
    table.string('color');
  });

exports.down = knex => knex.schema.dropTable('flavors');
