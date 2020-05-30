const PostoRetirada = require('../../database/models/PostosRetirada');

module.exports = {
    async ListAll() {
        const postoRetirada = await PostoRetirada.findAll();

        console.log('postoRetirada: ', postoRetirada);

        if (!postoRetirada) {
            throw new Error('Livros não encontrados');
        }

        return postoRetirada;
    },

    async GetById(id) {
        const postoRetirada = await PostoRetirada.findByPk(id);

        console.log('postoRetirada: ', postoRetirada);

        if (!postoRetirada) {
            throw new Error('PostoRetirada não encontrado');
        }

        return postoRetirada;
    },

    async Register(body) {
        try {
            return await PostoRetirada.create(body);
        } catch (err) {
            console.error(err);
            throw new Error('Falha ao Cadastrar doacao', err);
        }
    },

    async Delete(id) {
        try {
            return await PostoRetirada.destroy({where: {
                id
            }});
        } catch (err) {
            console.error(err);
            throw new Error('Falha ao deletar posto de retirada', err);
        }
    }
};