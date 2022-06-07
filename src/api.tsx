import { Router } from 'express';

export const api = Router();

type Payload = {
  message: string,
};

let payload: Payload = {
  "message": "Like && Subscribe"
};

api.get('/', (_req, res) => {
  res.send(payload);
});

api.post('/', (req, res) => {
  const payloadNext: Payload = req.body;
  if (!payloadNext.message) {
    res.status(400).send({
      error: 'Invalid request: No message property',
    });
    return;
  }
  payload = payloadNext;
  res.send(payload);
});
