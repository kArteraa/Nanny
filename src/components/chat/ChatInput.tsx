import { FC } from "react";
import { HiOutlineFaceSmile } from "react-icons/hi2";

interface ChatInputProps {}

export const ChatInput: FC<ChatInputProps> = ({}) => {
    return (
        <div className="chat__input__wrapper">
            <textarea
                className="chat__input"
                placeholder="Напишите сообщение..."
            />
            <HiOutlineFaceSmile className="chat__emoji" />
        </div>
    );
};
