import { Box, Typography, IconButton, Grid, Container } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1E1E1E",
        color: "white",
        padding: "20px 0",
      }}
    >
      <Container>
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "medium", marginBottom: 2 }}>
              About Me
            </Typography>
            <Typography variant="body2" sx={{ color: "gray" }}>
              Hey there! I m Eya Ridene, a software engineering student passionate about web development, DevOps, and innovative technologies.
            </Typography>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "medium", marginBottom: 2 }}>
              Quick Links
            </Typography>
            <Box>
              <Typography
                variant="body2"
                sx={{
                  color: "gray",
                  textDecoration: "none",
                  "&:hover": { color: "#9b6dc6" },
                  cursor: "pointer",
                }}
              >
                Home
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "gray",
                  textDecoration: "none",
                  "&:hover": { color: "#9b6dc6" },
                  cursor: "pointer",
                  marginTop: 1,
                }}
              >
                About Me
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "gray",
                  textDecoration: "none",
                  "&:hover": { color: "#9b6dc6" },
                  cursor: "pointer",
                  marginTop: 1,
                }}
              >
                Projects
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "gray",
                  textDecoration: "none",
                  "&:hover": { color: "#9b6dc6" },
                  cursor: "pointer",
                  marginTop: 1,
                }}
              >
                Contact
              </Typography>
            </Box>
          </Grid>

          {/* Social Links Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "medium", marginBottom: 2 }}>
              Follow Me
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <IconButton
                sx={{ color: "white", "&:hover": { color: "#9b6dc6" } }}
                component="a"
                href="https://facebook.com"
                target="_blank"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                sx={{ color: "white", "&:hover": { color: "#9b6dc6" } }}
                component="a"
                href="https://twitter.com"
                target="_blank"
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                sx={{ color: "white", "&:hover": { color: "#9b6dc6" } }}
                component="a"
                href="https://linkedin.com"
                target="_blank"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                sx={{ color: "white", "&:hover": { color: "#9b6dc6" } }}
                component="a"
                href="https://github.com"
                target="_blank"
              >
                <GitHubIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom Section */}
        <Box
          sx={{
            borderTop: "1px solid gray",
            marginTop: "20px",
            paddingTop: "10px",
            textAlign: "center",
          }}
        >
          <Typography variant="body2" sx={{ color: "gray" }}>
            © {new Date().getFullYear()} Eya Ridene. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
