// GRPC Service
const BugetsService = require('../../../../services/js/budgets-api')

const addItem = async (_, { input }) => {
  const { budgetId, item } = input
  console.log(`[Budget][addItem][Request] id = ${JSON.stringify(budgetId)}`)
  try {
    const payload = await BugetsService.addItem(budgetId, item)
    console.log(`[Budget][addItem][Response] payload = ${JSON.stringify(payload)}`)
    return payload
  } catch (error) {
    console.error(`[Budget][addItem][Error] error = ${JSON.stringify(error)}`)
    throw error
  }
}

module.exports = addItem
