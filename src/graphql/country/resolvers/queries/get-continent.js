// GRPC Service
const CountryService = require('../../../../services/js/countries-api')

const getContinent = async (_, { id }) => {
  console.log(`[Country][getContinent][Request] id = ${JSON.stringify(id)}`)
  try {
    const payload = await CountryService.getContinent(id)
    console.log(`[Country][getContinent][Response] payload = ${JSON.stringify(payload)}`)
    return payload
  } catch (error) {
    console.error(`[Country][getContinent][Error] error = ${JSON.stringify(error)}`)
    throw error
  }
}

module.exports = getContinent
