import React, { memo, useCallback } from "react";
import { Handle, Position } from "react-flow-renderer";

export default memo(({ data }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        background: "white",
        padding: 2,
        borderRadius: 2
      }}
    >
      <Handle
        type="target"
        position={Position.Left}
        id="leftDF"
        style={{ top: 10, background: "#555" }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="rightDF"
        style={{ top: 20, background: "#555" }}
      />
      <div>Merge</div>
      <div>Left</div>
      <div>Right</div>
      <label htmlFor="how">How</label>
      <select id="how">
        <option value="outer">outer</option>
        <option value="inner">inner</option>
        <option value="left">left</option>
        <option value="right">right</option>
      </select>
      <Handle
        type="source"
        position={Position.Right}
        id="outDF"
        style={{ top: 10, background: "#555" }}
      />
    </div>
  );
});
