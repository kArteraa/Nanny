export type ToolType = "calendar" | "task" | "target" | "note";

export type Tools = {
    id: ToolType;
    label: string;
}[];
