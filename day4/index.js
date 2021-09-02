const express = require('express');
const mongoose = require('mongoose');

const Hero = require('./models/Hero');

// setup the app varaible to the express method/function
const app = express();

// mongodb connection
mongoose.connect('mongodb://localhost/dcuniverse')
  .then(() => console.log('Database Connected...'));

// middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// routes
// GET All
app.get('/', (req, res) => {
  const result = Hero.find();
  res.json({data: result});
  // res.end();
  // res.json({message: "Andriw hates cats"});
});

// GET Single Hero
app.get('/hero/:id', (req, res) => {
  console.log('Single hero')
})


// POST Single Hero
app.post('/hero', (req, res) => {
  // console.log('Creating Hero');
  console.log(req.body);

  const newHero = new Hero(
    {
      name: req.body.name,
      superPowers: req.body.superPowers,
      secretName: req.body.secretName,
      weakness: req.body.weakness,
      age: req.body.age
    }
  );
  newHero.save()
    .then((val) => {
      console.log(val)
      return res.json({result: val})
    })
    .catch(err => {
      return res.json({error: err})
    });

});

// PUT (update) Single Hero
app.put('/hero/:id', (req, res) => {
  console.log('Upating Hero')
  const heroToUpdate = Hero.findById()

});

// DELTE Single Hero
app.delete('/hero/:id', (req, res) => {
  console.log('Deleting a Hero')
})

const port = 5000; // google takeshi
app.listen(port, () => {
  console.log('Server running...');
})
// port & listen method