//Update the name of the controller below and rename the file.
const index = require("../controllers/index.js")
module.exports = function(app){

  app.get('/', index.index);
  app.get("/createBook", index.createbook);
  app.get('/addAuthor', index.addAuthor);
  app.get('/discuss/:id', index.discuss);
  app.post('/books', index.addbooks);
  app.post('/create/author', index.createAuthor);

}
