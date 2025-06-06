
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Property } from '@/data/properties';
import { formatPrice } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => prev === 0 ? property.images.length - 1 : prev - 1);
  };

  return (
    <Link 
      to={`/property/${property.id}`}
      className="group bg-white rounded-lg overflow-hidden shadow-elegant hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={property.images[currentImageIndex]} 
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {property.images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4 text-gray-800" />
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4 text-gray-800" />
            </button>
          </>
        )}
        <div className="absolute top-4 right-4 bg-luxury-green text-white text-sm font-medium px-3 py-1 rounded-full">
          {property.type === 'rent' ? 'For Rent' : 'For Sale'}
        </div>
        <div className="absolute bottom-4 right-4 bg-white text-luxury-dark text-sm font-medium px-3 py-1 rounded-full">
          {property.bedrooms} Bedrooms
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-luxury-green transition-colors">
          {property.title}
        </h3>
        
        <p className="text-gray-500 text-sm mb-4">
          {property.address}
        </p>
        
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="font-serif text-xl font-semibold text-luxury-dark">
              {formatPrice(property.price)}
            </span>
            <span className="text-gray-500 text-sm ml-1">
              {property.type === 'rent' ? '/month' : ''}
            </span>
          </div>
          <div className="text-sm text-gray-500">
            {property.squareFeet.toLocaleString()} sq ft
          </div>
        </div>
        
        <div className="flex justify-between border-t border-gray-100 pt-4">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="ml-2 text-gray-600">{property.bedrooms} Beds</span>
          </div>
          
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span className="ml-2 text-gray-600">{property.bathrooms} Baths</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
