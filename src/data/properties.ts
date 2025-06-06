
export interface Property {
  id: string;
  title: string;
  type: 'rent' | 'sale';
  bedrooms: 3 | 4;
  bathrooms: number;
  squareFeet: number;
  price: number;
  address: string;
  description: string;
  features: string[];
  images: string[];
}

export const properties: Property[] = [
  {
    id: "p001",
    title: "Luxury 3-Bedroom Corner Unit",
    type: "sale",
    bedrooms: 3,
    bathrooms: 3.5,
    squareFeet: 2200,
    price: 1850000,
    address: "The Apex Residences, 175 Park Avenue South, New York, NY",
    description: "This stunning corner unit features floor-to-ceiling windows with panoramic city views. Boasting three generously sized bedrooms, this residence offers the perfect blend of luxury and comfort with premium finishes throughout.",
    features: [
      "Corner exposure with dual aspect views",
      "Chef's kitchen with marble countertops",
      "Custom Italian cabinetry",
      "Home automation system",
      "Private balcony",
      "Walk-in closets",
      "Hardwood floors throughout"
    ],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    ]
  },
  {
    id: "p002",
    title: "Premium 3-Bedroom Residence",
    type: "rent",
    bedrooms: 3,
    bathrooms: 2.5,
    squareFeet: 1950,
    price: 12500,
    address: "The Apex Residences, 175 Park Avenue South, New York, NY",
    description: "This impeccable residence offers a perfect blend of comfort and elegance. The open floor plan creates a seamless flow throughout the home, while oversized windows bathe the space in natural light. The chef's kitchen is equipped with professional-grade appliances.",
    features: [
      "24-hour concierge",
      "In-unit washer and dryer",
      "Spa-inspired bathrooms",
      "Private balcony",
      "Walk-in closets",
      "Hardwood floors",
      "Smart home technology"
    ],
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    ]
  },
  {
    id: "p003",
    title: "Grand 4-Bedroom Penthouse",
    type: "sale",
    bedrooms: 4,
    bathrooms: 4,
    squareFeet: 3200,
    price: 3950000,
    address: "The Apex Residences, 175 Park Avenue South, New York, NY",
    description: "Experience ultimate luxury in this extraordinary four-bedroom penthouse. From the custom millwork to the imported marble, no detail has been overlooked. The expansive living areas are perfect for entertaining, while the private bedroom wing offers serene retreats.",
    features: [
      "Double-height ceilings",
      "Panoramic city views",
      "Private terrace",
      "Custom walk-in closets",
      "Media room",
      "Service entrance",
      "Wine storage"
    ],
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    ]
  },
  {
    id: "p004",
    title: "Executive 4-Bedroom Suite",
    type: "rent",
    bedrooms: 4,
    bathrooms: 3.5,
    squareFeet: 2800,
    price: 18000,
    address: "The Apex Residences, 175 Park Avenue South, New York, NY",
    description: "Nestled in our coveted building, this exceptional residence offers both space and sophistication. With four spacious bedrooms and almost 2,800 square feet of living space, this home provides ample room for both family living and elegant entertaining.",
    features: [
      "Private elevator landing",
      "Separate dining room",
      "Gourmet kitchen",
      "Home office",
      "In-unit laundry",
      "Climate-controlled storage",
      "Floor-to-ceiling windows"
    ],
    images: [
      "/4bed 2.jpg",
      "/4bed 3.jpg",
      "/4bed 4.jpg"
    ]
  }
];
