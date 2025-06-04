import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ResponseMessage } from "@/types/messages.types";

interface ChatState {
    messages: ResponseMessage[];
    addMessage: (msg: ResponseMessage) => void;
    setMessages: (msgs: ResponseMessage[]) => void;
    clearMessages: () => void;
}

export const useChatStore = create<ChatState>()(
    persist(
        (set) => ({
            messages: [
                {
                    type: "nanny",
                    message:
                        "Nanny AI Service - Интерактивный помощник по поддержке принятия решений личностного роста.\n\n Напишите свое сообщение для начала работы.",
                    date: "18:03",
                },
            ],
            addMessage: (msg) =>
                set((state) => ({ messages: [...state.messages, msg] })),
            setMessages: (msgs) => set({ messages: msgs }),
            clearMessages: () =>
                set({
                    messages: [
                        {
                            type: "nanny",
                            message:
                                "История очищена. Напишите сообщение для начала.",
                            date: "18:05",
                        },
                    ],
                }),
        }),
        {
            name: "chat-storage", // ключ в localStorage
        }
    )
);
