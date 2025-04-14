"use client";

import { FC, useEffect, useRef } from "react";
import { WidgetItem } from "@/components";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";

interface WidgetContainerProps {}

export const WidgetContainer: FC<WidgetContainerProps> = ({}) => {
    const vantaRef = useRef<HTMLDivElement | null>(null);
    const vantaEffect = useRef<any>(null); // Тип для эффекта (временный)

    useEffect(() => {
        if (vantaRef.current && !vantaEffect.current) {
            vantaEffect.current = FOG({
                el: vantaRef.current,
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
        }

        return () => {
            if (vantaEffect.current) {
                vantaEffect.current.destroy();
                vantaEffect.current = null;
            }
        };
    }, []);

    return (
        <section className="widgets" ref={vantaRef} style={{}}>
            <div className="widgets__wrapper">
                <WidgetItem />
            </div>
        </section>
    );
};
