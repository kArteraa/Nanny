import { FC } from "react";
import {WidgetItem} from "@/components";

interface WidgetContainerProps {}

export const WidgetContainer: FC<WidgetContainerProps> = ({}) => {
    return <section className="widgets">
        <WidgetItem />
    </section>;
};
