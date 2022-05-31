import styled from "styled-components";
import NewsItem from "./NewsItem";
import { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const sampleArticle = {
  title: "제목",
  description: "내용",
  url: "https://google.com",
  urlToImage: "https://via.placeholder.com/160",
};

const NewsList = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=kr&category=health&apiKey=c26b46932d214b93b655bca244422cfd"
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
    setTimeout(() => {
      AOS.init();
    }, 1000);
  }, []);

  if (loading) {
    return <NewsListBlock>로딩 중 ...</NewsListBlock>;
  }
  if (!articles) {
    return null;
  }
  return (
    <NewsListBlock>
      {articles.map((article) => {
        return (
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <NewsItem key={article.url} article={article} />
            <br />
            <hr />
          </div>
        );
      })}
    </NewsListBlock>
  );
};

export default NewsList;
