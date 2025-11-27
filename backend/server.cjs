const express = require('express');
const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');
const cors = require('cors');
let database;

(async () => {
  database = await sqlite.open({
    driver: sqlite3.Database,
    filename: 'data.sqlite'
  }).catch((error)=>console.log(error))

  await database.run('PRAGMA foreign_keys = ON')

  console.log('Redo att göra databasanrop')
})()

const app = express();

app.use(cors());

app.use(express.json())

app.get('/', (request, response) => {
  const result = database.all('SELECT * FROM sqlite_master');
  response.json({message:'Hello World!',result: result})
})

app.get('/imagePaths', (request, response) => {
  database.all('SELECT * FROM art').then((paths) => {
    response.send(paths)
  }).catch((err) => {
    console.error("Error fetching image paths:", err);
    response.status(500).send("Error fetching image paths.");
  });
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

app.post('/submit', (req, res) => {
 database.run(
    'INSERT INTO messages (user, message) VALUES (?, ?)',
    [req.body.user, req.body.message]
  )
  res.sendStatus(200)
});

app.listen(3000, () => {
  console.log('Redo på http://localhost:3000/')
})
