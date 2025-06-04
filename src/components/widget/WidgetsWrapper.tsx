import { FC } from "react";
import { WidgetItem } from "@/components";
import { useWidgetStore } from "@/store";

export const WidgetsWrapper: FC = () => {
    const { calendars, events } = useWidgetStore();

    return (
        <>
            {Array.from({ length: calendars }).map((_, idx) => (
                <WidgetItem key={idx} events={events} />
            ))}
        </>
    );
};
