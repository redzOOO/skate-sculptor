import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { boots } from "@/lib/data/boots";
import { frames } from "@/lib/data/frames";
import { wheels } from "@/lib/data/wheels";
import { Separator } from "@/components/ui/separator";
import PreviewHeader from "./preview/PreviewHeader";
import PreviewDisplay from "./preview/PreviewDisplay";
import SelectedSetup from "./preview/SelectedSetup";

interface PreviewProps {
  selectedBoot: string | null;
  selectedFrame: string | null;
  selectedWheels: string | null;
  showMenu: boolean;
  onSelectBoot?: (boot: string | null) => void;
  onSelectFrame?: (frame: string | null) => void;
  onSelectWheels?: (wheels: string | null) => void;
}

const Preview: React.FC<PreviewProps> = ({
  selectedBoot,
  selectedFrame,
  selectedWheels,
  showMenu,
  onSelectBoot,
  onSelectFrame,
  onSelectWheels,
}) => {
  const [spacing, setSpacing] = useState([-20]);
  const [horizontalOffset, setHorizontalOffset] = useState([0]);
  const [wheelOffsetX, setWheelOffsetX] = useState([0]);
  const [wheelOffsetY, setWheelOffsetY] = useState([0]);
  
  const selectedBootData = boots.find((boot) => boot.name === selectedBoot);
  const selectedFrameData = frames.find((frame) => frame.name === selectedFrame);
  const selectedWheelData = wheels.find((wheel) => wheel.name === selectedWheels);

  const imageSize = showMenu ? "w-48 h-48" : "w-64 h-64";
  const selectedItemsCount = [selectedBoot, selectedFrame, selectedWheels].filter(Boolean).length;
  const minHeight = 500;
  const itemHeight = 70;
  const previewHeight = `${Math.max(minHeight, minHeight + selectedItemsCount * itemHeight)}px`;

  return (
    <Card 
      className={`bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-lg shadow-xl p-6 animate-fadeIn overflow-hidden transition-all duration-300 ${
        !showMenu ? 'w-[150%] mx-auto translate-x-[16.67%]' : 'w-full'
      }`} 
      style={{ minHeight: previewHeight }}
    >
      <div className="w-full h-full flex flex-col justify-between space-y-4">
        <PreviewHeader />
        
        <div className="flex-1 flex flex-col items-center justify-center relative">
          <div className="w-full max-w-3xl aspect-square">
            <PreviewDisplay
              selectedBootData={selectedBootData}
              selectedFrameData={selectedFrameData}
              selectedWheelData={selectedWheelData}
              imageSize={imageSize}
              spacing={spacing}
              horizontalOffset={horizontalOffset}
              wheelOffsetX={wheelOffsetX}
              wheelOffsetY={wheelOffsetY}
            />
          </div>
        </div>

        {(selectedBootData || selectedFrameData || selectedWheelData) && (
          <div className="w-full max-w-md mx-auto bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 shadow-inner">
            <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-4">Adjustment Controls</h4>
            <div className="space-y-4">
              {selectedBootData && selectedFrameData && (
                <>
                  <div>
                    <label className="text-sm text-gray-500 mb-2 block">Adjust Boot Horizontal Position</label>
                    <Slider
                      value={horizontalOffset}
                      onValueChange={setHorizontalOffset}
                      min={-50}
                      max={50}
                      step={1}
                      className="w-full"
                    />
                  </div>
                  <div>
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
                </>
              )}
              {selectedWheelData && (
                <>
                  <div>
                    <label className="text-sm text-gray-500 mb-2 block">Adjust Wheel Horizontal Position</label>
                    <Slider
                      value={wheelOffsetX}
                      onValueChange={setWheelOffsetX}
                      min={-50}
                      max={50}
                      step={1}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-500 mb-2 block">Adjust Wheel Vertical Position</label>
                    <Slider
                      value={wheelOffsetY}
                      onValueChange={setWheelOffsetY}
                      min={-50}
                      max={50}
                      step={1}
                      className="w-full"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        <Separator className="my-2" />

        <div className="mt-2">
          <SelectedSetup
            selectedBootData={selectedBootData}
            selectedFrameData={selectedFrameData}
            selectedWheelData={selectedWheelData}
            onRemoveBoot={() => onSelectBoot?.(null)}
            onRemoveFrame={() => onSelectFrame?.(null)}
            onRemoveWheels={() => onSelectWheels?.(null)}
          />
        </div>
      </div>
    </Card>
  );
};

export default Preview;