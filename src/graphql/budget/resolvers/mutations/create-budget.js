// GRPC Service
const BugetsService = require('../../../../services/js/budgets-api')

const createBudget = async (_, { input }) => {
  const { budgetId, budgetLimit, budgetName } = input
  console.log(
    `[Budget][createBudget][Request] budgetId = ${JSON.stringify(budgetId)}, budgetLimit = ${JSON.stringify(
      budgetLimit,
    )}, budgetName = ${JSON.stringify(budgetName)}`,
  )
  try {
    const payload = await BugetsService.createBudget(budgetId, budgetLimit, budgetName)
    console.log(`[Budget][createBudget][Response] payload = ${JSON.stringify(payload)}`)
    return payload
  } catch (error) {
    console.error(`[Budget][createBudget][Error] error = ${JSON.stringify(error)}`)
    throw error
  }
}

module.exports = createBudget
