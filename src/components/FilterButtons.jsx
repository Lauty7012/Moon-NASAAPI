/* FilterButtons.jsx */
import React, { useState } from "react";
import "./csscomponents/FilterButton.css";

function FilterButtons({ images, setFilteredImages }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleFilter = (category) => {
    if (category === "All") {
      setFilteredImages(images);
    } else {
      const filtered = images.filter((item) =>
        item.data[0].keywords.includes(category)
      );
      setFilteredImages(filtered);
    }
    setSelectedCategory(category);
  };

  const categories = ["All", "Moon", "Mars", "Lunar Eclipse", "Super Blue Moon"];

  return (
    <div className="filter-buttons">
      {categories.map((category) => (
        <button
          key={category}
          className={`btn ${selectedCategory === category ? "active" : ""}`} 
          onClick={() => handleFilter(category)}
        >
          <strong>{category}</strong>
          <div id="container-stars">
            <div id="stars"></div>
          </div>
          <div id="glow">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;