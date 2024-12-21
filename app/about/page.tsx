import React from "react";
import { Container, Typography, Box } from "@mui/material";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

const AboutUs: React.FC = () => {
  return (
    <div>
      <Header />
      <Container>
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" component="p">
            Welcome to our food app! We are dedicated to providing you with the
            best food experience.
          </Typography>
          <Typography variant="body1" component="p">
            Our mission is to bring delicious food to your doorstep with just a
            few clicks.
          </Typography>
          <Typography variant="body1" component="p">
            Thank you for choosing us!
          </Typography>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default AboutUs;
