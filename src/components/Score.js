import * as React from "react";
import { useAnalysisData } from "./Data";

export default function Score({ text }) {
  const [loading, analysisData, error] = useAnalysisData(text);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }
  return <p>{analysisData.type}</p>;
}
