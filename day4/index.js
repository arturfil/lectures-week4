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
  Hero.find()
    .then(heroes => {
      return res.json(heroes)
    })
});

// GET Single Hero
app.get('/hero/:id', (req, res) => {
  Hero.findById(req.params.id)
    .then(hero => {
      return res.json(hero)
    })
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
      return res.status(201).json(val);
    })
    .catch(err => {
      return res.json({error: err})
    });

});

// PUT (update) Single Hero
app.put('/hero/:id', (req, res) => {
  Hero.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(data => {
      return res.json(data)
    })
});

// DELTE Single Hero
app.delete('/hero/:id', (req, res) => {
  console.log('Deleting a Hero')
  Hero.findByIdAndDelete(req.params.id)
    .then(data => {
      return res.status(200).json({message:'Hero deleted succesfully'})
    })
    .catch(err => {
      return res.json({message: `Hero couldn't be deleted ${err}`})
    })
})

const port = 5000; // google takeshi
app.listen(port, () => {
  console.log('Server running...');
})
// port & listen method