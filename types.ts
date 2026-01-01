
export interface Car {
  id: string;
  name: string;
  price: number;
  year: number;
  make: string;
  model: string;
  trim?: string;
  condition: string;
  mileage: string;
  fuel: string;
  transmission: string;
  color: string;
  location: string;
  description: string;
  imageUrl: string;
  additionalImages?: string[];
  tags: string[];
  features: string[];
  engine: string;
  bodyType: string;
  vin?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  avatar: string;
}
