const express = require('express');
const token = require('../../middlewares/token');
const projectService = require('../../services/project.service');
const quizzService = require('../../services/quizz.service');
const userService = require('../../services/user.service');
const logger = require('../../utils/logger');

const router = express.Router();

router.get('', async (req, res) => {
  try {
    const users = await userService.findAll();
    res.send(users);
  } catch (e) {
    logger.info(e.message);
    return res.status(500).send('not found');
  }
});

router.get('/current-user', token.verifyToken, async (req, res) => {
  try {
    const user = await userService.getCurrentUser(req.auth);
    if (user) {
      return res.send(user);
    }
    res.status(404).send('not found');
  } catch (e) {
    return res.status(500).send({ error: 'Internal error' });
  }
});


router.get('', async (req, res) => {
  try {
    const users = await userService.findAll();
    res.send(users);
  } catch (e) {
    logger.info(e.message);
    return res.status(500).send('not found');
  }
});

router.post(
  '/:uid/quizz',
  async (req, res) => {
    console.log(req.params.uid);
    req.body.owner = req.params.uid;
    try {
      const quizz = await quizzService.add(req.body);
      return res.send(quizz);
    } catch (e) {
      console.log(e);
      return res.status(500).send({ error: 'Internal error' });
    }
  },
);


router.get(
  '/:uid/quizz',
  async (req, res) => {
    try {
      const quizzs = await quizzService.findAllByUserId(req.params.uid);
      return res.send(quizzs);
    } catch (e) {
      console.log(e);
      return res.status(500).send({ error: 'Internal error' });
    }
  },
);

router.delete(
  '/quizz/:id',
  async (req, res) => {
    try {
      const deleteResponse = await quizzService.remove(req.params.id);
      console.log(deleteResponse);
      return res.send(deleteResponse);
    } catch (e) {
      console.log(e);
      return res.status(500).send({ error: 'Internal error' });
    }
  },
);

router.put(
  '/quizz/:id',
  async (req, res) => {
    console.log(req.params.id);
    const id = req.params.id;
    try {
      const quizz = await quizzService.update(id, req.body);
      return res.send(quizz);
    } catch (e) {
      console.log(e);
      return res.status(500).send({ error: 'Internal error' });
    }
  },
);

module.exports = router;
