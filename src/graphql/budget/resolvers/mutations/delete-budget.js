// GRPC Service
const BugetsService = require('../../../../services/js/budgets-api')

const deleteBudget = async (_, { input }) => {
  const { id } = input
  console.log(`[Budget][deleteBudget][Request] id = ${JSON.stringify(id)}`)
  try {
    const payload = await BugetsService.deleteBudget(id)
    console.log(`[Budget][deleteBudget][Response] payload = ${JSON.stringify(payload)}`)
    return payload
  } catch (error) {
    console.error(`[Budget][deleteBudget][Error] error = ${JSON.stringify(error)}`)
    throw error
  }
}

module.exports = deleteBudget
