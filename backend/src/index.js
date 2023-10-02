import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { getRepository, getCommits } from './api/index.js'
import { cors } from 'hono/cors'

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

serve(app).listen(3000, () => {
  console.log('Listening on http://localhost:3000')
})
