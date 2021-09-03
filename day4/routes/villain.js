const express = require('express');
const router = express.Router();

//TODO: find getById error & display HERO in the GET/allVillains Method

const Villain = require('../models/Villain');
const Hero = require('../models/Hero')

router.get('/', async (req, res) => {
  const villains = await Villain.find()
    .populate("heroEnemy")
  try {
    return res.json(villains);
  } catch (error) {
    return res.json({message: `Error: ${error}`})
  }
});

// GET Single Villain
router.get('/villain/:id', async (req, res) => {
  const singleVillain = await Villain.findById(req.params.id)
    .populate("heroEnemy");
  try {
    return res.json({object: singleVillain}); // always return something even if its null
  } catch (error) {
    return res.json({message: "Error getting the single villain"}); // 
  }
})

// POST Villain
router.post('/villain', async (req, res) => {
  const newVillain = await Villain.create(
    {
      name: req.body.name,
      weakness: req.body.weakness,
      heroEnemy: req.body.heroEnemy,
      alive: req.body.alive
    }
  );

  try {
    return res.json(newVillain)
  } catch (error) {
    return res.json({message: "There was an error while creating the new villain"})
  }
    
})

// PUT (update) Villain
router.put('/villain/:id', async (req, res) => {
  const updateVillain = await Villain.findByIdAndUpdate(req.params.id, req.body, {new: true});
  try {
    return res.json(updateVillain);
  } catch (error) {
    return res.json({message: error});
  }
})

// DELETE

module.exports = router;