// GRPC Service
const BugetsService = require('../../../../services/js/budgets-api')

const createBudget = async (_, { input }) => {
  const { budgetId, budgetLimit } = input
  console.log(`[Budget][createBudget][Request] id = ${JSON.stringify(id)}`)
  try {
    const payload = await BugetsService.createBudget(budgetId, budgetLimit)
    console.log(`[Budget][createBudget][Response] payload = ${JSON.stringify(payload)}`)
    return payload
  } catch (error) {
    console.error(`[Budget][createBudget][Error] error = ${JSON.stringify(error)}`)
    throw error
  }
}

module.exports = createBudget
