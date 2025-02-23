import React, { useState, useRef, useEffect } from 'react';

export default function Slider() {
  const [active, setActive] = useState(0);
  const sliderRef = useRef(5000);
  const items = [
    { id: 1, src: '/images/s1.png', alt: 'Image 1' },
    { id: 2, src: '/images/s2.png', alt: 'Image 2' },
    { id: 3, src: '/images/s3.png', alt: 'Image 3' },
    { id: 4, src: '/images/s4.png', alt: 'Image 4' },
    { id: 5, src: '/images/s5.png', alt: 'Image 5' },
  ];

  const lengthItems = items.length;

  const reloadSlider = () => {
    const slider = sliderRef.current;
    if (slider) {
      slider.style.left = -slider.children[active].offsetLeft + 'px';
    }
  };

  useEffect(() => {
    reloadSlider();
  }, [active]);

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % lengthItems);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval
  }, [lengthItems]);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % lengthItems);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + lengthItems) % lengthItems);
  };

  const handleDotClick = (index) => {
    setActive(index);
  };

  return (
    <div className="slider">
      <div className="list" ref={sliderRef}>
        {items.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
      <div className="buttons">
        <button id="prev" onClick={handlePrev}>
          &lt;
        </button>
        <button id="next" onClick={handleNext}>
          &gt;
        </button>
      </div>
      <ul className="dots">
        {items.map((_, index) => (
          <li
            key={index}
            className={active === index ? 'active' : ''}
            onClick={() => handleDotClick(index)}
          ></li>
        ))}
      </ul>
    </div>
  );
}
