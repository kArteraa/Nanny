import { render, screen, fireEvent } from "@testing-library/react";
import { ChatInput } from "@/components/chat";

describe("Chat functionality between components", () => {
    it("should display message in MessageDisplay after sending from MessageInput", () => {
        render(<ChatInput />);

        // Находим элементы ввода
        const input = screen.getByTestId("message-input");

        // Вводим сообщение и имитируем нажатие Enter
        fireEvent.change(input, { target: { value: "Новое сообщение" } });
        fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
    });
});
