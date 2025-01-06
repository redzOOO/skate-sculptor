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

  return (
    <Card className="w-full h-[600px] bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 animate-fadeIn">
      <div className="w-full h-full flex flex-col items-center justify-between">
        <h2 className="text-2xl font-bold">Preview Area</h2>
        
        <div className="flex-1 flex flex-col items-center justify-center space-y-2 relative">
          {selectedBootData && (
            <div className="relative">
              <img 
                src={selectedBootData.imageUrl} 
                alt={selectedBootData.name}
                className="w-48 h-48 object-contain"
              />
            </div>
          )}
          
          {selectedFrameData && (
            <div className="relative -mt-16">
              <img 
                src={selectedFrameData.imageUrl} 
                alt={selectedFrameData.name}
                className="w-48 h-48 object-contain"
              />
            </div>
          )}
          
          {selectedWheelData && (
            <div className="relative">
              <img 
                src={selectedWheelData.imageUrl} 
                alt={selectedWheelData.name}
                className="w-48 h-48 object-contain"
              />
            </div>
          )}
          
          {!selectedBootData && !selectedFrameData && !selectedWheelData && (
            <p className="text-gray-500">Select items to preview</p>
          )}
        </div>

        <div className="w-full space-y-2 text-center mt-4">
          {selectedBootData && (
            <p className="text-gray-500">{selectedBootData.name} - ${selectedBootData.price}</p>
          )}
          {selectedFrameData && (
            <p className="text-gray-500">{selectedFrameData.name} - ${selectedFrameData.price}</p>
          )}
          {selectedWheelData && (
            <p className="text-gray-500">{selectedWheelData.name} - ${selectedWheelData.price}</p>
          )}
        </div>
      </div>
    </Card>
  );
};

export default Preview;