var environment = process.env.NODE_ENV || 'local';
var config = require('../knexfile.js')[environment];

module.exports = require('knex')(config);