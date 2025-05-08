import React, { useEffect, useRef, useState } from 'react';

const images = [
    'image-sample (1).jpg',
    'image-sample (2).jpg',
    'image-sample (3).jpg',
    'image-sample (4).jpg',
    'image-sample (5).jpg',
    'image-sample (6).jpg',
    'image-sample (7).jpg',
    'image-sample (8).jpg',
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
