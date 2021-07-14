const mongoose = require('mongoose');


const homeSliderSchema = new mongoose.Schema({
        image: String
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    })


const HomeSliderModel = mongoose.models?.HomeSlider || mongoose.model('HomeSlider', homeSliderSchema);

module.exports = HomeSliderModel
