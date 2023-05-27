import pool from './db.js'
const allowedTables = ['steps', 'users', 'modules', 'Persons']

//crud
export const create = (req, res) => {

  //make sure user is allowed to call this request
  //make sure the data that is being added is a table that exists
  const table = req.params.table
  if (!allowedTables.includes(table)) return res.status(404).send('table not found')

  const data = req.body
  const keys = Object.keys(data)
  const values = keys.map((x, i) => `$${i + 1}`)
  const sql = `INSERT into ${table}(${keys.join()}) VALUES (${values.join()})`
  pool.query(sql, Object.values(data))
    .then(results => res.status(200).send('data created'))
    .catch(error => {
      console.error(error)
      res.status(500).send(error)
    })
  //create dynamic insert string 
  //map all key values of object into input string
  // insert the new row into the table
}

export const read = (req, res) => {
  if (!allowedTables.includes(table)) return res.status(404).send('table not found')
  const table = req.params.table
  const sql = `SELECT * FROM ${table}`
  pool.query(sql)
    .then(results => res.json(results?.rows))
    .catch(error => {
      console.error(error)
      res.status(500).send(error)
    })
}

export const delety = (req, res) => {
  if (!allowedTables.includes(table)) return res.status(404).send('table not found')
  const { table, id } = req.params
  const sql = `DELETE FROM ${table} WHERE id=${id}`
  pool.query(sql)
    .then(results => res.json(results?.rows))
    .catch(error => {
      console.error(error)
      res.status(500).send(error)
    })
}

export const update = (req, res) => {
  const { table, id } = req.params
  if (!allowedTables.includes(table)) return res.status(404).send('table not found')
  const data = req.body
  const keys = Object.keys(data).map((x, i) => `${x}=$${i + 1}`)
  const values = Object.values(data)
  const sql = `UPDATE ${table} SET ${keys} WHERE id = ${id}`
  pool.query(sql, values)
    .then(results => res.json(results?.rows))
    .catch(error => {
      console.error(error)
      res.status(500).send(error)
    })
}