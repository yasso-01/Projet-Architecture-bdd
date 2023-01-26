const mongoose = require('mongoose');


const articleSchema = new mongoose.Schema(
    {
        authorName: { type: String, required: true },
        public: { type: Boolean, default: true },
        image: { type: String, default: '' },
        tags: [{ type: String, required: true }],
        category: { type: String },
        content: { type: String, required: true }
    },
    {
        timestamps: true 
    }
)

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;