import { Grid, Stack, Tooltip } from "@mui/material";
import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { DiNodejs, DiJava, DiDjango } from "react-icons/di";
import {
  SiCplusplus,
  SiDotnet,
  SiPostgresql,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiLangchain,
  SiTensorflow,
  SiPytorch,
  SiFlask,
  SiHuggingface,
  SiReact,
  SiMongodb,
  SiPython,
  SiAngular,
  SiGit,
  SiJavascript,
  SiKotlin,
  SiSpringboot,
  SiExpress,
  SiJsonwebtokens,
} from "react-icons/si";

// Techstack Component
export default function Techstack() {
  return (
    <Stack>
      <Grid
        mt={3}
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        style={{ paddingBottom: "50px" }}
      >
        <Grid size={{ md: 2.3, xs: 5 }}>
          <Tooltip arrow title="JAVA" sx={{ cursor: "pointer" }}>
            <DiJava className="tech-icons" />
          </Tooltip>
        </Grid>
        <Grid size={{ md: 2.3, xs: 5 }}>
          <Tooltip arrow title="Spring Boot" sx={{ cursor: "pointer" }}>
            <SiSpringboot className="tech-icons" />
          </Tooltip>
        </Grid>
        <Grid size={{ md: 2.3, xs: 5 }}>
          <Tooltip arrow title="Postgress" sx={{ cursor: "pointer" }}>
            <SiPostgresql className="tech-icons" />
          </Tooltip>
        </Grid>
        <Grid size={{ md: 2.3, xs: 5 }}>
          <Tooltip arrow title="C++" sx={{ cursor: "pointer" }}>
            <SiCplusplus className="tech-icons" />
          </Tooltip>
        </Grid>
        <Grid size={{ md: 2.3, xs: 5 }}>
          <Tooltip arrow title="JavaScript" sx={{ cursor: "pointer" }}>
            <SiJavascript className="tech-icons" />
          </Tooltip>
        </Grid>
        <Grid size={{ md: 2.3, xs: 5 }}>
          <Tooltip arrow title="Python">
            <SiPython className="tech-icons" />
          </Tooltip>
        </Grid>
        <Grid size={{ md: 2.3, xs: 5 }}>
          <Tooltip arrow title="MongoDB" sx={{ cursor: "pointer" }}>
            <SiMongodb className="tech-icons" />
          </Tooltip>
        </Grid>
        <Grid size={{ md: 2.3, xs: 5 }}>
          <Tooltip arrow title="Express.js" sx={{ cursor: "pointer" }}>
            <SiExpress className="tech-icons" />
          </Tooltip>
        </Grid>
        <Grid size={{ md: 2.3, xs: 5 }}>
          <Tooltip arrow title="ReactJS" sx={{ cursor: "pointer" }}>
            <SiReact className="tech-icons" />
          </Tooltip>
        </Grid>
        <Grid size={{ md: 2.3, xs: 5 }}>
          <Tooltip arrow title="NodeJS" sx={{ cursor: "pointer" }}>
            <DiNodejs className="tech-icons" />
          </Tooltip>
        </Grid>
        <Grid size={{ md: 2.3, xs: 5 }}>
          <Tooltip arrow title="Kotlin" sx={{ cursor: "pointer" }}>
            <SiKotlin className="tech-icons" />
          </Tooltip>
        </Grid>
        <Grid size={{ md: 2.3, xs: 5 }}>
          <Tooltip arrow title="Microsoft Azure" sx={{ cursor: "pointer" }}>
            <VscAzure className="tech-icons" />
          </Tooltip>
        </Grid>
        <Grid size={{ md: 2.3, xs: 5 }}>
          <Tooltip arrow title="JWT" sx={{ cursor: "pointer" }}>
            <SiJsonwebtokens className="tech-icons" />
          </Tooltip>
        </Grid>
        <Grid size={{ md: 2.3, xs: 5 }}>
          <Tooltip arrow title="Angular" sx={{ cursor: "pointer" }}>
            <SiAngular className="tech-icons" />
          </Tooltip>
        </Grid>
        <Grid size={{ md: 2.3, xs: 5 }}>
          <Tooltip arrow title="Git" sx={{ cursor: "pointer" }}>
            <SiGit className="tech-icons" />
          </Tooltip>
        </Grid>
      </Grid>
    </Stack>
  );
}
