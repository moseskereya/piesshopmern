const mongoose = require('mongoose');

const PieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
    },
    thumNail: {
        type: String,
    },
    longDescription: {
        type: String,
    },
    category: [
        {
            categoryId: {
                type: String,
                required: true
            },
              name: {
                type: String,
                required: true
            },
                description: {
                type: String,
                required: true
            }
    }
    ]
    });

module.exports = Pie = mongoose.model('pie', PieSchema);