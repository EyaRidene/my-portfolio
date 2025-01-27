import { Box, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, Container } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
// Import project images (replace these paths with your actual images)
import project1Img from "../assets/projects/ecommerce.jpg";
import project2Img from "../assets/projects/chatapp.png";
import project3Img from "../assets/projects/clinic.png";
import project4Img from "../assets/projects/cicd.png";


// import project12Img from "../assets/eya.jpg";

const Projects = () => {
  // Sample project data
  const projects = [
    {
      title: "E-commerce Platform",
      image: project1Img,
      description: "A full-stack e-commerce platform for buying and selling second-hand products, offering secure authentication and advanced search features.",
      demoLink: "https://demo-ecommerce.com",
      repoLink: "https://github.com/username/ecommerce",
    },
    {
      title: "Chat Application",
      image: project2Img,
      description: "A simple chat application that facilitates real-time messaging, allowing users to connect, share messages, and communicate seamlessly.",
      demoLink: "https://demo-portfolio.com",
      repoLink: "https://github.com/username/portfolio",
    },

    {
        title: "Clinic Management Platform",
        image: project3Img,
        description: "A comprehensive application for managing doctors, patients, appointments, and medical records to streamline operations and reduce errors.",
        demoLink: "https://demo-portfolio.com",
        repoLink: "https://github.com/username/portfolio",
      },

      {
        title: "CI/CD Pipeline",
        image: project4Img,
        description: "CI/CD Pipeline for Application Deployment automates builds, tests, and deployments, ensuring reliability and code quality.",
        demoLink: "https://demo-portfolio.com",
        repoLink: "https://github.com/username/portfolio",
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

      <Grid container sx={{ gap : 0, rowGap : 5}}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={12} md={6} key={index}>
            <Card sx={{ maxWidth: 440, margin: "auto", boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="250"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight:"bold" }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button
                  size="medium"
                  variant="contained"
                  color="primary"
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ bgcolor :"#9b6dc6" }}
                  endIcon={<VisibilityIcon />}
                >
                  Demo
                </Button>
                <Button
                  size="medium"
                  variant="outlined"
                  color="primary"
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color : "#9b6dc6", borderColor :"#9b6dc6" }}
                  endIcon={<GitHubIcon />}

                >

                  Repo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Container>
  );
};

export default Projects;
