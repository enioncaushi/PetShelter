const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "Pet name is required"],
        minlength: [3, "Pet name must be at least 3 characters long"],
        unique: [true, "Pet name must be unique"]
    },
    type: {
        type: String,
        required: [true, "Pet type is required"],
        minlength: [3, "Pet type must be at least 3 characters long"]
    },
    description: {
        type: String,
        required: [true, "Pet description is required"],
        minlength: [3, "Pet description must be at least 3 characters long"]
    },
    skill1: {
        type: String,
    },
    skill2: {
        type: String,
    },
    skill3: {
        type: String,
    },

    likes: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model('Pet', PetSchema);