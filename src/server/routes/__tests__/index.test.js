import { request } from '@config'

describe('INDEX', () => {
  it('GET Hello', async () => {
    const response = await request.get('/api')

    console.log(response)
  })
})
