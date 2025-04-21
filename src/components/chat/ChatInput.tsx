"use client";

import { FC, useEffect } from "react";
import { useInputStore } from "@/store";

interface ChatInputProps {}

export const ChatInput: FC<ChatInputProps> = ({}) => {
    const { text, setText, setSubmit } = useInputStore();

    useEffect(() => {
        if (text) {
            const submitHandler = (e: KeyboardEvent) => {
                if (e.key === "Enter") {
                    setSubmit(true);
                }
            };

            window.addEventListener("keydown", submitHandler);

            return () => window.removeEventListener("keydown", submitHandler);
        }
    }, [text]);

    return (
        <div className="chat__input__wrapper">
            <textarea
                className="chat__input"
                placeholder="Напишите сообщение..."
                value={text}
                data-testid={"message-input"}
                onChange={(e) => setText(e.target.value)}
            />
            {/*<HiOutlineFaceSmile className="chat__emoji" />*/}
        </div>
    );
};
