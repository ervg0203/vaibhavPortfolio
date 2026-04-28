import { Box } from "@mui/material";
import {
  Container,
  IconButton,
  Stack,
  Typography,
  Tooltip,
} from "@mui/material";
import { X as XIcon, GitHub, LinkedIn, Email, Code } from "@mui/icons-material";

// Latest Copyright component
function Copyright() {
  return (
    <Typography variant="subtitle2" component="h2" color="text.secondary">
      {"Copyright © "}
      <strong style={{ color: "#0a66c2" }}>{"Vaibhav Kumar's "}</strong>
      {new Date().getFullYear()}
    </Typography>
  );
}

// Footer component
export default function Footer() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          pt: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          borderTop: "1px solid",
          borderColor: "divider",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          component="img"
          src="Logo.png"
          sx={{
            height: "auto",
            width: "150px",
            mb: { xs: 0, md: 0 },
            pointerEvents: "none",
          }}
          alt="logo of sitemark"
        />
        <Stack
          direction="row"
          justifyContent="center"
          spacing={1}
          sx={{
            mb: { xs: 1, md: 0 },
            color: "text.secondary",
          }}
        >
          <Tooltip arrow title="GitHub">
            <IconButton
              color="primary"
              aria-label="GitHub"
              sx={{ alignSelf: "center" }}
              onClick={() =>
                window.open(
                  "https://github.com/ervg0203",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              <GitHub />
            </IconButton>
          </Tooltip>
          <Tooltip arrow title="LinkedIn">
            <IconButton
              color="primary"
              aria-label="LinkedIn"
              sx={{ alignSelf: "center" }}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/vaibhav-kumar298",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              <LinkedIn />
            </IconButton>
          </Tooltip>
          <Tooltip arrow title="Gmail">
            <IconButton
              color="primary"
              aria-label="Gmail"
              sx={{ alignSelf: "center" }}
              onClick={() =>
                window.location.assign("mailto:vaibhavgupta2980702@gmail.com")
              }
            >
              <Email />
            </IconButton>
          </Tooltip>
          <Tooltip arrow title="LeetCode">
            <IconButton
              color="primary"
              aria-label="LeetCode"
              sx={{ alignSelf: "center" }}
              onClick={() =>
                window.open(
                  "https://leetcode.com/u/ervg0203/",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              <Code />
            </IconButton>
          </Tooltip>
        </Stack>
        <Box sx={{ mb: { xs: 2, md: 0 } }}>
          <Copyright />
        </Box>
      </Box>
    </Container>
  );
}
