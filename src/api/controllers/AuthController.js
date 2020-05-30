const router = require('express').Router();
const AuthService = require('../../services/AuthService');

router.post('/signup', async (req, res) => {
    try {
        const response = await AuthService.SignUp(req.body);
        return res.json(response);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

router.post('/login', async (req, res) => {
    try {
        const response = await AuthService.Login(req.body);
        return res.json(response);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

module.exports = router;