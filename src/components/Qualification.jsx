import { useState } from "react";
import {
  Box,
  Typography,
  Tab,
  Tabs,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from "@mui/lab";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const Qualifications = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const education = [
    {
      title: "Software Engineering",
      subtitle: "INSAT",
      date: "2021 - Present",
    },
    {
      title: "Common Core in Mathematics , Physics and CS",
      subtitle: "INSAT",
      date: "2020 - 2021",
    },
    {
        title: "Bachelor’s degree in Mathematics with honors",
        subtitle: "Pioneer High School of Tunis",
        date: "2016 - 2020",
    },
  ];

  const work = [
    {
      title: " Full-Stack Developer",
      subtitle: "Tunis - Liberrex",
      date: "06/2024- 12/2024",
    },
    {
      title: "Freelance Full-Stack Developer",
      subtitle: "Tunis -  Private Academic School",
      date: "04/2024- 07/2024",
    },
    {
        title: "DevOps Intern",
        subtitle: "Tunis -  CarNet",
        date: "07/2023- 09/2023",
    },
  ];

  return (
    <Box
      id="qualifications"
      sx={{
        textAlign: "center",
        padding: "50px 20px",
        minHeight: "80vh",

      }}
    >
      {/* Section Title */}
      <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 1 }}>
        Qualification
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "gray", marginBottom: 4 }}>
        My personal journey
      </Typography>

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
            <Box sx={{ display: "flex", alignItems: "center", gap: 1}}>
              <SchoolIcon /> Education
            </Box>
          }
        />
        <Tab
          label={
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <WorkIcon /> Work
            </Box>
          }
        />
      </Tabs>

      <Timeline position="alternate" sx={{ margin: "auto" }}>
        {(activeTab === 0 ? education : work).map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{
                color: "gray",
                fontSize: "14px",
              }}
            >
              <CalendarTodayIcon
                sx={{
                  fontSize: "16px",
                  verticalAlign: "middle",
                  marginRight: 1,
                }}
              />
              {item.date}
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot sx={{ bgcolor: "#9b6dc6", width:10 , height: 10 }} />
                <TimelineConnector sx={{ height: 80, width:4, bgcolor: "#9b6dc6" }} />
            </TimelineSeparator>

            <TimelineContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {item.title}
              </Typography>
              <Typography variant="subtitle2" sx={{ color: "gray" }}>
                {item.subtitle}
              </Typography>
              {/* <Typography variant="subtitle2" sx={{ color: "black" }}>
                {item.subtitle}
              </Typography> */}
            </TimelineContent>
          </TimelineItem>
        ))}

      </Timeline>
    </Box>
  );
};

export default Qualifications;