import express, { json, urlencoded } from 'express';
import path from 'path';
import apiRouter from './routes/api';

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/', path.resolve(__dirname, '../index.html'));

app.use('/', apiRouter);

app.use((req, res) =>
  res.status(404).send('404040404040404040404040404 error'),
);

app.use((err, req, res) => {
  res.status(500);
  res.send('god fucking damnit an error occurred');
});

app.listen(3000, () => {
  console.log('Server listening on port: 3000');
});

export default app;
