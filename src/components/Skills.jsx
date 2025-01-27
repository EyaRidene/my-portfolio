import { useState } from "react";
import { Box, Typography, Tab, Tabs, Grid, Container } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import BuildIcon from "@mui/icons-material/Build";

import pythonLogo from "../assets/logos/python.png";
import javaLogo from "../assets/logos/java.png";
import cppLogo from "../assets/logos/cpp.png";
import reactLogo from "../assets/logos/react.png";
import nodeLogo from "../assets/logos/node.png";
import dockerLogo from "../assets/logos/docker.png";
import awsLogo from "../assets/logos/aws.png";
import gitLogo from "../assets/logos/git.png";
import phpLogo from "../assets/logos/php.png";
import laravelLogo from "../assets/logos/laravel.png";
import vueLogo from "../assets/logos/vue.png";
import angularLogo from "../assets/logos/angular.png";
import nuxtLogo from "../assets/logos/Nuxt.png";
import netLogo from "../assets/logos/Net.png";
import nestLogo from "../assets/logos/Nest.png";
import CLogo from "../assets/logos/c.png";
import CsharpLogo from "../assets/logos/csharp.png";
import htmlLogo from "../assets/logos/html.png";
import cssLogo from "../assets/logos/css.png";
import jsLogo from "../assets/logos/js.png";
import tsLogo from "../assets/logos/ts.png";
import ansibleLogo from "../assets/logos/ansible.png";
import terraformLogo from "../assets/logos/terraform.png";
import githubLogo from "../assets/logos/github.png";
import gitlabLogo from "../assets/logos/gitlab.png";
import azureLogo from "../assets/logos/azure.png";
import grafanaLogo from "../assets/logos/grafana.png";
import promLogo from "../assets/logos/prom.png";
import k8s from "../assets/logos/kubernetes.png";
import tailwindLogo from "../assets/logos/tailwind.png";
import mongoLogo from "../assets/logos/mongo.png";
import mysqlLogo from "../assets/logos/mysql.png";
import postresLogo from "../assets/logos/postgres.png";
import graphqlLogo from "../assets/logos/graphql.png";

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const skillCategories = [
    {
      category: "Programming Languages",
      logos: [
        { src: CLogo, alt: "React" },
        { src: cppLogo, alt: "C++" },
        { src: CsharpLogo, alt: "React" },
        { src: pythonLogo, alt: "Python" },
        { src: javaLogo, alt: "Java" },
        { src: phpLogo, alt: "Node.js" }, 
        { src: jsLogo, alt: "Node.js" },
        { src: tsLogo, alt: "Node.js" },       
      ],
    },
    {
      category: "Developer Stack",
      logos: [
        { src: htmlLogo, alt: "React" },
        { src: cssLogo, alt: "Node.js" },
        { src: nodeLogo, alt: "Node.js" },
        { src: reactLogo, alt: "React" },
        { src: vueLogo, alt: "C++" },
        { src: nuxtLogo, alt: "React" },
        { src: angularLogo, alt: "Python" },
        { src: nestLogo, alt: "Node.js" },
        { src: netLogo, alt: "Node.js" },
        { src: laravelLogo, alt: "Java" },
        { src: tailwindLogo, alt: "Java" },
        { src: mongoLogo, alt: "Java" },
        { src: mysqlLogo, alt: "Java" },
        { src: postresLogo, alt: "Java" },
        { src: graphqlLogo, alt: "Java" },
      ],
    },
    {
      category: "DevOps Tools",
      logos: [
        { src: gitLogo, alt: "Git" },
        { src: githubLogo, alt: "Git" },
        { src: dockerLogo, alt: "Docker" },
        { src: k8s, alt: "Git" },
        { src: ansibleLogo, alt: "Git" },
        { src: terraformLogo, alt: "Git" },
        { src: gitlabLogo, alt: "Git" },
        { src: awsLogo, alt: "AWS" },
        { src: azureLogo, alt: "Git" },
        { src: promLogo, alt: "Git" },
        { src: grafanaLogo, alt: "Git" },
      ],
    },
  ];

  return (
    <Container>
    <Box
      id="skills"
      sx={{
        textAlign: "center",
        padding: "50px 20px",
        minHeight: "60vh",
        backgroundColor : "#fff",
        borderRadius : "40px"
      }}
    >
      {/* Section Title */}
      <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 1 }}>
        Skills
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "gray", marginBottom: 6 }}>
        My technical expertise
      </Typography>

      {/* Tabs */}
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        centered
        sx={{
            
            fontSize: "20px",
            marginBottom: 6,
            "& .MuiTab-root": {
            textTransform: "none",
            fontWeight: "bold",
            color: "gray", 
            },
            "& .Mui-selected": {
            color: "#9b6dc6",
            },
            "& .MuiTabs-indicator": {
            backgroundColor: "#9b6dc6",
            height: 3,
            },
        }}
      >
        <Tab
          label={
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }} >
              <CodeIcon /> Programming Languages
            </Box>
          }
        />
        <Tab
          label={
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <StorageIcon /> Developer Stack
            </Box>
          }
        />
        <Tab
          label={
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <BuildIcon /> DevOps Tools
            </Box>
          }
        />
      </Tabs>

      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {skillCategories[activeTab].logos.map((logo, index) => (
          <Grid item xs={4} sm={3} md={2} key={index}>
            <img
              src={logo.src}
              alt={logo.alt}
              style={{ maxWidth: "100px", height: "auto" }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
    </Container>
  );
};

export default Skills;
