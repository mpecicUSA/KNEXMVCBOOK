
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {name: "Level 25 heathstone", description: "I wana be the very best", img_url: "https://d2q63o9r0h0ohi.cloudfront.net/images/fb-share/facebook-share-default-04812acb25dba13239f3dbe52750ff0f4ae58cc52b5924e7cf6ffea5e1b8993d4f07bb5918b25cb9f8bb8f626f694e20e579f8eb50a43de1c1fd2fc1d6c81a60.jpg",author_id: 1 },
        {name: "Harry Potter ", description: "Tralalallalalallalalalalallalalla", img_url: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Harry_Potter_and_the_Philosopher%27s_Stone_banner.jpg/220px-Harry_Potter_and_the_Philosopher%27s_Stone_banner.jpg", author_id: 2}
      ]);
    });
};
