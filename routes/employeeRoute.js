const express = require("express")
const {progressController, getProgressByUserId} = require('../controllers/employeeController')


//middleware
//router object
const router = express.Router()

//routers
//POST || LOGIN

router.post('/progress', progressController )
router.get('/progress/:id', getProgressByUserId )



module.exports = router