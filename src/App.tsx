import { useRef, useState } from "react";
import InteractionFlow from "./InteractionFlow";
import ResizeObserver from "rc-resize-observer";

import "./styles.css";

export default function App() {
  const wrapperDivRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(500);
  const [windowHeight, setWindowHeight] = useState(500);

  return (
    <div className={"App"}>
      <ResizeObserver
        onResize={() => {
          if (wrapperDivRef.current) {
            setWindowWidth(wrapperDivRef.current.clientWidth);
            setWindowHeight(wrapperDivRef.current.clientHeight);
          }
        }}
      >
        <div style={{ width: "100%", height: "100%" }} ref={wrapperDivRef}>
          <InteractionFlow
            windowWidth={windowWidth}
            windowHeight={windowHeight}
          />
        </div>
      </ResizeObserver>
    </div>
  );
}
