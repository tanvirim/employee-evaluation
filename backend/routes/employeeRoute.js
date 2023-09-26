const express = require("express")
const { progressController, getProgressByUserId, getEmployeeNames, addEmployeeRecommendation, getAllProgress, findEmployeesWithRecommendation } = require("../controllers/employeeController")


//middleware
//router object
const router = express.Router()

//routers
//POST || LOGIN

router.post('/progress', progressController )
router.get('/progress/:id', getProgressByUserId )
router.get('/employee-names', getEmployeeNames)
router.post('/employee-recommendation', addEmployeeRecommendation);
router.get('/all-progress', getAllProgress )
router.get('/recomended-employee' ,findEmployeesWithRecommendation)



module.exports = router