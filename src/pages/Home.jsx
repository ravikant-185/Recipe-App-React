import { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";

function Home() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to fetch recipes from API
  const fetchRecipes = async (q) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${q}`
      );
      const data = await res.json();
      setRecipes(data.meals || []); // Agar match nahi hai → empty array
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setRecipes([]);
    }
    setLoading(false);
  };

  // Load default recipes when page opens
  useEffect(() => {
    fetchRecipes("chicken"); // Default search term, aap change kar sakte ho
  }, []);

  // Called when user types in search
  const handleSearch = (q) => {
    setQuery(q);
    fetchRecipes(q || "chicken"); // Agar input empty ho → default recipes
  };

  return (
    <div className="container">
      <SearchBar query={query} setQuery={handleSearch} />
      {loading && <p>Loading...</p>}
      <div className="grid">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeCard
              key={recipe.idMeal}
              recipe={{
                id: recipe.idMeal,
                title: recipe.strMeal,
                description: recipe.strCategory,
                image: recipe.strMealThumb,
              }}
            />
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
