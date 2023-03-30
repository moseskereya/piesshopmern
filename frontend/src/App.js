import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recipe from "./components/Recipes";
import RecipesDetails from "./components/Recipedetail";
import Nav from "./Nav"
import './App.css';

function App() {
    return (
        <>
        <Nav/>
      <Router>
          <div>
              <Routes>
                  <Route exact path="/" element={<Recipe />} />
                  <Route  path="/:id" element={ <RecipesDetails/>} />
              </Routes>
          </div>
            </Router>
       </>
  );
}

export default App;
