import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import SubmitRecipe from "./pages/SubmitRecipe";
import Recipes from "./pages/Recipes";
import Recipe from "./pages/Recipe";
function App() {
  return (
    <div className="App">
      <>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/submit" element={<SubmitRecipe />}></Route>
            <Route path="/categories" element={<Categories />}></Route>
            <Route
              path="/recipes/filter/:criteria"
              element={<Recipes />}
            ></Route>
            <Route path="/categories/:id" element={<Recipes />}></Route>
            <Route path="/recipes/:id" element={<Recipe />}></Route>
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
