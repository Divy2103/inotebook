const express = require('express')
const User = require('../model/User')
const router = express.Router()
const { body, validationResult } = require('express-validator');

// create a user using POST : "/api/auth/"  Doesn't required Auth
router.post('/', [
    body('email', 'enter a valid name').isEmail(),
    body('name', 'enter a valid name').isLength({ min: 3 }),
    body('password', 'enter a valid password').isLength({ min: 4, max: 12 })
],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }).then(user => {
            res.json(user)
            console.log(user)
        }).catch(err => {console.log(err)
        res.json({ error: 'please enter a unique value for email' ,message:err.message})});
    })

module.exports = router