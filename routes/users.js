const express = require('express');
const router = express.Router();
const passport = require('passport');

// Login
router.get('/login', (req, res) => res.send('Login'));

// Register
router.get('/register', (req, res) => res.send('Register'));

// Register Handle
router.post('/register', (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    let errors = [];
});

// Passport Login
router.post('/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    function (req, res) {
        res.redirect('/');
    });



module.exports = router;