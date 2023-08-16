import { useRef, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const SubmitRecipe = () => {
  const [email, setEmail] = useState("");
  const [recipeName, setRecipeName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [category, setCategory] = useState("Thai");
  const [image, setImage] = useState();
  const ingredientInputRef = useRef(null);
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
              <div class="row g-3">
                <div class="col-12">
                  <label htmlFor="email" class="form-label">
                    Email
                  </label>
                  <input
                    class="form-control"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div class="col-12">
                  <label htmlFor="recipename" class="form-label">
                    Recipe Name
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    value={recipeName}
                    onChange={(e) => setRecipeName(e.target.value)}
                  />
                </div>

                <div class="col-12">
                  <label htmlFor="description" class="form-label">
                    Description
                  </label>
                  <textarea
                    cols="30"
                    rows="4"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    class="form-control"
                  ></textarea>
                </div>
                <div class="col-12">
                  <label htmlFor="ingredients" class="form-label">
                    Ingredients
                  </label>
                  <br />
                  <small>Example: Tomatoes</small>
                  <div class="ingredientList">
                    <div class="ingredientDiv mb-1"></div>
                    <input
                      ref={ingredientInputRef}
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
                    onClick={() => {
                      setIngredients([
                        ...ingredients,
                        ingredientInputRef.current.value,
                      ]);
                      ingredientInputRef.current.value = "";
                      console.log(ingredients);
                    }}
                  >
                    + Ingredient
                  </button>
                </div>
                <div class="col-12">
                  <label htmlFor="category">Select Category</label>
                  <select
                    class="form-select form-control"
                    name="category"
                    aria-label="Category"
                  >
                    <option value="Thai" >Thai</option>
                    <option value="American">American</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Mexican">Mexican</option>
                    <option value="Indian">Indian</option>
                  </select>
                </div>

                <div class="col-12">
                  <label htmlFor="image">Item Image</label>
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
