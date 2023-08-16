import axios from '../utils/axios'
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CategoryCard from "../components/cards/CategoryCard";
const Categories = () => {
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    axios.get("/api/categories").then((res) => {
      setCategories(res.data);
    });
  },[]);
  return (
    <>
      <Navbar></Navbar>
      <main>
        <section class="px-3 pt-4 container-fluid ">
          <h1 class="pb-4">Explore Categories</h1>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Categories
              </li>
            </ol>
          </nav>
          <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 mb-4">
            {categories ? (
              categories.map((category, index) => (
                <CategoryCard key={index} category={category}></CategoryCard>
              ))
            ) : (
              <p>No Categories Found</p>
            )}
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Categories;
