import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const SubmitRecipe = () => {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <section className="pb-5">
          <div class="px-4 pt-4 my-5 text-center">
            <h1 class="display-5 fw-bold">Submit Your Recipe</h1>
            <div class="col-lg-6 mx-auto">
              <p class="lead">
                Share Your amazing recipes with thousans of people around the
                world. Fill the form to get started.
              </p>
            </div>
          </div>

          <div class="row justify-content-center">
            <div class="col-8">
              {/* <% if(infoSubmit !='') { %>
      <div class="alert alert-success" role="alert"><%= infoSubmit %></div>
      <%} %> <% if(infoErrors !='') { %>
      <div class="alert alert-danger" role="alert">
        <%= infoErrors[0].message %>
      </div>
      <%} %> */}

              <div class="row g-3">
                <div class="col-12">
                  <label for="email" class="form-label">
                    Email
                  </label>
                  <input
                    class="form-control"
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>

                <div class="col-12">
                  <label for="recipename" class="form-label">
                    Recipe Name
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    name="recipename"
                    id="name"
                  />
                </div>

                <div class="col-12">
                  <label for="description" class="form-label">
                    Description
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    cols="30"
                    rows="4"
                    class="form-control"
                  ></textarea>
                </div>
                <div class="col-12">
                  <label for="ingredients" class="form-label">
                    Ingredients
                  </label>
                  <br />
                  <small>Example: Tomatoes</small>
                  <div class="ingredientList">
                    <div class="ingredientDiv mb-1"></div>
                    <input
                      placeholder="Enter the ingredient"
                      type="text"
                      name="ingredients"
                      class="form-control ingredient-input"
                    />
                  </div>
                </div>
                <div class="col-12">
                  <button
                    id="addIngredientsBtn"
                    type="button"
                    class="btn btn-outline-primary"
                  >
                    + Ingredient
                  </button>
                </div>
                <div class="col-12">
                  <label for="category">Select Category</label>
                  <select
                    class="form-select form-control"
                    name="category"
                    ariaLabel="Category"
                  >
                    <option value="Thai">Thai</option>
                    <option value="American">American</option>

                    <option value="Chinese">Chinese</option>
                    <option value="Mexican">Mexican</option>
                    <option value="Indian">Indian</option>
                  </select>
                </div>

                <div class="col-12">
                  <label for="image">Item Image</label>
                  <input
                    type="file"
                    class="form-control"
                    name="image"
                    accept="image/*"
                  />
                </div>

                <div class="col-12">
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
};

export default SubmitRecipe;
