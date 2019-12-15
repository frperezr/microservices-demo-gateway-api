// GRPC Service
const BugetsService = require('../../../../services/js/budgets-api')

const deleteItem = async (_, { input }) => {
  const { budgetId, item } = input
  console.log(`[Budget][deleteItem][Request] budgetId = ${JSON.stringify(budgetId)}, item = ${JSON.stringify(item)}`)
  try {
    const payload = await BugetsService.deleteItem(budgetId, item)
    console.log(`[Budget][deleteItem][Response] payload = ${JSON.stringify(payload)}`)
    return payload
  } catch (error) {
    console.error(`[Budget][deleteItem][Error] error = ${JSON.stringify(error)}`)
    throw error
  }
}

module.exports = deleteItem
