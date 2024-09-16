const { model, Schema } = require('../connection');

const userSchema = new Schema({
    title: String,
    description: String,
    brand: String,
    price: Number,
    category: String,
    image: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('products', userSchema);