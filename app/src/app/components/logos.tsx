// Material
import { Box, Grid, Toolbar } from "@mui/material";

// Components
import Footer from "./footer";

type props = {
  background: string;
};

function Logos(props: props) {
  return (
    <>
      <Toolbar
        sx={{
          height: "100%",
          width: "100%",
          backgroundColor: props.background,
          padding: "1.5rem",
        }}
      >
        <Box
          component="img"
          sx={{
            width: "20%",
          }}
          src={"/inl-logo-stacked.png"}
        />
        <Box
          component="img"
          sx={{
            width: "30%",
          }}
          src={"/pnnl-logo-copper.png"}
        />
        <Box
          component="img"
          sx={{
            width: "30%",
          }}
          src={"/sapere-logo.png"}
        />
      </Toolbar>
    </>
  );
}

export default Logos;
