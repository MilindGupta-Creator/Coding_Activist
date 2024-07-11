import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useSandpack } from "@codesandbox/sandpack-react";

const DownloadButton = () => {
  const { sandpack } = useSandpack();
  const { files } = sandpack;

  const handleDownload = () => {
    const blob = new Blob([files["/App.js"].code], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "App.js";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload} className="download-button" style={{
        color: "aliceblue",
        fontsize:"1.5rem",
    }}>
      <FontAwesomeIcon icon={faDownload} />
    </button>
  );
};

export default DownloadButton;
