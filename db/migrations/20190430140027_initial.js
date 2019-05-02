
exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTable('states', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.string('capitalCity')
      table.timestamps(true, true)
    }),


    knex.schema.createTable('courses', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.string('city')
      table.integer('holes')
      table.boolean('multiplePins')
      table.string('majorTournament')
      table.integer('par')
      table.string('rating')
      table.integer('state_id').unsigned()
      table.foreign('state_id')
        .references('states.id')
      table.timestamps(true, true)
    })
  ])
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTable('courses'),
    knex.schema.dropTable('states')
  ])
};
