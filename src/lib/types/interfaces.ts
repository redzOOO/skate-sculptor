export interface Color {
  name: string;
  hex: string;
}

export interface SkateOption {
  id: string;
  brand: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  colors: Color[];
}

export interface FrameOption {
  id: string;
  brand: string;
  name: string;
  description: string;
  price: number;
  size: string;
  imageUrl: string;
}

export interface WheelOption {
  id: string;
  brand: string;
  name: string;
  description: string;
  size: number;
  hardness: number;
  price: number;
  imageUrl: string;
  colors: Color[];
}