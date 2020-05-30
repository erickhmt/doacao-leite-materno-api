const router = require('express').Router();
const DoacaoService = require('../../services/DoacaoService');

router.get('/:estoqueId/doacoes', async (req, res) => {
    try {
        const estoqueId = req.params.estoqueId;

        const response = await DoacaoService.ListAll();
        return res.json(response);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

router.post('/:estoqueId/doacoes', async (req, res) => {
    try {
        const response = await DoacaoService.Register(req.params.estoqueId, req.body);
        return res.json(response);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

router.delete('/:estoqueId/doacoes/:doacaoId', async (req, res) => {
    try {
        const response = await DoacaoService.Delete(req.params.doacaoId);
        return res.json(response);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});
module.exports = router;
