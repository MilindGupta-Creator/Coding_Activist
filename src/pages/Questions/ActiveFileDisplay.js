// ActiveFileDisplay.js
import React from "react";
import { useSandpack } from "@codesandbox/sandpack-react";

const ActiveFileDisplay = () => {
  const { sandpack } = useSandpack();
  const { activeFile } = sandpack;

  return (
    <h1 className="text-white text-[15px] font-semibold ml-4 mb-4">
      Current file: {activeFile}
    </h1>
  );
};

export default ActiveFileDisplay;
