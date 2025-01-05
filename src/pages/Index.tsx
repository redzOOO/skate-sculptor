import React, { useState } from "react";
import Preview from "@/components/Preview";
import ProductSelector from "@/components/ProductSelector";

const Index = () => {
  const [selectedBoot, setSelectedBoot] = useState<string | null>(null);
  const [selectedFrame, setSelectedFrame] = useState<string | null>(null);
  const [selectedWheels, setSelectedWheels] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          BladeForge
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="w-full">
            <Preview
              selectedBoot={selectedBoot}
              selectedFrame={selectedFrame}
              selectedWheels={selectedWheels}
            />
          </div>
          
          <div className="w-full">
            <ProductSelector
              onSelectBoot={setSelectedBoot}
              onSelectFrame={setSelectedFrame}
              onSelectWheels={setSelectedWheels}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;