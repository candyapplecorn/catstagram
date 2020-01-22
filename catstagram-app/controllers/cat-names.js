const CatModel = require('../models/cat-names');
const BASE_URL = '/cat_names';

function catNameMiddleware(app, database) {
  app.get(BASE_URL, async function(req, res) {
    const catModel = new CatModel(database);
    const allCats = await catModel.getAll();
    res.json(allCats);
  });

  app.post(BASE_URL, async function(req, res) {
    const catModel = new CatModel(database);
    const createdCat = await catModel.create(req.body);
    res.json(createdCat);
  });

  app.delete(BASE_URL, async function(req, res) {
    const catModel = new CatModel(database);
    const deletedCat = await catModel.delete(req.body);
    res.json(deletedCat);
  });
}

module.exports = catNameMiddleware;
