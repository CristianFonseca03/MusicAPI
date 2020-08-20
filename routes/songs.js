const express = require('express');

const songsAPI = (app) => {
  const router = express.Router();
  app.use('/songs', router);

  router.get('/', async (req, res, next) => {
    try {
      res.status(200).json({
        statusCode: 200,
        songs: 'categories',
        message: 'categories listed',
      });
    } catch (error) {
      next(error);
    }
  });

  router.get('/:categoryId', async (req, res, next) => {
    const { categoryId } = req.params;
    try {
      res.status(200).json({
        statusCode: 200,
        category: 'category',
        message: 'category retrieved',
      });
    } catch (error) {
      next(error);
    }
  });

  router.post('/', async (req, res, next) => {
    const { body: category } = req;
    try {
      res.status(201).json({
        statusCode: 201,
        data: 'createdCategoryId',
        message: 'category created',
      });
    } catch (err) {
      next(err);
    }
  });

  router.put('/:categoryId', async (req, res, next) => {
    const { categoryId } = req.params;
    const { body: category } = req;
    try {
      return res.status(200).json({
        statusCode: 200,
        data: 'updatedCategoryId',
        message: 'category updated',
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete('/:categoryId', async function (req, res, next) {
    const { categoryId } = req.params;
    try {
      res.status(200).json({
        statusCode: 200,
        data: 'deletedCategoryId',
        message: 'category deleted',
      });
    } catch (err) {
      next(err);
    }
  });
};

module.exports = songsAPI;
