'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Campaign = require('./build/Campaign.json');

var _Campaign2 = _interopRequireDefault(_Campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
  return new _web2.default.eth.Contract(_Campaign2.default.abi, address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkV0aGVyZXVtXFxjYW1wYWlnbi5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiQ2FtcGFpZ24iLCJhZGRyZXNzIiwiZXRoIiwiQ29udHJhY3QiLCJhYmkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUFxQixBQUFyQixBQUVBOzs7Ozs7a0JBQWUsVUFBQyxBQUFELFNBQWEsQUFDMUI7U0FBTyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FBc0IsbUJBQVMsQUFBL0IsS0FBb0MsQUFBcEMsQUFBUCxBQUNEO0FBRkQiLCJmaWxlIjoiY2FtcGFpZ24uanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvY2hpcmEvRGVza3RvcC9LaWNrU3RhcnQifQ==