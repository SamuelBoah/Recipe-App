import React from 'react'
import RecipeCard from '../components/RecipeCard';

function FavoritesPage() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
  return (
    <div className='bg-[#faf9fb] flex-1 p-10 min-h-screen'>
      <div max-w-screen-lg mx-auto>
        <p className='font-bold text-3xl md:text-5xl my-4'>My Favorites</p>

        {favorites.length === 0 && (

          <div className='h-[80vh] flex flex-col items-center gap-4'>
            <img src="/error404.jpg" className='h-3/4' alt="" />
          </div>
        )}
        

      
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {favorites.map((recipe) => (
              <RecipeCard key={recipe.title} recipe={recipe} /> ))}
          </div>
        
      </div>
    </div>
  )
}

export default FavoritesPage;