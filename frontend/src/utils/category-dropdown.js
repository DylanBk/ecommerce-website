import React from "react";
// import 

const CategoryDropdown = ({ categories }) => {
    const renderOptions = () => {
      return categories.map(category => (
        <option key={category} value={category}>
          {category}
        </option>
      ));
    };

    return (
        <select id="category-select" className="xl:w-52 lg:w-40 md:w-32 w-28 pl-2 py-1.5 rounded-l-md">
            <option value="0" className="">Categories</option>
            {renderOptions()}
        </select>
    )
}

export default CategoryDropdown;