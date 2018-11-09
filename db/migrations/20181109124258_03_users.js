
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
  table.increments();
  table.string('name');
  table.text('comment');
  table.integer('book_id').references('id').inTable('books').onDelete('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
