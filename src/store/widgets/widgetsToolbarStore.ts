import { create } from "zustand/react";
import { WidgetsTools } from "@/types/tools.types";

interface WidgetsToolbarStore {
    tool: WidgetsTools;
    setTool: (tool: WidgetsTools) => void;
}

export const useWidgetsToolbarStore = create<WidgetsToolbarStore>()((set) => ({
    tool: "grid",
    setTool: (tool: WidgetsTools) => {
        set(() => ({
            tool,
        }));
    },
}));
