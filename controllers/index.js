const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    knex("books").select().then((results) => {
    res.render("index", {books:results});
    })
  },
  createbook: (req,res) => {
    knex('authors').select().then((results) => {
      res.render('newbook', {authors:results});
    })
  },
  addbooks: (req,res) => {
    knex("books").insert(req.body).then(
      res.redirect("/")
    );
  },
  createAuthor: (req,res) => {
    knex('authors').insert(req.body).then(
      res.redirect("/createBook"))
  },
  addAuthor: (req,res)=> {
    res.render('createAuthor');
  },
  discuss: (req,res) => {
    knex('books').where("books.id", req.params.id).join('users',"book_id", "=","books.id" ).then((results)=>{
      res.render('discuss', {users:results[0]})
      })
    }
}
