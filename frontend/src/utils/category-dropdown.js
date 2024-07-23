import React, { useRef } from "react";

const CategoryDropdown = ({ categories }) => {
  const formRef =useRef(null);

  const handleChange = () => {
    if (formRef.current) {
      formRef.current.submit();
    }
  };

  const renderOptions = () => {
    return categories.map(category => (
      <option id={`category-${category}`} key={category} value={category}>
        {category}
      </option>
    ));
  };

  return (
    <form ref={formRef} action="" method="post">
      <select onChange={handleChange} id="category-select" className="xl:w-52 lg:w-40 md:w-32 w-28 pl-2 py-1.5 rounded-l-md">
          <option value="0" className="">Categories</option>
          {renderOptions()}
      </select>
    </form>
  )
}

export default CategoryDropdown;