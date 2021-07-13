const mongoose = require('mongoose')


const team = new mongoose.Schema({
        name: {
            required: true,
            type: String

        },
        designation: {
            required: true,
            type: String
        },
        image: {
            required: true,
            type: String
        }
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    })

const User = mongoose.models.Team || mongoose.model('Team', team)


module.exports = User
