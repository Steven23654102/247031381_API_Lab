import React, { useEffect, useState } from 'react';
import { Card, Row, Col } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { useNavigate } from 'react-router-dom';

type Article = {
  id: number;
  title: string;
  fullText: string;
  cover: string;
};

const Articles: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/articles.json')
      .then(res => res.json())
      .then(data => setArticles(data));
  }, []);

  return (
    <>
      <h1>All Articles</h1>
      <Row gutter={[16, 16]}>
        {articles.map(article => (
          <Col key={article.id} xs={24} sm={12} md={8}>
            <Card
              hoverable
              cover={<img alt={article.title} src={article.cover} />}
              onClick={() => navigate(`/a/${article.id}`)}
            >
              <Meta title={article.title} description="Click for details" />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Articles;
