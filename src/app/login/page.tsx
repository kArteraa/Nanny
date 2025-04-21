import { FC } from "react";
import Link from "next/link";

const LoginPage: FC = ({}) => {
    return (
        <div className="auth_page" data-testid="auth-page">
            <div className="form" role="form">
                <h1 className="form__title">Авторизация</h1>

                <div className="form__input_block" data-testid="input-block">
                    <label htmlFor="login" className="form__input_block__title">
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
                    <label htmlFor="pswd" className="form__input_block__title">
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

                <Link
                    className="form__button"
                    href="/workspace"
                    data-testid="login-button"
                >
                    Войти
                </Link>

                <Link
                    href="/register"
                    className="form__button__link"
                    data-testid="register-link"
                >
                    Зарегистрироваться
                </Link>
            </div>
        </div>
    );
};

export default LoginPage;
