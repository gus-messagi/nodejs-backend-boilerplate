import supertest from 'supertest'
import app from '@server'
import { disconnect } from '@data'

export let request = {}

let server = {}

beforeEach(() => {
  server = app.listen()
  request = supertest(server)
})

afterAll(async done => {
  await disconnect()
  server.close(done)
})
