import Express from 'express'
import IORedis from 'ioredis'



const redisConfig = {
  port: 6379,
  host: "redis",
}
const Redis = new IORedis(redisConfig)
const routes = Express()

routes.get("/get/:key", (req, res) => {
  Redis
  .get(req.params.key)
  .then(res.send.bind(res))
})

routes.post("/set/:key/:value", (req, res) => {
  const { key, value } = req.params
  Redis
  .set(key, value)
  .then(res.send.bind(res))
})



export default routes
