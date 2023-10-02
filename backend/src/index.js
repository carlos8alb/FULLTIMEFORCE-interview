import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { getData } from './api/index.js'
import { cors } from 'hono/cors'

const app = new Hono()
app.use('/api/*', cors())

app.get('/api', async (c) => {
  const data = await getData()
  return c.json(data)
})

app.get('/api/commits', async (c) => {
  const data = await getData()
  const commits = data.map((item) => item.commit)
  return c.json(commits)
})

app.notFound((c) => c.json({ message: 'Not Found', ok: false }, 404))

serve(app).listen(3000, () => {
  console.log('Listening on http://localhost:3000')
})
