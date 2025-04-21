import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe } from "node:test";
import RegisterPage from "@/app/register/page";

describe("RegisterPage", () => {
    it("renders a heading", () => {
        render(<RegisterPage />);

        const authPage = screen.getByTestId("auth-page");
        expect(authPage).toBeInTheDocument();
        expect(authPage).toHaveClass("auth_page");

        const form = screen.getByRole("form");
        expect(form).toBeInTheDocument();
        expect(form).toHaveClass("form");

        // Проверяем заголовок формы
        const title = screen.getByRole("heading", { name: /регистрация/i });
        expect(title).toBeInTheDocument();
        expect(title).toHaveClass("form__title");

        // Проверяем блоки с инпутами (теперь их 3)
        const inputBlocks = screen.getAllByTestId("input-block");
        expect(inputBlocks).toHaveLength(3);
        inputBlocks.forEach((block) => {
            expect(block).toHaveClass("form__input_block");
        });

        // Проверяем кнопку регистрации
        const registerButton = screen.getByRole("link", {
            name: /зарегистрироваться/i,
        });
        expect(registerButton).toBeInTheDocument();
        expect(registerButton).toHaveClass("form__button");
        expect(registerButton).toHaveAttribute("href", "/login");

        // Проверяем кнопку "Вернуться" (изменился текст и класс)
        const backLink = screen.getByRole("link", {
            name: /вернуться/i,
        });
        expect(backLink).toBeInTheDocument();
        expect(backLink).toHaveClass("form__button__link");
        expect(backLink).toHaveClass("register_link");
        expect(backLink).toHaveAttribute("href", "/login");
    });
});
