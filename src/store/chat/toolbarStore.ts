import { create } from "zustand/react";
import { ToolType } from "@/types/tools.types";

interface ToolbarStore {
    tool: ToolType;
    setTool: (tool: ToolType) => void;
}

export const useToolbarStore = create<ToolbarStore>()((set) => ({
    tool: "calendar",
    setTool: (tool: ToolType) => {
        set(() => ({
            tool,
        }));
    },
}));
