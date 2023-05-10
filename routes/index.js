const Router = require('express')
const router = new Router()
const teacherRouter = require('./teacherRouter')
const audienceRouter = require('./audienceRouter')
const userRouter = require('./userRouter')
const stplanRouter = require('./stplanRouter')
const stworkRouter = require('./stworkRouter')

router.use('/user', userRouter)
router.use('/teacher', teacherRouter)
router.use('/audience', audienceRouter)
router.use('/studyplan', stplanRouter)
router.use('/studentwork', stworkRouter)

module.exports = router