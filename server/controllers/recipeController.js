require("../models/database");

const Category = require("../models/Category");
const Recipe = require("../models/Recipe");

exports.homepage = async (req, res) => {
  try {
    const limit = 5;
    const categories = await Category.find({}).limit(limit);
    const latest = await Recipe.find({}).sort({ _id: -1 }).limit(limit);
    const mostloved = await Recipe.find({}).limit(limit);
    const unique = await Recipe.find({}).sort({ _id: 1 }).limit(limit);

    const recipetypes = { latest, mostloved, unique };
    res.render("index", { title: "Home", categories, recipetypes });
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
    res.render("categories", { title: "Categories", categories });
  } catch (e) {
    res.status(500).send({
      message: e.message || "Error occured",
    });
  }
};
