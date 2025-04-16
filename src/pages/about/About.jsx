import GitHubCalendar from "react-github-calendar";
import { Container, Grid, Typography } from "@mui/material";

import SkillSet from "./SkillSet";
import ToolsUse from "./ToolsUse";

export default function About({ mode }) {
  window.scrollTo(0, 0);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} mt={2} mb={2}>
        <Grid size={{ xs: 12, md: 8 }} className="about-intro">
          <Typography variant="h3" textAlign="center">
            KNOW WHO <strong style={{ color: "#0a66c2" }}> I AM </strong>
          </Typography>

          <Typography variant="h6" mt={2} p={2} sx={{ textAlign: "justify" }}>
            Hey! I'm <strong style={{ color: "#0a66c2" }}>Vaibhav Kumar</strong>{" "}
            from
            <strong style={{ color: "#0a66c2" }}> Haryana, India 🇮🇳</strong>.
            I’m pursuing my B.Tech in Computer Science from
            <strong style={{ color: "#0a66c2" }}>
              {" "}
              Lovely Professional University 🎓
            </strong>
            , always pushing my limits and exploring new tech.
            <br />
            <br />
            I’ve built full-stack projects like an{" "}
            <strong style={{ color: "#0a66c2" }}>Ecommerce site</strong>, a
            <strong style={{ color: "#0a66c2" }}> Spotify clone</strong>, and a
            dynamic
            <strong style={{ color: "#0a66c2" }}> To-do List</strong> — all
            while sharpening my MERN skills and taking on real-world coding
            challenges.
            <br />
            <br />I also completed an intensive summer training on
            <strong style={{ color: "#0a66c2" }}>
              {" "}
              Competitive Programming
            </strong>
            , strengthening my problem-solving skills with 500+ coding problems
            solved across platforms.
            <br />
            <br />
            Outside of tech, I enjoy music 🎧, exploring creative UI ideas 🎨,
            and staying consistent with learning — because progress, like good
            code, is all about iteration 🔁.
          </Typography>
        </Grid>

        <Grid
          size={{ xs: 12, md: 4 }}
          className="about-logo"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <img
            alt="home pic"
            src="home-dev.svg"
            style={{ maxHeight: "350px", width: "100%", objectFit: "contain" }}
          />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" my={3}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography variant="h6" color="primary" align="center">
            "Every bug fixed is a step toward mastery. Keep debugging your way
            to brilliance 💻✨"
          </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" mt={6}>
        <Grid size={{ xs: 12, md: 10 }}>
          <Typography variant="h3" align="center">
            PROFESSIONAL{" "}
            <strong style={{ color: "#0a66c2" }}> SKILLSET </strong>
          </Typography>
          <SkillSet />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" mt={6}>
        <Grid size={{ xs: 12, md: 10 }}>
          <Typography variant="h3" align="center">
            <strong style={{ color: "#0a66c2" }}>TOOLS </strong> I USE
          </Typography>
          <ToolsUse />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" mt={6}>
        <Grid size={{ xs: 12 }}>
          <Typography variant="h3" align="center">
            DAYS I <strong style={{ color: "#0a66c2" }}>CODE</strong>
          </Typography>
          <Grid container justifyContent="center" my={3}>
            <GitHubCalendar
              username="ervg0203"
              blockSize={15}
              blockMargin={5}
              colorScheme={mode === "light" ? "light" : "dark"}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
