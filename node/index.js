const express = require('express');
const mysql = require('mysql');
const SuperFakerBrasil = require('faker-brasil');

const app = express();
const port = 3000;

const dbConfig = {
  host: 'db',
  user: 'root',
  password: 'password',
  database: 'nodedb',
};
const connection = mysql.createConnection(dbConfig)

app.get('/', (req, res) => {
  const faker = new SuperFakerBrasil();
  const name = faker.firstName();

  connection.query(`INSERT INTO people (name) VALUES ('${name}')`)

  connection.query(`SELECT name FROM people`, (error, results, fields) => {
    res.send(`
      <body style="    
      background-color: white;
      display: flex;
      align-content: center;
      flex-direction: column;
      align-items: center;">
          <h1>Full Cycle Rocks!</h1>
          <ol>
          ${!!results.length ? results.map(el => `<li>${el.name}</li>`).join('') : ''}
          </ol>
      </body>
    `)
  })
});

app.listen(port, () => {
  console.log('Up on:', port);
});