// import knexCleaner from 'knex-cleaner';
const knexCleaner = require('knex-cleaner');

exports.up = async knex => {
  await knex.schema.dropTableIfExists('flavors');
  await knex.schema.dropTableIfExists('menu');
  await knex.schema.dropTableIfExists('events');
};

exports.down = knex =>
  knexCleaner.clean(knex, { mode: 'delete', restartIdentity: true });
