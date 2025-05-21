import { ReactNode } from "react";
import type { Metadata } from "next";

import { defaultTheme, ThemeProvider } from "@/components/ThemeProvider";
import { boogaloo, montserrat } from "@/app/fonts";

import "../styles/index.scss";

export const metadata: Metadata = {
    title: "Nanny - AI SERVICE",
    description: "Diplom",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="ru" suppressHydrationWarning>
            <body
                className={`${montserrat.variable} ${boogaloo.variable}`}
                suppressHydrationWarning
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme={defaultTheme}
                    enableSystem
                    disableTransitionOnChange
                >
                    <main suppressHydrationWarning className="main">
                        {children}
                    </main>
                    <script src="three.r119.min.js"></script>
                </ThemeProvider>
            </body>
        </html>
    );
}
