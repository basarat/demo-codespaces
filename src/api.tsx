import { Router } from 'express';

export const api = Router();

api.get('/', (_req, res) => {
  res.send({
    "message": "Like && Subscribe"
  });
});
