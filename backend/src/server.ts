import express from 'express';
import path from 'path';
// Fazer com que o servidor responda a conexão
import './database/connection'
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.listen(3333)
