"use client";

import { FC, useEffect } from "react";
import { useInputStore, useToolbarStore } from "@/store";
import { useWidgetStore } from "@/store";

export const ChatInput: FC = () => {
    const { text, setText, setSubmit } = useInputStore();
    const { tool } = useToolbarStore();
    const { addCalendar, addNote, addTask } = useWidgetStore();

    useEffect(() => {
        if (text) {
            const submitHandler = (e: KeyboardEvent) => {
                if (e.key === "Enter") {
                    const today = new Date().toISOString().split("T")[0];

                    if (tool === "calendar") {
                        addCalendar();
                    } else if (tool === "note") {
                        addNote("Новая заметка", today);
                    } else if (tool === "task") {
                        addTask("Новая задача", today);
                    }

                    setSubmit(true);
                }
            };

            window.addEventListener("keydown", submitHandler);
            return () => window.removeEventListener("keydown", submitHandler);
        }
    }, [text, tool]);

    return (
        <div className="chat__input__wrapper">
            <textarea
                className="chat__input"
                placeholder="Напишите сообщение..."
                value={text}
                data-testid={"message-input"}
                onChange={(e) => setText(e.target.value)}
            />
        </div>
    );
};
