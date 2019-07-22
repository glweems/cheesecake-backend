exports.seed = knex =>
  knex.schema.raw(`ALTER SEQUENCE events_id_seq RESTART WITH 1;
ALTER SEQUENCE menu_id_seq RESTART WITH 1;
ALTER SEQUENCE flavors_id_seq RESTART WITH 1;
`);
