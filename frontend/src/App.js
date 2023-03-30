import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recipe from "./components/Recipes";
import RecipesDetails from "./components/Recipedetail";
import Nav from "./Nav"
import './App.css';
import Home from "./Home";

function App() {
    return (
        <>
        <Nav/>
      <Router>
          <div>
              <Routes>
                        <Route exact path="/" element={<Home />} />
                    <Route path="/pies" element={<Recipe />} />
                  <Route  path="pies/recipe/:id" element={<RecipesDetails/>}/>
              </Routes>
          </div>
            </Router>
       </>
  );
}

export default App;
