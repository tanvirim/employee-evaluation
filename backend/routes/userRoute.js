const express = require("express")
const { loginController, registerController, getAllAdmin, getAllEMployee, getAllEvaluator,  } = require("../controllers/userController")



//router object
const router = express.Router()

//routers
//POST || LOGIN

router.post('/login',loginController)

//POST || REGISTER
router.post('/register',registerController )

// Route to find all admins
router.get('/all-admins', getAllAdmin);
  
  // Route to find all employees
  router.get('/all-employees',getAllEMployee)
  router.delete('/delete-all-employees:id',)
  
  // Route to find all evaluators
  router.get('/all-evaluators', getAllEvaluator );
  
module.exports = router