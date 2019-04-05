require('dotenv').config();
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import routes from './Routes';
import './Utils/passport';

const PORT = process.env.PORT || 5000;

const app = express();

// db
const db = mongoose.connection;
db.on('error', (error) => {
  console.log('❌  db error'.error);
});
db.once('open', () => {
  console.log('✅  db connected');
});
mongoose.connect(process.env.DB, { useNewUrlParser: true });

// routes
app.use(morgan('dev'));
routes(app);

app.listen(PORT, () => console.log(`✅  server running on http://localhost:${PORT}`));
