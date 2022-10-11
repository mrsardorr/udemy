const { Schema, model } = require('mongoose')

const productsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: String,
    price: Number,
})

module.exports = model('newProducts', productsSchema)