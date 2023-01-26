const Article = require("../model/article.model");
const fs = require('fs')
const path = require('path');


async function createArticle(req, res) {
    const article = await Article.create(req.body);
    if(!article) return res.status(400).json({ message: 'Cannot create new article'});
    res.json(article)
}

function getArticlesFromLocal(req, res) {
    const fileData = fs.readFileSync(path.join(__dirname, '..', 'articles.json'), 'utf8');
    res.json(JSON.parse(fileData).articles)
}

function getArticleFromLocal(req, res) {
    const fileData = fs.readFileSync(path.join(__dirname, '..', 'articles.json'), 'utf8');
    res.json(JSON.parse(fileData).articles.find(article => article._id === req.params.id))
}

async function getArticleHandler(req, res) {
    const article = await Article.findById(req.params.id).lean().exec();
    if(!article) return res.status(400).json({ message: 'Cannot find article'});
    res.json(article)
}

async function getArticlesHandler(req, res) {
    const articles = await Article.find().lean().exec();
    if(!Array.isArray(articles)) return res.status(400).json({ message: 'Cannot find articles'});
    res.json(articles)
}

async function updateArticleHandler(req, res) {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
    if(!article) return res.status(400).json({ message: 'Cannot find and update article'});
    res.json(article)
}

async function deleteArticleHandler(req, res) {
    const article = await Article.findByIdAndDelete(req.params.id).lean().exec();
    if(!article) return res.status(400).json({ message: 'Cannot find and delete article'});
    res.json(article)
}

module.exports = { createArticle, getArticleHandler, getArticlesHandler, getArticlesFromLocal, getArticleFromLocal, updateArticleHandler, deleteArticleHandler }