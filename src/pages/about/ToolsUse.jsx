import { Grid, Stack, Tooltip } from "@mui/material";
import { VscVscode } from "react-icons/vsc";
import { BsCursor } from "react-icons/bs";
import {
  SiDbeaver,
  SiDatadog,
  SiFedora,
  SiGit,
  SiInsomnia,
  SiGithub,
  SiGithubcopilot,
  SiIntellijidea,
  SiJira,
  SiAndroidstudio,
  SiPostman,
  SiSonarcloud,
  SiCloudflare,
  SiGooglecolab,
  SiJupyter,
  SiOllama,
} from "react-icons/si";

export default function ToolsUse() {
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
          <Tooltip
            arrow
            title="Visual Studio Code :)"
            sx={{ cursor: "pointer" }}
          >
            <VscVscode className="tech-icons" />
          </Tooltip>
        </Grid>
        <Grid size={{ md: 2.3, xs: 5 }}>
          <Tooltip title="Github" sx={{ cursor: "pointer" }}>
            <SiGithub className="tech-icons" />
          </Tooltip>
        </Grid>
        <Grid size={{ md: 2.3, xs: 5 }}>
          <Tooltip title="Git" sx={{ cursor: "pointer" }}>
            <SiGit className="tech-icons" />
          </Tooltip>
        </Grid>
        <Grid size={{ md: 2.3, xs: 5 }}>
          <Tooltip title="IntelliJ IDEA" sx={{ cursor: "pointer" }}>
            <SiIntellijidea className="tech-icons" />
          </Tooltip>
        </Grid>
        <Grid size={{ md: 2.3, xs: 5 }}>
          <Tooltip title="DBeaver" sx={{ cursor: "pointer" }}>
            <SiDbeaver className="tech-icons" />
          </Tooltip>
        </Grid>
        <Grid size={{ md: 2.3, xs: 5 }}>
          <Tooltip title="DataDog" sx={{ cursor: "pointer" }}>
            <SiDatadog className="tech-icons" />
          </Tooltip>
        </Grid>
        <Grid size={{ md: 2.3, xs: 5 }}>
          <Tooltip title="Jira" sx={{ cursor: "pointer" }}>
            <SiJira className="tech-icons" />
          </Tooltip>
        </Grid>
        <Grid size={{ md: 2.3, xs: 5 }}>
          <Tooltip title="Android Studio" sx={{ cursor: "pointer" }}>
            <SiAndroidstudio className="tech-icons" />
          </Tooltip>
        </Grid>
        <Grid size={{ md: 2.3, xs: 5 }}>
          <Tooltip title="Postman" sx={{ cursor: "pointer" }}>
            <SiPostman className="tech-icons" />
          </Tooltip>
        </Grid>
        <Grid size={{ md: 2.3, xs: 5 }}>
          <Tooltip arrow title="Github-Copilot" sx={{ cursor: "pointer" }}>
            <SiGithubcopilot className="tech-icons" />
          </Tooltip>
        </Grid>
      </Grid>
    </Stack>
  );
}
