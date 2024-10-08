const { model, Schema } = require('../connection');

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    role: { type: String, default: 'user' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('User', userSchema);