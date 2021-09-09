import dotenv from 'dotenv'
import child from 'child_process'
import { promisify } from 'util'
import { Client } from 'pg'
import { customAlphabet } from 'nanoid'

dotenv.config({ path: '.env.test' })

const nanoid = customAlphabet('1234567890abcdef', 10)
const exec = promisify(child.exec)
const schema = `test_${nanoid()}`

const teardown = async ({ url, schema }) => {
  const client = new Client({ connectionString: url })

  await client.connect()
  await client.query(`DROP SCHEMA IF EXISTS ${schema} CASCADE`)

  return client.end()
}

const prepare = () => {
  const url = `${process.env.DATABASE_URL}?schema=${schema}`
  const migrate = () => exec(`DB_URL=${url} yarn prisma migrate dev --preview-feature`)

  return {
    schema,
    url,
    migrate,
    teardown: () => teardown({ url, schema })
  }
}

export default prepare
