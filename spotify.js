'use strict';
const getJson = require('./lib/get-json')
const Either = require('data.either')
const Task = require('data.task')

const first = xs =>
  Either.fromNullable(xs[0])

const eitherToTask = e =>
  e.fold(Task.rejected, Task.of)

const findArtist = name =>
  getJson(`https://api.spotify.com/v1/search?q=${name}&type=artist`)
  .map(result => result.artists.items)
  .map(first)
  .chain(eitherToTask)

const relatedArtists = id =>
  getJson(`https://api.spotify.com/v1/artists/${id}/related-artists`)
  .map(result => result.artists)

module.exports = {findArtist, relatedArtists}
