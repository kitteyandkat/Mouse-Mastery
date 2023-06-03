import pool from './db.js'
const allowedTables = ['steps', 'users', 'modules', 'Persons']

<<<<<<< HEAD
const fetchModules = async () => {
  const client = await pool.connect()
  try {
    const result = await client.query('SELECT * FROM public.steps')
=======
//crud
export const create = (req, res) => {
>>>>>>> a6c7ee1ec4a83c3f02dcecf2635d0929aa88cf85

  //make sure user is allowed to call this request
  //make sure the data that is being added is a table that exists
  const table = req.params.table
  if (!allowedTables.includes(table)) return res.status(404).send('table not found')

<<<<<<< HEAD
    // fetch the steps for each module
    for (const module of modules) {
      const stepsResult = await client.query(
        'SELECT * FROM steps WHERE lesson_id = $1 ORDER BY step_order',
        [module.id]
      )

      const steps = stepsResult.rows.map((stepRow) => ({
        id: stepRow.lesson_id,
        step_order: stepRow.step_order,
        widget_type: stepRow.widget_type,
        x_coord: stepRow.x_coord,
        y_coord: stepRow.y_coord,
        step_text: stepRow.step_text,
        device_type: stepRow.device_type,
      }))

      module.steps = steps;
    }



    return modules
  } catch (error) {
    throw new Error('error fetching modules from the database')
  } finally {
    client.release()
  }
=======
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
>>>>>>> a6c7ee1ec4a83c3f02dcecf2635d0929aa88cf85
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