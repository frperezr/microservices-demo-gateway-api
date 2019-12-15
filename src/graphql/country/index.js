const schema = require('./schema')

const city = require('./resolvers/models/city')
const country = require('./resolvers/models/country')
const continent = require('./resolvers/models/continent')
const queries = require('./resolvers/queries')

const resolvers = {
  Continent: continent,
  Country: country,
  City: city,
  Query: queries,
}

module.exports.schema = schema
module.exports.resolvers = resolvers
