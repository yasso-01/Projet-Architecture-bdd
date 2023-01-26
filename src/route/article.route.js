const articlesHandlers = require('../controller/article.controller');
const TryCatch = require('../utils/TryCatch')
const Router = require('express').Router;


const router = Router();


router.get('/', TryCatch(articlesHandlers.getArticlesHandler));
router.get('/from_local', TryCatch(articlesHandlers.getArticlesFromLocal))
router.get('/from_local/:id', TryCatch(articlesHandlers.getArticleFromLocal))
router.post('/create', TryCatch(articlesHandlers.createArticle));

router.route('/:id')
    .get(TryCatch(articlesHandlers.getArticleHandler))
    .put(TryCatch(articlesHandlers.updateArticleHandler))
    .patch(TryCatch(articlesHandlers.updateArticleHandler))
    .delete(TryCatch(articlesHandlers.deleteArticleHandler))



module.exports = router