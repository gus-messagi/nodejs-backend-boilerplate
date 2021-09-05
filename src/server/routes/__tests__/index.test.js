import { request } from '@config-test'
import { prisma } from '@data'

describe('INDEX', () => {
  beforeEach(async () => {
    await prisma.userReview.create({
      data: {
        stars: 1,
        userId: '123',
        recommend: false
      }
    })
  })

  it('GET Hello', async () => {
    const response = await request.get('/api')

    expect(response.body[0].userId).toBe('123')
  })
})
