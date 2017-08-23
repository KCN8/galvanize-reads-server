
exports.up = function(knex, Promise) {
  return knex.schema.createTable('author', (table) => {
  table.increments();
  table.text('first-name').notNullable();
  table.text('last-name').notNullable();
  table.text('biography').notNullable();
  table.text('portrait').notNullable();
})
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('author');
};
