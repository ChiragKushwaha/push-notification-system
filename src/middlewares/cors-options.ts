import { CorsOptions } from 'cors';

const corsOptions: CorsOptions = {
  credentials: true,
  origin: function (origin, callback) {
    const reg = /.*\.?boobytrap\.web\.app/;

    if (reg.test(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

export default corsOptions;
