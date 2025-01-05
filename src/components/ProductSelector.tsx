import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
}

interface ProductSelectorProps {
  onSelectBoot: (boot: string) => void;
  onSelectFrame: (frame: string) => void;
  onSelectWheels: (wheels: string) => void;
}

const mockProducts = {
  boots: [
    { id: "b1", name: "Speed Pro", brand: "RollerBlade", price: 299, image: "/placeholder.svg" },
    { id: "b2", name: "Urban Flow", brand: "FR Skates", price: 259, image: "/placeholder.svg" },
  ],
  frames: [
    { id: "f1", name: "Trinity 3x110", brand: "Powerslide", price: 149, image: "/placeholder.svg" },
    { id: "f2", name: "Next Frame", brand: "FR Skates", price: 129, image: "/placeholder.svg" },
  ],
  wheels: [
    { id: "w1", name: "Hydrogen 110mm", brand: "RollerBlade", price: 89, image: "/placeholder.svg" },
    { id: "w2", name: "Supreme 110mm", brand: "Powerslide", price: 79, image: "/placeholder.svg" },
  ],
};

const ProductSelector: React.FC<ProductSelectorProps> = ({
  onSelectBoot,
  onSelectFrame,
  onSelectWheels,
}) => {
  const [priceRange, setPriceRange] = React.useState([0, 500]);

  const ProductCard = ({ product }: { product: Product }) => (
    <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover mb-4 rounded"
      />
      <h3 className="font-bold">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.brand}</p>
      <p className="font-bold text-primary mt-2">${product.price}</p>
    </Card>
  );

  return (
    <div className="w-full">
      <Tabs defaultValue="boots" className="w-full">
        <TabsList className="w-full mb-4">
          <TabsTrigger value="boots" className="flex-1">Boots</TabsTrigger>
          <TabsTrigger value="frames" className="flex-1">Frames</TabsTrigger>
          <TabsTrigger value="wheels" className="flex-1">Wheels</TabsTrigger>
        </TabsList>

        <div className="mb-6">
          <Label>Price Range: ${priceRange[0]} - ${priceRange[1]}</Label>
          <Slider
            defaultValue={[0, 500]}
            max={500}
            step={10}
            value={priceRange}
            onValueChange={setPriceRange}
            className="mt-2"
          />
        </div>

        <TabsContent value="boots" className="grid grid-cols-2 gap-4">
          {mockProducts.boots
            .filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])
            .map((boot) => (
              <div key={boot.id} onClick={() => onSelectBoot(boot.name)}>
                <ProductCard product={boot} />
              </div>
            ))}
        </TabsContent>

        <TabsContent value="frames" className="grid grid-cols-2 gap-4">
          {mockProducts.frames
            .filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])
            .map((frame) => (
              <div key={frame.id} onClick={() => onSelectFrame(frame.name)}>
                <ProductCard product={frame} />
              </div>
            ))}
        </TabsContent>

        <TabsContent value="wheels" className="grid grid-cols-2 gap-4">
          {mockProducts.wheels
            .filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])
            .map((wheel) => (
              <div key={wheel.id} onClick={() => onSelectWheels(wheel.name)}>
                <ProductCard product={wheel} />
              </div>
            ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductSelector;