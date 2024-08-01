import React from "react";
import PropTypes from 'prop-types';

const CategoryDropdown = ({ categories, onCategoryChange }) => {

  const handleChange = (event) => {
    const selectedCategory = event.target.value;
    console.log(`Selected Category: ${selectedCategory}`);
    onCategoryChange(selectedCategory);
  };

  const renderOptions = () => {
    const uniqueCategories = [...new Set(categories)].sort();
    return uniqueCategories.map((category) => (
      <option key={category} value={category}>
        {category}
      </option>
    ));
  };

  return (
    <select
      onChange={handleChange}
      id="category-select"
      className="xl:w-52 lg:w-40 md:w-32 w-28 pl-2 py-1.5 rounded-l-md"
      aria-label="Category Select"
    >
      <option key="All Products" value="All Products">Categories</option>
      {renderOptions()}
    </select>
  );
};

CategoryDropdown.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};

export default CategoryDropdown;