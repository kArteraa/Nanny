"use client";

import { FC, useEffect, useRef } from "react";
import { Calendar, WidgetsWrapper, WidgetToolbar } from "@/components";

import { useWidgetsToolbarStore } from "@/store/widgets/widgetsToolbarStore";

import { vantaConfig } from "@/vanta/vanta.config";
import { AnimationLayer } from "@/layers";
import { AnimatePresence } from "framer-motion";
import cn from "classnames";

interface WidgetContainerProps {}

export const WidgetContainer: FC<WidgetContainerProps> = ({}) => {
    const vantaRef = useRef<HTMLDivElement | null>(null);
    const vantaEffect = useRef<any>(null); // Тип для эффекта (временный)
    const { tool } = useWidgetsToolbarStore();

    const classType = tool === "rows" && "rows_tmp";

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
            <AnimatePresence mode="wait">
                {
                    {
                        grid: (
                            <AnimationLayer
                                uniqueKey={"grid"}
                                className={cn("widgets__wrapper", classType)}
                            >
                                <WidgetsWrapper />
                            </AnimationLayer>
                        ),
                        rows: (
                            <AnimationLayer
                                uniqueKey={"rows"}
                                className={cn("widgets__wrapper", classType)}
                            >
                                <WidgetsWrapper />
                            </AnimationLayer>
                        ),
                        calendar: (
                            <AnimationLayer
                                uniqueKey={"calendar_full"}
                                className="calendar"
                            >
                                <Calendar />
                            </AnimationLayer>
                        ),
                    }[tool]
                }
            </AnimatePresence>
        </section>
    );
};
