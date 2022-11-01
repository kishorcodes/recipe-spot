const Category = require("../models/Category");
const Recipe = require("../models/Recipe");
require("../config/dbConnect");

exports.homepage = async (req, res) => {
  try {
    const limit = 5;
    const categories = await Category.find({}).limit(limit);
    const latest = await Recipe.find({}).sort({ _id: -1 }).limit(limit);
    const mostloved = await Recipe.find({}).limit(limit);
    const unique = await Recipe.find({}).sort({ _id: 1 }).limit(limit);

    const recipetypes = { latest, mostloved, unique };
    res.render("index", {
      title: "Recipe Spot - Home",
      categories,
      recipetypes,
    });
  } catch (e) {
    res.status(500).send({
      message: e.message || "Error occured",
    });
  }
};

exports.exploreCategories = async (req, res) => {
  try {
    const limit = 20;
    const categories = await Category.find({}).limit(limit);
    res.render("categories", { title: "Recipe Spot - Categories", categories });
  } catch (e) {
    res.status(500).send({
      message: e.message || "Error occured",
    });
  }
};

exports.exploreRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    console.log(recipe);
    res.render("recipe", { title: recipe.name, recipe });
  } catch (e) {
    res.render("recipe", { title: "Not found" });
  }
};

// get /categories/:id
exports.exploreCategoryById = async (req, res) => {
  try {
    let categoryId = req.params.id;
    const limit = 20;
    console.log(categoryId);
    const categoryById = await Recipe.find({
      category: categoryId,
    }).limit(limit);
    res.render("recipesbycategory", {
      title: "Category: " + categoryId,
      categoryById,
    });
  } catch (e) {
    console.log(e);
  }
};

exports.searchRecipe = async (req, res) => {
  try {
    let searchTerm = req.body.searchTerm;
    let recipeResults = await Recipe.find({
      $text: { $search: searchTerm, $diacriticSensitive: true },
    });
    res.render("reciperesults", { title: "Search Results", recipeResults });
  } catch (e) {}
};
