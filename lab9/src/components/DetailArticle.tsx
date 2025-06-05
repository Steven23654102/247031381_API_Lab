import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Button } from 'antd';

type Article = {
  id: number;
  title: string;
  fullText: string;
  cover: string;
};

const DetailArticle: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    fetch('/articles.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find((item: Article) => item.id === Number(id));
        setArticle(found);
      });
  }, [id]);

  if (!article) return <p>Loading...</p>;

  return (
    <>
      <Button onClick={() => navigate(-1)}>← Back</Button>
      <Card
        title={article.title}
        cover={<img alt={article.title} src={article.cover} />}
        style={{ marginTop: 20 }}
      >
        <p>{article.fullText}</p>
      </Card>
    </>
  );
};

export default DetailArticle;
