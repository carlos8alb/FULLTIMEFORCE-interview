import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()
app.get('/', (c) => c.text('Hello Nodejs!'))

serve(app).listen(3000, () => {
  console.log('Listening on http://localhost:3000')
})
