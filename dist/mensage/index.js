'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _create = require('./services/create');

var _create2 = _interopRequireDefault(_create);

var _list = require('./services/list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

//http://localhost:3000/mensage/
router.post('/', _create2.default);

//http://localhost:3000/mensage/
router.get('/', _list2.default);

exports.default = router;