/* const Category = require("../models/Category.js"); */
const Category = require("../models/Category");
const Recipe = require("../models/Recipe");

require("../models/database");

/* 
Get / 
 Homepage 

*/

exports.homepage = async (req, res) => {
  try {
    const limitNumber = 5;
    const categories = await Category.find({}).limit(limitNumber);
    const recent = await Recipe.find({}).sort({ _id: -1 }).limit(limitNumber);
    const thai = await Recipe.find({ category: "Thai" }).limit(limitNumber);
    const americain = await Recipe.find({ category: "Americain" }).limit(
      limitNumber
    );
    const chinois = await Recipe.find({ category: "chinois" }).limit(
      limitNumber
    );

    const food = { recent, thai, americain, chinois };

    res.render("index", { title: "Cooking Blog - Home", categories, food });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};

/**
 * GET /categories
 * Categories
 */
exports.exploreCategories = async (req, res) => {
  try {
    const limitNumber = 20;
    const categories = await Category.find({}).limit(limitNumber);
    res.render("categories", {
      title: "Cooking Blog - Categories",
      categories,
    });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};

async function insertDummyRecipeData() {
  try {
    await Recipe.insertMany([
      {
        name: "Recipe Name Goes Here",
        description: `Recipe Description Goes Here`,
        email: "recipeemail@raddy.co.uk",
        ingredients: [
          "1 level teaspoon baking powder",
          "1 level teaspoon cayenne pepper",
          "1 level teaspoon hot smoked paprika",
        ],
        category: "American",
        image: "southern-friend-chicken.jpg",
      },
      {
        name: "Recipe Name Goes Here",
        description: `Recipe Description Goes Here`,
        email: "recipeemail@raddy.co.uk",
        ingredients: [
          "1 level teaspoon baking powder",
          "1 level teaspoon cayenne pepper",
          "1 level teaspoon hot smoked paprika",
        ],
        category: "American",
        image: "southern-friend-chicken.jpg",
      },
    ]);
  } catch (error) {
    console.log("err", +error);
  }
}

insertDummyRecipeData();
