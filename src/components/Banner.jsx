import { useState, useEffect } from "react";
import { Box, Typography, Button, Grid, Container } from "@mui/material";
import { ArrowRightAlt } from "@mui/icons-material";
import headerImg from "../assets/eya.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import DownloadIcon from '@mui/icons-material/Download';

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [, setIndex] = useState(1);
  const toRotate = ["Software Engineering Student"];
  const period = 500;

  const downloadCv = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf"; 
    link.download = "Eya_Ridene_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <Box
      id="home"
      sx={{
        backgroundColor: "transparent",
        color: "white",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width:"100%"
      }}
    >
      <Container >
        <Grid container alignItems="center" spacing={3}>
          <Grid item xs={12} md={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <Box
                  className={isVisible ? "animate__animated animate__fadeIn" : ""}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#9b6dc6",
                      textTransform: "uppercase",
                      marginBottom: 6,
                      border: "2px solid #9b6dc6",
                      width:"60%",
                      padding :"5px 20px",
                      fontWeight :"bold",
                      textAlign : "center"
                    }}
                  >
                    Welcome to my Portfolio
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{ fontWeight: "bold", marginBottom: 2 , color:'black'}}
                  >
                    {`Hi! I'm Eya`}{" "}
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                  </Typography>
                  <Typography variant="body1" sx={{ marginBottom: 3, color:'black' }}>
                  Hey there! I`m Eya Ridene, a 23-year-old software engineering student at INSAT.
                  Currently pursuing my passion for technology and software development, I`m on a journey to explore and learn new things in the vast world of programming.
                  My interest lies in exploring innovative technologies. I thrive on working on projects that challenge and inspire me.
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#9b6dc6",
                      textTransform: "none",
                      "&:hover": { backgroundColor: "#125ca1" },
                    }}
                    onClick={() => console.log("connect")}
                    endIcon={<ArrowRightAlt />}
                  >
                    Let’s Connect
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      color : "#9b6dc6",
                      borderColor : "#9b6dc6",
                      fontWeight: "bold",
                      // backgroundColor: "#fff",
                      textTransform: "none",
                      marginLeft : 2,
                      "&:hover": { backgroundColor: "#125ca1" },
                    }}
                    onClick={() => downloadCv()}                    
                    endIcon={<DownloadIcon />}
                    >
                    Download Cv
                  </Button>
                </Box>
              )}
            </TrackVisibility>
          </Grid>

          <Grid item xs={12} md={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <Box
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img
                    src={headerImg}
                    alt="Header"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      display: "block",
                      margin: "0 auto",
                      borderRadius:"50%"
                    }}
                  />
                </Box>
              )}
            </TrackVisibility>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;

