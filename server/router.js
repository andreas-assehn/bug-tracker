const router = require('express').Router();
const { getBugs, addBug, editBug, deleteBug } = require('./controllers/bugController');
const { getUser, addUser } = require('./controllers/userController');

// Bug routes:
router.get('/bugs', getBugs);
router.post('/addBug', addBug);
router.put('/editBug', editBug);
router.delete('/deleteBug', deleteBug);

// User routes:
router.get('/getUser', getUser);
router.post('/addUser', addUser);

module.exports = router;