import Express from 'express'



const routes = Express()

routes.get("/ping", (req, res) => {
  res.send("pong")
})



export default routes
