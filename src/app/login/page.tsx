import { FC } from "react";
import Link from "next/link";

const LoginPage: FC = ({}) => {
    return (
        <div className="auth_page">
            <div className="form">
                <h1 className="form__title">Авторизация</h1>
                <div className="form__input_block">
                    <label htmlFor="login" className="form__input_block__title">
                        Email
                    </label>
                    <input
                        type="text"
                        name="login"
                        placeholder="Email"
                        className="form__input"
                    />
                </div>

                <div className="form__input_block">
                    <label htmlFor="pswd" className="form__input_block__title">
                        Пароль
                    </label>
                    <input
                        type="password"
                        name="pswd"
                        placeholder="Пароль"
                        className="form__input"
                    />
                </div>

                <Link className="form__button" href={"/workspace"}>
                    Войти
                </Link>
                <Link href={"/register"} className="form__button__link">
                    Зарегистрироваться
                </Link>
            </div>
        </div>
    );
};

export default LoginPage;
