import { Request, Response } from 'express';
import { BOOBYTRAP_ENV } from '../constants/env';

export default async function healthCheckHandler(
  req: Request,
  res: Response
): Promise<void> {
  res.status(200).send({ BOOBYTRAP_ENV });
}
