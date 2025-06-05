import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Card } from 'antd';
import axios from 'axios';
import { api } from './common/http-common';      // 確定 api.uri = 'http://localhost:10888/api/v1'

const DetailArticle = () => {
  const { aid } = useParams();                  // 路由 /a/:aid
  const navigate = useNavigate();
  const [article, setArticle] = React.useState<any>(null);

  React.useEffect(() => {
    axios.get(`${api.uri}/articles/${aid}`)     // 後端 GET /articles/:id
      .then(res => setArticle(res.data))
      .catch(err => console.error('fetch article error', err));
  }, [aid]);

  if (!article) return <p>Loading...</p>;

  return (
    <Card
      title={article.title}
      style={{ width: 600, margin: '2rem auto' }}
    >
      <p>{article.alltext || article.fullText}</p>
      <Button type="primary" onClick={() => navigate(-1)}>Back</Button>
    </Card>
  );
};

export default DetailArticle;
