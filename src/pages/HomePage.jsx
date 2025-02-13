import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { Search } from 'lucide-react';
import RecipeCard from '../components/RecipeCard';
import RecipeFilterDropdown from '../components/RecipeFilterDropdown';

const API_KEY = "44db98f5857a4c41816bbb92d166d6ef";

function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?query=burger&apiKey=${API_KEY}`
        );

        if (!res.ok) {
          throw new Error(`Failed to fetch recipes: ${res.statusText}`);
        }

        const data = await res.json();
        setRecipes(data.results); // Spoonacular returns results in `data.results`
      } catch (err) {
        console.error(err);
        setError(err.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes(); // Call the fetch function
  }, []);

  // const handleSearchRecipe = (e) => {
  //   e.preventDefault();
  //   fetchRecipes(e.target[0].value);
  // };

  return (
    <div className="h-screen w-screen flex flex-col">
      {/* <RecipeFilterDropdown  />  */}
      <NavBar />
      <RecipeFilterDropdown />
      <div className="bg-[#faf9fb] p-10 flex-1">
        <div>
          <form>
            <label className="input shadow-md flex items-center gap-2">
              <Search size="24" />
              <input
                type="text"
                
                className="text-sm md:text-md grow"
                placeholder="What do you want to cook today?"
                aria-label="Search recipes"
              />
            </label>
          </form>
          <p className="font-bold text-3xl md:text-5xl mt-4">
            Recommended Recipes
          </p>
          <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">
            Popular Choices
          </p>

          <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Error Message */}
            {error && (
              <p className="text-red-500 font-semibold">
                {error}
              </p>
            )}

            {/* Loading Skeleton */}
            {loading &&
              [...Array(9)].map((_, index) => (
                <div key={index} className="flex flex-col gap-4 w-full">
                  <div className="skeleton h-32 w-full"></div>
                  <div className="flex justify-between">
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-24"></div>
                  </div>
                  <div className="skeleton h-4 w-1/2"></div>
                </div>
              ))}

            {/* Recipes */}
            {!loading && recipes.length > 0 &&
              recipes.map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} />
              ))}

            {/* Empty State */}
            {!loading && recipes.length === 0 && !error && (
              <p className="text-slate-500 font-semibold">
                No recipes found. Try searching for something else!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
