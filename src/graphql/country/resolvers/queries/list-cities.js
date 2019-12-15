// GRPC Service
const CountryService = require('../../../../services/js/countries-api')

const listCities = async (_, { country }) => {
  console.log(`[Country][listCities][Request] country = ${JSON.stringify(country)}`)
  try {
    const payload = await CountryService.listCities(country)
    console.log(`[Country][listCities][Response] payload = ${JSON.stringify(payload)}`)
    return payload
  } catch (error) {
    console.error(`[Country][listCities][Error] error = ${JSON.stringify(error)}`)
    throw error
  }
}

module.exports = listCities
