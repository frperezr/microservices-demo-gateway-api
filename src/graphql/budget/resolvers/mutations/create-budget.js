// GRPC Service
const BugetsService = require('../../../../services/js/budgets-api')

const createBudget = async (_, { input }) => {
  const { userId, budgetLimit, budgetName } = input
  console.log(
    `[Budget][createBudget][Request] userId = ${JSON.stringify(userId)}, budgetLimit = ${JSON.stringify(
      budgetLimit,
    )}, budgetName = ${JSON.stringify(budgetName)}`,
  )
  try {
    const payload = await BugetsService.createBudget(userId, budgetLimit, budgetName)
    console.log(`[Budget][createBudget][Response] payload = ${JSON.stringify(payload)}`)
    return payload
  } catch (error) {
    console.error(`[Budget][createBudget][Error] error = ${JSON.stringify(error)}`)
    throw error
  }
}

module.exports = createBudget
