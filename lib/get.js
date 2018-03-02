const custom = require('leadconduit-custom').outbound.query;

module.exports = {
  request: custom.request,
  response: custom.response,
  validate: custom.validate
};
