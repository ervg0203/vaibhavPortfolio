import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

import { Grid, Container, Button, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

import { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

import pdf from "./Resume.pdf";

export default function Resume() {
  const [width, setWidth] = useState(1200);
  const theme = useTheme();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid container justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          href={pdf}
          target="_blank"
          sx={{ maxWidth: "250px" }}
        >
          <SaveAltIcon />
          &nbsp;Download
        </Button>
      </Grid>

      <Grid
        container
        justifyContent="center"
        my={5}
        sx={{
          bgcolor: "background.paper",
          p: { xs: 1, md: 3 },
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 900,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Document file={pdf}>
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Box>
      </Grid>
    </Container>
  );
}
