"use strict";var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_react=require("react"),_react2=_interopRequireDefault(_react),_context=require("./context");Object.defineProperty(exports,"__esModule",{value:!0});function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"==typeof b||"function"==typeof b)?b:a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var Provider=function(a){function b(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{initialState:{},actions:{}};_classCallCheck(this,b);var c=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a));return c.mapActions=function(){return Object.keys(c.props.actions).reduce(function(a,b){return _extends({},a,_defineProperty({},b,c.createAction(c.props.actions[b])))},{})},c.createAction=function(a){return function(){for(var b=arguments.length,d=Array(b),e=0;e<b;e++)d[e]=arguments[e];var f=a.apply(void 0,[c.state].concat(d));c.setState(f)}},c.state=_extends({},a.initialState),c}return _inherits(b,a),_createClass(b,[{key:"render",value:function render(){var a=this.mapActions(),b={actions:a,state:this.state};return _react2.default.createElement(_context.Provider,{value:b},this.props.children)}}]),b}(_react.Component);exports.default=Provider;