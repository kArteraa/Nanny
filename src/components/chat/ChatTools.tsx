import { FC } from "react";
import { ChatInput, ChatToolbar } from "@/components";

interface ChatToolsProps {}

export const ChatTools: FC<ChatToolsProps> = ({}) => {
    return (
        <div className="chat__tools">
            <ChatToolbar />
            <ChatInput />
        </div>
    );
};
