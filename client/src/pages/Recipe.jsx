import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import chick from "../assets/images/southern-friend-chicken.jpg";
const Recipe = () => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:3001/recipes/${id}`).then((res) => {
      setRecipe(res.data);
    });
  });
  return (
    <>
      <Navbar></Navbar>
      <main>
        {recipe ? (
          <div class="container px-2 py-4 justify-content-between">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  {recipe.name}
                </li>
              </ol>
            </nav>

            <div class="row">
              <div class="col-12 col-md-4">
                <img
                  loading="lazy"
                  alt={recipe.image}
                  style={{ marginTop: 10 }}
                  class="img-fluid sticky-top rounded"
                  //   src={`/uploads/${recipe.image}`}
                  src={chick}
                />
              </div>

              <div class="col-12 col-md-8 mt-3 mt-md-0">
                <div class="row">
                  <div class="col-12">
                    <h1>{recipe.name}</h1>
                  </div>

                  <div class="col-12 mb-4">
                    <i class="bi bi-tag">
                      <a
                        class="text-decoration-none"
                        href="/categories/<%= recipe.category %>"
                      >
                        {recipe.category}
                      </a>
                    </i>
                  </div>

                  <div class="col-12">
                    <h4>Cooking Instructions</h4>

                    <span>{recipe.description}</span>
                  </div>
                </div>

                <div class="row pt-4 rounded">
                  <div class="col-12">
                    <h4>Ingredients</h4>
                    <ul class="list-group list-group-flush">
                      {recipe.ingredients.map((ingredient) => (
                        <li class="list-group-item">{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Item not found</p>
        )}
      </main>
      <Footer></Footer>
    </>
  );
};

export default Recipe;
