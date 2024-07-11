import React from 'react';

const FileUpload = ({ handleFileUpload }) => {
  const onFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target.result;
      handleFileUpload(file.name, content);
    };
    reader.readAsText(file);
  };

  return (
    <div className="file-upload">
      <input type="file" onChange={onFileChange} />
    </div>
  );
};

export default FileUpload;
