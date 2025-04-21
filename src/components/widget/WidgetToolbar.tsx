"use client";

import { FC } from "react";
import { CiGrid41 } from "react-icons/ci";
import { CiGrid2H } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { useWidgetsToolbarStore } from "@/store/widgets/widgetsToolbarStore";
import cn from "classnames";

export const WidgetToolbar: FC = () => {
    const { tool, setTool } = useWidgetsToolbarStore();

    return (
        <div className="widgets__toolbar">
            <CiCalendar className="widgets__toolbar__icon" />
            <hr className="widgets__toolbar__separator" />
            <CiGrid41
                className={cn(
                    "widgets__toolbar__icon",
                    tool === "grid" && "active"
                )}
                onClick={() => setTool("grid")}
            />
            <CiGrid2H
                className={cn(
                    "widgets__toolbar__icon",
                    tool === "rows" && "active"
                )}
                onClick={() => setTool("rows")}
            />
        </div>
    );
};
