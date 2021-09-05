import NodeEnvironment from 'jest-environment-node'
import prepareDatabase from './database'

class PrismaTestEnvironment extends NodeEnvironment {
  constructor (config) {
    super(config)
    this.db = prepareDatabase()
  }

  async setup () {
    process.env.DATABASE_URL = this.db.url

    console.log('Running yarn migrate...')
    await this.db.migrate()
    console.log("Command 'yarn migrate' completed.")

    return super.setup()
  }

  async teardown () {
    await this.db.teardown()
    return super.teardown()
  }
}

export default PrismaTestEnvironment
