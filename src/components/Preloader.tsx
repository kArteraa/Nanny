"use client";

import { FC } from "react";
import { motion } from "framer-motion";

export const Preloader: FC = ({}) => {
    return (
        <motion.div
            className="app__preloader"
            initial={{ opacity: 0.1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.1 }}
            transition={{ duration: 2 }}
        >
            <motion.div />
            <motion.div />
            <motion.div className="app__preloader__title_block">
                <h1 className="app__preloader__title">NANNY</h1>
                <h2 className="app__preloader__title">MY MENTOR</h2>
            </motion.div>
        </motion.div>
    );
};
