import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RecipeCard from "../components/cards/RecipeCard";
import { useLocation } from "react-router-dom";
const Recipes = () => {
  const location = useLocation();

  const [recipes, setRecipes] = useState(null);
  useEffect(() => {
    axios
      .get(location.state.apiURL)
      .then((res) => {
        setRecipes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <main>
        <section className="pb-4 pt-4 px-3">
          <h1 className="pb-4">{location.state.title}</h1>

          <div className="d-flex mb-2 align-items-center"></div>

          <div
            className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3"
            style={{ minHeight: "calc(100vh - 308px)" }}
          >
            {recipes ? (
              recipes.map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} />
              ))
            ) : (
              <p>No Items Found</p>
            )}
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Recipes;
