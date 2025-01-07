import React from "react";
import { Boot, Frame, Wheel } from "@/lib/types/interfaces";

interface SelectedSetupProps {
  selectedBootData: Boot | undefined;
  selectedFrameData: Frame | undefined;
  selectedWheelData: Wheel | undefined;
}

const SelectedSetup = ({
  selectedBootData,
  selectedFrameData,
  selectedWheelData,
}: SelectedSetupProps) => {
  return (
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
  );
};

export default SelectedSetup;