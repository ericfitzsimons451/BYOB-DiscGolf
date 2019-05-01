const express = require('express')
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const app = express()
app.use(express.json())
const port = 3000

app.get('/api/v1/states', (req, res) => {
  database('states').select()
    .then((states) => {
      res.status(200).json(states)
    })
    .catch(error => res.status(500).json({ error }))
})

app.get('/api/v1/states/:id', (req, res) => {
  database('states').where('id', req.params.id).select()
    .then((states) => {
      if (states.length) {
        res.status(200).json(states)
      } else {
        res.status(404).json({
          error: `Could not find states with id ${request.params.id}`
        })
      }
    })
    .catch(error => {
      res.status(500).json({ error })
    })
})

app.get('/api/v1/states/:id/courses', (req, res) => {
  database('courses').where('state_id', req.params.id).select()
    .then(courses => {
      if (courses.length) {
        res.status(200).json(courses)
      } else {
        res.status(404).json({
          error: `Could not find courses with stateID:${req.params.id}`
        })
      }
    })
    .catch(error => {
      res.status(500).json({ error })
    })
})

app.get('/api/v1/states/:id/courses/:id', (req, res) => {
  database('courses').where('id', req.params.id).select()
    .then(courses => {
      if (courses.length) {
        res.status(200).json(courses)
      } else {
        res.status(404).json({
          error: `Could not find a course with ID: ${req.params.id}`
        })
      }
    })
    .catch(error => {
      res.status(500).json({ error })
    })
})

app.post('/api/v1/states', (req, res) => {
  const state = req.body
  for (let requiredParameter of ['name', 'capitalCity']) {
    if (!state[requiredParameter]) {
      return res
        .status(422)
        .send({ error: `Expected format: { name: <String>, capitalCity: <String>}. You're missing a "${requiredParameters}" property.`})
    }
  }

  let statesToCheck 
  database('states').select().then(data => statesToCheck = data).then(() => {
    const foundState = statesToCheck.find(state => {
      return state.name === req.body.name
    })
   
    if (!foundState) {
      database('states').insert(state, 'id')
        .then(id => {
          res.status(201).json({ id: id[0] })
        })
        .catch(error => {
          res.status(500).json({ error })
        })
    } else {
      res.status(422).json({ error: 'That state already exists' })
    }
  })
})

app.post('/api/v1/states/:id/courses', (req, res) => {
  const course = req.body
  for (let requiredParameters of ['name', 'city', 'state_id', 'holes', 'multiplePins', 'par']) {
    if (!course[requiredParameters]) {
      res
        .status(422)
        .send({ error: `Expected format: 
        { 
          name: <String>, 
          city: <String>,
          state_id: <Integer>,
          holes: <Integer>,
          multiplePins: <Boolean>,
          par: <Integer>,
        }. You're missing a "${requiredParameters}" property.`
      })
    }
  }

  let coursesToCheck;
  database('courses').select().then(data => coursesToCheck = data).then(() => {
    const foundCourse = coursesToCheck.find(course => {
      return course.name === req.body.name
    })    
    
    if (!foundCourse) {
      database('courses').insert(course, 'id')
      .then(id => {
          res.status(201).json({ id: id[0] })
        })
        .catch(error => {
          res.status(500).json({ error })
        })
    } else {
      res.status(422).json({ error: `That course already exists.` })
    }
  })
})

app.listen(port, () => console.log(`App is listening on port ${port}`))