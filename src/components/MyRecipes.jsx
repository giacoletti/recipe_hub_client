import React, { useState } from "react";
import Button from "@mui/material";

const MyRecipes = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
    <Button data-cy="create-recipe" onClick={() => setShowForm(!showForm)}>
      Create recipe
    </Button>
    
    {showForm ? (

      }
      </>
      );
};

export default MyRecipes;
