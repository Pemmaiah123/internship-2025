import { Box, Typography, TextField, Button, Stack } from "@mui/material";
import contactImage from "../assets/picture.jpg"; // Replace with your image file

const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
        px: { xs: 4, md: 10 },
        py: 6,
        backgroundColor: "#0e0e2c",
        color: "#fff",
      }}data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
    >
      {/* Contact Form */}
      <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Get in <span style={{ color: "#a855f7" }}>Touch</span>
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Feel free to reach out by filling the form below.
        </Typography>

        <Stack spacing={2} maxWidth="400px" mx={{ xs: "auto", md: 0 }}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            InputLabelProps={{ style: { color: "#aaa" } }}
            InputProps={{
              style: {
                color: "#fff",
                borderColor: "#444",
              },
            }}
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            InputLabelProps={{ style: { color: "#aaa" } }}
            InputProps={{
              style: {
                color: "#fff",
                borderColor: "#444",
              },
            }}
          />
          <TextField
            fullWidth
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            InputLabelProps={{ style: { color: "#aaa" } }}
            InputProps={{
              style: {
                color: "#fff",
                borderColor: "#444",
              },
            }}
          />
          <Button variant="contained" sx={{ bgcolor: "#a855f7", mt: 2 }}>
            Send Message
          </Button>
        </Stack>
      </Box>

      {/* Contact Image */}
      <Box
        component="img"
        src={contactImage}
        alt="Contact illustration"
        sx={{
          width: { xs: "50%", md: "30%" },
          mt: { xs: 2, md: 0 },
          borderRadius: "1rem",
        }}
      />
    </Box>
  );
};

export default Contact;
