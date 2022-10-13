import React, { memo, useCallback } from "react";
import { Handle, Position } from "react-flow-renderer";
import { useDropzone } from "react-dropzone";

export default memo(({ data }) => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      style={{
        border: "1px solid black",
        background: "white",
        padding: 2,
        borderRadius: 2
      }}
    >
      <div
        style={{
          background: "grey"
        }}
      >
        Read CSV
      </div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p style={{ border: "1px solid green" }}>Upload...</p>
        ) : (
          <p style={{ border: "1px solid blue" }}>Upload...</p>
        )}
      </div>
      <Handle type="source" position={Position.Right} id="a" />
    </div>
  );
});
