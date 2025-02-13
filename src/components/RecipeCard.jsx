import { Heart, HeartPulse } from 'lucide-react';
import React, { useState } from 'react';

function RecipeCard({recipe}) {
  
  const [isFavorite, setIsFavorite] = useState(localStorage.getItem('favorites')?.includes(recipe.id));
  const addRecipeToFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isRecipeInFavorites = favorites.some((fav) => fav.id === recipe.id);

    if(isRecipeInFavorites) {
      favorites = favorites.filter((fav) => fav.id !== recipe.id);
      setIsFavorite(false);
    } else {
      favorites.push(recipe);
      setIsFavorite(true);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
  return (
    <div className='flex flex-col rounded-md bg-[#ecf7d4] overflow-hidden p-3 relative'>
    <a href="https://www.youtube.com/watch?v=lipYxuYapIY&pp=ygUFcGFzdGE%3D" target='_blank' className='relative h-full'>
      <img src={recipe.image} alt="recipe image" 
      className='rounded-md w-full h-full object-cover cursor-pointer'
      
      />
      <div className='absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer'
        onClick={(e) => {e.preventDefault(); addRecipeToFavorites(recipe)}}
      >
        {!isFavorite && <Heart size={20} className='hover:fill-red-500 hover:text-red-500' />}
        {isFavorite && <Heart size={20} className='fill-red-500 text-red-500' />}
      </div>
    </a>
    <div className='flex mt-1'>
      <p className='font-bold tracking-wide'>{recipe.title}</p>
    </div>
    <p className='my-2'>{recipe.cuisine} </p>

    <div className='flex gap-2 mt-auto'>
      <div className='flex gap-1 bg-[#d6f497] items-center p-1 rounded-md'>
        <HeartPulse size={16} />
        <span className='text-sm tracking-tighter font-semibold'>Gluten-Free</span>
      </div>
      <div className='flex gap-1 bg-[#d6f497] items-center p-1 rounded-md'>
        <HeartPulse size={16} />
        <span className='text-sm tracking-tighter font-semibold'>Heart-healthy</span>
      </div>
      <div></div>
    </div>
  </div>
  )
};

export default RecipeCard;