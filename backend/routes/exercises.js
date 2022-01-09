const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req,res) => {
    Exercise.find()
    .then(exercises => res.join(exercises))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/add').post((req,res) => {
    const username = req.body.username;

    const mewUser = new User({username});

    newUser.save()
    .then(() => res.join('User added!'))
    .catch(err => res.status(400).json('Error: ' +err));

});

module.export = router;