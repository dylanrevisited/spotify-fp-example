'use strict'
const httpGet = require('./http-get')
const Either = require('data.either')
const Task = require('data.task')

const parse = Either.try(JSON.parse)
const first = xs => Either.fromNullable(xs[0])
const eitherToTask = either => 
  either.fold(Task.rejected, Task.of)

const getJson = url =>
  httpGet(url)
  .map(parse)
  .chain(eitherToTask)

module.exports = getJson