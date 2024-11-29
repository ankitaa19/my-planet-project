// routes/planetRoutes.js

const express = require('express');
const {
    getAllPlanets,
    createPlanet,
    getPlanetById,
    updatePlanet,
    deletePlanet
} = require('../controllers/planetController');

const router = express.Router();

router.get('/', getAllPlanets);
router.post('/', createPlanet);
router.get('/:id', getPlanetById);
router.put('/:id', updatePlanet);
router.delete('/:id', deletePlanet);

module.exports = router;
