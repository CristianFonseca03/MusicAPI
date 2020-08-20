const MongoLib = require('../lib/mongo');

class SongsService {
  constructor() {
    this.collection = 'songs';
    this.mongoDB = new MongoLib();
  }
  async getSongs() {
    const songs = await this.mongoDB.getAll(this.collection);
    return songs || [];
  }
  async getSong({ songId }) {
    const song = await this.mongoDB.get(this.collection, songId);
    return song || {};
  }
  async createSong({ song }) {
    const createSongId = await this.mongoDB.create(this.collection, song);
    return createSongId;
  }
  async updateSong({ songId, song } = {}) {
    const updatedSongId = await this.mongoDB.update(
      this.collection,
      songId,
      song
    );
    return updatedSongId;
  }
  async deleteSong({ songId }) {
    const deletedSongId = await this.mongoDB.delete(this.collection, songId);
    return deletedSongId;
  }
}

module.exports = SongsService;
