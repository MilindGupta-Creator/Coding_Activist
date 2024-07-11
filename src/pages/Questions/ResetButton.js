import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo } from "@fortawesome/free-solid-svg-icons";
import { useSandpack } from "@codesandbox/sandpack-react";

const ResetButton = () => {
  const { sandpack } = useSandpack();
  const { resetAllFiles } = sandpack;

  const handleReset = () => {
    resetAllFiles();
  };

  return (
    <button onClick={handleReset} className="reset-button" style={{
        color: "aliceblue",
        fontsize:"1.5rem",
    }}>
      <FontAwesomeIcon icon={faUndo} />
    </button>
  );
};

export default ResetButton;
