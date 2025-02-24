import Express from 'express'
// import adminRouter from './admin.js'
import studentRouter from './student.js'
const router = Express.Router()

// router.use('/admin',adminRouter)
router.use('/student',studentRouter)

router.get('*',(req,res)=>res.send(`<div><h1>404</h1></div>`))

export default router