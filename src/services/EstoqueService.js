const Estoque = require('../../database/models/Estoque');

module.exports = {
    async ListAll() {
        const estoque = await Estoque.findAll();
        console.log('estoque: ', estoque);

        if (!estoque) {
            throw new Error('Estoques não encontrados');
        }

        return estoque;
    },

    async Info(postoRetiradaId, estoque) {
        try {
            // const estoque = await Estoque.findAll();

            return {
                totalDoadoras: 10,
                capacidadeAtendimento: 55,
                emFalta: 3,
            };
        } catch (err) {
            throw new Error('Falhão ao buscar informações do estoque');
        }
    },

    async GetById(id) {
        const estoque = await Estoque.findByPk(id);

        console.log('estoque: ', estoque);

        if (!estoque) {
            throw new Error('Estoque não encontrado');
        }

        return estoque;
    },

    async Register(body) {
        try {
            return await Estoque.create(body);
        } catch (err) {
            console.error(err);
            throw new Error('Falha ao Cadastrar estoque', err);
        }
    },

    async Delete(id) {
        try {
            return await Estoque.destroy({where: {
                id
            }});
        } catch (err) {
            console.error(err);
            throw new Error('Falha ao deletar estoque', err);
        }
    }
};