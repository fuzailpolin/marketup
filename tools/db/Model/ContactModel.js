const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema(
    {
        name: {
            required: true,
            type: String
        },
        email: {
            required: true,
            type: String
        },
        subject: {
            required: false,
            type: String
        },
        phone: {
            required: false,
            type: String
        },
        message: {
            required: true,
            type: mongoose.Schema.Types.String
        }

    },
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
)

const ContactModel = mongoose.models.Contact || mongoose.model('Contact', contactSchema)


module.exports = ContactModel
