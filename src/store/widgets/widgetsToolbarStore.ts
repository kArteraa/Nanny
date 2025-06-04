import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ToolbarState {
    tool: "grid" | "rows" | "calendar";
    setTool: (tool: "grid" | "rows" | "calendar") => void;
}

export const useWidgetsToolbarStore = create<ToolbarState>()(
    persist(
        (set) => ({
            tool: "grid",
            setTool: (tool) => set({ tool }),
        }),
        {
            name: "widgets-toolbar", // ключ в localStorage
        }
    )
);
