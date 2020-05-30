const router = require('express').Router();
const PostoRetiradaService = require('../../services/PostoRetiradaService');

router.get('/', async (req, res) => {
    try {
        const response = await PostoRetiradaService.ListAll();
        return res.json(response);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const response = await PostoRetiradaService.GetById(req.params.id);
        return res.json(response);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const response = await PostoRetiradaService.Register(req.body);
        return res.json(response);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const response = await PostoRetiradaService.Delete(req.params.id);
        return res.json(response);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

module.exports = router;
