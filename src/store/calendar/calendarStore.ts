import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Calendar {
    id: number;
    name: string;
    description?: string;
}

interface CalendarState {
    calendars: Calendar[];
    addCalendar: (name: string, description?: string) => void;
}

export const useCalendarStore = create<CalendarState>()(
    persist(
        (set, get) => ({
            calendars: [],
            addCalendar: (name, description) => {
                const newId = Date.now();
                const newCalendar = { id: newId, name, description };
                set({ calendars: [...get().calendars, newCalendar] });
            },
        }),
        {
            name: "calendar-store",
        }
    )
);
