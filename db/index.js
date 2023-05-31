// const express = require('express')
// const cors = require('cors')
// const pool = require('./db')
// const queries = require('./queries')
import express, { application } from 'express'
import cors from 'cors'
import {create, read, update, delety} from './queries.js'
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.post('/api/:table', create)
app.get('/api/:table', read)
app.delete('/api/:table/:id',delety)
app.put('/api/:table/:id', update)
app.use(express.static('dist'))
// app.get('/api/quiz', async (req, res) => {
//   try {
//     const client = await pool.connect();
//     const result = await client.query('SELECT * FROM public.quiz;');
//     const quizData = result.rows;
//     client.release();
//     res.json(quizData);
//   } catch (error) {
//     console.error('Error executing query:', error);
//     res.status(500).json({ error: 'An error occurred while fetching quiz data' });
//   }
// });

// app.get('/api/steps', async (req, res) => {
//   try {
//     const client = await pool.connect();
//     const result = await client.query('SELECT * FROM public.steps;');
//     const stepsData = result.rows;
//     client.release();
//     res.json(stepsData);
//   } catch (error) {
//     console.error('Error executing query:', error);
//     res.status(500).json({ error: 'An error occurred while fetching steps data' });
//   }
// });

// app.get('/api/modules', async (req, res) => {
//   try {
//     const client = await pool.connect()
//     const result = await queries.read(client)
//     const modules = result.rows;
//     client.release()
//     res.json(modules)
//   } catch (error) {
//     console.error('Error', error)
//     res.status(500).json({ error: 'An error occurred while fetching data' })
//   }
// });

// app.post('/api/modules', async (req, res) => {
//   try {
//     const client = await pool.connect()
//     const result = await queries.create(client, req.body)
//     const module = result.rows[0]
//     client.release()
//     res.json(module)
//   } catch (error) {
//     console.error('Error executing query:', error)
//     res.status(500).json({ error: 'An error occurred while creating the module' })
//   }
// })

// app.put('/api/modules/:id', async (req, res) => {
//   try {
//     const client = await pool.connect()
//     const result = await queries.update(client, req.params.id, req.body)
//     const module = result.rows[0]
//     client.release()
//     res.json(module)
//   } catch (error) {
//     console.error('Error', error)
//     res.status(500).json({ error: 'An error occurred while updating the module' })
//   }
// })

// app.delete('/api/modules/:id', async (req, res) => {
//   try {
//     const client = await pool.connect()
//     const result = await queries.remove(client, req.params.id)
//     const module = result.rows[0]
//     client.release()
//     res.json(module)
//   } catch (error) {
//     console.error('Error', error)
//     res.status(500).json({ error: 'An error occurred while deleting the module' })
//   }
// })

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})