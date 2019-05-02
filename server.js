const express = require('express')
// brings in the express library
const environment = process.env.NODE_ENV || 'development';
// defines the development environment
const configuration = require('./knexfile')[environment];
// requires the knexfile.js as the environment, which will declare which
// postgres database files to look in
const database = require('knex')(configuration);
// defines and configures the database
// knex is the directory at the root of the project that houses migration and seed scripts
const app = express()
// creates the express server
app.use(express.json())
// tells the app to use the express server and parse the data as JSON
const port = 3000
// declares the port that will be used for this server

app.get('/api/v1/states', (req, res) => {
  // when a request is made to the url
  database('states').select()
    // query the DB and select the states table
    .then((states) => {
      // when the promise resolves, take the states data from the table
      res.status(200).json(states)
      // send a 200 response and the states data as json
    })
    .catch(error => res.status(500).json({ error }))
  // if the promise errors out, send a 500 response and an error as json
})

app.get('/api/v1/states/:id', (req, res) => {
  // when a request is made to the url
  database('states').where('id', req.params.id).select()
    // query the states and select the states table where the id column has the req.params.id
    .then((state) => {
      // when the promise resolves, take the states data
      if (state.length) {
        // if there is data
        res.status(200).json(state)
        // send a 200 response and the state as json
      } else {
        // if there is no data
        res.status(404).json({
          // send a 404 response and 
          error: `Could not find states with id ${req.params.id}`
          // set the error message to use the id from the request params
        })
      }
    })
    .catch(error => {
      // if there is an error resolving the promise
      res.status(500).json({ error })
      // send a 500 response and an error as json
    })
})

app.get('/api/v1/states/:id/courses', (req, res) => {
  // when a request is made to the url
  database('courses').where('state_id', req.params.id).select()
    // query the database and select the courses table where the stateID (foreign key), matches the request params
    .then(courses => {
      // when the promise resolves, take the courses data
      if (courses.length) {
        // if there are courses in the array
        res.status(200).json(courses)
        // send a 200 status and the courses as json
      } else {
        // if there are no courses in the array
        res.status(404).json({
          // send a 404 (not found) status
          error: `Could not find courses with stateID:${req.params.id}`
          // and set the error message to include the request params
        })
      }
    })
    .catch(error => {
      // if the promise is rejected
      res.status(500).json({ error })
      // send a 500 status and an error as json
    })
})

app.get('/api/v1/states/:id/courses/:id', (req, res) => {
  // when a request is made to the url
  database('courses').where('id', req.params.id).select()
    // query the database and select the courses table where the id matches the request params
    .then(course => {
      // when the promise resolves
      if (course.length) {
        // if the course is present
        res.status(200).json(course)
        // send a 200 status and the course as json
      } else {
        // if there is no course
        res.status(404).json({
          // send a 404 status
          error: `Could not find a course with ID: ${req.params.id}`
          // and an error message as json noting the unfound id
        })
      }
    })
    .catch(error => {
      // if the promise rejects
      res.status(500).json({ error })
      // send a 500 status and an error as json
    })
})

app.post('/api/v1/states', (req, res) => {
  // when a request is made to the url
  const state = req.body
  // declare the request body as the variable state
  for (let requiredParameters of ['name', 'capitalCity']) {
    // declare a variable of requiredParameters and iterate over the array
    if (!state[requiredParameters]) {
      // if the state (from the req.body) does not include the required parameter for each iteration
      return res
        .status(422)
        // return a response status of 422
        .send({
          error:
            `Expected format: { 
          name: <String>, 
          capitalCity: <String>
        }. You're missing a "${requiredParameters}" property.`
          // and send an error showing the expected format and the property that the request.body is missing
        })

    }
  }

  let statesToCheck;
  // declare a variable for states to check/validate
  database('states').select()
  // query the database for the states table and select it
    .then(states => statesToCheck = states)
    // when the promise resolves, take the states data and reassign it's value to statesToCheck
      .then(() => {
      // when the promise resolves, fire a callback function
      const foundState = statesToCheck.find(state => {
        // declare a variable for the returned value of:
        // iterate over statesToCheck and find 
        return state.name === req.body.name
        // find/return the state where the name matches the name in the req.body
      })

      if (!foundState) {
        // if there is no found state
        database('states').insert(state, 'id')
        .then(id => {
        // query the database, select the states table and insert the state and give it an id as the primary key
            // when the promise resolves, take the id
            res.status(201).json({ id: id[0] })
            // send a 201 response and the id as json
          })
          .catch(error => {
            // if the promise rejects
            res.status(500).json({ error })
            // send a 500 status and an error as json
          })
      } else {
        // if there is a found state
        res.status(422).json({ error: 'That state already exists' })
        // send a 422 status and an error message as json
      }
    })
})

app.post('/api/v1/states/:id/courses', (req, res) => {
  // when a request is made to the url
  const course = req.body
  // set the request body as course
  for (let requiredParameters of ['name', 'city', 'state_id', 'holes', 'multiplePins', 'par']) {
    // iterate over the (now created) required parameters array
    if (!course[requiredParameters]) {
      // if the course does not have the required parameter on that iteration
      res
        .status(422)
        // send a response status of 422
        .send({
          // and send an error denoting the expected format and the missing parameter
          error: `Expected format: 
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
  // declare a variable
  database('courses').select()
  // query the db for the courses table and select it
    .then(data => coursesToCheck = data)
    // when the promise resolves, reassign coursesToCheck to the resolved value
      .then(() => {
      // upon completion, fire a callback function
    const foundCourse = coursesToCheck.find(course => {
      // declare a variable for a found course
      // iterate over the courses to check and find a course
      return course.name === req.body.name
      // return the name of the course that matches the name in the request body
    })

    if (!foundCourse) {
      // if there is no found course
      database('courses').insert(course, 'id')
      // query the database, find the table named courses, insert the co
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

app.delete('/api/v1/courses/:id', (req, res) => {
  // when a request is made to the url
  const idForDelete = req.params.id
  // declare a variable for the id in the request params
  if (!idForDelete) {
    // if there is no id
    res.status(422).json({
      // send a 422 status
      error: `Missing id from request parameters.`
      // and note that the id is missing from the request parameters
    })
  } else {
    // if there is an ID
    database('courses')
      // query the database for the courses table
      .where('id', idForDelete)
      // look in the ID column, and find the ID to delete
      .del()
      // delete the row
      .then(() => {
        // when the promise resolves
        res.status(204)
          // send a 204 status
          .json(`Successfully deleted course with id: ${idForDelete}`)
        // and a success messgae with the ID
      })
      .catch(error => {
        // if the promise rejects
        res.status(500).json({ error })
        // send a 500 status and an error as json
      })
  }
})

app.listen(port, () => console.log(`App is listening on port ${port}`))
// tell the server to listen on the designated port
// and set a log to denote that it is actively listening on said port