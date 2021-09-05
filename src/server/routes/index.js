import { Router } from 'express'
import { prisma } from '@data'

const router = Router()

router.get('/', async (req, res) => {
  const response = await prisma.userReview.findMany({})
  res.json(response)
})

export default router
