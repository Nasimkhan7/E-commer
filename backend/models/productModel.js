const { model, Schema } = require('../connection');

const userSchema = new Schema({
    title: String,
    brand: String,
    category: String,
    role: { type: String, default: 'user' },
    createdAt: { type: Date, default: new Date() }
});

module.exports = model('User', userSchema);