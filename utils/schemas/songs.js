const joi = require('@hapi/joi');

const songIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const songAlbumTitleSchema = joi.string().max(250);
const songTitleSchema = joi.string().max(250);
const songAuthorsSchema = joi.array().items(joi.string().max(250)).min(1);
const songCompositorsSchema = joi.array().items(joi.string().max(250)).min(1);
const songYearSchema = joi.number().min(1880);
const songDurationSchema = joi.number().min(1);
const songGendersSchema = joi.array().items(joi.string().max(250)).min(1);

const createSongSchema = {
  albumTitle: songAlbumTitleSchema.required(),
  title: songTitleSchema.required(),
  authors: songAuthorsSchema.required(),
  compositors: songCompositorsSchema.required(),
  year: songYearSchema.required(),
  duration: songDurationSchema.required(),
  genders: songGendersSchema.required(),
};

const updateSongSchema = {
  albumTitle: songAlbumTitleSchema,
  title: songTitleSchema,
  authors: songAuthorsSchema,
  compositors: songCompositorsSchema,
  year: songYearSchema,
  duration: songDurationSchema,
  genders: songGendersSchema,
};

module.exports = {
  songIdSchema,
  createSongSchema,
  updateSongSchema,
};
