const express = require('express');
const router = express.Router();

const Hero = require('../models/Hero');


// GET All
router.get('/', (req, res) => {
  const heroes = Hero.find()
  heroes.then(data => {
    return res.json(data);
  })
});

// GET Single Hero
router.get('/hero/:id', (req, res) => {
  const hero = Hero.findById(req.params.id);
    hero.then(hero => {
      return res.json(hero)
    })
})

// POST Single Hero
router.post('/hero', (req, res) => {
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
router.put('/hero/:id', (req, res) => {
  const toUpdate = Hero.findByIdAndUpdate(req.params.id, req.body, {new: true})
    toUpdate.then(data => {
      return res.json(data)
    })
});

// DELTE Single Hero
router.delete('/hero/:id', (req, res) => {
  Hero.findByIdAndDelete(req.params.id)
    .then(() => {
      return res.status(200).json({message:'Hero deleted succesfully'})
    })
    .catch(err => {
      return res.json({message: `Hero couldn't be deleted ${err}`})
    })
})

module.exports = router;