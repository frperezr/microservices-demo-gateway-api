const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')

const path = __dirname + '/../../pb/demo.proto'

const { AUTH_HOST, AUTH_PORT } = process.env

const defaultOpts = {
  host: AUTH_HOST,
  port: AUTH_PORT,
}

class AuthService {
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
    this.client = new proto.AuthService(`${this.options.host}:${this.options.port}`, grpc.credentials.createInsecure())
  }

  login(email, password) {
    return new Promise((resolve, reject) => {
      this.client.login({ email, password }, (err, data) => {
        err ? reject(err) : resolve(data)
      })
    })
  }

  signup(email, password) {
    return new Promise((resolve, reject) => {
      this.client.signup({ email, password }, (err, data) => {
        err ? reject(err) : resolve(data)
      })
    })
  }
}

module.exports = new AuthService()

// There explain that it is less more expensive to have a single communication
// with the server than to make a connection for every request made to the API.
// see: https://stackoverflow.com/questions/49244039/go-grpc-simple-service-asynchronous-and-synchronous-explanation#answers
