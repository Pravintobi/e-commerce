import Express from 'express'
import approutes from './backend/routes/routeindex.js'

import 'dotenv/config'

const PORT = process.env.PORT

const app = Express()

app.use(Express.json())
app.use(approutes)

app.listen(PORT,()=>console.log("listening " + PORT))