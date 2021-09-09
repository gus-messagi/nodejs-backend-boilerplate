import supertest from 'supertest'
import app from '@server'
import { disconnect } from '@data'

export let request = {}

let server = {}

beforeEach(() => {
  server = app.listen()
  request = supertest(server)
})

afterEach(async () => {
  await disconnect()
  server.close()
})
