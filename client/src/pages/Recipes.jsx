import axios from "axios";
import React, { useEffect, useState } from "react";
import RecipeCard from "../components/cards/RecipeCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Recipes = () => {
  const [recipes, setRecipes] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3001/recipes/filter/latest")
      .then((res) => {
        console.log("hi");

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
          <h1 className="pb-4">Search Results</h1>

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
            {/* <% recipes.forEach(recipe=>{ %>
    <a href="/recipes/<%=recipe._id %>" className="col text-center category__link">
      <div className="category__img category__img--large shadow">
        <img
          src="/uploads/<%= recipe.image %>"
          alt="<%= recipe.name %>"
          loading="lazy"
        />
      </div>
      <div className="pt-1"><%= recipe.name %></div>
    </a>
    <% }) %> <% }else {%>
    <p className="lead">No Items Found</p>
    <% } %> */}
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Recipes;
