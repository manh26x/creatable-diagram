import React, { useState, useRef } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
  Connection,
  Edge,
  Elements,
  NodeTypesType,
  Background,
  BackgroundVariant
} from "react-flow-renderer";

import "./dnd.css";
import Sidebar from "./Sidebar";

import ReadCSV from "./nodes/ReadCSV";
import MergeNode from "./nodes/MergeNode";

const initialElements: Elements = [];
const nodeTypes: NodeTypesType = {
  ReadCSV,
  MergeNode
};

let id = 0;
const getId = () => `dndnode_${id++}`;

const InteractionFlow = (params: {
  windowWidth: number;
  windowHeight: number;
}) => {
  const { windowWidth, windowHeight } = params;

  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState<
    React.SetStateAction<null>
  >(null);
  const [elements, setElements] = useState(initialElements);
  const onConnect = (params: Edge<any> | Connection) =>
    setElements((els) => addEdge(params, els));

  const onElementsRemove = (elementsToRemove: Elements<any>) =>
    setElements((els) => removeElements(elementsToRemove, els));

  const onLoad = (_reactFlowInstance: React.SetStateAction<null>) =>
    setReactFlowInstance(_reactFlowInstance);

  const onDragOver = (event: {
    preventDefault: () => void;
    dataTransfer: { dropEffect: string };
  }) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };
  const onDrop = (event: {
    preventDefault: () => void;
    dataTransfer: { getData: (arg0: string) => any };
    clientX: number;
    clientY: number;
  }) => {
    event.preventDefault();
    if (event.dataTransfer.getData("application/reactflow")) {
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");
      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` }
      };
      setElements((es) => es.concat(newNode));
    }
  };
  return (
    <div
      style={{
        width: windowWidth,
        height: windowHeight
      }}
      className="dndflow"
    >
      <Sidebar />
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            elements={elements}
            onConnect={onConnect}
            onElementsRemove={onElementsRemove}
            nodeTypes={nodeTypes}
            onLoad={onLoad}
            onDrop={onDrop}
            onDragOver={onDragOver}
          >
            <Controls />
            <Background variant={BackgroundVariant.Dots} gap={10} size={0.8} />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
};
export default InteractionFlow;
