const express = require('express');
const SongsService = require('../services/songs');

const songsAPI = (app) => {
  const router = express.Router();
  app.use('/songs', router);

  const songsService = new SongsService();

  router.get('/', async (req, res, next) => {
    try {
      const songs = await songsService.getSongs();
      res.status(200).json({
        statusCode: 200,
        songs,
        message: 'songs listed',
      });
    } catch (error) {
      next(error);
    }
  });

  router.get('/:songId', async (req, res, next) => {
    const { songId } = req.params;
    try {
      const song = await songsService.getSong({ songId });
      res.status(200).json({
        statusCode: 200,
        song,
        message: 'song retrieved',
      });
    } catch (error) {
      next(error);
    }
  });

  router.post('/', async (req, res, next) => {
    const { body: song } = req;
    try {
      const createdSongId = await songsService.createSong({ song });
      res.status(201).json({
        statusCode: 201,
        data: createdSongId,
        message: 'song created',
      });
    } catch (err) {
      next(err);
    }
  });

  router.put('/:songId', async (req, res, next) => {
    const { songId } = req.params;
    const { body: song } = req;
    try {
      const updatedSongId = await songsService.updateSong({ songId, song });
      return res.status(200).json({
        statusCode: 200,
        data: updatedSongId,
        message: 'song updated',
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete('/:songId', async function (req, res, next) {
    const { songId } = req.params;
    try {
      const deletedSongId = await songsService.deleteSong({ songId });
      res.status(200).json({
        statusCode: 200,
        data: deletedSongId,
        message: 'song deleted',
      });
    } catch (err) {
      next(err);
    }
  });
};

module.exports = songsAPI;
