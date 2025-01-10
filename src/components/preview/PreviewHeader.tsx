import React from "react";

const PreviewHeader = () => {
  return (
    <div className="w-full bg-gradient-to-r from-primary/90 to-accent/90 rounded-lg p-3 mb-4 shadow-lg backdrop-blur-sm">
      <h2 className="text-2xl font-medium text-white text-center tracking-wide">Setup Preview</h2>
      <p className="text-sm text-white/90 text-center mt-1">Visualize your custom skate configuration</p>
    </div>
  );
};

export default PreviewHeader;