```
https://github.com/new
Repository name : movieql
Add .gitignore: Node
Create repository
https://github.com/kangtae49/movieql


mkdir movieql
cd movieql
yarn init
question description: Movie API with Graphql
question repository url: https://github.com/kangtae49/movieql
question author: KangTae Kim<kangtae49@gmail.com>

git init .
git remote add origin https://github.com/kangtae49/movieql
git add .
git commit -m 'init'
git pull origin master
git push
code .
```

```
yarn add graphql-yoga
npm install -g nodemon
yarn global add babel-cli
```

nodemon
---
``` js
// index.js
console.log('hello')
```

``` json
# package.json
{
    ...
    "scripts": {
        "start": "nodemon --exec babel-node index.js"
    }
    ...
}

```
```
yarn start
```

```
yarn add babel-node --dev
yarn global add babel-cli
yarn global add babel-cli --ignore-engines
yarn add babel-cli babel-preset-env babel-preset-stage-3 --dev
```

http://localhost:4000

https://yts.am/api/v2/list_movies.json?limit=50&minimum_rating=9

JsonView chrome extension

```
yarn add node-fetch
```

```
query {
  movies(limit:10, rating:8.5){
    title
    rating
  }
}
```
```
mutation {
  addMovie(name: "RockandRolla", score: 9){
    name
  }
}
```
```
mutation{
  deleteMovie(id: 1)
}
```
