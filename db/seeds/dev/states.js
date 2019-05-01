const states = require('../../../states')

const createState = (knex, state) => {
  return knex('states').insert({
    name: state.name,
    capitalCity: state.capitalCity
  }, 'id')
  .then(stateIds => {
    let coursePromises = [];
    
    state.courses.forEach(course => {
      coursePromises.push(
        createCourse(knex, {
          name: course.name,
          state_id: stateIds[0],
          city: course.city,
          state: course.state,
          holes: course.holes,
          multiplePins: course.multiplePins,
          majorTournament: course.majorTournament,
          par: course.par,
          rating: course.rating
        })
      )
    });
    return Promise.all(coursePromises)
  })
}

const createCourse = (knex, course) => {
  return knex('courses').insert(course);
};

exports.seed = (knex, Promise) => {
  return knex('courses').del()
    .then(() => knex('states').del())
    .then(() => {
      let statesPromises = []
      states.forEach((state) => {
        statesPromises.push(createState(knex, state));
      })
      return Promise.all(statesPromises)
    })
    .catch(error => console.log(`Error seeding data: ${error}`))
};
