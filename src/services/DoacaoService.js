const Doacao = require('../../database/models/Doacao');

module.exports = {
    async ListAll() {
        const doacao = await Doacao.findAll();
        console.log('doacao: ', doacao);

        if (!doacao) {
            throw new Error('Doações não encontrados');
        }

        return doacao;
    },

    async GetById(id) {
        const doacao = await Doacao.findByPk(id);

        console.log('doacao: ', doacao);

        if (!doacao) {
            throw new Error('Doação não encontrada');
        }

        return doacao;
    },

    async Register(estoqueId, body) {
        const {quantidade, doadora, receptor, contatoDoadora} = body;

        try {
            return await Doacao.create({
                quantidade,
                doadora,
                receptor,
                contatoDoadora,
                dtRetirada: new Date(),
                estoqueId,
            });
        } catch (err) {
            console.error(err);
            throw new Error('Falha ao Cadastrar doação', err);
        }
    },

    async Delete(id) {
        try {
            return await Doacao.destroy({where: {
                id
            }});
        } catch (err) {
            console.error(err);
            throw new Error('Falha ao deletar doação', err);
        }
    }
};