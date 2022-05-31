import React, { useState } from "react";
import FooterComponent from "./Footer";
import axios from "axios";
import NewsList from "./NewsList";
export default function NewComponent() {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=kr&category=health&apiKey=c26b46932d214b93b655bca244422cfd"
      );
      setData(response);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <hr />
      <NewsList />
      <br />
      <br />
      <FooterComponent />
    </div>
  );
}
