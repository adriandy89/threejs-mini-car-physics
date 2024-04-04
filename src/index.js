import "./index.css";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";
import { Physics } from "@react-three/cannon";

createRoot(document.getElementById("root")).render(
  <>
    <Canvas>
      <Physics
        broadphase="SAP"
        gravity={[0, -4, 0]}
      >
        <Scene />
      </Physics>
    </Canvas>

    <div className="controls">
      <p><b>R</b>: reset</p>
      <p><b>W A S D</b>: move</p>
      <p><b>C</b>: swap camera</p>
      <p><b>arrows</b> for flips</p>
    </div>
  </>
);
