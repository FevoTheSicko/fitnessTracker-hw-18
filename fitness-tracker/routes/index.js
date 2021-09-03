const router = require("express").Router();
console.log('index page found')
const pageroutes = require('./pageroutes')
const apiroutes = require('./apiRoutes')
router.use('/', pageroutes)

router.use('/api/workouts', apiroutes)


module.exports = router