// controllers/planetController.js

const Planet = require('../models/Planet');

// Get all planets
exports.getAllPlanets = async (req, res) => {
    try {
        const planets = await Planet.find();
        res.status(200).json(planets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new planet
exports.createPlanet = async (req, res) => {
    const planet = new Planet(req.body);
    try {
        await planet.save();
        res.status(201).json(planet);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a planet by ID
exports.getPlanetById = async (req, res) => {
    try {
        const planet = await Planet.findById(req.params.id);
        if (!planet) return res.status(404).json({ message: 'Planet not found' });
        res.status(200).json(planet);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a planet
exports.updatePlanet = async (req, res) => {
    try {
        const planet = await Planet.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!planet) return res.status(404).json({ message: 'Planet not found' });
        res.status(200).json(planet);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a planet
exports.deletePlanet = async (req, res) => {
    try {
        const planet = await Planet.findByIdAndDelete(req.params.id);
        if (!planet) return res.status(404).json({ message: 'Planet not found' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
