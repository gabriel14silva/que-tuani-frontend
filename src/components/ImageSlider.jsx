import React, { useState, useEffect } from "react";
import banners from "../data/banners";

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="image-slider">
      <button
        onClick={goToPrevious}
        className="image-slider__arrow image-slider__arrow--left"
      >
        &#10094;
      </button>

      <div className="image-slider__content">
        {banners.map((banner, index) => (
          <a
            key={banner.id}
            href={banner.link}
            className={`image-slider__slide ${
              index === currentIndex ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${banner.imageUrl})` }}
            aria-label={banner.altText}
          ></a>
        ))}
      </div>

      <button
        onClick={goToNext}
        className="image-slider__arrow image-slider__arrow--right"
      >
        &#10095;
      </button>

      <div className="image-slider__dots">
        {banners.map((_, index) => (
          <span
            key={index}
            className={`image-slider__dot ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
