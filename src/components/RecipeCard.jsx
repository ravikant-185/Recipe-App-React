import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

function RecipeCard({ recipe }) {
  const { favorites, toggleFavorite } = useFavorites();

  const isFav = favorites.some((fav) => fav.id === recipe.id);

  return (
    <div className="card">
      <img src={recipe.image} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
      <div className="card-actions">
        <Link to={`/recipe/${recipe.id}`}>View</Link>
        <button onClick={() => toggleFavorite(recipe)}>
          {isFav ? "❤️ Remove" : "🤍 Favorite"}
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;
