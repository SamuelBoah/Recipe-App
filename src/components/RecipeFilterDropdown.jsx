import React, { useState } from "react";

const RecipeFilterDropdown = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    dietType: "",
    mealType: "",
    calories: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters); // Pass updated filters to parent component
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center p-4">
      {/* Diet Type Filter */}
      <div className="relative">
        <label htmlFor="dietType" className="block text-sm font-medium text-gray-700">
          Diet Type
        </label>
        <select
          id="dietType"
          name="dietType"
          value={filters.dietType}
          onChange={handleFilterChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
        >
          <option value="">Select Diet</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="keto">Keto</option>
          <option value="gluten-free">Gluten-Free</option>
        </select>
      </div>

      {/* Meal Type Filter */}
      <div className="relative">
        <label htmlFor="mealType" className="block text-sm font-medium text-gray-700">
          Meal Type
        </label>
        <select
          id="mealType"
          name="mealType"
          value={filters.mealType}
          onChange={handleFilterChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
        >
          <option value="">Select Meal</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snack">Snack</option>
        </select>
      </div>

      {/* Calories Filter */}
      <div className="relative">
        <label htmlFor="calories" className="block text-sm font-medium text-gray-700">
          Calories
        </label>
        <select
          id="calories"
          name="calories"
          value={filters.calories}
          onChange={handleFilterChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
        >
          <option value="">Select Calories</option>
          <option value="<200">Less than 200</option>
          <option value="200-500">200-500</option>
          <option value="500-800">500-800</option>
          <option value=">800">More than 800</option>
        </select>
      </div>
    </div>
  );
};

export default RecipeFilterDropdown;

