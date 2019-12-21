const { makeExecutableSchema } = require('graphql-tools')
const lodash = require('lodash')

const { schema: countrySchema, resolvers: countryResolvers } = require('./country')
const { schema: budgetSchema, resolvers: budgetResolvers } = require('./budget')

const typeDefs = [countrySchema, budgetSchema]

const resolvers = lodash.merge(countryResolvers, budgetResolvers)

const resolverValidationOptions = {
  requireResolversForResolveType: false,
}

const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
  resolverValidationOptions,
})

module.exports = schema
