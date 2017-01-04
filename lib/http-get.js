'use strict'
const request = require('request')
const Task = require('data.task')

const httpGet = url => 
  new Task((rej, res) =>
    request(url, (error, response, body) =>
      error ? rej(error) : res(body)))

module.exports = httpGet;