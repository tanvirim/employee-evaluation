const express = require("express")
const {  getProgressByUserId, getEmployeeNames, addEmployeeRecommendation, getAllProgress, findEmployeesWithRecommendation, addProgress, deleteAllProgress, deleteProgressById } = require("../controllers/employeeController")
const Progress = require("../models/progressModel")


//middleware
//router object
const router = express.Router()

//routers
//POST || LOGIN

router.post('/progress', addProgress )
router.get('/progress/:id', getProgressByUserId )
router.put('/progress/:id', async (req, res) => {
  try {
    const progress = await Progress.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!progress) {
      return res.status(404).json({ message: 'Progress not found' });
    }
    res.status(200).json(progress);
  } catch (error) {
    console.error('Error updating progress:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.delete('/progress/:id', deleteProgressById);

router.get('/employee-names', getEmployeeNames)
router.post('/employee-recommendation', addEmployeeRecommendation);
router.route('/all-progress')
  .get(getAllProgress)
  .delete(deleteAllProgress);
router.get('/recomended-employee' ,findEmployeesWithRecommendation)



module.exports = router