import Express from 'express'
import student from '../controller/student.js'
const router = Express.Router()

router.post('/createstudent',student.createStudent)
router.post('/loginstudent',student.loginStudent)
router.post('/enrollexam',student.enrollInExam)
router.post('/results',student.getExamResults)
router.post('/takeexam',student.takeExam)
router.post('/updateExamResults',student.updateExamResults)


export default router