import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
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
  const [spacing, setSpacing] = useState([-20]);
  const selectedBootData = boots.find((boot) => boot.name === selectedBoot);
  const selectedFrameData = frames.find((frame) => frame.name === selectedFrame);
  const selectedWheelData = wheels.find((wheel) => wheel.name === selectedWheels);

  // Convert price from USD to GBP (using approximate conversion rate)
  const convertToGBP = (price: number) => {
    return (price * 0.79).toFixed(2); // Approximate conversion rate
  };

  return (
    <Card className="w-full h-[600px] bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 animate-fadeIn overflow-hidden">
      <div className="w-full h-full flex flex-col items-center justify-between">
        <div className="w-full bg-primary rounded-lg p-4 mb-6">
          <h1 className="text-4xl font-bold text-white text-center">Forge Your Blades!</h1>
        </div>
        
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
              <div className="relative z-0" style={{ marginTop: `${spacing[0]}px` }}>
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

        {selectedBootData && selectedFrameData && (
          <div className="w-full max-w-xs mb-4">
            <label className="text-sm text-gray-500 mb-2 block">Adjust Boot-Frame Spacing</label>
            <Slider
              value={spacing}
              onValueChange={setSpacing}
              min={-100}
              max={0}
              step={1}
              className="w-full"
            />
          </div>
        )}

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