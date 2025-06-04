"use client";

import { Dispatch, FC, SetStateAction, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useCalendarStore } from "@/store";

interface CalendarSettingsProps {
    setWrapperView: Dispatch<SetStateAction<"calendar" | "settings">>;
}

export const CalendarSettings: FC<CalendarSettingsProps> = ({
    setWrapperView,
}) => {
    const { calendars, addCalendar } = useCalendarStore();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleCreate = () => {
        if (!name.trim()) return;
        addCalendar(name.trim(), description.trim());
        setName("");
        setDescription("");
        setWrapperView("calendar"); // вернуться назад после создания
    };

    return (
        <div className="calendar__settings">
            <div className="calendar__settings__head">
                <IoArrowBack
                    className="calendar__settings__back"
                    onClick={() => setWrapperView("calendar")}
                />
                <h1 className="calendar__settings__title">Настройки</h1>
            </div>

            <div className="calendar__settings__body">
                <aside className="calendar__settings__body__sidebar">
                    <h1 className="calendar__settings__body__sidebar__title">
                        Мои календари
                    </h1>
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
                <div className="calendar__settings__body__main">
                    <h1 className="calendar__settings__body__main__title">
                        Создать календарь
                    </h1>
                    <div className="calendar__settings__body__main__input_block">
                        <h1 className="calendar__settings__body__main__input__title">
                            Название*
                        </h1>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="calendar__settings__body__main__input"
                        />
                    </div>

                    <div className="calendar__settings__body__main__input_block">
                        <h1 className="calendar__settings__body__main__input__title">
                            Описание
                        </h1>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="calendar__settings__body__main__input"
                            cols={20}
                            rows={5}
                        />
                    </div>
                    <button
                        className="button calendar__settings__body__main__button"
                        onClick={handleCreate}
                    >
                        Создать
                    </button>
                </div>
            </div>
        </div>
    );
};
