const router = require('express').Router();

router.get('/bugs');
router.post('/addBug');
router.put('/editBug');
router.delete('/deleteBug');

// User routes goes here:

module.exports = router;