import Express from 'express'
import examRouter from './exam.js'
import apps from '../User/route/index.js'
const router = Express.Router()

router.use('/exam',examRouter)
router.use('/user',apps)


router.get('*',(req,res)=>res.send(`<div><h1>404</h1></div>`))

export default router