const express = require('express');
const dbConnect = require('./config/dbConnect');
const errorHandler = require('./middleware/errorHandler');
const PORT = 3333
const app = express();
const articlesRoute = require('./route/article.route');


app.use(express.json());
app.use(express.urlencoded({ extended: false }))

dbConnect();


app.use('/articles', articlesRoute);


app.all('*', (req, res) => {
    res.sendStatus(404)
})

app.use(errorHandler)

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT)
})