const express = require('express');
const dbConnect = require('./config/dbConnect');
const errorHandler = require('./middleware/errorHandler');
const PORT = 3333
const app = express();
const articlesRoute = require('./route/article.route');
const path = require('path')

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use('/', express.static(path.join(__dirname, 'public')))

dbConnect();


app.use('/articles', articlesRoute);
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})


app.all('*', (req, res) => {
    res.sendStatus(404)
})

app.use(errorHandler)

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT)
})