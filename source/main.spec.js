import fetch from 'node-fetch'
import Main from './main'



afterAll(() => (
  new Promise((resolve) => {
    Main.server.close()
    Main.sever.once('close', resolve)
  })
))

test('main runs the service', () =>
  fetch('http://localhost:7070/ping')
  .call('text')
  .then((text) => (
    expect(text).toBe("pong")
  ))
)
