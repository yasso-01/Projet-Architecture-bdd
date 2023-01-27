## The API

L'API Back-end est livrée avec deux bases de données :
- MongoDB
- Local json file: articles.json

Ce projet permet aux utilisateurs de créer, mettre à jour ou supprimer des articles

### CREATE

Pour créer un article, nous devons récupérer une requête POST

Le corps de cette requête ne doit inclure que les clés suivantes :

- authorName (string / text) required.
- title (string / text) required .
- content (string / text) required.
- image (string / url)
- category (string / text)
- tags (array of strings / texts)

> Note: le **_id** pour chaque article sera généré automatiquement après une création réussie


#### Exemple

**Request Body**

```
{
    "authorName": "Author",
    "public": true,
    "image": "https://images.pexels.com/photos/593158/pexels-photo-593158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "content": "Balloons are pretty and come in different colors, different shapes, different sizes, and they can even adjust sizes as needed. But don't make them too big or they might just pop, and then bye-bye balloon. It'll be gone and lost for the rest of mankind. They can serve a variety of purposes, from decorating to water balloon wars. You just have to use your head to think a little bit about what to do with them.",
    "title": "Random title",
}
```

**Request URL**

`http://localhost:3333/articles/create`

**Response Body**

```
{
    "_id": "63d2ec6f07328d93838981ef",
    "authorName": "Author",
    "public": true,
    "image": "https://images.pexels.com/photos/593158/pexels-photo-593158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "tags": [],
    "content": "Balloons are pretty and come in different colors, different shapes, different sizes, and they can even adjust sizes as needed. But don't make them too big or they might just pop, and then bye-bye balloon. It'll be gone and lost for the rest of mankind. They can serve a variety of purposes, from decorating to water balloon wars. You just have to use your head to think a little bit about what to do with them.",
    "createdAt": "2023-01-26T21:11:11.999Z",
    "updatedAt": "2023-01-26T21:11:11.999Z",
    "title": "Random title",
    "__v": 0
}
```

### GET

on peux recevoir all articles: `http://localhost:3333/articles/all`
on peux recevoir MongoDB articles: `http://localhost:3333/articles/`
on peux recevoir MongoDB public articles: `http://localhost:3333/articles?public=true`
on peux recevoir MongoDB non-public articles: `http://localhost:3333/articles?public=false`
on peux recevoir json file's articles: `http://localhost:3333/articles/from_local`
on peux recevoir MongoDB article: `http://localhost:3333/articles/:id`
on peux recevoir json file's article: `http://localhost:3333/articles/from_local/:id`

> Note: _id doit être un article _id


### Update

Route: `http://localhost:3333/articles/:id`

Methodes:

-PUT
-PATCH

> Note: La mise à jour nécessite _id (:id) pour un article valide.



Le body de cette requête ne doit inclure que ces clés:

- authorName (string / text).
- title (string / text).
- content (string / text).
- image (string / url)
- category (string / text)
- tags (array of strings / texts)



#### Example

**Request Body**

```
{
    "authorName": "UpdatedName",
    "public": false,
}
```

**Request URL**

`http://localhost:3333/articles/63d2ec6f07328d93838981ef`

**Response Body**

```
{
    "_id": "63d2ec6f07328d93838981ef",
    "authorName": UpdatedName",
    "public": false,
    "image": "https://images.pexels.com/photos/593158/pexels-photo-593158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "tags": [],
    "content": "Balloons are pretty and come in different colors, different shapes, different sizes, and they can even adjust sizes as needed. But don't make them too big or they might just pop, and then bye-bye balloon. It'll be gone and lost for the rest of mankind. They can serve a variety of purposes, from decorating to water balloon wars. You just have to use your head to think a little bit about what to do with them.",
    "createdAt": "2023-01-26T21:11:11.999Z",
    "updatedAt": "2023-01-26T21:11:11.999Z",
    "title": "Random title",
    "__v": 0
}
```


### DELETE

Route: `http://localhost:3333/articles/:id`

Methods:

- Delete

> Note: La suppression nécessite _id (:id) pour un article valide.


#### Example:

`http://localhost:3333/articles/63d2ec6f07328d93838981ef`

Cela supprimera l'article précédent que nous avons créé puis mis à jour.

## The Front-end

La page front end html  est dans le dossier views (index.html)

On a css.style.css et js/script.js files  nécessaire pour cette page.

> Note: **css** and **js** les dossiers sont dans le dossier public

La page d'accueil est très simple et vient avec un formulaire pour permettre aux utilisateurs de soumettre (create) nouveaux articles

Le front-end permet également aux utilisateurs de visualiser les articles stockés à la fois dans MongoDB et dans le fichier JSON.