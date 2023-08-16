import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import landingvideo from "../assets/videos/landingvideo.mp4";
import CategoryCard from "../components/cards/CategoryCard";
import RecipeCard from "../components/cards/RecipeCard";
const Home = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:3001/").then((res) => {
      setData(res.data);
      console.log(res.data);
    }, []);
  });
  return (
    <div className="container-fluid px-0">
      <Navbar></Navbar>
      <main>
        <div className="video-container">
          <video autoPlay muted loop>
            <source src={landingvideo} type="video/mp4" />
          </video>

          <div className="px-5 col-12 col-lg-6" style={{ zIndex: 10 }}>
            <h1 className="display-5 fw-bold mb-3 text-white">
              Recipes at your finger tips!
              <p className="lead my-2">
                Explore our huge selection of delicious recipe ideas including
                easy desserts, delicious vegan and vegetarian dinner ideas,
                gorgeous pasta recipes, quick bakes, family-friendly meals and
                gluten-free recipes.
              </p>
            </h1>
            <div className="my-2 d-grid gap-2 d-md-flex justify-content-md-start justify-content-start">
              <a
                href="/recipes/filter/latest"
                className="btn btn-dark btn-lg px-4 me-md2"
              >
                Explore Latest
              </a>
              <a
                href="/recipes/filter/random"
                className="btn btn-primary btn-dark btn-lg px-4 me-md2"
              >
                Show Random
              </a>
            </div>
          </div>
        </div>

        <section className="pb-4 pt-4 px-3">
          <div className="d-flex mb-2 align-items-center">
            <h2>Categories</h2>
          </div>
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-2 g-lg-3">
            {data ? (
              data.categories.map((category, index) => (
                <CategoryCard key={index} category={category}></CategoryCard>
              ))
            ) : (
              <p>No Categories Found</p>
            )}

            <a href="/categories" className="col text-center category__link">
              <div className="category__img shadow">
                <img src="img/view-all.jpg" alt="View all" loading="lazy" />
              </div>
              <div className="pt-1">View all</div>
            </a>
          </div>
        </section>

        <section className="pb-4 pt-4 px-3">
          <div className="d-flex mb-2 align-items-center">
            <h2>Latest Recipes</h2>
            <a
              href="/recipes/filter/latest"
              className="ms-auto text-decoration-none"
            >
              View More
            </a>
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
            <a
              href="/recipes/filter/latest"
              className="ms-auto text-decoration-none"
            >
              View More
            </a>
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
            <a
              href="/recipes/filter/latest"
              className="ms-auto text-decoration-none"
            >
              View More
            </a>
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
            src="img/publish-recipe.png"
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
              <a
                href="/submitrecipe"
                className="btn btn-primary btn-dark btn-lg"
              >
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
