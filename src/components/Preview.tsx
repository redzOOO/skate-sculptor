import React from "react";
import { Card } from "@/components/ui/card";
import { boots } from "@/lib/data/boots";
import { frames } from "@/lib/data/frames";
import { wheels } from "@/lib/data/wheels";

interface PreviewProps {
  selectedBoot: string | null;
  selectedFrame: string | null;
  selectedWheels: string | null;
}

const Preview: React.FC<PreviewProps> = ({
  selectedBoot,
  selectedFrame,
  selectedWheels,
}) => {
  const selectedBootData = boots.find((boot) => boot.name === selectedBoot);
  const selectedFrameData = frames.find((frame) => frame.name === selectedFrame);
  const selectedWheelData = wheels.find((wheel) => wheel.name === selectedWheels);

  // Convert price from USD to GBP (using approximate conversion rate)
  const convertToGBP = (price: number) => {
    return (price * 0.79).toFixed(2); // Approximate conversion rate
  };

  return (
    <Card className="w-full h-[600px] bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 animate-fadeIn">
      <div className="w-full h-full flex flex-col items-center justify-between">
        <h1 className="text-4xl font-bold text-primary mb-6 bg-purple-100 dark:bg-purple-900/20 px-6 py-2 rounded-lg">Forge Your Blades!</h1>
        
        <div className="flex-1 flex flex-col items-center justify-center space-y-2 relative">
          <div className="relative flex flex-col items-center">
            {selectedBootData && (
              <div className="relative z-10">
                <img 
                  src={selectedBootData.imageUrl} 
                  alt={selectedBootData.name}
                  className="w-48 h-48 object-contain"
                />
              </div>
            )}
            
            {selectedFrameData && (
              <div className="relative -mt-18 z-0">
                <img 
                  src={selectedFrameData.imageUrl} 
                  alt={selectedFrameData.name}
                  className="w-48 h-48 object-contain"
                />
              </div>
            )}
            
            {selectedWheelData && (
              <div className="relative -mt-5">
                <img 
                  src={selectedWheelData.imageUrl} 
                  alt={selectedWheelData.name}
                  className="w-48 h-48 object-contain"
                />
              </div>
            )}
          </div>
          
          {!selectedBootData && !selectedFrameData && !selectedWheelData && (
            <p className="text-gray-500">Select items to preview</p>
          )}
        </div>

        <div className="w-full space-y-2 text-center mt-4">
          {selectedBootData && (
            <p className="text-gray-500">{selectedBootData.name} - £{convertToGBP(selectedBootData.price)}</p>
          )}
          {selectedFrameData && (
            <p className="text-gray-500">{selectedFrameData.name} - £{convertToGBP(selectedFrameData.price)}</p>
          )}
          {selectedWheelData && (
            <p className="text-gray-500">{selectedWheelData.name} - £{convertToGBP(selectedWheelData.price)}</p>
          )}
        </div>
      </div>
    </Card>
  );
};

export default Preview;