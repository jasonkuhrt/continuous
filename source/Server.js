const Express = require('express')
const Routes = require('./Routes')




const create = (config) => {
  const service = Express()
  service.mount('/', Routes.all)
  return service
}



export default {
  create,
}
