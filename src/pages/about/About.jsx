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
            Hey! I'm{" "}
            <strong style={{ color: "#0a66c2" }}>Vaibhav Kumar.</strong> I’m
            pursuing my B.Tech. in Computer Science from
            <strong style={{ color: "#0a66c2" }}>
              {" "}
              Lovely Professional University 🎓
            </strong>
            .
            <br />
            <br />
            I’m currently a{" "}
            <strong style={{ color: "#0a66c2" }}>
              Software Developer Intern
            </strong>{" "}
            at 73Strings (GoKloud), Bengaluru, where I re-architected a
            Java/Spring Boot financial engine, cut latency from minutes to under
            a second, and scaled it to handle bulk processing of 100K+ records.
            <br />
            <br />
            I’ve built projects like{" "}
            <strong style={{ color: "#0a66c2" }}>
              SpotBus (Real-Time Bus Tracking & ETA System)
            </strong>
            , <strong style={{ color: "#0a66c2" }}>Ecommerce Website</strong>,
            <strong style={{ color: "#0a66c2" }}>
              {" "}
              SecureDocs Application
            </strong>
            , <strong style={{ color: "#0a66c2" }}>Weather Dashboard</strong> —
            all while sharpening my skills and taking on real-world coding
            challenges.
            <br />
            <br />I also worked as a{" "}
            <strong style={{ color: "#0a66c2" }}>
              Freelance Software Engineer
            </strong>{" "}
            at Outlier AI, evaluating AI-generated code in C++ and Java,
            debugging edge cases, and improving correctness and performance.
            <br />
            <br />
            Outside of tech, I enjoy music 🎧, exploring creative ideas, and
            staying consistent with learning — because progress, like good code,
            is all about iteration 🔁.
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
            <img
              src={`https://leetcard.jacoblin.cool/ervg0203?theme=${
                mode === "light" ? "light" : "dark"
              }&ext=heatmap`}
              alt="LeetCode activity calendar"
              style={{ width: "100%", maxWidth: "900px", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
