import { FC } from "react";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";

const LoginPage: FC = ({}) => {
    return (
        <div className="auth_page" data-testid="auth-page">
            <div className="form" role="form">
                <h1 className="form__title">Войти в аккаунт</h1>

                <div className="form__input_block" data-testid="input-block">
                    <MdEmail className="form__input_block__icon" />
                    <input
                        type="text"
                        id="login"
                        placeholder="Email"
                        className="form__input"
                        data-testid="email-input"
                    />
                </div>

                <div className="form__input_block" data-testid="input-block">
                    <FaKey className="form__input_block__icon" />
                    <input
                        type="password"
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
            </div>
            <div className="form__redirect__block">
                <p className="form__redirect__block__text">
                    До сих пор нет аккаунта?
                </p>
                <Link
                    href="/register"
                    className="form__button__link"
                    data-testid="register-link"
                >
                    Создайте
                </Link>
            </div>
        </div>
    );
};

export default LoginPage;
