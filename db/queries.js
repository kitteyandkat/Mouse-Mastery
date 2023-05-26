const pool = require('./db')

const fetchModules = async () => {
  const client = await pool.connect()
  try {
    const result = await client.query('SELECT * FROM steps'); // replace 'modules' with the actual table name

    const modules = result.rows.map((row) => ({
      id: row.id,
      device_type: row.device_type,
      title: row.title,
      steps: [], // initialize an empty array for steps
    }))

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
    throw new Error('error fetching modules from the database');
  } finally {
    client.release()
  }
}

module.exports = {
  fetchModules,
}