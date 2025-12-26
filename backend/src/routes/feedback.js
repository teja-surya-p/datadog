import express from 'express';
import { recordFeedback } from '../services/firestore.js';

const router = express.Router();

router.post('/:messageId/feedback', async (req, res, next) => {
  try {
    const { messageId } = req.params;
    const rating = typeof req.body.rating === 'string' ? req.body.rating.trim() : '';

    if (!['up', 'down'].includes(rating)) {
      return res.status(400).json({ error: 'rating must be up or down' });
    }

    const message = await recordFeedback(messageId, req.user.uid, rating);
    return res.json({ message });
  } catch (error) {
    return next(error);
  }
});

export default router;
