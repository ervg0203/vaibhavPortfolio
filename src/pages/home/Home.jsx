import Lottie from "lottie-react";
import { Container, Grid, Typography } from "@mui/material";

import HomeAnimation from "./Home.json";
import TypewriterEffect from "../../components/TypewriterEffect";

// Home Component
export default function Home() {
  window.scrollTo(0, 0);

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 5,
        backgroundImage: "url(/home-bg.jpg)",
        backgroundSize: "cover",
      }}
    >
      <Grid container spacing={4} alignItems="center" mt={2} mb={13}>
        <Grid size={{ xs: 12, md: 7 }} sx={{ pl: { md: 2 } }}>
          <Typography variant="h3" sx={{ pb: 2 }}>
            Hi There!{" "}
            <span className="home-wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </Typography>

          <Typography variant="h3" gutterBottom>
            I'M
            <strong style={{ color: "#0a66c2" }}> VAIBHAV KUMAR</strong>
          </Typography>

          <Typography
            gutterBottom
            variant="h4"
            color="primary"
            fontWeight={500}
            sx={{ mt: 4, height: "30px" }}
          >
            <TypewriterEffect
              strings={[
                "MERN Stack Developer 💻",
                "Competitive Programmer ⚔️",
                "Problem Solver 🧠",
              ]}
              delay={50}
              deleteSpeed={20}
            />
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }} className="home-lotties">
          <Lottie
            animationData={HomeAnimation}
            loop
            autoplay
            style={{ height: 400, width: 400 }}
          />
        </Grid>
      </Grid>

      <Grid container spacing={4} mt={6}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography variant="h3" textAlign="center" gutterBottom>
            LET ME <strong style={{ color: "#0a66c2" }}> INTRODUCE </strong>{" "}
            MYSELF
          </Typography>

          <Typography variant="h6" mt={3} px={2}>
            I'm passionate about building full-stack applications with clean
            design and robust backend logic. I love turning ideas into real
            projects — from an{" "}
            <strong style={{ color: "#0a66c2" }}>Ecommerce Platform</strong> to
            a<strong style={{ color: "#0a66c2" }}> Spotify Clone</strong>, I’ve
            explored various use cases to refine my MERN skills.
            <br />
            <br />
            I’m skilled in languages like
            <strong style={{ color: "#0a66c2" }}>
              {" "}
              JavaScript, C++, Java, Kotlin
            </strong>{" "}
            and love working with
            <strong style={{ color: "#0a66c2" }}>
              {" "}
              MongoDB, React, Node.js, Express, and AWS
            </strong>
            . I also integrate tools like
            <strong style={{ color: "#0a66c2" }}>
              {" "}
              JWT, Stripe, GitHub
            </strong>{" "}
            into production-grade projects.
            <br />
            <br />
            I’ve completed 500+ coding problems across platforms like LeetCode,
            HackerRank, and CodeChef, and I’m always exploring new challenges to
            sharpen my skills.
            <br />
            <br />I believe in consistent growth — every line of code and every
            bug fixed is a step forward 🚀.
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }} className="home-avatar">
          <img
            src="avatar.svg"
            alt="avatar"
            style={{ width: "100%", maxWidth: 300 }}
          />
        </Grid>
      </Grid>

      {/* <Typography variant="h6" align="center" mt={6} color="text.secondary">
                Curious to see what I’ve built? Head over to the <strong style={{ color: "#0a66c2" }}>Projects</strong> section 🚀
            </Typography> */}
    </Container>
  );
}
