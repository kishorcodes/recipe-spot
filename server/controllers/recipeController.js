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
    const categoryById = await Recipe.find({
      category: categoryId,
    }).limit(limit);
    res.render("recipesbycategory", {
      title: "Category: " + categoryId,
      categoryById: categoryById || [],
    });
  } catch (e) {
    console.log(e);
  }
};

exports.searchRecipe = async (req, res) => {
  try {
    let searchTerm = req.body.searchTerm;
    let recipes = await Recipe.find({
      $text: { $search: searchTerm, $diacriticSensitive: true },
    });
    res.render("reciperesults", { title: "Search Results", recipes });
  } catch (e) {}
};

exports.exploreLatest = async (req, res) => {
  try {
    const limit = 20;
    const recipes = await Recipe.find({}).sort({ _id: -1 }).limit(limit);
    res.render("reciperesults", { title: "Latest", recipes });
  } catch (e) {}
};

exports.exploreRandom = async (req, res) => {
  try {
    let count = await Recipe.find().countDocuments();
    let randomNumber = Math.floor(Math.random() * count);
    let recipe = await Recipe.findOne().skip(randomNumber).exec();
    res.render("recipe", { title: "Latest", recipe });
  } catch (e) {}
};

exports.allRecipes = async (req, res) => {
  try {
    let recipes = await Recipe.find({});
    res.render("reciperesults", { title: "All Recipes", recipes });
  } catch (e) {}
};

exports.submitRecipe = async (req, res) => {
  const infoErrors = req.flash("infoErrors");
  const infoSubmit = req.flash("infoSubmit");

  res.render("submitrecipe", {
    title: "Submit Recipe",
    infoSubmit,
    infoErrors,
  });
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
      req.flash("infoSubmit", "Recipe has been added");
      res.redirect("submitrecipe");
    }
  } catch (e) {
    req.flash("infoErrors", e);
    res.redirect("/submitrecipe");
  }
};
