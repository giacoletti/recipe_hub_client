import { Box, Typography, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Recipes from "../modules/Recipes";

const RecipeFullView = () => {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();

  const fetchRecipe = async () => {
    const data = await Recipes.show(id);
    setRecipe(data.recipe);
  };
  useEffect(() => {
    fetchRecipe();
  }, []);

  return (
    <Box sx={{ m: 10 }}>
      <Grid>
        <Typography gutterBottom variant="h5" data-cy="recipe-title">
          {recipe.title}
        </Typography>
        <Typography gutterBottom variant="h5" data-cy="recipe-instructions">
          {recipe.instructions}
        </Typography>
        <Typography gutterBottom variant="h5" data-cy="recipe-created_at">
          {recipe.created_at}
        </Typography>
      </Grid>
      <img
        src="https://mui.com/static/images/cards/paella.jpg"
        loading="lazy"
      />
    </Box>
  );
};

export default RecipeFullView;
