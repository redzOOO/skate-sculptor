import { WheelOption } from '../types/interfaces';

export const wheels: WheelOption[] = [
  {
    id: "revolver-60mm",
    brand: "Revolver",
    name: "60mm",
    description: "Elliptical Shape Wheels",
    size: 60,
    hardness: 90,
    price: 23.95,
    imageUrl: "https://res.cloudinary.com/dl2peuqua/image/upload/v1735843523/Revolver_60mm1135.png",
    colors: [{ name: "Black", hex: "#000000" }]
  },
  {
    id: "undercover-blank-58mm-black",
    brand: "Undercover",
    name: "Blank 58mm",
    description: "Black (Singles)",
    size: 58,
    hardness: 90,
    price: 4.95,
    imageUrl: "https://www.locoskates.com/cdn/shop/files/Undercover-Blank-58mm-Wheels---Black1859.jpg",
    colors: [{ name: "Black", hex: "#000000" }]
  },
  {
    id: "dead-56mm-white",
    brand: "Dead",
    name: "56mm",
    description: "95A Wheels - White",
    size: 56,
    hardness: 95,
    price: 39.95,
    imageUrl: "https://www.locoskates.com/cdn/shop/products/Dead-56mm---95A-Wheels---White.jpg",
    colors: [{ name: "White", hex: "#FFFFFF" }]
  },
  {
    id: "ground-control-earthcity-60mm",
    brand: "Ground Control",
    name: "EarthCity",
    description: "60mm / 90a",
    size: 60,
    hardness: 90,
    price: 27.95,
    imageUrl: "https://www.locoskates.com/cdn/shop/products/Ground-Control-EarthCity-Wheels-60mm---90a.jpg",
    colors: [{ name: "Black", hex: "#000000" }]
  }
];