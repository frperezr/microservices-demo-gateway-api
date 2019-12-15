// node modules
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const expressGraphQL = require('express-graphql')
const schema = require('./graphql')

const api = require('./api')
const app = express()

const port = process.env.GATEWAY_PORT || 4000

app.use(morgan(':method :url :status :response-time ms'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.use('/api/v1', api)

app.use(
  '/graphql',
  expressGraphQL({
    schema: schema,
    graphiql: true,
    formatError: (error) => ({
      message: error.message,
      locations: error.locations,
      stack: error.stack ? error.stack.split('\n') : [],
      path: error.path,
    }),
    pretty: true,
  }),
)

const server = app.listen(port, () => console.log(`Gateway backend is running on port ${port}`))

process.on('SIGTERM', () => {
  server.close((err) => {
    if (err) {
      console.log('here in server.close', err)
      process.exit(1)
    }

    process.exit(0)
  })
})

module.exports = server
