const express = require('express')
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

const app = express()
const port = 3000

app.get('/', (req, res) => console.log('Hello World!'))

app.get('/api/v1/states', (req, res) => {
  database('states').select()
    .then((states) => {
      res.status(200).json(states)
    })
    .catch(error => res.status(500).json({ error }))
})




app.listen(port, () => console.log(`App is listening on port ${port}`))