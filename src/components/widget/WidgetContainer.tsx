"use client";

import { FC, useEffect, useRef } from "react";
import { WidgetsWrapper, WidgetToolbar } from "@/components";

import { useWidgetsToolbarStore } from "@/store/widgets/widgetsToolbarStore";

import { vantaConfig } from "@/vanta/vanta.config";

interface WidgetContainerProps {}

export const WidgetContainer: FC<WidgetContainerProps> = ({}) => {
    const vantaRef = useRef<HTMLDivElement | null>(null);
    const vantaEffect = useRef<any>(null); // Тип для эффекта (временный)
    const { tool } = useWidgetsToolbarStore();

    useEffect(() => {
        if (vantaRef.current && !vantaEffect.current) {
            vantaEffect.current = vantaConfig(vantaRef.current);
        }

        return () => {
            if (vantaEffect.current) {
                vantaEffect.current.destroy();
                vantaEffect.current = null;
            }
        };
    }, []);

    return (
        <section className="widgets" ref={vantaRef} data-testid={"widgets"}>
            <WidgetToolbar />
            {
                {
                    grid: <WidgetsWrapper gridType="grid" />,
                    rows: <WidgetsWrapper gridType="rows" />,
                    calendar: <WidgetsWrapper gridType="grid" />,
                }[tool]
            }
        </section>
    );
};
