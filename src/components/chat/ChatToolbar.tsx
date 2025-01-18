import { FC } from "react";

interface ChatToolbarProps {}

export const ChatToolbar: FC<ChatToolbarProps> = ({}) => {
    return (
        <section className="chat__toolbar">
            <div className="chat__toolbar__item active">
                <h1 className="chat__toolbar__item__title">Календарь</h1>
            </div>
            <div className="chat__toolbar__item">
                <h1 className="chat__toolbar__item__title">Задача</h1>
            </div>
            <div className="chat__toolbar__item">
                <h1 className="chat__toolbar__item__title">Заметка</h1>
            </div>
            <div className="chat__toolbar__item">
                <h1 className="chat__toolbar__item__title">Цель</h1>
            </div>
        </section>
    );
};
