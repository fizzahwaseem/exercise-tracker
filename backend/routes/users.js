const router = require('express').Router();
let user = require('../models/user.model');

router.route('/').get((req,res) => {
    user.find()
    .then(users => res.join(users))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/add').post((req,res) => {
    const username = req.body.username;

    const mewUser = new User({username});

    newUser.save()
    .then(() => res.join('User added!'))
    .catch(err => res.status(400).json('Error: ' +err));

});

module.exports = router;