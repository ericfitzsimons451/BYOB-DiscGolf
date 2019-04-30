
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('states', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.string('capitalCity')
      table.timestamps(true, true)
    }),

    knex.schema.createTable('courses', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.string('city')
      table.integer('holes')
      table.boolean('multiplePins')
      table.string('majorTournament')
      table.integer('par')
      table.string('rating')
      table.timestamps(true, true)
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('states'),
    knex.schema.dropTable('courses')
  ])
};
