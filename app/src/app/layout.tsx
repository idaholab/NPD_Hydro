// Next
import type { Metadata } from "next";
import Link from "next/link";

// Styles
import "./globals.css";

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
            <AppBar
              sx={{
                background: "#000000",
                zIndex: 10,
              }}
            >
              <Toolbar sx={{ height: "10vh" }}>
                <Link
                  style={{
                    textDecoration: "none",
                  }}
                  href="/"
                >
                  <ListItemButton
                    sx={{
                      color: "white",
                      padding: 0,
                    }}
                    dense={true}
                  >
                    <ListItem sx={{ padding: 0 }}>
                      <Typography
                        sx={{
                          color: "white",
                          fontWeight: "bold",
                          fontSize: "1rem",
                          padding: "1rem",
                        }}
                      >
                        NPD HYDRO
                      </Typography>
                    </ListItem>
                  </ListItemButton>
                </Link>
                <Box sx={{ flexGrow: 1 }}></Box>
                <Link style={{ textDecoration: "none" }} href="/home">
                  <ListItemButton
                    sx={{ color: "white", padding: 0 }}
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
                    sx={{ color: "white", padding: 0 }}
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
                    sx={{ color: "white", padding: 0 }}
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
                    sx={{ color: "white", padding: 0 }}
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
              </Toolbar>
            </AppBar>
            {/* Offset child components by 15vh to account for the AppBar */}
            <Box sx={{ position: "absolute", top: "15vh" }}>{children}</Box>
          </body>
        </StoreProvider>
      </html>
    </Theme>
  );
}
