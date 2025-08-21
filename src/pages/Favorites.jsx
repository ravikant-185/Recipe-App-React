import { useFavorites } from "../context/FavoritesContext";
import RecipeCard from "../components/RecipeCard";

function Favorites() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) return <h2>No favorites yet.</h2>;

  return (
    <div className="grid">
      {favorites.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default Favorites;
