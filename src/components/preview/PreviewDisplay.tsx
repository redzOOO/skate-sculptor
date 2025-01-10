import React from "react";
import { Boot, Frame, Wheel } from "@/lib/types/interfaces";

interface PreviewDisplayProps {
  selectedBootData: Boot | undefined;
  selectedFrameData: Frame | undefined;
  selectedWheelData: Wheel | undefined;
  imageSize: string;
  spacing: number[];
  horizontalOffset: number[];
}

const PreviewDisplay = ({
  selectedBootData,
  selectedFrameData,
  selectedWheelData,
  imageSize,
  spacing,
  horizontalOffset,
}: PreviewDisplayProps) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center space-y-2 relative min-h-[300px]">
      <div className="relative flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
        {selectedBootData && (
          <div className="relative z-10" style={{ transform: `translateX(${horizontalOffset[0]}px)` }}>
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
  );
};

export default PreviewDisplay;