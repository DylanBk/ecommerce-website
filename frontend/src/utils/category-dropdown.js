import React from "react";
import PropTypes from 'prop-types';
import renderOptions from "./render-dropdown-options";

const CategoryDropdown = ({ categories, onCategoryChange }) => {

  const handleChange = (event) => {
    const selectedCategory = event.target.value;
    console.log(`Selected Category: ${selectedCategory}`);
    onCategoryChange(selectedCategory);
  };

  return (
    <select
      onChange={handleChange}
      id="category-select"
      className="xl:w-64 lg:w-40 md:w-32 w-28 pl-2 py-1.5 rounded-l-md text-xs"
      aria-label="Category Select"
    >
      <option key="All Products" value="All Products">All Products</option>
      {renderOptions(categories)}
    </select>
  );
};

CategoryDropdown.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};

export default CategoryDropdown;