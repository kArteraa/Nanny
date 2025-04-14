"use client";

import { FC, HTMLAttributes } from "react";
import cn from "classnames";
import { motion } from "framer-motion";
import { MappingMessagesMessage } from "@/types/messages.types";

export interface ChatViewTrackItemProps extends HTMLAttributes<HTMLDivElement> {
    type: "nanny" | "user";
    messages: MappingMessagesMessage[];
}

export const ChatViewTrackItem: FC<ChatViewTrackItemProps> = ({
    type,
    messages,
    ...props
}) => {
    return (
        <div
            className={cn(
                "chat__view_track__item",
                type === "user" && "reversed"
            )}
            {...props}
        >
            <motion.div
                initial={{ y: 5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="chat__view_track__item__avatar"
            />
            <div className="chat__view_track__item__messages">
                {messages.map((message, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ y: 5, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="chat__view_track__item__message"
                    >
                        <p className="chat__view_track__item__message__text">
                            {message.message}
                        </p>
                        <span className="chat__view_track__item__message__date">
                            {message.date}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
