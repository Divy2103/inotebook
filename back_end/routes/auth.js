const express = require('express')
const User = require('../model/User')
const router = express.Router()
const { body, validationResult } = require('express-validator');

// create a user using POST : "/api/auth/createuser"  Doesn't required Auth No login required
router.post('/createuser', [
    body('email', 'enter a valid name').isEmail(),
    body('name', 'enter a valid name').isLength({ min: 3 }),
    body('password', 'enter a valid password').isLength({ min: 4, max: 12 })
],
    async (req, res) => {
        //  If there are errors return bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // check weather the user with this email exist already
        try{
            let user = await User.findOne({ email: req.body.email })
            if (user) {
                return res.status(400).json({ error: 'sorry a user with this email already exists' })
            }
            // Create a new user
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })
            res.json(user)
        }
        // catch error if some external error occured
        catch(error){
            console.log(error.message);
            res.status(500).send("some Error Occured");
        }
    })

module.exports = router