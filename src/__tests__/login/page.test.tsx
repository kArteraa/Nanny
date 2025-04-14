import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe } from "node:test";
import LoginPage from "@/app/login/page";

describe("LoginPage", () => {
    it("renders a heading", () => {
        render(<LoginPage />);

        const heading = screen.getByRole("heading", { level: 1 });

        expect(heading).toBeInTheDocument();
    });
});
