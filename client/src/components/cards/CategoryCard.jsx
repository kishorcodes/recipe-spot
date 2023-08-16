import React from "react";

const CategoryCard = ({ category }) => {
  return (
    <a
      href={`/categories/${category.name}`}
      className="col text-center category__link"
    >
      <div className="category__img shadow">
        <img
          src={`img/${category.image}`}
          alt={`${category.name} Food`}
          loading="lazy"
        />
      </div>
      <div className="pt-1">{category.name} Food</div>
    </a>
  );
};

export default CategoryCard;
