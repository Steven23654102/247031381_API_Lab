import React, { useState } from 'react';
import axios from 'axios';

const NewArticle: React.FC = () => {
  const [title, setTitle] = useState('');
  const [alltext, setAlltext] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const credentials = btoa('admin:1234'); // Base64 編碼
      const res = await axios.post('http://localhost:10888/api/v1/articles', {
        title,
        alltext
      }, {
        headers: {
          Authorization: `Basic ${credentials}`
        }
      });

      setMessage(`✅ 建立成功：ID = ${res.data.id}`);
      setTitle('');
      setAlltext('');
    } catch (err: any) {
      console.error(err);
      setMessage('❌ 發送失敗，請確認伺服器與帳密');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>新增文章</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>標題：</label><br />
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>內容：</label><br />
          <textarea value={alltext} onChange={(e) => setAlltext(e.target.value)} required />
        </div>
        <button type="submit">送出</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default NewArticle;
