import { FC } from "react";
import { ChatViewTrack } from "@/components/chat/ChatViewTrack";
import { ChatTools } from "@/components";

interface ChatProps {}

export const Chat: FC<ChatProps> = ({}) => {
    return (
        <section className="chat">
            <ChatViewTrack />
            <ChatTools />
        </section>
    );
};
