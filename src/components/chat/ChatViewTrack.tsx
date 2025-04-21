"use client";

import { FC, useEffect, useRef, useState } from "react";
import { ChatViewTrackItem } from "@/components";
import { MappingMessages, ResponseMessage } from "@/types/messages.types";
import { useInputStore, useToolbarStore } from "@/store";

export const ChatViewTrack: FC = () => {
    const { text, submit, setSubmit, setText, mappingMessagesHandler } =
        useInputStore();
    const { tool } = useToolbarStore();
    const chatTrack = useRef<HTMLDivElement>(null);

    const [messages, setMessages] = useState<ResponseMessage[]>([
        {
            type: "nanny",
            message:
                "Nanny AI Service - Интерактивный помощник по поддержке принятия решений личностного роста.\n\n Напишите свое сообщение для начала работы.",
            date: "18:03",
        },
    ]);
    const [mappingMessages, setMappingMessages] = useState<MappingMessages[]>(
        []
    );

    useEffect(() => {
        if (messages && messages.length > 0) {
            setMappingMessages(mappingMessagesHandler(messages));
        }
    }, [messages]);

    useEffect(() => {
        if (submit) {
            if (text) {
                const currentText = text;
                setText("");

                setMessages((prev) => [
                    ...prev,
                    { type: "user", message: currentText, date: "19:03" },
                ]);
                setTimeout(() => {
                    setMessages((prev) => [
                        ...prev,
                        {
                            type: "nanny",
                            message: `Постобработка сообщения "${currentText}". Добавление виджета - ${tool}!`,
                            date: "19:03",
                        },
                    ]);
                }, 500);
            }
        }

        setSubmit(false);
    }, [submit]);

    useEffect(() => {
        if (chatTrack.current) {
            chatTrack.current.scrollTop = chatTrack.current.scrollHeight;
        }
    }, [mappingMessages]);

    return (
        <div className="chat__view_track" ref={chatTrack}>
            <div className="chat__view_track__wrapper">
                {mappingMessages.map((message, idx) => (
                    <ChatViewTrackItem
                        key={idx}
                        messages={message.messages}
                        type={message.type}
                    />
                ))}
            </div>
        </div>
    );
};
