const express = require('express');

const apiInfo = (app) => {
  const router = express.Router();
  app.use('/', router);

  router.get('/', (req, res) => {
    res.status(200).json({
      GET: {
        'All songs': {
          route: 'http://localhost:3000/songs',
          response: [
            {
              id: '',
              albumTitle: '',
              title: '',
              authors: '',
              compositors: '',
              year: '',
              duration: '',
              genders: '',
            },
          ],
        },
        'Single song': {
          route: 'http://localhost:3000/songs/id',
          description: 'Song id needs to be specified in the URL',
          response: {
            id: '',
            albumTitle: '',
            title: '',
            authors: '',
            compositors: '',
            year: '',
            duration: '',
            genders: '',
          },
        },
      },
      POST: {
        route: 'http://localhost:3000/songs',
        description: 'Song to be created needs to follow the current schema',
        schema: {
          albumTitle: 'String',
          title: 'String',
          authors: '[String,]',
          compositors: '[String,]',
          year: 'Number',
          duration: 'Number (in seconds)',
          genders: '[String,]',
        },
        response: {
          statusCode: 201,
          data: 'createdSongId',
          message: 'song created',
        },
      },
      PUT: {
        route: 'http://localhost:3000/songs/id',
        description:
          'Song to be updated needs to follow the current schema, also the song id needs to be specified in the URL',
        schema: {
          albumTitle: 'String',
          title: 'String',
          authors: '[String,]',
          compositors: '[String,]',
          year: 'Number',
          duration: 'Number (in seconds)',
          genders: '[String,]',
        },
        response: {
          statusCode: 200,
          data: 'updatedSongId',
          message: 'song updated',
        },
      },
      DELETE: {
        route: 'http://localhost:3000/songs/id',
        description: 'Song id needs to be specified in the URL',
        response: {
          statusCode: 200,
          data: 'deletedSongId',
          message: 'song deleted',
        },
      },
    });
  });
};

module.exports = apiInfo;
