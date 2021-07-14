const mongoose = require('mongoose');


const partnerSchema = new mongoose.Schema({
        name: String,
        designation: String,
        image: String,
        company_logo: String,
        text: String
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    })


const PartnershipModel = mongoose.models?.Partnership || mongoose.model('Partnership', partnerSchema);

module.exports = PartnershipModel
