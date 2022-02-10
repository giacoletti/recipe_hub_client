import React from "react";
import { TextField, Button } from "@mui/material";
import IngredientField from "./IngredientField";

const RecipeCreateForm = () => {

  
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Recipe name"
        variant="outlined"
        data-cy="name-input"
      />
      <>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          data-cy="ingredient-name-input-1"
        />
        <TextField
          id="outlined-basic"
          label="Amount"
          variant="outlined"
          data-cy="ingredient-amount-input-1"
        />
        <TextField
          id="outlined-basic"
          label="Unit"
          variant="outlined"
          data-cy="ingredient-unit-input-1"
        />
        <Button
          variant="outlined"
          // onClick={() =>  }
        >
          +
        </Button>
      </>
      <TextField
        id="outlined-basic"
        label="Instructions"
        variant="outlined"
        data-cy="instructions"
      />
    </div>
  );
};

export default RecipeCreateForm;
