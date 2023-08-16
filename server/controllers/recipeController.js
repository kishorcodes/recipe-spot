const Category = require("../models/Category");
const Recipe = require("../models/Recipe");
require("../config/dbConnect");

exports.homepage = async (req, res) => {
  try {
    console.log("hi");
    const limit = 5;
    const categories = await Category.find({}).limit(limit);
    const latest = await Recipe.find({}).sort({ _id: -1 }).limit(limit);
    const mostloved = await Recipe.find({}).limit(limit);
    const unique = await Recipe.find({}).sort({ _id: 1 }).limit(limit);

    const recipetypes = { latest, mostloved, unique };
    res.status(200).json({
      title: "Recipe Spot - Home",
      categories,
      recipetypes,
    });
  } catch (e) {
    res.status(500).json({
      message: e.message || "Error occured",
    });
  }
};

exports.exploreCategories = async (req, res) => {
  try {
    const limit = 20;
    const categories = await Category.find({}).limit(limit);
    res.status(200).json(categories);
  } catch (e) {
    res.status(500).json({
      message: e.message || "Error occured",
    });
  }
};

exports.exploreRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    res.status(200).json(recipe);
  } catch (e) {
    res.status(500).json({
      message: "Recipe Not found",
    });
  }
};

exports.exploreCategoryById = async (req, res) => {
  try {
    console.log("bro");
    let categoryId = req.params.id;
    const limit = 20;
    const recipes = await Recipe.find({
      category: categoryId,
    }).limit(limit);
    res.status(200).json(recipes || []);
  } catch (e) {
    res.status(500).json({
      message: "Category Not found",
    });
  }
};

exports.searchRecipe = async (req, res) => {
  try {
    let searchTerm = req.body.searchTerm;
    let recipes = await Recipe.find({
      $text: { $search: searchTerm, $diacriticSensitive: true },
    });
    res.status(200).json(recipes);
  } catch (e) {
    res.status(500).json({
      message: "No results found",
    });
  }
};

exports.exploreLatest = async (req, res) => {
  try {
    console.log("shit");
    const limit = 20;
    const recipes = await Recipe.find({}).sort({ _id: -1 }).limit(limit);
    console.log(recipes);
    res.status(200).json(recipes);
  } catch (e) {
    res.status(500).json({
      message: "No results found",
    });
  }
};

exports.exploreRandom = async (req, res) => {
  try {
    let count = await Recipe.find().countDocuments();
    let randomNumber = Math.floor(Math.random() * count);
    let recipe = await Recipe.findOne().skip(randomNumber).exec();
    res.status(200).json(recipe);
  } catch (e) {
    res.status(500).json({
      message: "No results found",
    });
  }
};

exports.allRecipes = async (req, res) => {
  try {
    let recipes = await Recipe.find({});
    res.status(200).json(recipes);
  } catch (e) {
    res.status(500).json({
      message: "No results found",
    });
  }
};

exports.submitRecipePost = async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      console.log("no files to upload");
    } else {
      let imageUploadFile = req.files.image;
      let newImageName = Date.now() + imageUploadFile.name;

      let uploadPath =
        require("path").resolve("") + "/public/uploads/" + newImageName;

      imageUploadFile.mv(uploadPath, (e) => {
        if (e) {
          res.status(500).send(e);
        }
      });

      const newRecipe = new Recipe({
        name: req.body.recipename,
        description: req.body.description,
        email: req.body.email,
        ingredients: req.body.ingredients,
        category: req.body.category,
        image: newImageName,
      });
      await newRecipe.save();
    }
  } catch (e) {
    res.status(500).json({
      message: "Failed to add recipe",
    });
  }
};
