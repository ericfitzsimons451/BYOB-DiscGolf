# BYOB-DiscGolf
### An API that serves up disc golf course data by state.

## Installation Steps
```git clone https://github.com/ericfitzsimons451/BYOB-DiscGolf```

```cd BYOB-DiscGolf```

```npm install```

```npm start```

## About/Background
### This was our first solo project as a Mod 4 student at Turing School of Software and Design.  Our one-week task was to make a database from scratch and create endpoints on an Express server.  As front-end students, this was a chance to really dive into backend creation in effort to expand our knowledge of the interactions between different parts of the tech stack.  It was exciting to build a RESTful API, complete with documentation and annotations, from the ground up.

## Tech Stack
- NodeJS
- Express
- KnexJS

## API Documentation

### No API key is necessary to use our API and no areas of the API are restricted.
### Base URL: http://localhost:3000

- - - -

### Get All States
#### Endpoint
```GET /api/v1/states```

#### Successful Response Example:
```
[
    {
        "id": 1,
        "name": "Texas",
        "capitalCity": "Austin",
        "created_at": "2019-05-01T00:24:25.229Z",
        "updated_at": "2019-05-01T00:24:25.229Z"
    },
    {
        "id": 2,
        "name": "California",
        "capitalCity": "Sacramento",
        "created_at": "2019-05-01T00:24:25.229Z",
        "updated_at": "2019-05-01T00:24:25.229Z"
    }
]
```

### Get State By ID
#### Endpoint
```GET /api/v1/states/:id```

#### Successful Response Example:
```
[
    {
        "id": 12,
        "name": "California",
        "capitalCity": "Sacramento",
        "created_at": "2019-05-01T00:24:25.229Z",
        "updated_at": "2019-05-01T00:24:25.229Z"
    }
]
```

### Get All Courses in a State
#### Endpoint
```GET /api/v1/states/:id/courses```

#### Successful Response Example:
```
[
    {
        "id": 33,
        "name": "Adair Park",
        "city": "Corvallis",
        "holes": 8,
        "multiplePins": true,
        "majorTournament": "Festivus Open",
        "par": 57,
        "rating": "A",
        "state_id": 13,
        "created_at": "2019-05-01T00:24:25.253Z",
        "updated_at": "2019-05-01T00:24:25.253Z"
    },
    {
        "id": 34,
        "name": "Milo McIver",
        "city": "Estacada",
        "holes": 27,
        "multiplePins": true,
        "majorTournament": "Beaver State Fling",
        "par": 81,
        "rating": "A",
        "state_id": 13,
        "created_at": "2019-05-01T00:24:25.255Z",
        "updated_at": "2019-05-01T00:24:25.255Z"
    },
    {
        "id": 35,
        "name": "Pier Park",
        "city": "Portland",
        "holes": 18,
        "multiplePins": true,
        "majorTournament": "Rose City Open",
        "par": 54,
        "rating": "A",
        "state_id": 13,
        "created_at": "2019-05-01T00:24:25.255Z",
        "updated_at": "2019-05-01T00:24:25.255Z"
    }
]
```

### Get a Course in a State by ID
#### Endpoint
```GET /api/v1/states/:id/courses/:id```

#### Successful Response Example:
```
[
    {
        "id": 34,
        "name": "Milo McIver",
        "city": "Estacada",
        "holes": 27,
        "multiplePins": true,
        "majorTournament": "Beaver State Fling",
        "par": 81,
        "rating": "A",
        "state_id": 13,
        "created_at": "2019-05-01T00:24:25.255Z",
        "updated_at": "2019-05-01T00:24:25.255Z"
    }
]
```

## Future Iterations
- Add more states
- Add more courses
- Expand the fields in courses to include:
  - Course length
  - Hole descriptions
  - Scratch Scoring Average (SSA)
  - Course scoring record
  - Nearby courses/attractions
  - Dates for upcoming tournaments


## Contributors
[Eric Fitzsimons](https://github.com/ericfitzsimons451)
