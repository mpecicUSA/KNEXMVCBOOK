
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { name: 'Marko', comment:"this book is the best", book_id: 2},
        { name: 'Lucas', comment:"this book is the best tralalallala", book_id: 1}
      ]);
    });
};
