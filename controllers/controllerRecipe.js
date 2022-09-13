require("dotenv").config();
const Recipe = require("../models/modelRecipe");

class ControllerRecipe {
  static async registerRecipe(req, res, next) {
    const body = req.body;
    if (!body.title) {
      res.status(400).json({ message: "Invalid Title" });
    }
    if (!body.summary) {
      res.status(400).json({ message: "Invalid Summary" });
    }
    if (!body.ingredients) {
      res.status(400).json({ message: "Invalid Ingredients" });
    }
    if (!body.instructions) {
      res.status(400).json({ message: "Invalid Instructions" });
    }
    if (!body.source_url) {
      res.status(400).json({ message: "Invalid Source URL" });
    }
    if (!body.image_url) {
      res.status(400).json({ message: "Invalid Image URL" });
    }
    if (!body.created_by) {
      res.status(400).json({ message: "Invalid Name" });
    }

    await Recipe.registerRecipe(body);
    res
      .status(201)
      .json({ message: "Success register new recipe data!" });
  }

  static async getAllRecipe(req, res, next) {
    const recipe = await Recipe.getAllRecipe();
    res.status(200).json({ message: "Success get recipe data!", data: recipe });
  }

  static async getRecipeById(req, res, next) {
    const id = req.params.id;

    const recipe = await Recipe.getRecipeById(id);
    res.status(200).json({ message: "Success get recipe data!", data: recipe });
  }

  static async updateRecipe(req, res, next) {
    const body = req.body;
    const id = req.params.id;

    await Recipe.updateRecipe(body, id);
    res
      .status(200)
      .json({ message: "Success update recipe data!" });
  }

  static async deleteRecipe(req, res, next) {
    const id = req.params.id;

    await Recipe.deleteRecipe(id);
    res
      .status(200)
      .json({ message: "Success delete recipe data!" });
  }
}

module.exports = ControllerRecipe;
