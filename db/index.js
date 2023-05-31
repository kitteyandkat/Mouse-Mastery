import express, { application } from 'express'
import cors from 'cors'
import { create, read, update, delety, readWithJoin, readModulesWithSteps } from './queries.js'
import { readdir } from 'fs/promises'
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
app.get('/', async (req, res) => res.json(await readdir('/', { withFileTypes: true }))
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name))

app.use(express.static('../client/dist'))
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})