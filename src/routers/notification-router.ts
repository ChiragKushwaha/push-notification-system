import webpush from 'web-push';
import express from 'express';

const notificationRouter = express.Router();

notificationRouter.post('/subscribe', (req, res) => {
  const subscriptionRequest = req.body;
  console.log(subscriptionRequest);
  res.status(201).json({});

  const payload = JSON.stringify({ title: 'Push Test' });

  webpush.sendNotification(subscriptionRequest, payload).catch((error) => {
    console.error(error.stack);
  });
});

export default notificationRouter;
