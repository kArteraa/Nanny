"use client";

import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { useAuthStore } from "@/store/base";

const RegisterPage: FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const { register } = useAuthStore();
    const router = useRouter();

    const handleRegister = () => {
        if (!email || !password || !confirmPassword) {
            setError("Заполните все поля");
            return;
        }

        if (password !== confirmPassword) {
            setError("Пароли не совпадают");
            return;
        }

        const success = register({ email, password });
        if (!success) {
            setError("Пользователь с таким email уже существует");
        } else {
            router.push("/login");
        }
    };

    return (
        <div className="auth_page" data-testid="auth-page">
            <div className="form" role="form">
                <h1 className="form__title" data-testid="form-title">
                    Создать аккаунт
                </h1>

                <div className="form__input_block">
                    <MdEmail className="form__input_block__icon" />
                    <input
                        type="text"
                        placeholder="Email"
                        className="form__input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        data-testid="email-input"
                    />
                </div>

                <div className="form__input_block">
                    <FaKey className="form__input_block__icon" />
                    <input
                        type="password"
                        placeholder="Пароль"
                        className="form__input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        data-testid="password-input"
                    />
                </div>

                <div className="form__input_block">
                    <FaKey className="form__input_block__icon" />
                    <input
                        type="password"
                        placeholder="Повторите пароль"
                        className="form__input"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        data-testid="confirm-password-input"
                    />
                </div>

                {error && (
                    <p style={{ color: "red", marginBottom: "1rem" }}>
                        {error}
                    </p>
                )}

                <button
                    className="button"
                    onClick={handleRegister}
                    data-testid="register-button"
                >
                    Создать
                </button>
            </div>

            <div className="form__redirect__block">
                <p className="form__redirect__block__text">
                    Аккаунт уже существует?
                </p>
                <a
                    href="/login"
                    className="form__button__link"
                    data-testid="register-link"
                >
                    Войти
                </a>
            </div>
        </div>
    );
};

export default RegisterPage;
