import { app } from './api/app';
import mongoose from 'mongoose';

(function server() {
  const port = process.env.PORT || 3001;
  const host = '0.0.0.0';
  const dbhost = process.env.DB_HOST || 'mongodb://localhost:27017/api';

  const promise = mongoose.connect(dbhost, { useNewUrlParser: true });
  promise.then(() => {
    app.listen(port, host);
    console.log(`API server started on: ${port}`);
  }).catch((err) => {
    console.error(err);
  });
}());
