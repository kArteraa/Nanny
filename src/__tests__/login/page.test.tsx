import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe } from "node:test";
import LoginPage from "@/app/login/page";

describe("LoginPage", () => {
    it("renders a heading", () => {
        render(<LoginPage />);

        // Проверяем основные контейнеры
        const authPage = screen.getByTestId("auth-page");
        expect(authPage).toBeInTheDocument();
        expect(authPage).toHaveClass("auth_page");

        const form = screen.getByRole("form");
        expect(form).toBeInTheDocument();
        expect(form).toHaveClass("form");

        // Проверяем заголовок формы
        const title = screen.getByRole("heading", { name: /авторизация/i });
        expect(title).toBeInTheDocument();
        expect(title).toHaveClass("form__title");

        // Проверяем блоки с инпутами
        const inputBlocks = screen.getAllByTestId("input-block");
        expect(inputBlocks).toHaveLength(2);
        inputBlocks.forEach((block) => {
            expect(block).toHaveClass("form__input_block");
        });

        const emailInput = screen.getByPlaceholderText(/email/i);
        expect(emailInput).toBeInTheDocument();
        expect(emailInput).toHaveAttribute("type", "text");
        expect(emailInput).toHaveAttribute("name", "login");
        expect(emailInput).toHaveClass("form__input");

        const passwordInput = screen.getByPlaceholderText(/пароль/i);
        expect(passwordInput).toBeInTheDocument();
        expect(passwordInput).toHaveAttribute("type", "password");
        expect(passwordInput).toHaveAttribute("name", "pswd");
        expect(passwordInput).toHaveClass("form__input");

        // Проверяем кнопки
        const loginButton = screen.getByRole("link", { name: /войти/i });
        expect(loginButton).toBeInTheDocument();
        expect(loginButton).toHaveClass("form__button");
        expect(loginButton).toHaveAttribute("href", "/workspace");

        const registerLink = screen.getByRole("link", {
            name: /зарегистрироваться/i,
        });
        expect(registerLink).toBeInTheDocument();
        expect(registerLink).toHaveClass("form__button__link");
        expect(registerLink).toHaveAttribute("href", "/register");
    });
});
