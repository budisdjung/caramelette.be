const express = require('express');
const router = express.Router();
// const Middleware = require('../middlewares/middleware')
const ControllerRecipe = require('../controllers/controllerRecipe');

router.get('/', ControllerRecipe.getAllRecipe);

router.get('/:id', ControllerRecipe.getRecipeById);

router.post('/', ControllerRecipe.registerRecipe);

router.put('/:id', ControllerRecipe.updateRecipe);

router.delete('/:id', ControllerRecipe.deleteRecipe);

module.exports = router