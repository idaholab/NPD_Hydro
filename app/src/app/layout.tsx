// Next
import type { Metadata } from "next";

// Styles
import "./globals.css";

// Store
import StoreProvider from "./store";

// Theme
import Theme from "./themes/theme";

// Components
import Header from "./components/header";

export const metadata: Metadata = {
  title: "NPD HYDRO",
  description:
    "The NPD HYDRO Tool is developed to analyze the feasibility of retrofitting existing non-powered dams (NPDs) with generation and energy storage technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Theme>
      <html lang="en" className="text-black">
        <StoreProvider>
          <body>
            <Header />
            {children}
          </body>
        </StoreProvider>
      </html>
    </Theme>
  );
}
