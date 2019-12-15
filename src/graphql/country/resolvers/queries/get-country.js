// GRPC Service
const CountryService = require('../../../../services/js/countries-api')

const getCountry = async (_, { id }) => {
  console.log(`[Country][getCountry][Request] id = ${JSON.stringify(id)}`)
  try {
    const payload = await CountryService.getCountry(id)
    console.log(`[Country][getCountry][Response] payload = ${JSON.stringify(payload)}`)
    return payload
  } catch (error) {
    console.error(`[Country][getCountry][Error] error = ${JSON.stringify(error)}`)
    throw error
  }
}

module.exports = getCountry
