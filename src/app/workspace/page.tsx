import { Header, WidgetContainer, Chat } from "@/components";

export default function NannyHome() {
    return (
        <>
            <Header />
            <div className="main__wrapper" data-testid="main__wrapper">
                <WidgetContainer />
                <Chat />
            </div>
        </>
    );
}
