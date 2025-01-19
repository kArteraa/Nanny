import {FC} from "react";
import { IoMdClose } from "react-icons/io";
import { TiPinOutline } from "react-icons/ti";
import { GoGrabber } from "react-icons/go";

interface WidgetItemProps {
}

export const WidgetItem: FC<WidgetItemProps> = () => {
    return (
        <div className="widget">
            <div className="widget__grab">
                <GoGrabber className="widget__grab__icon" />
            </div>
            <div className="widget__main">
                <div className="widget__header">
                    <h1 className="widget__title">Новый виджет</h1>
                    <div className="widget__tools">
                        <TiPinOutline/>
                        <IoMdClose/>
                    </div>
                </div>
            </div>

        </div>
    );
};

