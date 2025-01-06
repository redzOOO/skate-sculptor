import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { boots } from "@/lib/data/boots";
import { frames } from "@/lib/data/frames";
import { wheels } from "@/lib/data/wheels";
import { Separator } from "@/components/ui/separator";

interface PreviewProps {
  selectedBoot: string | null;
  selectedFrame: string | null;
  selectedWheels: string | null;
  showMenu: boolean;
}

const Preview: React.FC<PreviewProps> = ({
  selectedBoot,
  selectedFrame,
  selectedWheels,
  showMenu,
}) => {
  const [spacing, setSpacing] = useState([-20]);
  const selectedBootData = boots.find((boot) => boot.name === selectedBoot);
  const selectedFrameData = frames.find((frame) => frame.name === selectedFrame);
  const selectedWheelData = wheels.find((wheel) => wheel.name === selectedWheels);

  const imageSize = showMenu ? "w-48 h-48" : "w-64 h-64";
  const selectedItemsCount = [selectedBoot, selectedFrame, selectedWheels].filter(Boolean).length;
  const previewHeight = `${Math.max(500, 400 + selectedItemsCount * 50)}px`;

  return (
    <Card className={`w-full bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-lg shadow-xl p-6 animate-fadeIn overflow-hidden transition-all duration-300 ${!showMenu ? 'lg:w-[150%]' : ''}`} style={{ height: previewHeight }}>
      <div className="w-full h-full flex flex-col items-center justify-between">
        <div className="w-full bg-gradient-to-r from-primary/90 to-accent/90 rounded-lg p-4 mb-6 shadow-lg backdrop-blur-sm">
          <h1 className="text-4xl font-bold text-white text-center tracking-wider">Forge Your Blades!</h1>
        </div>
        
        <div className="flex-1 flex flex-col items-center justify-center space-y-2 relative min-h-[300px]">
          <div className="relative flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
            {selectedBootData && (
              <div className="relative z-10">
                <img 
                  src={selectedBootData.imageUrl} 
                  alt={selectedBootData.name}
                  className={`${imageSize} object-contain transition-all duration-300 hover:drop-shadow-xl`}
                />
              </div>
            )}
            
            {selectedFrameData && (
              <div className="relative z-0" style={{ marginTop: `${spacing[0]}px` }}>
                <img 
                  src={selectedFrameData.imageUrl} 
                  alt={selectedFrameData.name}
                  className={`${imageSize} object-contain transition-all duration-300 hover:drop-shadow-xl`}
                />
              </div>
            )}
            
            {selectedWheelData && (
              <div className="relative -mt-5">
                <img 
                  src={selectedWheelData.imageUrl} 
                  alt={selectedWheelData.name}
                  className={`${imageSize} object-contain transition-all duration-300 hover:drop-shadow-xl`}
                />
              </div>
            )}
          </div>
          
          {!selectedBootData && !selectedFrameData && !selectedWheelData && (
            <p className="text-gray-500 animate-pulse">Select items to preview</p>
          )}
        </div>

        {selectedBootData && selectedFrameData && (
          <div className="w-full max-w-xs mb-4">
            <label className="text-sm text-gray-500 mb-2 block">Adjust Boot-Frame Spacing</label>
            <Slider
              value={spacing}
              onValueChange={setSpacing}
              min={-150}
              max={-10}
              step={1}
              className="w-full"
            />
          </div>
        )}

        <Separator className="my-4" />

        <div className="w-full bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 shadow-inner">
          <h3 className="text-lg font-semibold text-primary mb-2 text-center">Your Selected Setup</h3>
          <div className="space-y-2">
            {selectedBootData && (
              <div className="flex items-center justify-between px-4 py-1 bg-white/50 dark:bg-gray-700/50 rounded">
                <span className="font-medium text-gray-600 dark:text-gray-300">Boot:</span>
                <span className="text-primary">{selectedBootData.name}</span>
              </div>
            )}
            {selectedFrameData && (
              <div className="flex items-center justify-between px-4 py-1 bg-white/50 dark:bg-gray-700/50 rounded">
                <span className="font-medium text-gray-600 dark:text-gray-300">Frame:</span>
                <span className="text-primary">{selectedFrameData.name}</span>
              </div>
            )}
            {selectedWheelData && (
              <div className="flex items-center justify-between px-4 py-1 bg-white/50 dark:bg-gray-700/50 rounded">
                <span className="font-medium text-gray-600 dark:text-gray-300">Wheels:</span>
                <span className="text-primary">{selectedWheelData.name}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Preview;