import dotenv from 'dotenv'
import express from 'express'
import router from '@server/routes'

dotenv.config()

const app = express()

app.use('/api', router)

export default app
