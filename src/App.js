import { Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import './index.css'; 

function App() {
  return (
    <div className="flex flex-row">
      {/* <NavBar /> */}
      {/* <RecipeFilterDropdown  /> */}
      {/* <HomePage /> */}
      <Routes>
      
        <Route path='/' element={<HomePage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
      </Routes>
      
  
    </div>
  );
}

export default App;
