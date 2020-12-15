import express from 'express';

import { MongoClient } from 'mongodb';
const app = express();

app.use(express.json());

app.get('/api/articles/:name', async (req, res) => {
  try {
    const articleName = req.params.name;
    const client = await MongoClient.connect('mongodb://localhost:27017', {
      useNewUrlParser: true,
    });
    const db = client.db('my-blog');
    const articleInfo = await db
      .collection('articles')
      .findOne({ name: articleName });
    res.status(200).json(articleInfo);
    client.close();
  } catch (error) {
    res.status(500).json({ message: 'Error connecting to db', error });
  }
});

app.post('/api/articles/:name/upvote', (req, res) => {
  const articleName = req.params.name;
  articlesInfo[articleName].upvotes += 1;
  res
    .status(200)
    .send(`${articleName} now has ${articlesInfo[articleName].upvotes} votes`);
});

app.post('/api/articles/:name/add-comment', (req, res) => {
  const articleName = req.params.name;
  const { username, text } = req.body;
  const article = { username, text };
  articlesInfo[articleName].comments.push(JSON.stringify(article));
  console.log(articlesInfo);
  res.status(201).send(`${articleName} added ${JSON.stringify(article)}`);
});

app.get('/hello', (req, res) => res.send('Hello' + req.body.name));

app.listen(3001, () => console.log('Listening on port 3001'));
