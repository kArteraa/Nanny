import { FC } from "react";
import Link from "next/link";

const RegisterPage: FC = ({}) => {
    return (
        <div className="auth_page" data-testid="auth-page">
            <div className="form" role="form">
                <h1 className="form__title" data-testid="form-title">
                    Регистрация
                </h1>

                <div className="form__input_block" data-testid="input-block">
                    <label
                        htmlFor="login"
                        className="form__input_block__title"
                        data-testid="email-label"
                    >
                        Email
                    </label>
                    <input
                        type="text"
                        name="login"
                        id="login"
                        placeholder="Email"
                        className="form__input"
                        data-testid="email-input"
                    />
                </div>

                <div className="form__input_block" data-testid="input-block">
                    <label
                        htmlFor="pswd"
                        className="form__input_block__title"
                        data-testid="password-label"
                    >
                        Пароль
                    </label>
                    <input
                        type="password"
                        name="pswd"
                        id="pswd"
                        placeholder="Пароль"
                        className="form__input"
                        data-testid="password-input"
                    />
                </div>

                <div className="form__input_block" data-testid="input-block">
                    <label
                        htmlFor="pswdagain"
                        className="form__input_block__title"
                        data-testid="confirm-password-label"
                    >
                        Повторите пароль
                    </label>
                    <input
                        type="password"
                        name="pswdagain"
                        id="pswdagain"
                        placeholder="Повторите пароль"
                        className="form__input"
                        data-testid="confirm-password-input"
                    />
                </div>

                <Link
                    className="form__button"
                    href="/login"
                    data-testid="register-button"
                >
                    Зарегистрироваться
                </Link>

                <Link
                    href="/login"
                    className="form__button__link register_link"
                    data-testid="back-link"
                >
                    Вернуться
                </Link>
            </div>
        </div>
    );
};

export default RegisterPage;
