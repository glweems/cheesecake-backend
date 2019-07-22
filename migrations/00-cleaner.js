exports.up = async knex => {
  await knex.schema.dropTableIfExists('flavors');
  await knex.schema.dropTableIfExists('menu');
  await knex.schema.dropTableIfExists('events');
};
exports.down = async knex => {
  await knex.schema.dropTableIfExists('flavors');
  await knex.schema.dropTableIfExists('menu');
  await knex.schema.dropTableIfExists('events');
};
