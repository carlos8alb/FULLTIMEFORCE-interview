import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { getRepository, getCommits } from './api/index.js'
import { cors } from 'hono/cors'
import dotenv from 'dotenv'
dotenv.config()

const app = new Hono()
app.use('/api/*', cors())

app.get('/api', async (c) => {
  return c.json({
    repository: '/api/repository',
    commits: '/api/repository/commits'
  })
})

app.get('/api/repository', async (c) => {
  const repository = await getRepository()
  return c.json(repository)
})

app.get('/api/repository/commits', async (c) => {
  const commits = await getCommits()
  return c.json(commits)
})

app.notFound((c) => c.json({ message: 'Not Found', ok: false }, 404))

const PORT = process.env.PORT || 3000

serve(app).listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})
