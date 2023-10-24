import React, { useEffect, useState } from "react";
import "./csscomponents/moon-image-gallery.css";
import FilterButtons from "./FilterButtons";
import "./csscomponents/PaginationButtons.css";
import { Link } from 'react-router-dom'; 

function NASAImageGallery() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 12;
  const [filteredImages, setFilteredImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = `https://images-api.nasa.gov/search?q=moon&page=${currentPage}&page_size=${imagesPerPage}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.collection && data.collection.items && data.collection.items.length > 0) {
          setImages(data.collection.items);
          setFilteredImages(data.collection.items);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error al obtener las imágenes de la luna:", error);
        setLoading(false);
      });
  }, [currentPage]);

  return (
    <div className="moon-image-gallery">
      <div className="filter-buttons-container">
        <FilterButtons images={images} setFilteredImages={setFilteredImages} />
      </div>
      <div className="image-container">
        {loading ? (
          <p>Cargando...</p>
        ) : (
          filteredImages.map((item) => (
            <div key={item?.data?.[0]?.nasa_id} className="image-item card">
              {}
              <Link to={`/object/${item?.data?.[0]?.nasa_id}`}>
                <img src={item?.links?.[0]?.href} alt={item?.data?.[0]?.title} />
              </Link>
              <p>{item?.data?.[0]?.title}</p>
            </div>
          ))
        )}
      </div>
      <div className="pagination-buttons">
        <button
          className="button pagination-button"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <span>Anterior</span>
        </button>
        <button
          className="button pagination-button"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={images.length < imagesPerPage}
        >
          <span>Siguiente</span>
        </button>
      </div>
    </div>
  );
}

export default NASAImageGallery;
