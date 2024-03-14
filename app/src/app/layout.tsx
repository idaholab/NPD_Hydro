// Next
import type { Metadata } from "next";

// Styles
import "./globals.css";

// Store
import StoreProvider from "./store";

// Theme
import Theme from "./themes/theme";

// Components
import Header from "./header";

// Material
import { Box } from "@mui/material";

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
            {/* Offset child components by 15vh to account for the AppBar */}
            <Box sx={{ position: "absolute", top: "15vh" }}>{children}</Box>
          </body>
        </StoreProvider>
      </html>
    </Theme>
  );
}
