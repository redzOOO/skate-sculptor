import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { boots } from "@/lib/data/boots";
import { frames } from "@/lib/data/frames";
import { wheels } from "@/lib/data/wheels";
import { Label } from "@/components/ui/label";

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
  const [bootSize, setBootSize] = useState([100]);
  const [frameSize, setFrameSize] = useState([100]);
  const [wheelSize, setWheelSize] = useState([100]);
  
  const selectedBootData = boots.find((boot) => boot.name === selectedBoot);
  const selectedFrameData = frames.find((frame) => frame.name === selectedFrame);
  const selectedWheelData = wheels.find((wheel) => wheel.name === selectedWheels);

  const baseImageSize = showMenu ? "w-48 h-48" : "w-64 h-64";

  const getScaledSize = (baseSize: string, scale: number) => {
    const size = parseInt(baseSize.replace(/\D/g, ''));
    const scaledSize = (size * scale / 100).toString();
    return baseSize.replace(/\d+/g, scaledSize);
  };

  return (
    <Card className={`w-full h-[600px] bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 animate-fadeIn overflow-hidden transition-all duration-300 ${!showMenu ? 'lg:w-[150%]' : ''}`}>
      <div className="w-full h-full flex flex-col items-center justify-between">
        <div className="w-full bg-gradient-to-r from-primary to-accent rounded-lg p-3 mb-6 shadow-md">
          <h1 className="text-4xl font-bold text-white text-center tracking-wider">Forge Your Blades!</h1>
        </div>
        
        <div className="flex-1 flex flex-col items-center justify-center space-y-2 relative">
          <div className="relative flex flex-col items-center">
            {selectedBootData && (
              <div className="relative z-10">
                <img 
                  src={selectedBootData.imageUrl} 
                  alt={selectedBootData.name}
                  className={`${getScaledSize(baseImageSize, bootSize[0])} object-contain transition-all duration-300`}
                />
              </div>
            )}
            
            {selectedFrameData && (
              <div className="relative z-0" style={{ marginTop: `${spacing[0]}px` }}>
                <img 
                  src={selectedFrameData.imageUrl} 
                  alt={selectedFrameData.name}
                  className={`${getScaledSize(baseImageSize, frameSize[0])} object-contain transition-all duration-300`}
                />
              </div>
            )}
            
            {selectedWheelData && (
              <div className="relative -mt-5">
                <img 
                  src={selectedWheelData.imageUrl} 
                  alt={selectedWheelData.name}
                  className={`${getScaledSize(baseImageSize, wheelSize[0])} object-contain transition-all duration-300`}
                />
              </div>
            )}
          </div>
          
          {!selectedBootData && !selectedFrameData && !selectedWheelData && (
            <p className="text-gray-500">Select items to preview</p>
          )}
        </div>

        <div className="w-full max-w-xs space-y-4 mb-4">
          {selectedBootData && selectedFrameData && (
            <div>
              <Label className="text-sm text-gray-500 mb-2 block">Boot-Frame Spacing</Label>
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

          {selectedBootData && (
            <div>
              <Label className="text-sm text-gray-500 mb-2 block">Boot Size</Label>
              <Slider
                value={bootSize}
                onValueChange={setBootSize}
                min={50}
                max={150}
                step={1}
                className="w-full"
              />
            </div>
          )}

          {selectedFrameData && (
            <div>
              <Label className="text-sm text-gray-500 mb-2 block">Frame Size</Label>
              <Slider
                value={frameSize}
                onValueChange={setFrameSize}
                min={50}
                max={150}
                step={1}
                className="w-full"
              />
            </div>
          )}

          {selectedWheelData && (
            <div>
              <Label className="text-sm text-gray-500 mb-2 block">Wheel Size</Label>
              <Slider
                value={wheelSize}
                onValueChange={setWheelSize}
                min={50}
                max={150}
                step={1}
                className="w-full"
              />
            </div>
          )}
        </div>

        <div className="w-full space-y-2 text-center mt-4">
          {selectedBootData && (
            <p className="text-gray-500">{selectedBootData.name}</p>
          )}
          {selectedFrameData && (
            <p className="text-gray-500">{selectedFrameData.name}</p>
          )}
          {selectedWheelData && (
            <p className="text-gray-500">{selectedWheelData.name}</p>
          )}
        </div>
      </div>
    </Card>
  );
};

export default Preview;