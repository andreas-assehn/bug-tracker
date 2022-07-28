const router = require('express').Router();
const { getBugs, addBug, editBug, deleteBug } = require('./controllers/bugController');

router.get('/bugs', getBugs);
router.post('/addBug', addBug);
router.put('/editBug', editBug);
router.delete('/deleteBug', deleteBug);

// User routes goes here:

module.exports = router;