import { useState } from "react";
import Box from "@mui/material/Box";
import { Send } from "@mui/icons-material";
import {
  Container,
  Card,
  TextField,
  Button,
  Typography,
  Snackbar,
  Grid,
  Alert,
} from "@mui/material";

// Contact component
export default function Contact() {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleClose = () => setSnackbar({ ...snackbar, open: false });

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    // Build a mailto: URL to open the user's mail client with prefilled fields
    const subject = formData.get("subject") || "Message from portfolio site";
    const message = formData.get("message") || "";

    const mailto = `mailto:vaibhavgupta2980702@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(message)}`;

    try {
      // Open default mail client
      window.location.href = mailto;
      setSnackbar({
        open: true,
        message:
          "Opened your email app — please review the message and tap Send to send it.",
        severity: "success",
      });
      e.target.reset();
    } catch (err) {
      setSnackbar({
        open: true,
        message:
          "Couldn't open your email app. Please copy the message and send it to vaibhavgupta2980702@gmail.com, or set a default mail client and try again.",
        severity: "error",
      });
    }
  };

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Card raised sx={{ padding: 5, borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h4" align="center">
          Let's Connect
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Have a question, idea, or just want to say hi? I’d love to hear from
          you.
        </Typography>

        <Box
          required
          component="form"
          onSubmit={sendEmail}
          sx={{ width: "100%" }}
        >
          <Grid container spacing={3} my={5}>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12 }}>
                <TextField
                  required
                  fullWidth
                  name="subject"
                  sx={{ height: "55px" }}
                  placeholder="Enter the subject"
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  rows={6}
                  required
                  multiline
                  fullWidth
                  name="message"
                  placeholder="Enter your message"
                />
              </Grid>
              <Grid size={{ xs: 12 }} display="flex" justifyContent="center">
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  endIcon={<Send />}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={5000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleClose}
            severity={snackbar.severity}
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Card>
    </Container>
  );
}
