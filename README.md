# BYOB-DiscGolf
### An API that serves up disc golf course data by state.

## Installation Steps
```git clone https://github.com/ericfitzsimons451/BYOB-DiscGolf```

```cd BYOB-DiscGolf```

```npm install```

```npm start```

## About
### This was our first solo project as a Mod 4 student at Turing School of Software and Design.  Our task in this week-long project was to make a database from scratch and create endpoints on an Express server.  As front-end students, this was a chance to really dive into backend creation in effort to expand our knowledge of the interactions between different parts of the tech stack.  It was exciting to build a RESTful API, complete with documentation and annotations, from the ground up.

## Tech Stack
- NodeJS
- Express
- KnexJS

## API Documentation

### No API key is necessary to use the API and no areas of the API are restricted.
### Base URL: http://localhost3000/

### Get All States
#### Endpoint
```GET /api/v1/states```

#### Successful Response Example:
```[
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
```[
    {
        "id": 12,
        "name": "California",
        "capitalCity": "Sacramento",
        "created_at": "2019-05-01T00:24:25.229Z",
        "updated_at": "2019-05-01T00:24:25.229Z"
    }
]
```

## Future Iterations
- Add more states to the DB
- Add more courses to the DB
- Expand the fields in courses to include:
  - Course length
  - Hole descriptions
  - Scratch Scoring Average (SSA)
  - Course scoring record
  - Nearby courses/attractions
  - Dates for upcoming tournaments


## Contributors
[Eric Fitzsimons](https://github.com/ericfitzsimons451)
