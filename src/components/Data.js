import { useEffect, useState } from "react";

function getTwitterData() {
  return fetch("/twitter")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((res) =>
      res.map((data) => {
        return {
          name: data.name,
          volume: data.tweet_volume,
          url: data.url,
          query: data.query,
        };
      })
    );
}

function getNewsData(query) {
  let updateQuery = query
    .replace(/([A-Z]+)/g, " $1")
    .replace(/([A-Z][a-z])/g, " $1");
  const newsAPI = `./news/${updateQuery}`;
  return fetch(newsAPI)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((res) =>
      res.map((data) => {
        return {
          source: data.source.name,
          title: data.title,
          description: data.description,
          url: data.url,
          image: data.urlToImage,
          creator: data.author,
          // creator: data.creator,
          // title: data.title,
          // description: data.description,
          // url: data.link,
          // image: data.image_url,
        };
      })
    );
}

function getAnalysisData(text) {
  // let searchText = text.split(" ").join("+");
  // console.log(searchText);
  const analysisAPI = `./analysis/${text}`;
  return fetch(analysisAPI)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((res) => {
      return res;
    });
}

export function useTwitterData() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTwitterData()
      .then((data) => setData(data))
      .catch(() => setError(error))
      .finally(() => setLoading(false));
  }, []);
  return {
    loading,
    data,
    error: null,
  };
}

export function useNewsData(query) {
  const [newsData, setNewsData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNewsData(query)
      .then((newsData) => setNewsData(newsData))
      .catch(() => setError(error))
      .finally(() => {
        setLoading(false);
      });
  }, [query]);
  return {
    loading,
    newsData,
    error,
  };
}

export function useAnalysisData() {
  const [analysisData, setAnalysisData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const onLoadAnalysisData = (title) => {
    getAnalysisData(title)
      .then((analysisData) => setAnalysisData(analysisData))
      .catch(() => setError(error))
      .finally(() => {
        setLoading(false);
      });
  };
  // useEffect(() => {
  //   onLoadAnalysisData(text);
  //   // getAnalysisData(text)
  //   //   .then((analysisData) => setAnalysisData(analysisData))
  //   //   .catch(() => setError(error))
  //   //   .finally(() => {
  //   //     setLoading(false);
  //   //   });
  // }, [text]);
  return {
    loading,
    analysisData,
    error,
    onLoadAnalysisData,
  };
}
