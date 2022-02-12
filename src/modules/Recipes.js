import { api } from "./network";

const Recipes = {
  async index() {
    try {
      const { data } = await api.get("/recipes");
      return data.recipes;
    } catch (error) {
      return error;
    }
  },
  async show(id) {
    try {
      const { data } = await api.get(`/recipes/${id}`);
      return data;
    } catch (error) {
      return error;
    }
  },
  async create(recipe, currentUser) {
    try {
      const headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"));
      const response = await api.post(
        "/recipes",
        {
          recipe: {
            name: recipe.name,
            instructions: recipe.instructions,
            user: currentUser.uid
          }
        },
        {
          headers: headers
        }
      );
      return response.data;
    } catch (error) {
      return error;
    }
  },
  async getIngredients() {
    try {
      const { data } = await api.get("/ingredients");
      return data.ingredients;
    } catch (error) {
      return error;
    }
  }
};
export default Recipes;
