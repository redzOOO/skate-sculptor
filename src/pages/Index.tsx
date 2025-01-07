import React, { useState } from "react";
import Preview from "@/components/Preview";
import ProductSelector from "@/components/ProductSelector";
import { ChevronRight } from "lucide-react";

const Index = () => {
  const [selectedBoot, setSelectedBoot] = useState<string | null>(null);
  const [selectedFrame, setSelectedFrame] = useState<string | null>(null);
  const [selectedWheels, setSelectedWheels] = useState<string | null>(null);
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          BladeForge
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
          <div className="w-full">
            <Preview
              selectedBoot={selectedBoot}
              selectedFrame={selectedFrame}
              selectedWheels={selectedWheels}
              showMenu={showMenu}
              onSelectBoot={setSelectedBoot}
              onSelectFrame={setSelectedFrame}
              onSelectWheels={setSelectedWheels}
            />
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="absolute top-1/2 -right-3 z-10 p-2 bg-primary hover:bg-primary-hover text-white rounded-full shadow-lg transform -translate-y-1/2 transition-transform hover:scale-110"
            >
              <ChevronRight className={`w-4 h-4 transition-transform ${showMenu ? '' : 'rotate-180'}`} />
            </button>
          </div>
          
          <div className={`w-full transition-all duration-300 ${showMenu ? 'opacity-100 visible' : 'opacity-0 invisible lg:hidden'}`}>
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