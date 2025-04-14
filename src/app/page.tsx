import { FC } from "react";
import { redirect } from "next/navigation";

const MainPage: FC = ({}) => {
    redirect("/login");
};

export default MainPage;
