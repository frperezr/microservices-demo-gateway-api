// GRPC Service
const CountryService = require('../../../../services/js/countries-api')

const listContinents = async () => {
  console.log(`[Country][listContinents][Request] Empty`)
  try {
    const payload = await CountryService.listContinents()
    console.log(`[Country][listContinents][Response] payload = ${JSON.stringify(payload)}`)
    return payload
  } catch (error) {
    console.error(`[Country][listContinents][Error] error = ${JSON.stringify(error)}`)
    throw error
  }
}

module.exports = listContinents
