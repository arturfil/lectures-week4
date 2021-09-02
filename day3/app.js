// database - aaexports
//---------------------------
// -- Collection - products
//
// -- Collection - Categories

// CRUD MONGO SHELL Operations

// insert()  | C
// find()    | R
// update()  | U
// delete()  | D

// show dbs

// use mavel_heroes

db.heroes.insert({
  name: "Ironman",
  superpowers: ["rich", "filanthropist", "genious", "playboy"],
  secretName: "Tony Stark",
  significantOther: "Pepper Pots",
});

db.heroes.insert({
  name: "Spiderman",
  superpowers: [
    "spider-sence",
    "spider-webs",
    "super-strength",
    "increased agility",
    "climb walls",
  ],
  secretName: "Peter Parker",
  significantOther: "Mary Jane",
});

db.heroes.insert({
  name: "Doctor Strange",
  superpowers: ["magic-cape", "rings of destiny"],
  secretName: "Steven Strange",
  significantOther: "Rachel McAdams",
});

db.heroes.insertMany([
  {
    name: "Thor",
    superpowers: ["hammer", "lightning strike"],
    secretName: "Thor",
    significantOther: "Natalie Portman",
  },
  {
    name: "Hulk",
    superpowers: ["anger", "super strenght", "fast healing"],
    secretName: "Bruce Banner",
    significantOther: "Black Widow",
  },
]);

db.heroes.find().pretty();

db.heroes.find({"name": {$eq: "Spiderman"}}).pretty();

db.heroes.updateOne({_id: ObjectId("612fd924043c0f58b5d78a58")}, {$set: {"name": "Dr Strange"}});

db.heroes.deleteOne({_id: ObjectId("612fd924043c0f58b5d78a58")});

// -------------------------------------------------------------------
db.movies
  .find({"year": {$eq: "1999"}},{"title":1})
  .sort({"title": 1});
  

db.companies.find({}, {}).sort()