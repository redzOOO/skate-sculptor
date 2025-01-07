import React from "react";
import { Boot, Frame, Wheel } from "@/lib/types/interfaces";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface SelectedSetupProps {
  selectedBootData: Boot | undefined;
  selectedFrameData: Frame | undefined;
  selectedWheelData: Wheel | undefined;
  onRemoveBoot?: () => void;
  onRemoveFrame?: () => void;
  onRemoveWheels?: () => void;
}

const SelectedSetup = ({
  selectedBootData,
  selectedFrameData,
  selectedWheelData,
  onRemoveBoot,
  onRemoveFrame,
  onRemoveWheels,
}: SelectedSetupProps) => {
  return (
    <div className="w-full bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 shadow-inner">
      <h3 className="text-lg font-semibold text-primary mb-2 text-center">Your Selected Setup</h3>
      <div className="space-y-2">
        {selectedBootData && (
          <div className="flex items-center justify-between px-4 py-1 bg-white/50 dark:bg-gray-700/50 rounded">
            <span className="font-medium text-gray-600 dark:text-gray-300">Boot:</span>
            <div className="flex items-center gap-2">
              <span className="text-primary">{selectedBootData.name}</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={onRemoveBoot}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
        {selectedFrameData && (
          <div className="flex items-center justify-between px-4 py-1 bg-white/50 dark:bg-gray-700/50 rounded">
            <span className="font-medium text-gray-600 dark:text-gray-300">Frame:</span>
            <div className="flex items-center gap-2">
              <span className="text-primary">{selectedFrameData.name}</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={onRemoveFrame}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
        {selectedWheelData && (
          <div className="flex items-center justify-between px-4 py-1 bg-white/50 dark:bg-gray-700/50 rounded">
            <span className="font-medium text-gray-600 dark:text-gray-300">Wheels:</span>
            <div className="flex items-center gap-2">
              <span className="text-primary">{selectedWheelData.name}</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={onRemoveWheels}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectedSetup;