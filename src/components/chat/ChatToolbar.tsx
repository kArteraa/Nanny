"use client";

import { FC } from "react";
import { Tools } from "@/types/tools.types";
import cn from "classnames";
import { useToolbarStore } from "@/store";

interface ChatToolbarProps {}

const tools: Tools = [
    { id: "calendar", label: "Календарь" },
    { id: "task", label: "Задача" },
    { id: "note", label: "Заметка" },
];

export const ChatToolbar: FC<ChatToolbarProps> = ({}) => {
    const { tool, setTool } = useToolbarStore();

    return (
        <section className="chat__toolbar">
            {tools.map((toolItem) => (
                <div
                    key={toolItem.id}
                    className={cn(
                        "chat__toolbar__item",
                        tool === toolItem.id && "active"
                    )}
                    onClick={() => setTool(toolItem.id)}
                >
                    <h1 className="chat__toolbar__item__title">
                        {toolItem.label}
                    </h1>
                </div>
            ))}
        </section>
    );
};
