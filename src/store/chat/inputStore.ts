import { create } from "zustand/react";
import { MappingMessages, ResponseMessage } from "@/types/messages.types";

interface InputStore {
    text: string;
    setText: (text: string) => void;

    focus: boolean;
    setFocus: (focus: boolean) => void;

    submit: boolean;
    setSubmit: (flag: boolean) => void;

    mappingMessagesHandler: (messages: ResponseMessage[]) => MappingMessages[];
}

export const useInputStore = create<InputStore>()((set) => ({
    text: "",
    setText: (text: string | undefined) => {
        set(() => ({
            text,
        }));
    },

    submit: false,
    setSubmit: (flag: boolean) => {
        set(() => ({
            submit: flag,
        }));
    },

    focus: false,
    setFocus: (focus: boolean) => {
        set(() => ({
            focus,
        }));
    },

    mappingMessagesHandler: (messages: ResponseMessage[]) => {
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
                        date: messages[i].date,
                    },
                ];
            } else {
                const message: string = messages[i].message;
                result = [...result, currentMessages];
                currentType = messageType;
                currentMessages = {
                    id: result.length,
                    type: currentType,
                    messages: [{ message: message, date: messages[i].date }],
                };
            }
        }
        result = [...result, currentMessages];

        return result;
    },
}));
