// GRPC Service
const CountryService = require('../../../../services/js/countries-api')

const getCity = async (_, { id }) => {
  console.log(`[Country][getCity][Request] id = ${JSON.stringify(id)}`)
  try {
    const payload = await CountryService.getCity(id)
    console.log(`[Country][getCity][Response] payload = ${JSON.stringify(payload)}`)
    return payload
  } catch (error) {
    console.error(`[Country][getCity][Error] error = ${JSON.stringify(error)}`)
    throw error
  }
}

module.exports = getCity
