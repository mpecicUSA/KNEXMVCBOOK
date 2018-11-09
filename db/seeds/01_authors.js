
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('authors').del()
    .then(function () {
      // Inserts seed entries
      return knex('authors').insert([
        {name: 'Harry Harison', bio: "With the fade"},
        {name: 'JK Rowling', bio: "Lots of books, probably from the UK"}
      ]);
    });
};
