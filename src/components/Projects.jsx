import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Container,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";
import project1Img from "../assets/projects/ecommerce.jpg";
import project2Img from "../assets/projects/chatapp.png";
import project3Img from "../assets/projects/clinic.png";
import project4Img from "../assets/projects/cicd.png";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      image: project1Img,
      description:
        "A full-stack e-commerce platform for buying and selling second-hand products, offering secure authentication and advanced search features.",
      demoLink: "https://demo-ecommerce.com",
      repoLink: "https://github.com/username/ecommerce",
    },
    {
      title: "Chat Application",
      image: project2Img,
      description:
        "A simple chat application that facilitates real-time messaging, allowing users to connect, share messages, and communicate seamlessly.",
      demoLink: "https://demo-chat.com",
      repoLink: "https://github.com/username/chatapp",
    },
    {
      title: "Clinic Management Platform",
      image: project3Img,
      description:
        "A comprehensive application for managing doctors, patients, appointments, and medical records to streamline operations and reduce errors.",
      demoLink: "https://demo-clinic.com",
      repoLink: "https://github.com/username/clinic",
    },
    {
      title: "CI/CD Pipeline",
      image: project4Img,
      description:
        "CI/CD Pipeline for Application Deployment automates builds, tests, and deployments, ensuring reliability and code quality.",
      demoLink: "https://demo-cicd.com",
      repoLink: "https://github.com/username/cicd",
    },
  ];

  return (
    <Container>
      <Box
        id="projects"
        sx={{
          textAlign: "center",
          padding: "50px 20px",
          minHeight: "80vh",
        }}
      >
        {/* Section Title */}
        <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 1 }}>
          Projects
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "gray", marginBottom: 6 }}>
          A selection of my work
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "8px",
                  boxShadow: 3,
                  "&:hover .hover-overlay": {
                    opacity: 1,
                    backdropFilter: "blur(2px)",
                    cursor : "pointer"
                  },
                  "&:hover .hover-content": {
                    opacity: 0.3,
                  },
                }}
              >
                {/* Card */}
                <Card className="hover-content" sx={{ transition: "opacity 0.3s ease-in-out" }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{ fontWeight: "bold" }}
                    >
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>

                {/* Hover Overlay */}
                <Box
                  className="hover-overlay"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: 0,
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  {/* Buttons */}
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Button
                      size="medium"
                      variant="contained"
                      sx={{ bgcolor: "#9b6dc6", color: "#fff" }}
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<VisibilityIcon />}
                    >
                      Demo
                    </Button>
                    <Button
                      size="medium"
                      variant="outlined"
                      sx={{ color: "#9b6dc6", borderColor: "#9b6dc6" }}
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<GitHubIcon />}
                    >
                      Repo
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Projects;
