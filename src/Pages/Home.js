import React from "react";
import Box from "@mui/material/Container";
import { Container } from "@mui/system";
import TwitterList from "../components/TwitterRank";
import Header from "../components/Header";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <br />
      <h2 className="tweet">Australia Top 10 Trending Tweets</h2>
      <br />

      <Container maxWidth="sm" className="tweet-rank">
        <Box>
          <TwitterList />
        </Box>
      </Container>
      <Footer />
    </div>
  );
}
