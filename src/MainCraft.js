import React, {useState, useEffect} /*{ Suspense, useRef, useEffect }*/ from "react";
/*import { useGLTF, Image, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from 'three';*/
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "NewBuild5/Build/NewBuild5.loader.js",
  dataUrl: "NewBuild5/Build/NewBuild5.data",
  frameworkUrl: "NewBuild5/Build/NewBuild5.framework.js",
  codeUrl: "NewBuild5/Build/NewBuild5.wasm",
});

export default function MainCraft(props) {
  const [progression, setProgression] = useState(0);
  const [progressionStyle, setProgressionStyle] = useState("");

  useEffect(function () {
    unityContext.on("progress", function (progression) {
      setProgression(progression);
      console.log(progression)
      if (progression === 1) {
        setProgressionStyle("hiddenStyle")
        console.log(progression)
      }
    });
  }, []);

  return (
    <div>
      <p className={progressionStyle}>Loading {progression * 100} percent...</p>
      <div>
        <Unity unityContext={unityContext} className="UnityObject"/>
      </div>
    </div>
  );
}

/*
export default function MainCraft(props) {
  const ref = useRef()
  useEffect(() => {
    if (ref.current == undefined) {
      console.log("ref undefined")
    }
    else {
      ref.current.material.map.magFilter = THREE.NearestFilter; 
      ref.current.material.map.minFilter = THREE.NearestFilter;
      console.log("Shoule Be fixed???")
    }
  }, [ref]);

  useFrame(() => {
    ref.current.material.zoom = 1 // 1 and higher
    ref.current.material.grayscale = 1 // between 0 and 1
    if (ref.current !== undefined) {ref.current.material.map.magFilter = THREE.NearestFilter; 
      ref.current.material.map.minFilter = THREE.NearestFilter;
    }
    
  }, -1)
  return (
    <Suspense fallback={null}>
       <Image ref={ref} className="MyIMG" url="/Pixel-assets/flask3.png"  />
       <OrbitControls></OrbitControls>
    </Suspense>
    
  );
}
*/