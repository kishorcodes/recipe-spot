const express = require("express");
const recipeController = require("../controllers/recipeController");
const router = express.Router();

router.get("/", recipeController.homepage);
router.get("/recipes/:id", recipeController.exploreRecipe);
router.get("/recipes/filter/random", recipeController.exploreRandom);
router.get("/recipes/filter/all", recipeController.allRecipes);
router.get("/recipes/filter/latest", recipeController.exploreLatest);
router.get("/categories", recipeController.exploreCategories);
router.get("/categories/:id", recipeController.exploreCategoryById);
router.get("/submitrecipe", recipeController.submitRecipe);

router.post("/recipes/filter/search", recipeController.searchRecipe);
router.post("/submitrecipe", recipeController.submitRecipePost);

module.exports = router;
