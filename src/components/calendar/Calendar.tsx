"use client";

import { FC, useState } from "react";
import { CalendarMain, CalendarSettings } from "@/components";
import { AnimatePresence } from "framer-motion";
import { AnimationLayer } from "@/layers";

export const Calendar: FC = () => {
    const [wrapperView, setWrapperView] = useState<"calendar" | "settings">(
        "calendar"
    );

    return (
        <>
            <AnimatePresence mode="wait">
                {
                    {
                        calendar: (
                            <AnimationLayer
                                uniqueKey={"calendar"}
                                className="calendar__main"
                            >
                                <CalendarMain setWrapperView={setWrapperView} />
                            </AnimationLayer>
                        ),
                        settings: (
                            <AnimationLayer uniqueKey={"settings"}>
                                <CalendarSettings
                                    setWrapperView={setWrapperView}
                                />
                            </AnimationLayer>
                        ),
                    }[wrapperView]
                }
            </AnimatePresence>
        </>
    );
};
