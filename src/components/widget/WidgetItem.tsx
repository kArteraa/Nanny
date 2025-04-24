"use client";

import { FC } from "react";
import { IoMdClose } from "react-icons/io";
import { TiPinOutline } from "react-icons/ti";

import FullCalendar from "@fullcalendar/react";

import { motion } from "framer-motion";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export const WidgetItem: FC = () => {
    return (
        <motion.div className="widget">
            <div className="widget__main">
                <div className="widget__header">
                    <h1 className="widget__title">Календарь</h1>
                    <div className="widget__tools">
                        {/*<TiPinOutline />*/}
                        <IoMdClose />
                    </div>
                </div>
                <div className="widget__content">
                    <FullCalendar
                        plugins={[dayGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        height="600px"
                        contentHeight="auto"
                        events={[
                            { title: "Заметка номер 1", date: "2025-04-22" },
                            { title: "Заметка номер 2", date: "2025-03-24" },
                            { title: "Заметка номер 1", date: "2025-03-25" },
                        ]}
                    />
                </div>
            </div>
        </motion.div>
    );
};
