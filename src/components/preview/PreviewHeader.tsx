import React, { useState } from "react";
import { Command } from "lucide-react";
import { Button } from "@/components/ui/button";

const PreviewHeader = () => {
  const [showSubheader, setShowSubheader] = useState(true);

  return (
    <div className="w-full bg-gradient-to-r from-primary/90 to-accent/90 rounded-lg p-3 mb-4 shadow-lg backdrop-blur-sm relative">
      <div className="absolute right-2 top-2">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-white/80 hover:text-white hover:bg-white/10"
          onClick={() => setShowSubheader(!showSubheader)}
        >
          <Command className="h-4 w-4" />
        </Button>
      </div>
      <h2 className="text-2xl font-medium text-white text-center tracking-wide">Setup Preview</h2>
      {showSubheader && (
        <p className="text-sm text-white/90 text-center mt-1 transition-all">
          Visualize your custom skate configuration
        </p>
      )}
    </div>
  );
};

export default PreviewHeader;