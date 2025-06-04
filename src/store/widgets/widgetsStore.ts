import { create } from "zustand";
import { persist } from "zustand/middleware";

type WidgetType = "calendar" | "note" | "task";

interface CalendarEvent {
    title: string;
    date: string;
}

interface WidgetState {
    calendars: number; // кол-во календарей
    events: CalendarEvent[];
    addCalendar: () => void;
    addNote: (title: string, date: string) => void;
    addTask: (title: string, date: string) => void;
}

export const useWidgetStore = create<WidgetState>()(
    persist(
        (set) => ({
            calendars: 0,
            events: [],
            addCalendar: () =>
                set((state) => ({ calendars: state.calendars + 1 })),
            addNote: (title, date) =>
                set((state) => ({
                    events: [...state.events, { title, date }],
                })),
            addTask: (title, date) =>
                set((state) => ({
                    events: [...state.events, { title, date }],
                })),
        }),
        {
            name: "widget-storage",
        }
    )
);
