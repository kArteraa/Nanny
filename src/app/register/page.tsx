import { FC } from "react";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";

const RegisterPage: FC = ({}) => {
    return (
        <div className="auth_page" data-testid="auth-page">
            <div className="form" role="form">
                <h1 className="form__title" data-testid="form-title">
                    Создать аккаунт
                </h1>

                <div className="form__input_block" data-testid="input-block">
                    <MdEmail className="form__input_block__icon" />
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
                    <FaKey className="form__input_block__icon" />
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
                    <FaKey className="form__input_block__icon" />
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
                    className="button"
                    href="/login"
                    data-testid="register-button"
                >
                    Создать
                </Link>
            </div>
            <div className="form__redirect__block">
                <p className="form__redirect__block__text">
                    Аккаунт уже существует?
                </p>
                <Link
                    href="/login"
                    className="form__button__link"
                    data-testid="register-link"
                >
                    Войти
                </Link>
            </div>
        </div>
    );
};

export default RegisterPage;
