import React from "react";

const renderOptions = (categories) => {
    const uniqueCategories = [...new Set(categories)].sort();
    return uniqueCategories.map((category) => (
      <option key={category} value={category} className="!text-black dark:!text-white">
        {category}
      </option>
    ));
};

export default renderOptions;