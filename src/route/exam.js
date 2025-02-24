import Express from 'express'
import questionbank from '../controller/Exam.js'
const router = Express.Router()

router.post('/examquestion',questionbank.createTrueFalseQuestion)
router.get('/category',questionbank.getCategorizedQuestions)
router.post('/createExam',questionbank.createExam)
router.get('/getExams',questionbank.getExams)


export default router