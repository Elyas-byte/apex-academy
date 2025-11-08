import React, { useEffect, useRef, useState } from 'react';

const images = [
    'image-hero.jpg',
    'image (1).jpg',
    'image (2).jpg',
    'image-2',
    'image-n (1).jpg',
    'image-n (1).PNG',
    'image-n (2).JPG',
    'image-n (2).PNG',
];

function ImageScroller() {
    return (
        <div className="bg-gray-100 py-12 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`grid-img-${index}`}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>
      );    
}

export default ImageScroller;
