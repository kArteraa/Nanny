"use client";

import { FC, useEffect, useRef, useState } from "react";
import { ChatViewTrackItem } from "@/components";
import { MappingMessages } from "@/types/messages.types";
import { useInputStore, useToolbarStore, useChatStore } from "@/store";

export const ChatViewTrack: FC = () => {
    const { text, submit, setSubmit, setText, mappingMessagesHandler } =
        useInputStore();
    const { tool } = useToolbarStore();
    const { messages, addMessage } = useChatStore();

    const chatTrack = useRef<HTMLDivElement>(null);
    const [mappingMessages, setMappingMessages] = useState<MappingMessages[]>(
        []
    );

    useEffect(() => {
        setMappingMessages(mappingMessagesHandler(messages));
    }, [messages]);

    useEffect(() => {
        if (submit) {
            if (text) {
                const currentText = text;
                setText("");

                addMessage({
                    type: "user",
                    message: currentText,
                    date: new Date().toLocaleTimeString().slice(0, 5),
                });

                setTimeout(() => {
                    addMessage({
                        type: "nanny",
                        message: `Постобработка сообщения "${currentText}". Добавление виджета - ${tool}!`,
                        date: new Date().toLocaleTimeString().slice(0, 5),
                    });
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
