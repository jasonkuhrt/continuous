import HTTP from 'http'
import Express from 'express'
import Routes from './Routes'



const create = (config) => {
  const express = Express()

  express.use('/', Routes.misc)
  express.use('/redis', Routes.redis)

  // Create HTTP Server. This allows us to
  // access the standard node API rather than
  // have express hide it from us. We assign
  // the express instance to the server instance
  // so that we can inspect that should we want.
  const server = HTTP.createServer(express)
  server.express = express

  server.listen(config.port)
  // server.once('listening', () =>
  //   console.log('listening on port 7070')
  // )

  return server
}



export default {
  create,
}
