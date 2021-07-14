const mongoose = require('mongoose');

const testimonials = new mongoose.Schema(
    {
        text: {
            required: true,
            type: String,
        },
        name: {
            required: true,
            type: String,
            trim: true,
        },
        designation: {
            required: true,
            type: String,
            trim: true,
        },
        company: {
            required: true,
            type: String,
            trim: true,
        }
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
);

const TestimonialModel = mongoose.models.Testimonials || mongoose.model('Testimonials', testimonials);

module.exports = TestimonialModel;