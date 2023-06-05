import pg from 'pg'
import dotenv from 'dotenv'
dotenv.config()
console.log(process.env.DATABASE_URL)

export default new pg.Pool({
  connectionString: process.env.DATABASE_URL
});