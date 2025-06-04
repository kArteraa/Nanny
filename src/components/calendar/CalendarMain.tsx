"use client";

import { Dispatch, FC, SetStateAction } from "react";
import { IoMdAdd } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useCalendarStore } from "@/store";

interface CalendarMainProps {
    setWrapperView: Dispatch<SetStateAction<"calendar" | "settings">>;
}

export const CalendarMain: FC<CalendarMainProps> = ({ setWrapperView }) => {
    const { calendars } = useCalendarStore();

    return (
        <>
            <aside className="calendar__sidebar">
                <div className="calendar__sidebar__title_block">
                    <h1 className="calendar__sidebar__title">Мои календари</h1>
                    <div className="calendar__sidebar__title_block__actions">
                        <IoMdAdd
                            className="calendar__sidebar__title_block__actions__action"
                            onClick={() => setWrapperView("settings")}
                        />
                        <CiSettings
                            className="calendar__sidebar__title_block__actions__action"
                            onClick={() => setWrapperView("settings")}
                        />
                    </div>
                </div>
                <div className="calendar__sidebar__list">
                    {calendars.map((calendar) => (
                        <div
                            key={calendar.id}
                            className="calendar__sidebar__list__item"
                        >
                            {calendar.name}
                        </div>
                    ))}
                </div>
            </aside>
            <div className="calendar__wrapper">
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    height="100%"
                    contentHeight="100%"
                    events={[]}
                />
            </div>
        </>
    );
};
