import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  IconButton,
  Container,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
  return (
    <Container>
    <Box
      id="contact"
      sx={{
        // backgroundColor: "#121212",
        // color: "white",
        // padding: "50px 20px",
        // minHeight: "90vh",
        textAlign: "center",
        padding: "50px 20px",
        minHeight: "60vh",
        backgroundColor : "#fff",
        borderRadius : "40px",
        marginBottom :"50px"
      }}
    >
    

        {/* Section Title */}
      <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 1 }}>
        Contact Me
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "gray", marginBottom: 6 }}>
        Keep in touch
      </Typography>
      <Grid container spacing={4} alignItems="start">
        <Grid item xs={12} md={4}>
          <Box
            sx={{
            //   backgroundColor: "#fff" rgba(0,0,0,0.2),
            border : "1px solid rgba(0,0,0,0.2) ",
              padding: "20px",
              borderRadius: "8px",
            //   boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "medium", marginBottom: 3, color : "#9b6dc6" }}>
                Enjoyed my work ?             
            </Typography>

            <Box sx={{ display: "flex", alignItems: "start", marginBottom: 2 , textAlign :"left"}}>
              <EmailIcon sx={{ fontSize: 30, marginRight: 2, color: "#9b6dc6" }} />
              <Box>
                <Typography variant="subtitle2" sx={{ color: "gray" }}>
                  EMAIL
                </Typography>
                <Typography variant="body2">eya.ridene@insat.ucar.tn</Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "start", marginBottom: 2 , textAlign :"left" }}>
              <PhoneIcon sx={{ fontSize: 30, marginRight: 2, color: "#9b6dc6" }} />
              <Box>
                <Typography variant="subtitle2" sx={{ color: "gray" }}>
                  PHONE
                </Typography>
                <Typography variant="body2">+216 96 590 181</Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "start", marginBottom: 2, textAlign :"left"}}>
              <LocationOnIcon
                sx={{ fontSize: 30, marginRight: 2, color: "#9b6dc6" }}
              />
              <Box>
                <Typography variant="subtitle2" sx={{ color: "gray" }}>
                  LOCATION
                </Typography>
                <Typography variant="body2">Tunis, Tunisia</Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", justifyContent :"center", gap: 0, marginTop: 4 }}>
              <Button sx={{ color: "#9b6dc6"}}>
              <FacebookIcon sx={{ fontSize: 30, marginRight: 2, color: "#9b6dc6", border :"1px solid #9b6dc6" , padding : 0.5, borderRadius : "50%"  }}/>
              </Button>
              <IconButton sx={{ color: "#9b6dc6" }}>
              <InstagramIcon sx={{ fontSize: 30, marginRight: 2, color: "#9b6dc6", border :"1px solid #9b6dc6" , padding : 0.5, borderRadius : "50%"  }}/>
              </IconButton>
              <IconButton sx={{ color: "#9b6dc6" }}>
              <GitHubIcon sx={{ fontSize: 30, marginRight: 2, color: "#9b6dc6", border :"1px solid #9b6dc6" , padding : 0.5, borderRadius : "50%"  }}/>
              </IconButton>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={8}>
          <Box
             sx={{
                //   backgroundColor: "#fff" rgba(0,0,0,0.2),
                border : "1px solid rgba(0,0,0,0.2) ",
                  padding: "20px",
                  borderRadius: "8px",
                //   boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                }}
          >
            {/* <Typography variant="h6" sx={{ fontWeight: "medium", marginBottom: 3, color:"#9b6dc6" }}>
              Contact Form
            </Typography> */}

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Full Name"
                  variant="outlined"
                  sx={{
                    input: { color: "white" }, // Style for the input text
                    "& .MuiInputLabel-root": {
                    color: "gray", // Default label color
                    },
                    "& .MuiInputLabel-root:hover": {
                    color: "#9b6dc6", // Hover color for the label
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                    color: "#9b6dc6", // Focused label color
                    },
                    "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                        borderColor: "gray", // Default border color
                    },
                    "&:hover fieldset": {
                        borderColor: "#9b6dc6", // Border color on hover
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: "#9b6dc6", // Border color on focus
                    },
                    },
                }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email Address"
                  variant="outlined"
                  sx={{
                    input: { color: "white" }, // Style for the input text
                    "& .MuiInputLabel-root": {
                    color: "gray", // Default label color
                    },
                    "& .MuiInputLabel-root:hover": {
                    color: "#9b6dc6", // Hover color for the label
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                    color: "#9b6dc6", // Focused label color
                    },
                    "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                        borderColor: "gray", // Default border color
                    },
                    "&:hover fieldset": {
                        borderColor: "#9b6dc6", // Border color on hover
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: "#9b6dc6", // Border color on focus
                    },
                    },
                }}
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                fullWidth
                label="Your Message"
                variant="outlined"
                multiline
                rows={6}
                sx={{
                    input: { color: "white" }, // Style for the input text
                    "& .MuiInputLabel-root": {
                    color: "gray", // Default label color
                    },
                    "& .MuiInputLabel-root:hover": {
                    color: "#9b6dc6", // Hover color for the label
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                    color: "#9b6dc6", // Focused label color
                    },
                    "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                        borderColor: "gray", // Default border color
                    },
                    "&:hover fieldset": {
                        borderColor: "#9b6dc6", // Border color on hover
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: "#9b6dc6", // Border color on focus
                    },
                    },
                }}
                />

              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#9b6dc6",
                    color: "#fff",
                    textTransform: "none",
                    padding: "10px 20px",
                    "&:hover": {
                      backgroundColor: "#9b6dc6",
                    },
                  }}
                  endIcon={<SendIcon />}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
    </Container>

  );
};

export default Contact;
