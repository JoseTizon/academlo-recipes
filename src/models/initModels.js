const Users = require('./users.models')
const Categories = require('./categories.models')
const Ingredients = require('./ingredients.models')
const Instructions = require('./instructions.models')
const Recipes = require('./recipes.models')
const RecipesIngredients = require('./recipes_ingredients')
const Types = require('./types.models')
const UsersIngredients = require('./users_ingredients.models')
const UsersRecipes = require('./users_recipes.models')


const initModels = () => {
    //? hasMany || hasOne: foreing key between parenteses
    //? belongs to || foreing on the first parameter

    //* Users 1toMany Recipes
    Users.hasMany(Recipes)
    Recipes.belongsTo(Users)

    //* Users 1toMany UserRecipes
    Users.hasMany(UsersRecipes)
    UsersRecipes.belongsTo(Users)

    //* Recipes 1toMany UsersRecipes
    Recipes.hasMany(UsersRecipes)
    UsersRecipes.belongsTo(Recipes)

    //* Users 1toMany UsersIngredients
    Users.hasMany(UsersIngredients)
    UsersIngredients.belongsTo(Users)

    //* Ingredients 1toMany UsersIngredients
    Ingredients.hasMany(UsersIngredients)
    UsersIngredients.belongsTo(Ingredients)

    //* Categories 1toMany Recipes
    Categories.hasMany(Recipes)
    Recipes.belongsTo(Categories)

    //* Ingredients manyTo1 Types
    Types.hasMany(Ingredients)
    Ingredients.belongsTo(Types)

    //* Recipes 1toMany RecipesIngredients
    Recipes.hasMany(RecipesIngredients)
    RecipesIngredients.belongsTo(Recipes)

    //* Ingredients 1toMany RecipesIngredients
    Ingredients.hasMany(RecipesIngredients)
    RecipesIngredients.belongsTo(Ingredients)

    //* Recipes 1toMany Instructions
    Recipes.hasMany(Instructions)
    Instructions.belongsTo(Recipes)
}

module.exports = initModels