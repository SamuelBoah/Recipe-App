import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import RecipeFilterDropdown from "../components/RecipeFilterDropdown";

const RecipePage = () => {
  const [filters, setFilters] = useState({
    dietType: "",
    mealType: "",
    calories: "",
  });

  const handleFilterChange = (updatedFilters) => {
    setFilters(updatedFilters);
    console.log("Filters updated:", updatedFilters);
    // Use updatedFilters to fetch/filter recipes
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Recipe Filters</h1>
      <RecipeFilterDropdown onFilterChange={handleFilterChange} />
      <div className="mt-6">
        <p className="text-lg">
          Selected Filters: {JSON.stringify(filters, null, 2)}
        </p>
        {/* Display filtered recipes */}
      </div>
    </div>
  );
};

export default RecipePage;
