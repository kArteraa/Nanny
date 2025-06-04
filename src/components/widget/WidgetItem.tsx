"use client";

import { FC } from "react";
import { IoMdClose } from "react-icons/io";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { motion } from "framer-motion";

interface Props {
    events: { title: string; date: string }[];
}

export const WidgetItem: FC<Props> = ({ events }) => {
    return (
        <motion.div className="widget">
            <div className="widget__main">
                <div className="widget__header">
                    <h1 className="widget__title">Календарь</h1>
                    <div className="widget__tools">
                        <IoMdClose />
                    </div>
                </div>
                <div className="widget__content">
                    <FullCalendar
                        plugins={[dayGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        height="600px"
                        contentHeight="auto"
                        events={events}
                    />
                </div>
            </div>
        </motion.div>
    );
};
