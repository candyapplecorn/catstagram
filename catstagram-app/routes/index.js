const { Router } = require('express');
const catNameControllerGenerator = require('../controllers/cat-names');

module.exports = (database) => {
  const router = Router();
  const catNameController = catNameControllerGenerator(database);

  router.get('/', (req, res) => res.send('Welcome to Catstagram!'));

  router.get('/cat-names', catNameController.getAll);
  router.post('/cat-names', catNameController.create);
  router.delete('/cat-names', catNameController.delete);

  return router;
};
