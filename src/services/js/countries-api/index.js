const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')

const path = __dirname + '/../../pb/demo.proto'

const { COUNTRIES_HOST, COUNTRIES_PORT } = process.env

const defaultOpts = {
  host: COUNTRIES_HOST,
  port: COUNTRIES_PORT,
}

class CountryService {
  constructor(opts = {}) {
    // define options
    this.options = { ...defaultOpts, ...opts }

    // configure and initialize grpc client connection
    const packageDefinition = protoLoader.loadSync(path, {
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
    })

    const protoDescriptor = grpc.loadPackageDefinition(packageDefinition)
    const { proto } = protoDescriptor
    this.client = new proto.CountryService(
      `${this.options.host}:${this.options.port}`,
      grpc.credentials.createInsecure(),
    )
  }

  getCity(id) {
    return new Promise((resolve, reject) => {
      this.client.getCity({ id }, (err, data) => {
        err ? reject(err) : resolve(data)
      })
    })
  }

  listCities(country) {
    return new Promise((resolve, reject) => {
      this.client.listCities({ country }, (err, data) => {
        err ? reject(err) : resolve(data)
      })
    })
  }

  getCountry(id) {
    return new Promise((resolve, reject) => {
      this.client.getCountry({ id }, (err, data) => {
        err ? reject(err) : resolve(data)
      })
    })
  }

  listCountries(continent) {
    return new Promise((resolve, reject) => {
      this.client.listCountries({ continent }, (err, data) => {
        err ? reject(err) : resolve(data)
      })
    })
  }

  getContinent(id) {
    return new Promise((resolve, reject) => {
      this.client.getContinent({ id }, (err, data) => {
        err ? reject(err) : resolve(data)
      })
    })
  }

  listContinents() {
    return new Promise((resolve, reject) => {
      this.client.listContinents({}, (err, data) => {
        err ? reject(err) : resolve(data)
      })
    })
  }
}

module.exports = new CountryService()

// There explain that it is less more expensive to have a single communication
// with the server than to make a connection for every request made to the API.
// see: https://stackoverflow.com/questions/49244039/go-grpc-simple-service-asynchronous-and-synchronous-explanation#answers
