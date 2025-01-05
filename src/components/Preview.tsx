import React from "react";
import { Card } from "@/components/ui/card";

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
  return (
    <Card className="w-full h-[600px] bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 animate-fadeIn">
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Preview Area</h2>
          <p className="text-gray-500">
            {selectedBoot
              ? `Selected Boot: ${selectedBoot}`
              : "Select a boot to begin"}
          </p>
          <p className="text-gray-500">
            {selectedFrame
              ? `Selected Frame: ${selectedFrame}`
              : "No frame selected"}
          </p>
          <p className="text-gray-500">
            {selectedWheels
              ? `Selected Wheels: ${selectedWheels}`
              : "No wheels selected"}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default Preview;