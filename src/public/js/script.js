const authorName = document.getElementById('authorName');
const title = document.getElementById('title');
const image = document.getElementById('image');
const content = document.getElementById('content');
let articles = [];

async function submitArticle(e) {
    e.preventDefault()
    fetch('http://localhost:3333/articles/create', {
        body: JSON.stringify({
            title: title.value,
            image: image.value,
            content: content.value,
            authorName: authorName.value
        }),
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        }
    }).then(res => res.json()).then(res => articles.push(res)).then(() => {
        document.querySelector('.articles').innerHTML = ''
        articles.forEach(article => {
            document.querySelector('.articles').append(createArticleDOM(article))
        })
    }).catch(err => console.log(err))
}

document.querySelector('form').addEventListener('submit', submitArticle)

const createArticleDOM = (article) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'article'
    const imageWrapper = document.createElement('div');
    imageWrapper.classList = 'image_wrapper'
    const detailsWrapper = document.createElement('div');
    detailsWrapper.classList = 'details_wrapper'
    const image = document.createElement('img');
    image.src = article?.image || 'https://images.pexels.com/photos/593158/pexels-photo-593158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    imageWrapper.append(image)
    const title = document.createElement('h3');
    title.className = 'title';
    title.innerText = article.title
    const author = document.createElement('h5');
    author.className = 'author';
    author.innerText = article.authorName
    const content = document.createElement('p');
    content.className = 'content';
    content.innerText = article.content;
    [title, author, content].forEach(el => detailsWrapper.append(el));
    [imageWrapper, detailsWrapper].forEach(el => wrapper.append(el));
    return wrapper
}

function fetchAllArticles() {
    fetch('http://localhost:3333/articles/all').then(res => res.json()).then(res => articles = [...articles, ...res]).
    then(() => {
        document.querySelector('.articles').innerHTML = ''
        articles.forEach(article => {
            document.querySelector('.articles').append(createArticleDOM(article))
        })
    }).catch(err => console.log(err))
}

document.addEventListener('DOMContentLoaded', fetchAllArticles)