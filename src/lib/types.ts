interface Color {
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

export const boots: SkateOption[] = [
  {
    id: "faction-urban-cc1",
    brand: "Faction",
    name: "Urban CC1",
    description: "Boot Only Aggressive Skates [PRE ORDER]",
    price: 475.00,
    imageUrl: "https://res.cloudinary.com/dl2peuqua/image/upload/v1735843523/Faction-Urban-CC1---Boot-Only-Aggressive-Skates-PRE-ORDER_pj9qzf.png",
    colors: [{ name: "Black", hex: "#000000" }]
  },
  {
    id: "faction-tactical-v1-midnight-white",
    brand: "Faction",
    name: "Tactical V1 Midnight White",
    description: "Boot Only",
    price: 429.95,
    imageUrl: "https://res.cloudinary.com/dl2peuqua/image/upload/v1735843523/faction-white-boot-only0796.png",
    colors: [{ name: "White", hex: "#FFFFFF" }]
  },
  {
    id: "faction-tactical-v1-midnight-black",
    brand: "Faction",
    name: "Tactical V1 Midnight Black",
    description: "Boot Only",
    price: 429.95,
    imageUrl: "https://res.cloudinary.com/dl2peuqua/image/upload/v1735843523/faction-black-boot-only0800.png",
    colors: [{ name: "Black", hex: "#000000" }]
  },
  {
    id: "standard-yandriel-silverio-omni-v2",
    brand: "Standard",
    name: "Yandriel Silverio Omni V.2",
    description: "Boot Only [PRE ORDER]",
    price: 189.00,
    imageUrl: "https://res.cloudinary.com/dl2peuqua/image/upload/v1735843521/Standard-Yandriel-Silverio-Omni-V2-Skates---Boot-Only-PRE-ORDER_kfelje.png",
    colors: [{ name: "Brown", hex: "#8B4513" }]
  },
  {
    id: "standard-omni-v2-black",
    brand: "Standard",
    name: "Omni V.2 Black",
    description: "Boot Only [PRE ORDER]",
    price: 189.00,
    imageUrl: "https://res.cloudinary.com/dl2peuqua/image/upload/v1735843520/Standard-Omni-V2-Skates---Black---Boot-Only-PRE-ORDER_oqb6zx.png",
    colors: [{ name: "Black", hex: "#000000" }]
  },
  {
    id: "standard-omni-v1-white",
    brand: "Standard",
    name: "Omni V.1 White",
    description: "Boot Only",
    price: 189.00,
    imageUrl: "https://res.cloudinary.com/dl2peuqua/image/upload/v1735843520/Standard-Omni-V1-Skates---White---Boot-Only_rq6nwb.png",
    colors: [{ name: "White", hex: "#FFFFFF" }]
  },
  {
    id: "mesmer-levi-van-rijn-pro-throne",
    brand: "Mesmer",
    name: "Levi Van Rijn Pro Throne",
    description: "Boot Only",
    price: 179.95,
    imageUrl: "https://res.cloudinary.com/dl2peuqua/image/upload/v1735843522/Mesmer-Levi-Van-Rijn-Pro-Throne-Skates---Boot-Only_gpahhc.png",
    colors: [{ name: "Black", hex: "#000000" }]
  },
  {
    id: "mesmer-team-ts1",
    brand: "Mesmer",
    name: "Team TS1",
    description: "Boot Only",
    price: 189.95,
    imageUrl: "https://res.cloudinary.com/dl2peuqua/image/upload/v1735843522/Mesmer-Team-TS1-Skates---Boot-Only_s1caey.png",
    colors: [{ name: "Black", hex: "#000000" }]
  },
  {
    id: "roces-m12-lo-yuto-goto-namikaze",
    brand: "Roces",
    name: "M12 LO Yuto Goto Namikaze",
    description: "Boot Only",
    price: 299.95,
    imageUrl: "https://res.cloudinary.com/dl2peuqua/image/upload/v1735843521/Roces-M12-LO-Yuto-Goto-Namikaze-Skates-Boot-Only_saf95y.png",
    colors: [{ name: "Blue", hex: "#0000FF" }]
  },
  {
    id: "them-909-black",
    brand: "Them",
    name: "909 Black",
    description: "Boot Only with Them Liner, V.3 Soulplate and NEW SHELL SIZES",
    price: 239.95,
    imageUrl: "https://res.cloudinary.com/dl2peuqua/image/upload/v1735843520/Them-909-Skates-BOOT-ONLY-Black---With-Them-Liner-V3-Soulplate-and-NEW-SHELL-SIZES_eafymy.png",
    colors: [{ name: "Black", hex: "#000000" }]
  }
];

export const frames: FrameOption[] = [
  {
    id: "kizer-fluid-v-white",
    brand: "Kizer",
    name: "Fluid V White",
    description: "Fluid 5 White Frames - Loco 'GET SET' Wheel/Frame Set",
    price: 112.95,
    size: "Universal",
    imageUrl: "https://res.cloudinary.com/dl2peuqua/image/upload/v1735843701/Kizer-Fluid-V-Fluid-5-White-Frames---Loco-GET-SET-WheelFrame-Set_abfd9i.png"
  },
  {
    id: "ground-control-featherlite-3-black",
    brand: "Ground Control",
    name: "Featherlite 3",
    description: "Black Frames",
    price: 65.00,
    size: "Universal",
    imageUrl: "https://www.locoskates.com/cdn/shop/files/Ground-Control-Featherlite-3-Frames-Black.jpg"
  },
  {
    id: "fifty-fifty-balance-2-black",
    brand: "Fifty-50",
    name: "Balance 2",
    description: "Black Frames",
    price: 59.95,
    size: "Universal",
    imageUrl: "https://www.locoskates.com/cdn/shop/files/Fity-50-Balance-Black-1.jpg"
  },
  {
    id: "oysi-medium-grey",
    brand: "Oysi",
    name: "Medium",
    description: "Grey Frames",
    price: 74.95,
    size: "Medium",
    imageUrl: "https://www.locoskates.com/cdn/shop/files/Oyis-Medium-Grey-1.jpg"
  }
];

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