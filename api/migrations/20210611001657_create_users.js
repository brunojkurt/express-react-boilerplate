const { onUpdate } = require('./triggers')

exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.uuid('id').unique().primary().notNullable()
      .defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('name').notNullable();
    table.string('email', 254).notNullable().unique();
    table.string('password', 60).notNullable();
    table.timestamp('created_at').notNullable()
      .defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable()
      .defaultTo(knex.fn.now());
  }).then(() => knex.raw(onUpdate('users')));
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
