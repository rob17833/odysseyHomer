const express = require('express');
const router = express.Router();

router.post('/signup', (req, res) =>{
	res.send('I m in POST signup');
});

module.exports = router;