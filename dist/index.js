'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var PORT = process.env.PORT || 5000;

app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());
app.use((0, _cors2.default)());

var db = _mongoose2.default.connect('mongodb://diegomcsilva:uBhEY2Ii0t1f@cluster0-shard-00-00-tedmi.mongodb.net:27017,cluster0-shard-00-01-tedmi.mongodb.net:27017,cluster0-shard-00-02-tedmi.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');

(0, _routes2.default)(app);

app.listen(PORT, function () {
    console.log('Express server has been started');
});