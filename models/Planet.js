const mongoose = require('mongoose');

const planetSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    orderFromSun: { 
        type: Number, 
        required: true 
    },
    circumference: { 
        type: Number, 
        required: true 
    },
    distance_from_sun_km: { 
        type: Number, 
        required: true 
    },
    distance_from_earth_km: { 
        type: Number, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    gravity: { 
        type: Number, 
        required: true 
    },
    has_rings: { 
        type: Boolean, 
        required: true 
    },
    number_of_moons: { 
        type: Number, 
        required: true 
    },
    atmosphere_composition: { 
        type: [String], 
        required: true 
    },
    discovered_by: { 
        type: String, 
        required: false 
    },
    discovery_date: { 
        type: Date, 
        required: false 
    }
}, { 
    timestamps: true 
});

const Planet = mongoose.model('Planet', planetSchema);

module.exports = Planet;
