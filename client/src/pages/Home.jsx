import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import publishRecipe from "../assets/images/publish-recipe.png";
import landingVideo from "../assets/videos/landingvideo.mp4";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CategoryCard from "../components/cards/CategoryCard";
import RecipeCard from "../components/cards/RecipeCard";
import viewAll from "../assets/images/view-all.jpg";
import MoonLoader from "react-spinners/MoonLoader";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get("/api/").then((res) => {
      setLoading(false);
      setData(res.data);
    });
  }, []);
  return (
    <div className="container-fluid px-0">
      <Navbar></Navbar>
      {loading && <MoonLoader></MoonLoader>}
      <main>
        <div className="video-container">
          <video autoPlay muted loop>
            <source src={landingVideo} type="video/mp4" />
          </video>

          <div className="px-5 col-12 col-lg-6" style={{ zIndex: 10 }}>
            <h1 className="display-5 fw-bold mb-3 text-white">
              Recipes at your finger tips!
              <p className="lead mt-3">
                Explore our huge selection of delicious recipe ideas including
                easy desserts, delicious vegan and vegetarian dinner ideas,
                gorgeous pasta recipes, quick bakes, family-friendly meals and
                gluten-free recipes.
              </p>
            </h1>
            <div className="mt-3 d-grid gap-2 d-md-flex justify-content-md-start justify-content-start">
              <a
                href="/recipes/filter/latest"
                className="btn btn-dark btn-lg px-4 me-md2"
              >
                Explore Latest
              </a>
              <a
                href="/recipes/random"
                className="btn btn-primary btn-dark btn-lg px-4 me-md2"
              >
                Show Random
              </a>
            </div>
          </div>
        </div>

        {data && (
          <>
            <section className="pb-4 pt-4 px-3">
              <div className="d-flex mb-2 align-items-center">
                <h2>Categories</h2>
              </div>
              <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-2 g-lg-3">
                {data ? (
                  data.categories.map((category, index) => (
                    <CategoryCard
                      key={index}
                      category={category}
                    ></CategoryCard>
                  ))
                ) : (
                  <p>No Categories Found</p>
                )}

                <a
                  href="/categories"
                  className="col text-center category__link"
                >
                  <div className="category__img shadow">
                    <img src={viewAll} alt="View all" loading="lazy" />
                  </div>
                  <div
                    onClick={() =>
                      navigate(`/recipes/all`, {
                        state: {
                          apiURL: `/api/recipes/all`,
                          title: `Explore All Recipes`,
                        },
                      })
                    }
                    className="pt-1"
                  >
                    View all
                  </div>
                </a>
              </div>
            </section>

            <section className="pb-4 pt-4 px-3">
              <div className="d-flex mb-2 align-items-center">
                <h2>Latest Recipes</h2>
                <div
                  onClick={() =>
                    navigate(`/recipes/filter/latest`, {
                      state: {
                        apiURL: `/api/recipes/filter/latest`,
                        title: `Explore Latest Recipes`,
                      },
                    })
                  }
                  className="ms-auto text-decoration-none"
                >
                  View More
                </div>
              </div>
              <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-2 g-lg-3">
                {data ? (
                  data.recipetypes.latest.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                  ))
                ) : (
                  <p>No Items Found</p>
                )}
              </div>
            </section>

            <section className="pb-4 pt-4 px-3">
              <div className="d-flex mb-2 align-items-center">
                <h2>Most Loved</h2>
                <div
                  onClick={() =>
                    navigate(`/recipes/filter/latest`, {
                      state: {
                        apiURL: `/api/recipes/filter/latest`,
                        title: `Explore Most Loved Recipes`,
                      },
                    })
                  }
                  className="ms-auto text-decoration-none"
                >
                  View More
                </div>
              </div>
              <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-2 g-lg-3">
                {data ? (
                  data.recipetypes.mostloved.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                  ))
                ) : (
                  <p>No Items Found</p>
                )}
              </div>
            </section>

            <section className="pb-4 pt-4 px-3">
              <div className="d-flex mb-2 align-items-center">
                <h2>Unique</h2>
                <div
                  onClick={() =>
                    navigate(`/recipes/filter/latest`, {
                      state: {
                        apiURL: `/api/recipes/filter/latest`,
                        title: `Explore  Unique Recipes`,
                      },
                    })
                  }
                  className="ms-auto text-decoration-none"
                >
                  View More
                </div>
              </div>
              <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-2 g-lg-3">
                {data ? (
                  data.recipetypes.unique.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                  ))
                ) : (
                  <p>No Items Found</p>
                )}
              </div>
            </section>
          </>
        )}

        <section className="section section-contact">
          <h1 className="heading-sendus">
            <span>SEND US A</span> MESSAGE
          </h1>
          <p className="text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perspiciatis ratione optio officia rem tempora eius soluta fuga
            laudantium. Distinctio cum suscipit id harum nihil reprehenderit
            similique pariatur incidunt voluptas sit.
          </p>
          <button className="btn btn-danger py-2">Contact Us</button>
        </section>

        <section className="my-5 py-5 px-3 text-center">
          <img
            src={publishRecipe}
            className="d-block mx-auto mb-4 img-fluid"
            alt="Publish Your recipe now"
            width="566"
            height="208"
            loading="lazy"
          />
          <h1 className="display-5 fw-bold">Publish Your recipe now!</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              Publish your recipe infront of thousands of people for free.
            </p>

            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <a href="/submit" className="btn btn-primary btn-dark btn-lg">
                Submit Recipe
              </a>
            </div>
          </div>
        </section>
      </main>
      <hr />
      <Footer></Footer>
    </div>
  );
};

export default Home;
