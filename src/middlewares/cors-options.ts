import { CorsOptions } from 'cors';

const whilistedOriginsRegex = [/.*\.?boobytrap\.web\.app/];
const corsOptions: CorsOptions = {
  credentials: true,
  methods: ['POST'],
  origin: function (origin, callback) {
    const isDevelopment = process.env.NODE_ENV === 'dev';
    if (isDevelopment) {
      whilistedOriginsRegex.push(/.*\.?localhost/);
      whilistedOriginsRegex.push(/undefined/);
    }

    if (whilistedOriginsRegex.some((regex) => regex?.test(origin))) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

export default corsOptions;
