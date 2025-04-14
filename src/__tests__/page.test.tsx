import { redirect } from "next/navigation";
import MainPage from "../app/page";

jest.mock("next/navigation", () => ({
    redirect: jest.fn().mockImplementation(() => {
        throw new Error("NEXT_REDIRECT");
    }),
}));

describe("MainPage", () => {
    it("should call redirect to /login", () => {
        expect(() => {
            MainPage({});
        }).toThrow("NEXT_REDIRECT");
        expect(redirect).toHaveBeenCalledWith("/login");
    });
});
