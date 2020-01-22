const CatModel = require('../models/cat-names');

function catNameControllerGenerator(database) {
  async function getAllCats(req, res) {
    const catModel = new CatModel(database);
    const allCats = await catModel.getAll();
    res.json(allCats);
  };

  async function createCat(req, res) {
    const catModel = new CatModel(database);
    const createdCats = await Promise.all(
      req.body.map(name => catModel.create(name))
    );
    res.json(createdCats);
  };

  async function deleteCat(req, res) {
    const catModel = new CatModel(database);
    const deletedCats = await Promise.all(
      req.body.map(name => catModel.delete(name))
    );
    res.json(deletedCats);
  };

  return {
    getAll: getAllCats,
    create: createCat,
    delete: deleteCat,
  };
}

module.exports = catNameControllerGenerator;
