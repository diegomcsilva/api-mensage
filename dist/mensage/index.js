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

var _remove = require('./services/remove');

var _remove2 = _interopRequireDefault(_remove);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

//http://localhost:3000/mensage/
router.post('/', _create2.default);

//http://localhost:3000/mensage/
router.get('/', _list2.default);

//http://localhost:3000/5a7fa01c4fd22a0004225633
router.delete('/:id', _remove2.default);

exports.default = router;