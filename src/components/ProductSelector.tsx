import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { boots } from "@/lib/data/boots";
import { frames } from "@/lib/data/frames";
import { wheels } from "@/lib/data/wheels";

interface ProductSelectorProps {
  onSelectBoot: (boot: string) => void;
  onSelectFrame: (frame: string) => void;
  onSelectWheels: (wheels: string) => void;
}

const ProductSelector: React.FC<ProductSelectorProps> = ({
  onSelectBoot,
  onSelectFrame,
  onSelectWheels,
}) => {
  const [priceRange, setPriceRange] = React.useState([0, 500]);
  const [selectedBrand, setSelectedBrand] = React.useState<string>("all");

  // Convert price from USD to GBP (using approximate conversion rate)
  const convertToGBP = (price: number) => {
    return (price * 0.79).toFixed(2); // Approximate conversion rate
  };

  const ProductCard = ({ product }: { product: any }) => (
    <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-40 object-cover mb-4 rounded"
      />
      <h3 className="font-bold">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.brand}</p>
      <p className="font-bold text-primary mt-2">£{convertToGBP(product.price)}</p>
    </Card>
  );

  const filterProducts = (products: any[]) => {
    return products
      .filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])
      .filter((p) => selectedBrand === "all" || p.brand === selectedBrand);
  };

  const getBrands = (products: any[]) => {
    const brands = [...new Set(products.map((p) => p.brand))];
    return brands.sort();
  };

  const getCurrentBrands = (activeTab: 'boots' | 'frames' | 'wheels') => {
    switch (activeTab) {
      case 'boots':
        return getBrands(boots);
      case 'frames':
        return getBrands(frames);
      case 'wheels':
        return getBrands(wheels);
      default:
        return [];
    }
  };

  const [activeTab, setActiveTab] = React.useState<'boots' | 'frames' | 'wheels'>('boots');

  return (
    <div className="w-full">
      <Tabs defaultValue="boots" className="w-full" onValueChange={(value) => setActiveTab(value as 'boots' | 'frames' | 'wheels')}>
        <TabsList className="w-full mb-4">
          <TabsTrigger value="boots" className="flex-1">Boots</TabsTrigger>
          <TabsTrigger value="frames" className="flex-1">Frames</TabsTrigger>
          <TabsTrigger value="wheels" className="flex-1">Wheels</TabsTrigger>
        </TabsList>

        <div className="mb-6 space-y-4">
          <div>
            <Label>Price Range: £{convertToGBP(priceRange[0])} - £{convertToGBP(priceRange[1])}</Label>
            <Slider
              defaultValue={[0, 500]}
              max={500}
              step={10}
              value={priceRange}
              onValueChange={setPriceRange}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Brand</Label>
            <Select value={selectedBrand} onValueChange={setSelectedBrand}>
              <SelectTrigger className="w-full mt-2">
                <SelectValue placeholder="Select brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Brands</SelectItem>
                {getCurrentBrands(activeTab).map((brand) => (
                  <SelectItem key={brand} value={brand}>
                    {brand}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value="boots" className="grid grid-cols-2 gap-4">
          {filterProducts(boots).map((boot) => (
            <div key={boot.id} onClick={() => onSelectBoot(boot.name)}>
              <ProductCard product={boot} />
            </div>
          ))}
        </TabsContent>

        <TabsContent value="frames" className="grid grid-cols-2 gap-4">
          {filterProducts(frames).map((frame) => (
            <div key={frame.id} onClick={() => onSelectFrame(frame.name)}>
              <ProductCard product={frame} />
            </div>
          ))}
        </TabsContent>

        <TabsContent value="wheels" className="grid grid-cols-2 gap-4">
          {filterProducts(wheels).map((wheel) => (
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