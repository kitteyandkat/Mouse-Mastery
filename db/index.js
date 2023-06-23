import express from 'express'
import cors from 'cors'
import { create, read, update, delety, readWithJoin, readModulesWithSteps } from './queries.js'
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.post('/api/:table', create)
app.get('/api/getAllModules', readModulesWithSteps)
app.get('/api/:table', read)
app.get('/api/:table1/:table2', readWithJoin)
app.delete('/api/:table/:id', delety)
app.put('/api/:table/:id', update)


const directory = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(directory, '..', 'client', 'dist')));
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})