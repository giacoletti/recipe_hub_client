import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Alert } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";
import ShowFullRecipe from "./ShowFullRecipe";
import Recipes from "../modules/Recipes";
import { useNavigate } from "react-router-dom";

const RecipeFullView = () => {
  const { currentUser } = useSelector((state) => state);
  const [message, setMessage] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  const deleteRecipe = async () => {
    const data = await Recipes.delete(id);
    setMessage(data.message);
    setTimeout(() => navigate("/my-recipes"), 2000);
  };

  const confirmDelete = (confirm) => {
    confirm.stopPropagation();
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      deleteRecipe();
    }
  };

  return (
    <>
      {currentUser ? (
        <>
          <Button
            onClick={confirmDelete}
            sx={{ margin: 1, ml: 77, flexGrow: 1, boxShadow: 3 }}
            color="inherit"
            data-cy="delete-btn"
            variant="outlined"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
          {message && (
            <Alert data-cy="flash-message" severity="info">
              {message}
            </Alert>
          )}
          <ShowFullRecipe />
        </>
      ) : (
        <ShowFullRecipe />
      )}
    </>
  );
};

export default RecipeFullView;
