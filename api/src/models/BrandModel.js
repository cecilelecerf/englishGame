const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let brandShema = new Schema({
    name: {
        type: String,
        required : "The name of the brand is required"
    },
    iconographicLogo: {
        type: String,
        required : "The iconographic logo is required"
    },
    pixalizedLogo: {
        type: String,
        required : "The pixalized logo is required"
    },
    iconBrand: {
        type: String,
        required : "The brand icon is required"
    },

    created_at: {
        type : Date,
        default : Date.now
    }
})


module.exports = mongoose.model('Brand', brandShema);