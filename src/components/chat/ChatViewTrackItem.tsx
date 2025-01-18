"use client";

import { FC, HTMLAttributes } from "react";
import cn from "classnames";
import { motion } from "framer-motion";

export interface ChatViewTrackItemProps extends HTMLAttributes<HTMLDivElement> {
    type: "nanny" | "user";
    messages: string[];
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
                initial={{ x: type === "user" ? 10 : -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="chat__view_track__item__avatar"
            />
            <div className="chat__view_track__item__messages">
                {messages.map((message, idx) => (
                    <motion.p
                        key={idx}
                        initial={{ x: type === "user" ? -10 : 10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="chat__view_track__item__message"
                    >
                        {message}
                    </motion.p>
                ))}
            </div>
        </div>
    );
};
