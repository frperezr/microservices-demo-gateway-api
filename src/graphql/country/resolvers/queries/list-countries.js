// GRPC Service
const CountryService = require('../../../../services/js/countries-api')

const listCountries = async (_, { continent }) => {
  console.log(`[Country][listCountries][Request] continent = ${JSON.stringify(continent)}`)
  try {
    const payload = await CountryService.listCountries(continent)
    console.log(`[Country][listCountries][Response] payload = ${JSON.stringify(payload)}`)
    return payload
  } catch (error) {
    console.error(`[Country][listCountries][Error] error = ${JSON.stringify(error)}`)
    throw error
  }
}

module.exports = listCountries
