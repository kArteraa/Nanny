import { Header, WidgetContainer, Chat, WidgetToolbar } from "@/components";

export default function NannyHome() {
    return (
        <>
            <Header />
            <div className="main__wrapper" data-testid="main__wrapper">
                <WidgetContainer />
                {/*<WidgetTagContainer /> */}
                <Chat />
            </div>
        </>
    );
}
