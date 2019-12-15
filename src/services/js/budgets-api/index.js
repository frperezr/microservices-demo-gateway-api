const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')

const path = __dirname + '/../../pb/demo.proto'

const { BUDGETS_HOST, BUDGETS_PORT } = process.env

const defaultOpts = {
  host: BUDGETS_HOST,
  port: BUDGETS_PORT,
}

class BudgetService {
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
    this.client = new proto.BudgetService(
      `${this.options.host}:${this.options.port}`,
      grpc.credentials.createInsecure(),
    )
  }

  getBudget(id) {
    return new Promise((resolve, reject) => {
      this.client.getBudget({ id }, (err, data) => {
        err ? reject(err) : resolve(data)
      })
    })
  }

  createBudget(userId, budgetLimit) {
    return new Promise((resolve, reject) => {
      this.client.createBudget({ userId, budgetLimit }, (err, data) => {
        err ? reject(err) : resolve(data)
      })
    })
  }

  addItem(budgetId, item) {
    return new Promise((resolve, reject) => {
      this.client.addItem({ budgetId, item }, (err, data) => {
        err ? reject(err) : resolve(data)
      })
    })
  }

  deleteItem(budgetId, item) {
    return new Promise((resolve, reject) => {
      this.client.deleteItem({ budgetId, item }, (err, data) => {
        err ? reject(err) : resolve(data)
      })
    })
  }

  deleteBudget(id) {
    return new Promise((resolve, reject) => {
      this.client.deleteBudget({ id }, (err, data) => {
        err ? reject(err) : resolve(data)
      })
    })
  }
}

module.exports = new BudgetService()

// There explain that it is less more expensive to have a single communication
// with the server than to make a connection for every request made to the API.
// see: https://stackoverflow.com/questions/49244039/go-grpc-simple-service-asynchronous-and-synchronous-explanation#answers
