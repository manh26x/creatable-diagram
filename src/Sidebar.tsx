import React from "react";
import "./dnd.css";
import CustomNode from "./nodes/CustomNode";

function SideBarNode(params: {
  name: string;
  className: string;
  onDragStart: any;
}) {
  const { className, onDragStart, name } = params;
  return (
    <div className={className} onDragStart={onDragStart} draggable>
      {name}
    </div>
  );
}

export default () => {
  const onDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    nodeType: string
  ) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside>
      <div className="description">
        You can drag these nodes to the pane on the right.
      </div>
      <SideBarNode
        name="ReadCSV"
        className="dndnode input ReadCSV"
        onDragStart={(event: React.DragEvent<HTMLDivElement>) =>
          onDragStart(event, "ReadCSV")
        }
      />

      <SideBarNode
        name="ReadExcel"
        className="dndnode input ReadExcel"
        onDragStart={(event: React.DragEvent<HTMLDivElement>) =>
          onDragStart(event, "ReadExcel")
        }
      />
      <SideBarNode
        name="ReadSQL"
        className="dndnode input ReadSQL"
        onDragStart={(event: React.DragEvent<HTMLDivElement>) =>
          onDragStart(event, "ReadSQL")
        }
      />
      <SideBarNode
        name="WriteExcel"
        className="dndnode output WriteExcel"
        onDragStart={(event: React.DragEvent<HTMLDivElement>) =>
          onDragStart(event, "WriteExcel")
        }
      />
      <SideBarNode
        name="WriteCSV"
        className="dndnode output WriteCSV"
        onDragStart={(event: React.DragEvent<HTMLDivElement>) =>
          onDragStart(event, "WriteCSV")
        }
      />
      <SideBarNode
        name="WriteSQL"
        className="dndnode output WriteSQL"
        onDragStart={(event: React.DragEvent<HTMLDivElement>) =>
          onDragStart(event, "WriteSQL")
        }
      />

      <SideBarNode
        name="Timer"
        className="dndnode Timer"
        onDragStart={(event: React.DragEvent<HTMLDivElement>) =>
          onDragStart(event, "Timer")
        }
      />
      <SideBarNode
        name="Repeat"
        className="dndnode Repeat"
        onDragStart={(event: React.DragEvent<HTMLDivElement>) =>
          onDragStart(event, "Repeat")
        }
      />
      <SideBarNode
        name="MergeNode"
        className="dndnode MergeNode"
        onDragStart={(event: React.DragEvent<HTMLDivElement>) =>
          onDragStart(event, "MergeNode")
        }
      />
      <SideBarNode
        name="MergeNode"
        className="dndnode MergeNode"
        onDragStart={(event: React.DragEvent<HTMLDivElement>) =>
          onDragStart(event, "MergeNode")
        }
      />
    </aside>
  );
};
