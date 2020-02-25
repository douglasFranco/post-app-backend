const restful = require('node-restful')
const mongoose = restful.mongoose

const postSchema = new mongoose.Schema({
    description: { type: String, required: true},
    upvotes: {type: Number, default: 0},
    createdAt: { type: Date, default: Date.now }
})

module.exports = restful.model('Post', postSchema)