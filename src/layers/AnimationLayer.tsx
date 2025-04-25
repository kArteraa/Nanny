import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedLayerProps {
    children: ReactNode;
    uniqueKey: string;
    className?: string;
}

export const AnimationLayer: FC<AnimatedLayerProps> = ({
    children,
    uniqueKey,
    className,
}) => {
    return (
        <motion.div
            key={uniqueKey}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
