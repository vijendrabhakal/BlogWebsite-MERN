import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const About = () => {
  return (
    <Card
      sx={{
        backgroundColor: "#f5f5f5",
        maxWidth: 400,
        margin: "auto",
        marginTop: 30,
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          About Vijendra Bhakal
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Software Engineer | Entrepreneur | Student
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ display: "flex", alignItems: "center", marginTop: 2 }}
        >
          <EmailIcon sx={{ marginRight: 1 }} /> work.vbhakal@gmail.com
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <PhoneIcon sx={{ marginRight: 1 }} /> +123-456-7890{" "}
          {/* Replace with your mobile number */}
        </Typography>
        <Button
          href="https://github.com/vijendrabhakal"
          target="_blank"
          rel="noopener noreferrer"
          variant="outlined"
          color="primary"
          sx={{ marginTop: 2 }}
        >
          View My Projects
        </Button>
      </CardContent>
    </Card>
  );
};

export default About;
