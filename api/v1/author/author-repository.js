const authorModel = require('./author-model');

const syncModel = async () => {
    await authorModel.sync({ force: false }); //force: true para recriar a tabela a cada inicialização
};

const save = async (author) => {
    await syncModel();
    return authorModel.create(author);
};

const findAll = async () => {
    return authorModel.findAll();
};

const findById = async (id) => {
    return authorModel.findOne({
        where: {
            id: id
        }
    })
};

const deleteById = async (id) => {
    return authorModel.destroy({
        where: {
            id: id
        }
    });
};

module.exports = {
    save,
    findAll,
    findById,
    deleteById
};