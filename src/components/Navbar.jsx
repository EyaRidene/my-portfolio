import { useState, useEffect } from "react";
import { Toolbar, Avatar, Box, AppBar, Button, Typography } from "@mui/material";
import { Link } from "react-scroll";
import eya from "../assets/eya.jpg";
import EmailIcon from "@mui/icons-material/Email";

const Navbar = () => {
  const sections = ["Home", "Qualifications", "Skills", "Projects", "Certifications"];
  const [elevate, setElevate] = useState(false);

  // Add scroll listener to detect when the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setElevate(true);
      } else {
        setElevate(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "transparent",
        color: "#000",
        boxShadow: elevate ? "0 4px 10px rgba(0, 0, 0, 0.2)" : "none",
        backdropFilter: elevate ? "blur(6px)" : "none",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Left: Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar
            alt="EyaRidene"
            src={eya}
            sx={{ width: 40, height: 40, cursor: "pointer" }}
          />
          <Typography variant="p" sx={{ color: "black", fontWeight: "600" }}>
            Eya Ridene
          </Typography>
        </Box>

        {/* Center: Sections */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          {sections.map((section) => (
            <Link
              key={section}
              to={section.toLowerCase().replace(" ", "")}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active-link"
              offset={-60}
              style={{
                textDecoration: "none",
                fontSize: "16px",
                cursor: "pointer",
                color: "black",
              }}
            >
              {section}
            </Link>
          ))}
        </Box>

        <Link
          to="contact"
          smooth={true}
          duration={500}
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: "#9b6dc6",
              color: "#fff",
              textTransform: "none",
              display: "flex",
              alignItems: "center",
              "&:hover": { bgcolor: "#125ca1" },
            }}
            endIcon={<EmailIcon />}
          >
            Contact Me
          </Button>
        </Link>
      </Toolbar>
      <style>
        {`
          .active-link {
            color: #9b6dc6 !important;
            font-weight: bold;
          }
        `}
      </style>
    </AppBar>
  );
};

export default Navbar;