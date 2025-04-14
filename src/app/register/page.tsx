import { FC } from "react";
import Link from "next/link";

const RegisterPage: FC = ({}) => {
    return (
        <div className="auth_page">
            <div className="form">
                <h1 className="form__title">Регистрация</h1>
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
                <div className="form__input_block">
                    <label
                        htmlFor="pswdagain"
                        className="form__input_block__title"
                    >
                        Повторите пароль
                    </label>
                    <input
                        type="password"
                        name="pswdagain"
                        placeholder="Повторите пароль"
                        className="form__input"
                    />
                </div>

                <Link className="form__button" href={"/login"}>
                    Зарегистрироваться
                </Link>
                <Link
                    href={"/login"}
                    className="form__button__link register_link"
                >
                    Вернуться
                </Link>
            </div>
        </div>
    );
};

export default RegisterPage;
