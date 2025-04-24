import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

export const vantaConfig = (current: HTMLDivElement) =>
    FOG({
        el: current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        highlightColor: "rgb(48,49,65)",
        midtoneColor: "rgb(48,49,65)",
        lowlightColor: "#adadbd",
        baseColor: "rgb(48,49,65)",
        blurFactor: 0.3,
        speed: 0.5,
        zoom: 1,
    });
