import HTTP from 'http'
import Express from 'express'
import Routes from './Routes'



const create = (config) => {
  // Create Express for req/res API
  const express = Express()
  express.use('/', Routes.all)

  // Craete HTTP Server
  const server = HTTP.createServer(express)
  server.listen(config.port)
  // server.once('listening', () =>
  //   console.log('listening on port 7070')
  // )
  server.express = express

  return server
}



export default {
  create,
}
