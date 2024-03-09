// Next
import type { Metadata } from "next";
import Link from "next/link";

// Styles
import { Inter } from "next/font/google";
import "./globals.css";

// Components
import { LightSwitch } from "./themes/switch";

// Store
import StoreProvider from "./store";

// Theme
import Theme from "./themes/theme";

// Material
import {
  AppBar,
  Box,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
} from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NPD HYDRO",
  description:
    "A non-powered dam assessment tool, developed by the Idaho National Laboratory and Pacific Northwest Laboratory",
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
          <body className={inter.className}>
            <AppBar
              sx={{
                background: "#FFFFFF",
                zIndex: 10,
                borderBottom: `5px solid #8DC340`,
              }}
            >
              <Toolbar sx={{ maxHeight: "10vh" }}>
                <Typography
                  sx={{
                    color: "text.primary",
                    fontWeight: "bold",
                    fontSize: "2rem",
                    padding: "1rem",
                    flexGrow: 1,
                  }}
                >
                  NPD HYDRO Tool
                </Typography>
                <Link style={{ textDecoration: "none" }} href="/">
                  <ListItemButton
                    sx={{ color: "text.primary", padding: 0 }}
                    dense={true}
                  >
                    <ListItem sx={{ padding: 0 }}>
                      <Typography
                        sx={{ padding: "0.25rem" }}
                        variant="subtitle2"
                      >
                        HOME
                      </Typography>
                    </ListItem>
                  </ListItemButton>
                </Link>
                <Link style={{ textDecoration: "none" }} href="/about">
                  <ListItemButton
                    sx={{ color: "text.primary", padding: 0 }}
                    dense={true}
                  >
                    <ListItem sx={{ padding: 0 }}>
                      <Typography
                        sx={{ padding: "0.25rem" }}
                        variant="subtitle2"
                      >
                        ABOUT
                      </Typography>
                    </ListItem>
                  </ListItemButton>
                </Link>
                <Link style={{ textDecoration: "none" }} href="/tool">
                  <ListItemButton
                    sx={{ color: "text.primary", padding: 0 }}
                    dense={true}
                  >
                    <ListItem sx={{ padding: 0 }}>
                      <Typography
                        sx={{ padding: "0.25rem" }}
                        variant="subtitle2"
                      >
                        TOOL
                      </Typography>
                    </ListItem>
                  </ListItemButton>
                </Link>
                <Link style={{ textDecoration: "none" }} href="/userguide">
                  <ListItemButton
                    sx={{ color: "text.primary", padding: 0 }}
                    dense={true}
                  >
                    <ListItem sx={{ padding: 0 }}>
                      <Typography
                        sx={{ padding: "0.25rem" }}
                        variant="subtitle2"
                      >
                        USER GUIDE
                      </Typography>
                    </ListItem>
                  </ListItemButton>
                </Link>
                {/* Dark Mode Switch */}
                <Box sx={{ padding: "0 0 0 1.5rem" }}>
                  <LightSwitch />
                </Box>
              </Toolbar>
            </AppBar>
            {children}
          </body>
        </StoreProvider>
      </html>
    </Theme>
  );
}
