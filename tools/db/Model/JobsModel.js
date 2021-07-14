const mongoose = require('mongoose');

const jobs = new mongoose.Schema(
    {
        position: {
            required: true,
            type: String,
            trim: true,
        },
        vacancy: {
            required: true,
            type: Number
        },
        jobType: {
            required: true,
            type: String,
            trim: true,
        },
        lastDate: {
            required: true,
            type: Date,
        },
        fb: {
            type: String,
            trim: true,
        },
        insta: {
            type: String,
            trim: true,
        }
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
);

const JobsModel = mongoose.models.Jobs || mongoose.model('Jobs', jobs);

module.exports = JobsModel;