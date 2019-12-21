// GRPC Service
const BugetsService = require('../../../../services/js/budgets-api')

const getBudget = async (_, { id }) => {
  console.log(`[Budget][getBudget][Request] id = ${JSON.stringify(id)}`)
  try {
    const payload = await BugetsService.getBudget(id)
    console.log(`[Budget][getBudget][Response] payload = ${JSON.stringify(payload)}`)
    return payload
  } catch (error) {
    console.error(`[Budget][getBudget][Error] error = ${JSON.stringify(error)}`)
    throw error
  }
}

module.exports = getBudget
