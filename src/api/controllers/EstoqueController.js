const router = require('express').Router();
const EstoqueService = require('../../services/EstoqueService');

router.get('/:postoRetiradaId/estoque', async (req, res) => {
    try {
        const postoRetiradaId = req.params.postoRetiradaId;

        const response = await EstoqueService.ListAll();
        return res.json(response);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

router.post('/:postoRetiradaId/estoque', async (req, res) => {
    try {
        const response = await EstoqueService.Register(req.body);
        return res.json(response);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

router.delete('/:postoRetiradaId/estoque/:estoqueId', async (req, res) => {
    try {
        const response = await EstoqueService.Delete(req.params.estoqueId);
        return res.json(response);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

module.exports = router;
