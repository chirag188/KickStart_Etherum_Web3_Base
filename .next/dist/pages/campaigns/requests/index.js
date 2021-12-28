'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../../Ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../../Ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\chira\\Desktop\\KickStart\\pages\\campaigns\\requests\\index.js?entry';


var RequestIndex = function (_Component) {
  (0, _inherits3.default)(RequestIndex, _Component);

  function RequestIndex() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(index) {
        var campagin, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campagin = (0, _campaign2.default)(_this.props.address);
                _context.next = 3;
                return _web2.default.eth.getAccounts();

              case 3:
                accounts = _context.sent;
                _context.next = 6;
                return campagin.methods.approveRequest(index).send({ from: accounts[0] });

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.onFinalize = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(index) {
        var campagin, accounts;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                campagin = (0, _campaign2.default)(_this.props.address);
                _context2.next = 3;
                return _web2.default.eth.getAccounts();

              case 3:
                accounts = _context2.sent;
                _context2.next = 6;
                return campagin.methods.finalizeRequest(index).send({ from: accounts[0] });

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestIndex, [{
    key: 'renderRows',
    value: function renderRows() {
      var _this3 = this;

      return this.props.requests.map(function (request, index) {
        return _react2.default.createElement(_semanticUiReact.Table.Row, {
          disabled: request.complete,
          positive: request.approvalCount > _this3.props.approvesCount / 2 && !request.complete,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        }, index + 1), _react2.default.createElement(_semanticUiReact.Table.Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        }, request.description), _react2.default.createElement(_semanticUiReact.Table.Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }, _web2.default.utils.fromWei(request.value, 'ether')), _react2.default.createElement(_semanticUiReact.Table.Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }, request.recipient), _react2.default.createElement(_semanticUiReact.Table.Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }, request.approvalCount, ' / ', _this3.props.approvesCount), _react2.default.createElement(_semanticUiReact.Table.Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }, !request.complete ? _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: function onClick() {
            return _this3.onApprove(index);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }, 'Approver') : null), _react2.default.createElement(_semanticUiReact.Table.Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        }, !request.complete ? _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', basic: true, onClick: function onClick() {
            return _this3.onFinalize(index);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }, 'Finalize') : null));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, 'Requests'), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: 'right', style: { marginBottom: 10 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, 'Add Request'))), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, 'ID'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, 'Description'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, 'Amount'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, 'Recipient'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, 'Approval Count'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, 'Approve'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, 'Finalize'))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, this.renderRows())), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, 'Found ', this.props.requestCount, ' requests'));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(props) {
        var address, campagin, requestCount, approvesCount, requests;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                address = props.query.address;
                campagin = (0, _campaign2.default)(address);
                _context3.next = 4;
                return campagin.methods.getRequestsCount().call();

              case 4:
                requestCount = _context3.sent;
                _context3.next = 7;
                return campagin.methods.approvesCount().call();

              case 7:
                approvesCount = _context3.sent;
                _context3.next = 10;
                return _promise2.default.all(Array(Number(requestCount)).fill(0).map(function (element, index) {
                  console.log(index);
                  return campagin.methods.requests(index).call();
                }));

              case 10:
                requests = _context3.sent;
                return _context3.abrupt('return', { address: address, requests: requests, requestCount: requestCount, approvesCount: approvesCount });

              case 12:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getInitialProps(_x3) {
        return _ref4.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHJlcXVlc3RzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIlRhYmxlIiwiTGluayIsIkxheW91dCIsIkNhbXBhaWduIiwid2ViMyIsIlJlcXVlc3RJbmRleCIsIm9uQXBwcm92ZSIsImluZGV4IiwiY2FtcGFnaW4iLCJwcm9wcyIsImFkZHJlc3MiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImFwcHJvdmVSZXF1ZXN0Iiwic2VuZCIsImZyb20iLCJvbkZpbmFsaXplIiwiZmluYWxpemVSZXF1ZXN0IiwicmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiY29tcGxldGUiLCJhcHByb3ZhbENvdW50IiwiYXBwcm92ZXNDb3VudCIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwidmFsdWUiLCJyZWNpcGllbnQiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsIm1hcmdpbkJvdHRvbSIsInJlbmRlclJvd3MiLCJyZXF1ZXN0Q291bnQiLCJxdWVyeSIsImdldFJlcXVlc3RzQ291bnQiLCJjYWxsIiwiYWxsIiwiQXJyYXkiLCJOdW1iZXIiLCJmaWxsIiwiZWxlbWVudCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBUTs7QUFDakIsQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7Ozs7Ozs7O0ksQUFDWDs7Ozs7Ozs7Ozs7Ozs7O3dOLEFBa0JKOzJGQUFZLGlCQUFBLEFBQU8sT0FBUDtzQkFBQTtzRUFBQTtvQkFBQTs2Q0FBQTttQkFDSjtBQURJLDJCQUNPLHdCQUFTLE1BQUEsQUFBSyxNQURyQixBQUNPLEFBQW9CO2dDQUQzQjt1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QXVCRSxBQUdMOzs7Ozs2RyxBQTlGNEI7Ozs7O21CQUNuQjtBLDBCQUFZLE0sQUFBTSxNLEFBQWxCLEFBQ0Y7QSwyQkFBVyx3QixBQUFBLEFBQVM7O3VCQUNDLFNBQUEsQUFBUyxRQUFULEFBQWlCLG1CLEFBQWpCLEFBQW9DOzttQkFBekQ7QTs7dUJBQ3NCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGdCLEFBQWpCLEFBQWlDOzttQkFBdkQ7QTs7eUNBRWlCLEFBQVEsVUFDdkIsT0FBTixBQUFNLEFBQU8sZUFBYixBQUNHLEtBREgsQUFDUSxHQURSLEFBRUcsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDdkI7MEJBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjt5QkFBTyxTQUFBLEFBQVMsUUFBVCxBQUFpQixTQUFqQixBQUEwQixPQUFqQyxBQUFPLEFBQWlDLEFBQ3pDO0EsQUFOa0IsQUFDckIsaUJBQUEsQ0FEcUI7O21CQUFqQjtBO2tEQVFDLEVBQUUsU0FBRixTQUFXLFVBQVgsVUFBcUIsY0FBckIsY0FBbUMsZSxBQUFuQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtGWCxBLEFBakcyQjs7a0JBaUczQixBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2NoaXJhL0Rlc2t0b3AvS2lja1N0YXJ0In0=