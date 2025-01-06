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
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold mb-4">Preview Area</h2>
          
          {selectedBootData ? (
            <div className="space-y-2">
              <img 
                src={selectedBootData.imageUrl} 
                alt={selectedBootData.name}
                className="w-48 h-48 object-contain mx-auto"
              />
              <p className="text-gray-500">{selectedBootData.name} - ${selectedBootData.price}</p>
            </div>
          ) : (
            <p className="text-gray-500">Select a boot to begin</p>
          )}

          {selectedFrameData ? (
            <div className="space-y-2">
              <img 
                src={selectedFrameData.imageUrl} 
                alt={selectedFrameData.name}
                className="w-48 h-48 object-contain mx-auto"
              />
              <p className="text-gray-500">{selectedFrameData.name} - ${selectedFrameData.price}</p>
            </div>
          ) : (
            <p className="text-gray-500">No frame selected</p>
          )}

          {selectedWheelData ? (
            <div className="space-y-2">
              <img 
                src={selectedWheelData.imageUrl} 
                alt={selectedWheelData.name}
                className="w-48 h-48 object-contain mx-auto"
              />
              <p className="text-gray-500">{selectedWheelData.name} - ${selectedWheelData.price}</p>
            </div>
          ) : (
            <p className="text-gray-500">No wheels selected</p>
          )}
        </div>
      </div>
    </Card>
  );
};

export default Preview;