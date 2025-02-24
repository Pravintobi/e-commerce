import Express from 'express'
import appRoutes from './src/route/index.js'
import cors from 'cors'
import 'dotenv/config'
const PORT = process.env.PORT

const app = Express()

app.use(Express.json())
app.use(cors())
app.use(appRoutes)


app.listen(PORT,()=>console.log("app listening" + PORT))