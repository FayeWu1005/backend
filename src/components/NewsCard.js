import { React } from "react";
import { useNewsData, useAnalysisData } from "./Data";
import Grid from "@mui/material/Grid";
import { MyCard } from "./Card";

export default function NewsCard({ query }) {
  const { loading, newsData, error } = useNewsData(query);

  const { analysisData, onLoadAnalysisData } = useAnalysisData();
  if (loading) {
    return <p>Loading...</p>;
  }
  if (newsData.length === 0) {
    return <p>No news data return</p>;
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  const onClickAnalysis = (title) => {
    onLoadAnalysisData(title);
  };
  return (
    <Grid container spacing={1} columns={12}>
      {newsData.map((item, id) => (
        <MyCard
          id={id}
          item={item}
          onClickAnalysis={onClickAnalysis}
          analysisData={analysisData}
        />
      ))}
    </Grid>
  );
}
