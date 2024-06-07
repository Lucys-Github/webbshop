const express = require('express'),
  sqlite = require('sqlite'),
  sqlite3 = require('sqlite3');

const cors = require('cors');

let database;

(async () => {
  database = await sqlite.open({
    driver: sqlite3.Database,
    filename: 'data.sqlite'
  })

  await database.run('PRAGMA foreign_keys = ON')

  console.log('Redo att göra databasanrop')
})()

const app = express()

app.use(cors());

app.get('/', (request, response) => {
  response.send('Hello World!')
})

app.get('/imagePaths', (request, response) => {
  database.all('SELECT * FROM art').then((paths) => {
    response.send(paths)
  })
})

app.get('/products', (request, response) => {
  database.all('SELECT * FROM weapons').then((products) => {
    response.send(products)
  })
})

app.get('/messages', (request, response) => {
  database.all('SELECT * FROM messages').then((messages) => {
    response.send(messages)
  })
})

/* app.post('/submit', (req, res) => {
  const { user, message } = req.body;
  database.run(
    'INSERT INTO messages (user, message) VALUES (?, ?)',
    [user, message]
  )
}); */



app.listen(3000, () => {
  console.log('Redo på http://localhost:3000/')
})
