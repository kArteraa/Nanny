import {
    Header,
    WidgetContainer,
    WidgetTagContainer,
    Chat,
} from "@/components";

export default function NannyHome() {
    return (
        <>
            <Header />
            <div className="main__wrapper">
                <WidgetContainer />
               {/* <WidgetTagContainer />*/}
                <Chat />
            </div>
        </>
    );
}
