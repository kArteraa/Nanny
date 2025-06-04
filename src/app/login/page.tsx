"use client";

import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { useAuthStore } from "@/store/base"; // подключение хранилища

const LoginPage: FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const { login } = useAuthStore();

    const loginHandler = () => {
        if (!email || !password) {
            setError("Пожалуйста, заполните все поля.");
            return;
        }

        const success = login({ email, password });

        if (!success) {
            setError("Неверный email или пароль.");
            return;
        }

        setError("");
        router.push("/workspace");
    };

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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button
                    className="button"
                    onClick={loginHandler}
                    data-testid="login-button"
                >
                    Войти
                </button>

                {error && (
                    <p
                        className="form__error"
                        style={{
                            color: "red",
                            marginTop: "20px",
                            textAlign: "center",
                            fontSize: 14,
                        }}
                        data-testid="error-message"
                    >
                        {error}
                    </p>
                )}
            </div>

            <div className="form__redirect__block">
                <p className="form__redirect__block__text">
                    До сих пор нет аккаунта?
                </p>
                <a
                    href="/register"
                    className="form__button__link"
                    data-testid="register-link"
                >
                    Создайте
                </a>
            </div>
        </div>
    );
};

export default LoginPage;
