"use client";

import { FC, useEffect, useState } from "react";
import { ChatViewTrackItem } from "@/components";

export type MappingMessagesMessage = {
    message: string;
    date: string;
}

export type MappingMessages = {
    id: number;
    type: "nanny" | "user";
    messages: MappingMessagesMessage[];
};

export const ChatViewTrack: FC = () => {
    const [messages, setMessages] = useState<
        { type: "user" | "nanny"; message: string,date: string }[]
    >([
        { type: "user", message: "Hello, World!",date: "18:03" },
        {
            type: "nanny",
            message:
                "Спасибо за ваше сообщение.ffffffffffffffffffffffffffffffffffffffffffffffffff Чем еще я могу помочь?",
            date: "18:04"
        },
    ]);
    const [mappingMessages, setMappingMessages] = useState<MappingMessages[]>(
        []
    );


    useEffect(() => {
        if (messages && messages.length > 0) {
            let currentType = messages[0].type;
            let result: MappingMessages[] = [];
            let currentMessages: MappingMessages = {
                id: 0,
                type: currentType,
                messages: [],
            };
            for (let i = 0; i < messages.length; ++i) {
                const messageType = messages[i].type;
                if (messageType === currentType) {
                    const message: string = messages[i].message;
                    currentMessages.messages = [
                        ...currentMessages.messages,
                        {
                            message: message,
                            date: messages[i].date
                        },
                    ];
                } else {
                    const message: string = messages[i].message;
                    result = [...result, currentMessages];
                    currentType = messageType;
                    currentMessages = {
                        id: result.length,
                        type: currentType,
                        messages: [{message: message, date: messages[i].date}],
                    };
                }
            }
            result = [...result, currentMessages];

            setMappingMessages(result);
        }
    }, [messages]);

    return (
        <div className="chat__view_track">
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
