const mongoose = require('mongoose')

const clients = new mongoose.Schema(
    {
        image: {
            required: true,
            type: String
        }
    },
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
)

const ClientModel = mongoose.models.Clients || mongoose.model('Clients', clients)


module.exports = ClientModel
