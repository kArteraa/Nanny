import { FC } from "react";
import cn from "classnames";
import { WidgetItem } from "@/components";

interface WidgetsWrapperProps {
    gridType: "rows" | "grid";
}

export const WidgetsWrapper: FC<WidgetsWrapperProps> = ({ gridType }) => {
    return (
        <div>
            <div
                className={cn(
                    "widgets__wrapper",
                    gridType === "rows" && "rows_tmp"
                )}
            >
                <WidgetItem />
                <WidgetItem />
                <WidgetItem />
                <WidgetItem />
            </div>
        </div>
    );
};
