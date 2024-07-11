import React from 'react';
import { useSandpack } from '@codesandbox/sandpack-react';

const CustomRunButton = () => {
  const { sandpack } = useSandpack();

  const handleRunCode = () => {
    sandpack.runSandpack();
  };

  return (
    <button onClick={handleRunCode} style={{
      backgroundColor: '#E91E63', color:"white",fontSize:"1rem",padding:"4px 10px",borderRadius:"5px",border:"none",cursor:"pointer"
    }}>Run Code</button>
  );
};

export default CustomRunButton;
