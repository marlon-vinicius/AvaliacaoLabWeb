const repository = require('./author-repository')

const create = async (autor) => {
    return repository.save(autor);
};

const list = async (filter) => {
    return repository.findAll(filter);
};

const findById = async (id) => {
    return repository.findById(id);
};

const deleteById = async (id) => {
    return repository.deleteById(id);
};

module.exports = {
    create,
    list,
    findById,
    deleteById
}