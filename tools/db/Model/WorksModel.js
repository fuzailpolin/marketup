const mongoose = require('mongoose')



const works = new mongoose.Schema(
    {
        company: {
            required: true,
            type: String,
            trim: true,
        },
        work: {
            required: true,
            type: String,
            trim: true
        },
        image: {
            required: true,
            type: String
        }
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
)

const Work = mongoose.models.Works || mongoose.model('Works', works)


module.exports = Work;
