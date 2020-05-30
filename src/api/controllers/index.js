const router = require('express').Router();

router.use('/auth', require('./AuthController'));
router.use('/postos-retirada', require('./PostoRetiradaController'));
router.use('/postos-retirada', require('./EstoqueController'));
router.use('/estoque', require('./DoacaoController'));


module.exports = router;