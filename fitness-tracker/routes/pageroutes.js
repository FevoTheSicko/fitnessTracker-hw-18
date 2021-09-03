const router = require('express').Router();
console.log('router reached')
const path = require('path')
router.get('/stats', async (req, res) => {
    try {
        console.log('route reached')

        res.sendFile(path.join(__dirname, '../public/stats.html'))

    } catch (err) {
        res.status(500).json(err)
    }
})
router.get('/exercise', async (req, res) => {
    try {
        console.log('route reached')

        res.sendFile(path.join(__dirname, '../public/exercise.html'))

    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router