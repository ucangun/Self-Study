//! Context Alani create edelim
import { useState } from "react";
import { createContext } from "react";
import axios from "axios";

export const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
  //! login ve privaterouter sayfalarinda gerekli usestateleri actik

  const [name, setName] = useState(localStorage.getItem("username") || "");
  const [password, setPassword] = useState(
    localStorage.getItem("password") || ""
  );

  //! Home , Header , Recipecard da gerekli olan veriler

  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState("Breakfast");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const APP_ID = "633135cc";
  const APP_KEY = "4e352366e820300289821caacf64d308";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;

  const getData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      setRecipes(data.hits);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return <p>Something went Wrong...</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <RecipeContext.Provider
      value={{
        name,
        setName,
        password,
        setPassword,
        recipes,
        setRecipes,
        setQuery,
        setMealType,
        getData,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
