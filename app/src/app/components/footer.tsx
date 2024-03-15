// Material
import { Box, Link, Toolbar } from "@mui/material";

type props = {
  font: string;
};

function Footer(props: props) {
  return (
    <>
      <Toolbar
        sx={{
          height: "100%",
          width: "100%",
        }}
      >
        <Box sx={{ padding: "0", fontSize: "0.75rem", color: props.font }}>
          Contact us: <br />
          <Link
            sx={{ padding: "0", color: props.font }}
            href="mailto:juan.gallegocalderon@inl.gov"
          >
            {" "}
            Research
          </Link>{" "}
          |{" "}
          <Link
            sx={{ padding: "0", color: props.font }}
            href="mailto:nathan.woodruff@inl.gov"
          >
            Site Administrator
          </Link>{" "}
          |{" "}
          <Link
            sx={{ padding: "0", color: props.font }}
            href="https://doe.responsibledisclosure.com/hc/en-us"
          >
            Department of Energy Vulnerability Disclosure Program
          </Link>
        </Box>
      </Toolbar>
    </>
  );
}

export default Footer;
