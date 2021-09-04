import express from 'express'
import router from '@server/routes'

const app = express()

app.use('/api', router)

export default app
