import React from "react";
import { useEffect, useState } from "react";
import CategoryCard from "../components/cards/CategoryCard";
import axios from "axios";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Categories = () => {
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:3001/categories").then((res) => {
      console.log(res);
      setCategories(res.data);
    });
  });
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
            {/* <% if (typeof categories!== 'undefined' && categories.length>0) {%> <%
  categories.forEach((category)=>{ %>
  <a
    href="/categories/<%= category.name %>"
    class="col text-center category__link"
  >
    <div class="category__img shadow">
      <img
        src="img/<%= category.image %>"
        alt="<%= category.name %> Food"
        loading="lazy"
      />
    </div>
    <div class="pt-1"><%= category.name %> Food</div>
  </a>
  <% }) %> <% } %> */}

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
