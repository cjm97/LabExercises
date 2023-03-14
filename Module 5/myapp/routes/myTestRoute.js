const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
res.send('Hello World!')
})
router.get('/test2', (req, res) => {
res.send('Second test')
})
router.get('/', (req, res) => {
    res.send("home directory test")
})
module.exports = router;
