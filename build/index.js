'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();
var PORT = process.env.PORT || 4000;
var app = (0, _express2.default)();

app.use((0, _cors2.default)());
app.use(_express2.default.json());
app.use(_index2.default);

app.listen(PORT, function () {
  console.log('Server is running on ' + PORT);
});