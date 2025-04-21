import { FC } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
    return (
        <header className="header" data-testid={"header"}>
            <div className="header__wrapper">
                <h1 className="header__title">Nanny - ai service</h1>
                <GiHamburgerMenu className="header__burger" />
            </div>
        </header>
    );
};
