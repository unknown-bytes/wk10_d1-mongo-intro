const express = require('express');
const router = express.Router();
// import the Tweet model
const Tweet = require('../models/tweet.js');




// async / await 

// Create       `async` is need for to use `await`
router.post('/', async (req, res) => {

	// console.log('req.body', req.body)
	// res.send(req.body);
	const tweet = await Tweet.create(req.body)
	res.send(tweet);

});

// Index
router.get('/', async (req, res) => {
	// giving it empty curly braces tells it to find everything
	const tweets = await Tweet.find({})
	res.send(tweets);
});

// Seed
router.get('/seed', async (req, res) => {
	res.redirect('tweet seed route');
});

// Show
router.get('/:id', async (req, res) => {
	res.send('tweet show route');
});

// Delete
router.delete('/:id', async (req, res) => {
	res.send('tweet delete route');
});

// Update
router.put('/:id', async (req, res) => {
	res.send('tweet update route');
});

module.exports = router;
