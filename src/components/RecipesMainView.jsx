import React, { useState, useEffect } from "react";
import Recipes from "../modules/Recipes";
import RecipeCard from "./RecipeCard";
import { Grid, CircularProgress } from "@mui/material";

const RecipesMainView = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRecipes = async () => {
    setIsLoading(true)
    const response = await Recipes.index();
    setIsLoading(false)
    if (!response.message) {
      setRecipes(response.recipes);
    }
  };

  const recipesList = recipes.map((recipe, index) => {
    recipe.index = index + 1;
    return (
      <Grid item key={recipe.id}>
        <RecipeCard recipe={recipe} />
      </Grid>
    );
  });

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <Grid container spacing={{ xs: 2, md: 3 }} data-cy="recipes-list">
      {isLoading ? (
        <Grid item>
          <CircularProgress data-cy="loader-spinner" />
        </Grid>
      ) : (
        recipesList
      )}
    </Grid>
  );
};

export default RecipesMainView;
