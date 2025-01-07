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
  const minHeight = 500; // Minimum height to ensure selected setup is visible
  const itemHeight = 70; // Height per selected item
  const previewHeight = `${Math.max(minHeight, minHeight + selectedItemsCount * itemHeight)}px`;

  return (
    <Card 
      className={`w-full bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-lg shadow-xl p-6 animate-fadeIn overflow-hidden transition-all duration-300 ${!showMenu ? 'lg:w-[150%]' : ''}`} 
      style={{ height: previewHeight }}
    >
      <div className="w-full h-full flex flex-col justify-between">
        <PreviewHeader />
        
        <div className="flex-1 flex flex-col items-center justify-center min-h-[300px]">
          <PreviewDisplay
            selectedBootData={selectedBootData}
            selectedFrameData={selectedFrameData}
            selectedWheelData={selectedWheelData}
            imageSize={imageSize}
            spacing={spacing}
          />

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
        </div>

        <Separator className="my-4" />

        <div className="mt-auto">
          <SelectedSetup
            selectedBootData={selectedBootData}
            selectedFrameData={selectedFrameData}
            selectedWheelData={selectedWheelData}
          />
        </div>
      </div>
    </Card>
  );
};

export default Preview;