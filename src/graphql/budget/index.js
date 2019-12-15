const schema = require('./schema')

const budget = require('./resolvers/models/budget')
const budgetItem = require('./resolvers/models/budget-item')
const queries = require('./resolvers/queries')
const mutations = require('./resolvers/mutations')

const resolvers = {
  Budget: budget,
  BudgetItem: budgetItem,
  Query: queries,
  Mutation: mutations,
}

module.exports.schema = schema
module.exports.resolvers = resolvers
