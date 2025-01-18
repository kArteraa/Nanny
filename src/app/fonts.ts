import { Boogaloo, Montserrat } from "next/font/google";

export const montserrat = Montserrat({
    subsets: ["latin", "cyrillic"],
    display: "swap",
    variable: "--font-monserrat",
});

export const boogaloo = Boogaloo({
    subsets: ["latin"],
    display: "swap",
    weight: "400",
    variable: "--font-boogaloo",
});
