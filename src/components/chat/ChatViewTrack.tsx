"use client";

import { FC, useEffect, useState } from "react";
import { ChatViewTrackItem } from "@/components";

export type MappingMessages = {
    id: number;
    type: "nanny" | "user";
    messages: string[];
};

export const ChatViewTrack: FC = () => {
    const [messages, setMessages] = useState<
        { type: "user" | "nanny"; message: string }[]
    >([
        { type: "user", message: "Hello, World!" },
        {
            type: "nanny",
            message:
                "Спасибо за ваше сообщение.ffffffffffffffffffffffffffffffffffffffffffffffffff Чем еще я могу помочь?",
        },
        {
            type: "nanny",
            message:
                "Спасибо за ваше сообщение.ffffffffffffffffffffffffffffffffffffffffffffffffff Чем еще я могу помочь?",
        },
        {
            type: "nanny",
            message:
                "Спасибо за ваше сообщение.ffffffffffffffffffffffffffffffffffffffffffffffffff Чем еще я могу помочь?",
        },
        {
            type: "nanny",
            message:
                "Спасибо за ваше сообщение.ffffffffffffffffffffffffffffffffffffffffffffffffff Чем еще я могу помочь?",
        },
        {
            type: "nanny",
            message:
                "Спасибо за ваше сообщение.ffffffffffffffffffffffffffffffffffffffffffffffffff Чем еще я могу помочь?",
        },
        {
            type: "nanny",
            message:
                "Спасибо за ваше сообщение.ffffffffffffffffffffffffffffffffffffffffffffffffff Чем еще я могу помочь?",
        },
        {
            type: "nanny",
            message:
                "Спасибо за ваше сообщение.ffffffffffffffffffffffffffffffffffffffffffffffffff Чем еще я могу помочь?",
        },
        {
            type: "nanny",
            message:
                "Спасибо за ваше сообщение.ffffffffffffffffffffffffffffffffffffffffffffffffff Чем еще я могу помочь?",
        },
        {
            type: "nanny",
            message:
                "Спасибо за ваше сообщение.ffffffffffffffffffffffffffffffffffffffffffffffffff Чем еще я могу помочь?",
        },
        {
            type: "nanny",
            message:
                "Спасибо за ваше сообщение.ffffffffffffffffffffffffffffffffffffffffffffffffff Чем еще я могу помочь?",
        },
        {
            type: "nanny",
            message:
                "Спасибо за ваше сообщение.ffffffffffffffffffffffffffffffffffffffffffffffffff Чем еще я могу помочь?",
        },
    ]);
    const [mappingMessages, setMappingMessages] = useState<MappingMessages[]>(
        []
    );

    const add = (type: "nanny" | "user") => {
        setMessages([...messages, { type: type, message: "Сообщение" }]);
    };

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
                        message,
                    ];
                } else {
                    const message: string = messages[i].message;
                    result = [...result, currentMessages];
                    currentType = messageType;
                    currentMessages = {
                        id: result.length,
                        type: currentType,
                        messages: [message],
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
