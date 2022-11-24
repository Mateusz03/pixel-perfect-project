exports.id = 678;
exports.ids = [678];
exports.modules = {

/***/ 4184:
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ 9712:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;
__webpack_unused_export__=Component=>Component;

/***/ }),

/***/ 8749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "C:\\Users\\mateu\\OneDrive\\Pulpit\\pixel-perfect-project\\node_modules\\react\\index.js"
var external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_ = __webpack_require__(4377);
var external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default = /*#__PURE__*/__webpack_require__.n(external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_);
;// CONCATENATED MODULE: ./src/images/header/first_image.png
/* harmony default export */ const first_image = (__webpack_require__.p + "static/first_image-7109fbda15034c978194cf7baf572762.png");
;// CONCATENATED MODULE: ./src/images/header/second_image.png
/* harmony default export */ const second_image = (__webpack_require__.p + "static/second_image-25b75a359b68305e8ee08f4e84c75dc6.png");
;// CONCATENATED MODULE: ./src/images/header/third_image.png
/* harmony default export */ const third_image = (__webpack_require__.p + "static/third_image-f72efac9a14f788c0b0bdde878af1435.png");
;// CONCATENATED MODULE: ./src/images/header/fourth_image.png
/* harmony default export */ const fourth_image = (__webpack_require__.p + "static/fourth_image-5aa3a492c8cbc658f1381dab077b21a6.png");
;// CONCATENATED MODULE: ./src/components/header/header.jsx
const MoveContext=/*#__PURE__*/(0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.createContext)(-100);const Header=()=>{const{0:currentImage,1:setImage}=(0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useState)(-100);return/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("header",null," ",/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(MoveContext.Provider,{value:{currentImage,setImage}},/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("div",{className:"background-image",style:{backgroundImage:`url(${fourth_image}),url(${third_image}),url(${second_image}),url(${first_image})`,backgroundPosition:`${0+currentImage}%,${30+currentImage}%,${65+currentImage}%,${100+currentImage}%`}},/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("div",{className:"darkening"},/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(navbar,null),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("div",{className:"content"},/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(title,null),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(form_form,null)),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(swapbar,null)))));};/* harmony default export */ const header = (Header);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/prop-types-extra/lib/all.js
var lib_all = __webpack_require__(4391);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function extends_extends() {
  extends_extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return extends_extends.apply(this, arguments);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
// EXTERNAL MODULE: ./node_modules/invariant/invariant.js
var invariant_invariant = __webpack_require__(6128);
;// CONCATENATED MODULE: ./node_modules/uncontrollable/lib/esm/utils.js


var noop = function noop() {};

function readOnlyPropType(handler, name) {
  return function (props, propName) {
    if (props[propName] !== undefined) {
      if (!props[handler]) {
        return new Error("You have provided a `" + propName + "` prop to `" + name + "` " + ("without an `" + handler + "` handler prop. This will render a read-only field. ") + ("If the field should be mutable use `" + defaultKey(propName) + "`. ") + ("Otherwise, set `" + handler + "`."));
      }
    }
  };
}

function uncontrolledPropTypes(controlledValues, displayName) {
  var propTypes = {};
  Object.keys(controlledValues).forEach(function (prop) {
    // add default propTypes for folks that use runtime checks
    propTypes[defaultKey(prop)] = noop;

    if (false) { var handler; }
  });
  return propTypes;
}
function isProp(props, prop) {
  return props[prop] !== undefined;
}
function defaultKey(key) {
  return 'default' + key.charAt(0).toUpperCase() + key.substr(1);
}
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

function canAcceptRef(component) {
  return !!component && (typeof component !== 'function' || component.prototype && component.prototype.isReactComponent);
}
;// CONCATENATED MODULE: ./node_modules/uncontrollable/lib/esm/hook.js



function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




function useUncontrolledProp(propValue, defaultValue, handler) {
  var wasPropRef = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useRef)(propValue !== undefined);

  var _useState = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useState)(defaultValue),
      stateValue = _useState[0],
      setState = _useState[1];

  var isProp = propValue !== undefined;
  var wasProp = wasPropRef.current;
  wasPropRef.current = isProp;
  /**
   * If a prop switches from controlled to Uncontrolled
   * reset its value to the defaultValue
   */

  if (!isProp && wasProp && stateValue !== defaultValue) {
    setState(defaultValue);
  }

  return [isProp ? propValue : stateValue, (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useCallback)(function (value) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (handler) handler.apply(void 0, [value].concat(args));
    setState(value);
  }, [handler])];
}


function useUncontrolled(props, config) {
  return Object.keys(config).reduce(function (result, fieldName) {
    var _extends2;

    var _ref = result,
        defaultValue = _ref[defaultKey(fieldName)],
        propsValue = _ref[fieldName],
        rest = objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(_ref, [defaultKey(fieldName), fieldName].map(_toPropertyKey));

    var handlerName = config[fieldName];

    var _useUncontrolledProp = useUncontrolledProp(propsValue, defaultValue, props[handlerName]),
        value = _useUncontrolledProp[0],
        handler = _useUncontrolledProp[1];

    return extends_extends({}, rest, (_extends2 = {}, _extends2[fieldName] = value, _extends2[handlerName] = handler, _extends2));
  }, props);
}
// EXTERNAL MODULE: ./.cache/react-lifecycles-compat.js
var react_lifecycles_compat = __webpack_require__(9712);
;// CONCATENATED MODULE: ./node_modules/uncontrollable/lib/esm/uncontrollable.js



var _jsxFileName = "/Users/jquense/src/uncontrollable/src/uncontrollable.js";




function uncontrollable(Component, controlledValues, methods) {
  if (methods === void 0) {
    methods = [];
  }

  var displayName = Component.displayName || Component.name || 'Component';
  var canAcceptRef = Utils.canAcceptRef(Component);
  var controlledProps = Object.keys(controlledValues);
  var PROPS_TO_OMIT = controlledProps.map(Utils.defaultKey);
  !(canAcceptRef || !methods.length) ?  false ? 0 : invariant(false) : void 0;

  var UncontrolledComponent =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(UncontrolledComponent, _React$Component);

    function UncontrolledComponent() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.handlers = Object.create(null);
      controlledProps.forEach(function (propName) {
        var handlerName = controlledValues[propName];

        var handleChange = function handleChange(value) {
          if (_this.props[handlerName]) {
            var _this$props;

            _this._notifying = true;

            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }

            (_this$props = _this.props)[handlerName].apply(_this$props, [value].concat(args));

            _this._notifying = false;
          }

          if (!_this.unmounted) _this.setState(function (_ref) {
            var _extends2;

            var values = _ref.values;
            return {
              values: _extends(Object.create(null), values, (_extends2 = {}, _extends2[propName] = value, _extends2))
            };
          });
        };

        _this.handlers[handlerName] = handleChange;
      });
      if (methods.length) _this.attachRef = function (ref) {
        _this.inner = ref;
      };
      var values = Object.create(null);
      controlledProps.forEach(function (key) {
        values[key] = _this.props[Utils.defaultKey(key)];
      });
      _this.state = {
        values: values,
        prevProps: {}
      };
      return _this;
    }

    var _proto = UncontrolledComponent.prototype;

    _proto.shouldComponentUpdate = function shouldComponentUpdate() {
      //let setState trigger the update
      return !this._notifying;
    };

    UncontrolledComponent.getDerivedStateFromProps = function getDerivedStateFromProps(props, _ref2) {
      var values = _ref2.values,
          prevProps = _ref2.prevProps;
      var nextState = {
        values: _extends(Object.create(null), values),
        prevProps: {}
      };
      controlledProps.forEach(function (key) {
        /**
         * If a prop switches from controlled to Uncontrolled
         * reset its value to the defaultValue
         */
        nextState.prevProps[key] = props[key];

        if (!Utils.isProp(props, key) && Utils.isProp(prevProps, key)) {
          nextState.values[key] = props[Utils.defaultKey(key)];
        }
      });
      return nextState;
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.unmounted = true;
    };

    _proto.render = function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          innerRef = _this$props2.innerRef,
          props = _objectWithoutPropertiesLoose(_this$props2, ["innerRef"]);

      PROPS_TO_OMIT.forEach(function (prop) {
        delete props[prop];
      });
      var newProps = {};
      controlledProps.forEach(function (propName) {
        var propValue = _this2.props[propName];
        newProps[propName] = propValue !== undefined ? propValue : _this2.state.values[propName];
      });
      return React.createElement(Component, _extends({}, props, newProps, this.handlers, {
        ref: innerRef || this.attachRef
      }));
    };

    return UncontrolledComponent;
  }(React.Component);

  polyfill(UncontrolledComponent);
  UncontrolledComponent.displayName = "Uncontrolled(" + displayName + ")";
  UncontrolledComponent.propTypes = _extends({
    innerRef: function innerRef() {}
  }, Utils.uncontrolledPropTypes(controlledValues, displayName));
  methods.forEach(function (method) {
    UncontrolledComponent.prototype[method] = function $proxiedMethod() {
      var _this$inner;

      return (_this$inner = this.inner)[method].apply(_this$inner, arguments);
    };
  });
  var WrappedComponent = UncontrolledComponent;

  if (React.forwardRef) {
    WrappedComponent = React.forwardRef(function (props, ref) {
      return React.createElement(UncontrolledComponent, _extends({}, props, {
        innerRef: ref,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }));
    });
    WrappedComponent.propTypes = UncontrolledComponent.propTypes;
  }

  WrappedComponent.ControlledComponent = Component;
  /**
   * useful when wrapping a Component and you want to control
   * everything
   */

  WrappedComponent.deferControlTo = function (newComponent, additions, nextMethods) {
    if (additions === void 0) {
      additions = {};
    }

    return uncontrollable(newComponent, _extends({}, controlledValues, additions), nextMethods);
  };

  return WrappedComponent;
}
;// CONCATENATED MODULE: ./node_modules/uncontrollable/lib/esm/index.js


;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/querySelectorAll.js
var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
/**
 * Runs `querySelectorAll` on a given element.
 * 
 * @param element the element
 * @param selector the selector
 */

function qsa(element, selector) {
  return toArray(element.querySelectorAll(selector));
}
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useForceUpdate.js

/**
 * Returns a function that triggers a component update. the hook equivalent to
 * `this.forceUpdate()` in a class component. In most cases using a state value directly
 * is preferable but may be required in some advanced usages of refs for interop or
 * when direct DOM manipulation is required.
 *
 * ```ts
 * const forceUpdate = useForceUpdate();
 *
 * const updateOnClick = useCallback(() => {
 *  forceUpdate()
 * }, [forceUpdate])
 *
 * return <button type="button" onClick={updateOnClick}>Hi there</button>
 * ```
 */

function useForceUpdate() {
  // The toggling state value is designed to defeat React optimizations for skipping
  // updates when they are stricting equal to the last state value
  var _useReducer = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useReducer)(function (state) {
    return !state;
  }, false),
      dispatch = _useReducer[1];

  return dispatch;
}
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useMergedRefs.js


var toFnRef = function toFnRef(ref) {
  return !ref || typeof ref === 'function' ? ref : function (value) {
    ref.current = value;
  };
};

function mergeRefs(refA, refB) {
  var a = toFnRef(refA);
  var b = toFnRef(refB);
  return function (value) {
    if (a) a(value);
    if (b) b(value);
  };
}
/**
 * Create and returns a single callback ref composed from two other Refs.
 *
 * ```tsx
 * const Button = React.forwardRef((props, ref) => {
 *   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();
 *   const mergedRef = useMergedRefs(ref, attachRef);
 *
 *   return <button ref={mergedRef} {...props}/>
 * })
 * ```
 *
 * @param refA A Callback or mutable Ref
 * @param refB A Callback or mutable Ref
 * @category refs
 */

function useMergedRefs(refA, refB) {
  return (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useMemo)(function () {
    return mergeRefs(refA, refB);
  }, [refA, refB]);
}

/* harmony default export */ const esm_useMergedRefs = (useMergedRefs);
;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/NavContext.js

const NavContext = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.createContext(null);
NavContext.displayName = 'NavContext';
/* harmony default export */ const esm_NavContext = (NavContext);
;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/SelectableContext.js

const SelectableContext = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.createContext(null);
const makeEventKey = (eventKey, href = null) => {
  if (eventKey != null) return String(eventKey);
  return href || null;
};
/* harmony default export */ const esm_SelectableContext = (SelectableContext);
;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/TabContext.js

const TabContext = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.createContext(null);
/* harmony default export */ const esm_TabContext = (TabContext);
;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/DataKey.js
const ATTRIBUTE_PREFIX = `data-rr-ui-`;
const PROPERTY_PREFIX = `rrUi`;
function dataAttr(property) {
  return `${ATTRIBUTE_PREFIX}${property}`;
}
function dataProp(property) {
  return `${PROPERTY_PREFIX}${property}`;
}
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useCommittedRef.js

/**
 * Creates a `Ref` whose value is updated in an effect, ensuring the most recent
 * value is the one rendered with. Generally only required for Concurrent mode usage
 * where previous work in `render()` may be discarded before being used.
 *
 * This is safe to access in an event handler.
 *
 * @param value The `Ref` value
 */

function useCommittedRef_useCommittedRef(value) {
  var ref = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useRef)(value);
  (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useEffect)(function () {
    ref.current = value;
  }, [value]);
  return ref;
}

/* harmony default export */ const esm_useCommittedRef = (useCommittedRef_useCommittedRef);
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useEventCallback.js


function useEventCallback_useEventCallback(fn) {
  var ref = esm_useCommittedRef(fn);
  return (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useCallback)(function () {
    return ref.current && ref.current.apply(ref, arguments);
  }, [ref]);
}
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/Button.js
const _excluded = ["as", "disabled"];

function Button_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function isTrivialHref(href) {
  return !href || href.trim() === '#';
}
function useButtonProps({
  tagName,
  disabled,
  href,
  target,
  rel,
  role,
  onClick,
  tabIndex = 0,
  type
}) {
  if (!tagName) {
    if (href != null || target != null || rel != null) {
      tagName = 'a';
    } else {
      tagName = 'button';
    }
  }

  const meta = {
    tagName
  };

  if (tagName === 'button') {
    return [{
      type: type || 'button',
      disabled
    }, meta];
  }

  const handleClick = event => {
    if (disabled || tagName === 'a' && isTrivialHref(href)) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    onClick == null ? void 0 : onClick(event);
  };

  const handleKeyDown = event => {
    if (event.key === ' ') {
      event.preventDefault();
      handleClick(event);
    }
  };

  if (tagName === 'a') {
    // Ensure there's a href so Enter can trigger anchor button.
    href || (href = '#');

    if (disabled) {
      href = undefined;
    }
  }

  return [{
    role: role != null ? role : 'button',
    // explicitly undefined so that it overrides the props disabled in a spread
    // e.g. <Tag {...props} {...hookProps} />
    disabled: undefined,
    tabIndex: disabled ? undefined : tabIndex,
    href,
    target: tagName === 'a' ? target : undefined,
    'aria-disabled': !disabled ? undefined : disabled,
    rel: tagName === 'a' ? rel : undefined,
    onClick: handleClick,
    onKeyDown: handleKeyDown
  }, meta];
}
const Button = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.forwardRef((_ref, ref) => {
  let {
    as: asProp,
    disabled
  } = _ref,
      props = Button_objectWithoutPropertiesLoose(_ref, _excluded);

  const [buttonProps, {
    tagName: Component
  }] = useButtonProps(Object.assign({
    tagName: asProp,
    disabled
  }, props));
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, Object.assign({}, props, buttonProps, {
    ref: ref
  }));
});
Button.displayName = 'Button';
/* harmony default export */ const esm_Button = (Button);
;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/NavItem.js
const NavItem_excluded = ["as", "active", "eventKey"];

function NavItem_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










function useNavItem({
  key,
  onClick,
  active,
  id,
  role,
  disabled
}) {
  const parentOnSelect = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useContext)(esm_SelectableContext);
  const navContext = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useContext)(esm_NavContext);
  const tabContext = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useContext)(esm_TabContext);
  let isActive = active;
  const props = {
    role
  };

  if (navContext) {
    if (!role && navContext.role === 'tablist') props.role = 'tab';
    const contextControllerId = navContext.getControllerId(key != null ? key : null);
    const contextControlledId = navContext.getControlledId(key != null ? key : null); // @ts-ignore

    props[dataAttr('event-key')] = key;
    props.id = contextControllerId || id;
    isActive = active == null && key != null ? navContext.activeKey === key : active;
    /**
     * Simplified scenario for `mountOnEnter`.
     *
     * While it would make sense to keep 'aria-controls' for tabs that have been mounted at least
     * once, it would also complicate the code quite a bit, for very little gain.
     * The following implementation is probably good enough.
     *
     * @see https://github.com/react-restart/ui/pull/40#issuecomment-1009971561
     */

    if (isActive || !(tabContext != null && tabContext.unmountOnExit) && !(tabContext != null && tabContext.mountOnEnter)) props['aria-controls'] = contextControlledId;
  }

  if (props.role === 'tab') {
    props['aria-selected'] = isActive;

    if (!isActive) {
      props.tabIndex = -1;
    }

    if (disabled) {
      props.tabIndex = -1;
      props['aria-disabled'] = true;
    }
  }

  props.onClick = useEventCallback_useEventCallback(e => {
    if (disabled) return;
    onClick == null ? void 0 : onClick(e);

    if (key == null) {
      return;
    }

    if (parentOnSelect && !e.isPropagationStopped()) {
      parentOnSelect(key, e);
    }
  });
  return [props, {
    isActive
  }];
}
const NavItem = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.forwardRef((_ref, ref) => {
  let {
    as: Component = esm_Button,
    active,
    eventKey
  } = _ref,
      options = NavItem_objectWithoutPropertiesLoose(_ref, NavItem_excluded);

  const [props, meta] = useNavItem(Object.assign({
    key: makeEventKey(eventKey, options.href),
    active
  }, options)); // @ts-ignore

  props[dataAttr('active')] = meta.isActive;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, Object.assign({}, options, props, {
    ref: ref
  }));
});
NavItem.displayName = 'NavItem';
/* harmony default export */ const esm_NavItem = (NavItem);
;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/Nav.js
const Nav_excluded = ["as", "onSelect", "activeKey", "role", "onKeyDown"];

function Nav_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













// eslint-disable-next-line @typescript-eslint/no-empty-function
const Nav_noop = () => {};

const EVENT_KEY_ATTR = dataAttr('event-key');
const Nav = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.forwardRef((_ref, ref) => {
  let {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div',
    onSelect,
    activeKey,
    role,
    onKeyDown
  } = _ref,
      props = Nav_objectWithoutPropertiesLoose(_ref, Nav_excluded);

  // A ref and forceUpdate for refocus, b/c we only want to trigger when needed
  // and don't want to reset the set in the effect
  const forceUpdate = useForceUpdate();
  const needsRefocusRef = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useRef)(false);
  const parentOnSelect = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useContext)(esm_SelectableContext);
  const tabContext = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useContext)(esm_TabContext);
  let getControlledId, getControllerId;

  if (tabContext) {
    role = role || 'tablist';
    activeKey = tabContext.activeKey; // TODO: do we need to duplicate these?

    getControlledId = tabContext.getControlledId;
    getControllerId = tabContext.getControllerId;
  }

  const listNode = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useRef)(null);

  const getNextActiveTab = offset => {
    const currentListNode = listNode.current;
    if (!currentListNode) return null;
    const items = qsa(currentListNode, `[${EVENT_KEY_ATTR}]:not([aria-disabled=true])`);
    const activeChild = currentListNode.querySelector('[aria-selected=true]');
    if (!activeChild || activeChild !== document.activeElement) return null;
    const index = items.indexOf(activeChild);
    if (index === -1) return null;
    let nextIndex = index + offset;
    if (nextIndex >= items.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = items.length - 1;
    return items[nextIndex];
  };

  const handleSelect = (key, event) => {
    if (key == null) return;
    onSelect == null ? void 0 : onSelect(key, event);
    parentOnSelect == null ? void 0 : parentOnSelect(key, event);
  };

  const handleKeyDown = event => {
    onKeyDown == null ? void 0 : onKeyDown(event);

    if (!tabContext) {
      return;
    }

    let nextActiveChild;

    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        nextActiveChild = getNextActiveTab(-1);
        break;

      case 'ArrowRight':
      case 'ArrowDown':
        nextActiveChild = getNextActiveTab(1);
        break;

      default:
        return;
    }

    if (!nextActiveChild) return;
    event.preventDefault();
    handleSelect(nextActiveChild.dataset[dataProp('EventKey')] || null, event);
    needsRefocusRef.current = true;
    forceUpdate();
  };

  (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useEffect)(() => {
    if (listNode.current && needsRefocusRef.current) {
      const activeChild = listNode.current.querySelector(`[${EVENT_KEY_ATTR}][aria-selected=true]`);
      activeChild == null ? void 0 : activeChild.focus();
    }

    needsRefocusRef.current = false;
  });
  const mergedRef = esm_useMergedRefs(ref, listNode);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_SelectableContext.Provider, {
    value: handleSelect,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(esm_NavContext.Provider, {
      value: {
        role,
        // used by NavLink to determine it's role
        activeKey: makeEventKey(activeKey),
        getControlledId: getControlledId || Nav_noop,
        getControllerId: getControllerId || Nav_noop
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Component, Object.assign({}, props, {
        onKeyDown: handleKeyDown,
        ref: mergedRef,
        role: role
      }))
    })
  });
});
Nav.displayName = 'Nav';
/* harmony default export */ const esm_Nav = (Object.assign(Nav, {
  Item: esm_NavItem
}));
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/ThemeProvider.js



const DEFAULT_BREAKPOINTS = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
const DEFAULT_MIN_BREAKPOINT = 'xs';
const ThemeContext = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.createContext({
  prefixes: {},
  breakpoints: DEFAULT_BREAKPOINTS,
  minBreakpoint: DEFAULT_MIN_BREAKPOINT
});
const {
  Consumer,
  Provider
} = ThemeContext;

function ThemeProvider({
  prefixes = {},
  breakpoints = DEFAULT_BREAKPOINTS,
  minBreakpoint = DEFAULT_MIN_BREAKPOINT,
  dir,
  children
}) {
  const contextValue = useMemo(() => ({
    prefixes: { ...prefixes
    },
    breakpoints,
    minBreakpoint,
    dir
  }), [prefixes, breakpoints, minBreakpoint, dir]);
  return /*#__PURE__*/_jsx(Provider, {
    value: contextValue,
    children: children
  });
}

function useBootstrapPrefix(prefix, defaultPrefix) {
  const {
    prefixes
  } = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useContext)(ThemeContext);
  return prefix || prefixes[defaultPrefix] || defaultPrefix;
}
function useBootstrapBreakpoints() {
  const {
    breakpoints
  } = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useContext)(ThemeContext);
  return breakpoints;
}
function useBootstrapMinBreakpoint() {
  const {
    minBreakpoint
  } = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useContext)(ThemeContext);
  return minBreakpoint;
}
function useIsRTL() {
  const {
    dir
  } = useContext(ThemeContext);
  return dir === 'rtl';
}

function createBootstrapComponent(Component, opts) {
  if (typeof opts === 'string') opts = {
    prefix: opts
  };
  const isClassy = Component.prototype && Component.prototype.isReactComponent; // If it's a functional component make sure we don't break it with a ref

  const {
    prefix,
    forwardRefAs = isClassy ? 'ref' : 'innerRef'
  } = opts;
  const Wrapped = /*#__PURE__*/React.forwardRef(({ ...props
  }, ref) => {
    props[forwardRefAs] = ref;
    const bsPrefix = useBootstrapPrefix(props.bsPrefix, prefix);
    return /*#__PURE__*/_jsx(Component, { ...props,
      bsPrefix: bsPrefix
    });
  });
  Wrapped.displayName = `Bootstrap(${Component.displayName || Component.name})`;
  return Wrapped;
}


/* harmony default export */ const esm_ThemeProvider = ((/* unused pure expression or super */ null && (ThemeProvider)));
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/NavbarContext.js
 // TODO: check

const context = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.createContext(null);
context.displayName = 'NavbarContext';
/* harmony default export */ const NavbarContext = (context);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/CardHeaderContext.js

const CardHeaderContext_context = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.createContext(null);
CardHeaderContext_context.displayName = 'CardHeaderContext';
/* harmony default export */ const CardHeaderContext = (CardHeaderContext_context);
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/camelize.js
var rHyphen = /-(.)/g;
function camelize(string) {
  return string.replace(rHyphen, function (_, chr) {
    return chr.toUpperCase();
  });
}
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/createWithBsPrefix.js






const pascalCase = str => str[0].toUpperCase() + camelize(str).slice(1);

// TODO: emstricten & fix the typing here! `createWithBsPrefix<TElementType>...`
function createWithBsPrefix(prefix, {
  displayName = pascalCase(prefix),
  Component,
  defaultProps
} = {}) {
  const BsComponent = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.forwardRef(({
    className,
    bsPrefix,
    as: Tag = Component || 'div',
    ...props
  }, ref) => {
    const resolvedPrefix = useBootstrapPrefix(bsPrefix, prefix);
    return /*#__PURE__*/(0,jsx_runtime.jsx)(Tag, {
      ref: ref,
      className: classnames_default()(className, resolvedPrefix),
      ...props
    });
  });
  BsComponent.defaultProps = defaultProps;
  BsComponent.displayName = displayName;
  return BsComponent;
}
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/NavItem.js

/* harmony default export */ const react_bootstrap_esm_NavItem = (createWithBsPrefix('nav-item'));
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useCallbackRef.js

/**
 * A convenience hook around `useState` designed to be paired with
 * the component [callback ref](https://reactjs.org/docs/refs-and-the-dom.html#callback-refs) api.
 * Callback refs are useful over `useRef()` when you need to respond to the ref being set
 * instead of lazily accessing it in an effect.
 *
 * ```ts
 * const [element, attachRef] = useCallbackRef<HTMLDivElement>()
 *
 * useEffect(() => {
 *   if (!element) return
 *
 *   const calendar = new FullCalendar.Calendar(element)
 *
 *   return () => {
 *     calendar.destroy()
 *   }
 * }, [element])
 *
 * return <div ref={attachRef} />
 * ```
 *
 * @category refs
 */

function useCallbackRef() {
  return useState(null);
}
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useEventListener.js



/**
 * Attaches an event handler outside directly to specified DOM element
 * bypassing the react synthetic event system.
 *
 * @param element The target to listen for events on
 * @param event The DOM event name
 * @param handler An event handler
 * @param capture Whether or not to listen during the capture event phase
 */
function useEventListener_useEventListener(eventTarget, event, listener, capture) {
  if (capture === void 0) {
    capture = false;
  }

  var handler = useEventCallback(listener);
  useEffect(function () {
    var target = typeof eventTarget === 'function' ? eventTarget() : eventTarget;
    target.addEventListener(event, handler, capture);
    return function () {
      return target.removeEventListener(event, handler, capture);
    };
  }, [eventTarget]);
}
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useGlobalListener.js



/**
 * Attaches an event handler outside directly to the `document`,
 * bypassing the react synthetic event system.
 *
 * ```ts
 * useGlobalListener('keydown', (event) => {
 *  console.log(event.key)
 * })
 * ```
 *
 * @param event The DOM event name
 * @param handler An event handler
 * @param capture Whether or not to listen during the capture event phase
 */
function useGlobalListener(event, handler, capture) {
  if (capture === void 0) {
    capture = false;
  }

  var documentTarget = useCallback(function () {
    return document;
  }, []);
  return useEventListener(documentTarget, event, handler, capture);
}
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useInterval.js


/**
 * Creates a `setInterval` that is properly cleaned up when a component unmounted
 *
 * ```tsx
 *  function Timer() {
 *    const [timer, setTimer] = useState(0)
 *    useInterval(() => setTimer(i => i + 1), 1000)
 *
 *    return <span>{timer} seconds past</span>
 *  }
 * ```
 *
 * @param fn an function run on each interval
 * @param ms The milliseconds duration of the interval
 */

function useInterval(fn, ms, paused, runImmediately) {
  if (paused === void 0) {
    paused = false;
  }

  if (runImmediately === void 0) {
    runImmediately = false;
  }

  var handle;
  var fnRef = useCommittedRef(fn); // this ref is necessary b/c useEffect will sometimes miss a paused toggle
  // orphaning a setTimeout chain in the aether, so relying on it's refresh logic is not reliable.

  var pausedRef = useCommittedRef(paused);

  var tick = function tick() {
    if (pausedRef.current) return;
    fnRef.current();
    schedule(); // eslint-disable-line no-use-before-define
  };

  var schedule = function schedule() {
    clearTimeout(handle);
    handle = setTimeout(tick, ms);
  };

  useEffect(function () {
    if (runImmediately) {
      tick();
    } else {
      schedule();
    }

    return function () {
      return clearTimeout(handle);
    };
  }, [paused, runImmediately]);
}

/* harmony default export */ const esm_useInterval = ((/* unused pure expression or super */ null && (useInterval)));
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useRafInterval.js



function useRafInterval(fn, ms, paused) {
  if (paused === void 0) {
    paused = false;
  }

  var handle;
  var start = new Date().getTime();
  var fnRef = useCommittedRef(fn); // this ref is necessary b/c useEffect will sometimes miss a paused toggle
  // orphaning a setTimeout chain in the aether, so relying on it's refresh logic is not reliable.

  var pausedRef = useCommittedRef(paused);

  function loop() {
    var current = new Date().getTime();
    var delta = current - start;
    if (pausedRef.current) return;

    if (delta >= ms && fnRef.current) {
      fnRef.current();
      start = new Date().getTime();
    }

    cancelAnimationFrame(handle);
    handle = requestAnimationFrame(loop);
  }

  useEffect(function () {
    handle = requestAnimationFrame(loop);
    return function () {
      return cancelAnimationFrame(handle);
    };
  }, []);
}

/* harmony default export */ const esm_useRafInterval = ((/* unused pure expression or super */ null && (useRafInterval)));
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useMergeState.js
function useMergeState_extends() { useMergeState_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return useMergeState_extends.apply(this, arguments); }



/**
 * Mimics a React class component's state model, of having a single unified
 * `state` object and an updater that merges updates into the existing state, as
 * opposed to replacing it.
 *
 * ```js
 * const [state, setState] = useMergeState({ name: 'Betsy', age: 24 })
 *
 * setState({ name: 'Johan' }) // { name: 'Johan', age: 24 }
 *
 * setState(state => ({ age: state.age + 10 })) // { name: 'Johan', age: 34 }
 * ```
 *
 * @param initialState The initial state object
 */
function useMergeState_useMergeState(initialState) {
  var _useState = useState(initialState),
      state = _useState[0],
      setState = _useState[1];

  var updater = useCallback(function (update) {
    if (update === null) return;

    if (typeof update === 'function') {
      setState(function (state) {
        var nextState = update(state);
        return nextState == null ? state : useMergeState_extends({}, state, nextState);
      });
    } else {
      setState(function (state) {
        return useMergeState_extends({}, state, update);
      });
    }
  }, [setState]);
  return [state, updater];
}
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useMergeStateFromProps.js

function useMergeStateFromProps(props, gDSFP, initialState) {
  var _useMergeState = useMergeState(initialState),
      state = _useMergeState[0],
      setState = _useMergeState[1];

  var nextState = gDSFP(props, state);
  if (nextState !== null) setState(nextState);
  return [state, setState];
}
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useMounted.js

/**
 * Track whether a component is current mounted. Generally less preferable than
 * properlly canceling effects so they don't run after a component is unmounted,
 * but helpful in cases where that isn't feasible, such as a `Promise` resolution.
 *
 * @returns a function that returns the current isMounted state of the component
 *
 * ```ts
 * const [data, setData] = useState(null)
 * const isMounted = useMounted()
 *
 * useEffect(() => {
 *   fetchdata().then((newData) => {
 *      if (isMounted()) {
 *        setData(newData);
 *      }
 *   })
 * })
 * ```
 */

function useMounted() {
  var mounted = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useRef)(true);
  var isMounted = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useRef)(function () {
    return mounted.current;
  });
  (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useEffect)(function () {
    mounted.current = true;
    return function () {
      mounted.current = false;
    };
  }, []);
  return isMounted.current;
}
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/usePrevious.js

/**
 * Store the last of some value. Tracked via a `Ref` only updating it
 * after the component renders.
 *
 * Helpful if you need to compare a prop value to it's previous value during render.
 *
 * ```ts
 * function Component(props) {
 *   const lastProps = usePrevious(props)
 *
 *   if (lastProps.foo !== props.foo)
 *     resetValueFromProps(props.foo)
 * }
 * ```
 *
 * @param value the value to track
 */

function usePrevious(value) {
  var ref = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useRef)(null);
  (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useEffect)(function () {
    ref.current = value;
  });
  return ref.current;
}
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useImage.js


/**
 * Fetch and load an image for programatic use such as in a `<canvas>` element.
 *
 * @param imageOrUrl The `HtmlImageElement` or image url to load
 * @param crossOrigin The `crossorigin` attribute to set
 *
 * ```ts
 * const { image, error } = useImage('/static/kittens.png')
 * const ref = useRef<HTMLCanvasElement>()
 *
 * useEffect(() => {
 *   const ctx = ref.current.getContext('2d')
 *
 *   if (image) {
 *     ctx.drawImage(image, 0, 0)
 *   }
 * }, [ref, image])
 *
 * return (
 *   <>
 *     {error && "there was a problem loading the image"}
 *     <canvas ref={ref} />
 *   </>
 * ```
 */
function useImage(imageOrUrl, crossOrigin) {
  var _useState = useState({
    image: null,
    error: null
  }),
      state = _useState[0],
      setState = _useState[1];

  useEffect(function () {
    if (!imageOrUrl) return undefined;
    var image;

    if (typeof imageOrUrl === 'string') {
      image = new Image();
      if (crossOrigin) image.crossOrigin = crossOrigin;
      image.src = imageOrUrl;
    } else {
      image = imageOrUrl;

      if (image.complete && image.naturalHeight > 0) {
        setState({
          image: image,
          error: null
        });
        return;
      }
    }

    function onLoad() {
      setState({
        image: image,
        error: null
      });
    }

    function onError(error) {
      setState({
        image: image,
        error: error
      });
    }

    image.addEventListener('load', onLoad);
    image.addEventListener('error', onError);
    return function () {
      image.removeEventListener('load', onLoad);
      image.removeEventListener('error', onError);
    };
  }, [imageOrUrl, crossOrigin]);
  return state;
}
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useIsomorphicEffect.js

var isReactNative = typeof global !== 'undefined' && // @ts-ignore
global.navigator && // @ts-ignore
global.navigator.product === 'ReactNative';
var isDOM = typeof document !== 'undefined';
/**
 * Is `useLayoutEffect` in a DOM or React Native environment, otherwise resolves to useEffect
 * Only useful to avoid the console warning.
 *
 * PREFER `useEffect` UNLESS YOU KNOW WHAT YOU ARE DOING.
 *
 * @category effects
 */

/* harmony default export */ const useIsomorphicEffect = (isDOM || isReactNative ? external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useLayoutEffect : external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useEffect);
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useResizeObserver.js


var targetMap = new WeakMap();
var resizeObserver;

function getResizeObserver() {
  // eslint-disable-next-line no-return-assign
  return resizeObserver = resizeObserver || new window.ResizeObserver(function (entries) {
    entries.forEach(function (entry) {
      var handler = targetMap.get(entry.target);
      if (handler) handler(entry.contentRect);
    });
  });
}
/**
 * Efficiently observe size changes on an element. Depends on the `ResizeObserver` api,
 * and polyfills are needed in older browsers.
 *
 * ```ts
 * const [ref, attachRef] = useCallbackRef(null);
 *
 * const rect = useResizeObserver(ref);
 *
 * return (
 *  <div ref={attachRef}>
 *    {JSON.stringify(rect)}
 *  </div>
 * )
 * ```
 *
 * @param element The DOM element to observe
 */


function useResizeObserver(element) {
  var _useState = useState(null),
      rect = _useState[0],
      setRect = _useState[1];

  useEffect(function () {
    if (!element) return;
    getResizeObserver().observe(element);
    setRect(element.getBoundingClientRect());
    targetMap.set(element, function (rect) {
      setRect(rect);
    });
    return function () {
      targetMap.delete(element);
    };
  }, [element]);
  return rect;
}
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/index.js














;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/Anchor.js
const Anchor_excluded = ["onKeyDown"];

function Anchor_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable jsx-a11y/anchor-has-content */




function Anchor_isTrivialHref(href) {
  return !href || href.trim() === '#';
}

/**
 * An generic `<a>` component that covers a few A11y cases, ensuring that
 * cases where the `href` is missing or trivial like "#" are treated like buttons.
 */
const Anchor = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.forwardRef((_ref, ref) => {
  let {
    onKeyDown
  } = _ref,
      props = Anchor_objectWithoutPropertiesLoose(_ref, Anchor_excluded);

  const [buttonProps] = useButtonProps(Object.assign({
    tagName: 'a'
  }, props));
  const handleKeyDown = useEventCallback_useEventCallback(e => {
    buttonProps.onKeyDown(e);
    onKeyDown == null ? void 0 : onKeyDown(e);
  });

  if (Anchor_isTrivialHref(props.href) || props.role === 'button') {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("a", Object.assign({
      ref: ref
    }, props, buttonProps, {
      onKeyDown: handleKeyDown
    }));
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)("a", Object.assign({
    ref: ref
  }, props, {
    onKeyDown: onKeyDown
  }));
});
Anchor.displayName = 'Anchor';
/* harmony default export */ const esm_Anchor = (Anchor);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/NavLink.js







const defaultProps = {
  disabled: false
};
const NavLink = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.forwardRef(({
  bsPrefix,
  className,
  as: Component = esm_Anchor,
  active,
  eventKey,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'nav-link');
  const [navItemProps, meta] = useNavItem({
    key: makeEventKey(eventKey, props.href),
    active,
    ...props
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, { ...props,
    ...navItemProps,
    ref: ref,
    className: classnames_default()(className, bsPrefix, props.disabled && 'disabled', meta.isActive && 'active')
  });
});
NavLink.displayName = 'NavLink';
NavLink.defaultProps = defaultProps;
/* harmony default export */ const esm_NavLink = (NavLink);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Nav.js












const Nav_defaultProps = {
  justify: false,
  fill: false
};
const Nav_Nav = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.forwardRef((uncontrolledProps, ref) => {
  const {
    as = 'div',
    bsPrefix: initialBsPrefix,
    variant,
    fill,
    justify,
    navbar,
    navbarScroll,
    className,
    activeKey,
    ...props
  } = useUncontrolled(uncontrolledProps, {
    activeKey: 'onSelect'
  });
  const bsPrefix = useBootstrapPrefix(initialBsPrefix, 'nav');
  let navbarBsPrefix;
  let cardHeaderBsPrefix;
  let isNavbar = false;
  const navbarContext = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useContext)(NavbarContext);
  const cardHeaderContext = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useContext)(CardHeaderContext);

  if (navbarContext) {
    navbarBsPrefix = navbarContext.bsPrefix;
    isNavbar = navbar == null ? true : navbar;
  } else if (cardHeaderContext) {
    ({
      cardHeaderBsPrefix
    } = cardHeaderContext);
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_Nav, {
    as: as,
    ref: ref,
    activeKey: activeKey,
    className: classnames_default()(className, {
      [bsPrefix]: !isNavbar,
      [`${navbarBsPrefix}-nav`]: isNavbar,
      [`${navbarBsPrefix}-nav-scroll`]: isNavbar && navbarScroll,
      [`${cardHeaderBsPrefix}-${variant}`]: !!cardHeaderBsPrefix,
      [`${bsPrefix}-${variant}`]: !!variant,
      [`${bsPrefix}-fill`]: fill,
      [`${bsPrefix}-justified`]: justify
    }),
    ...props
  });
});
Nav_Nav.displayName = 'Nav';
Nav_Nav.defaultProps = Nav_defaultProps;
/* harmony default export */ const react_bootstrap_esm_Nav = (Object.assign(Nav_Nav, {
  Item: react_bootstrap_esm_NavItem,
  Link: esm_NavLink
}));
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/NavbarBrand.js




const NavbarBrand = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.forwardRef(({
  bsPrefix,
  className,
  as,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'navbar-brand');
  const Component = as || (props.href ? 'a' : 'span');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, { ...props,
    ref: ref,
    className: classnames_default()(className, bsPrefix)
  });
});
NavbarBrand.displayName = 'NavbarBrand';
/* harmony default export */ const esm_NavbarBrand = (NavbarBrand);
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/ownerDocument.js
/**
 * Returns the owner document of a given element.
 * 
 * @param node the element
 */
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/ownerWindow.js

/**
 * Returns the owner window of a given element.
 * 
 * @param node the element
 */

function ownerWindow(node) {
  var doc = ownerDocument(node);
  return doc && doc.defaultView || window;
}
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/getComputedStyle.js

/**
 * Returns one or all computed style properties of an element.
 * 
 * @param node the element
 * @param psuedoElement the style property
 */

function getComputedStyle(node, psuedoElement) {
  return ownerWindow(node).getComputedStyle(node, psuedoElement);
}
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/hyphenate.js
var rUpper = /([A-Z])/g;
function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
}
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/hyphenateStyle.js
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
 */

var msPattern = /^ms-/;
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/isTransform.js
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function isTransform(value) {
  return !!(value && supportedTransforms.test(value));
}
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/css.js




function style(node, property) {
  var css = '';
  var transforms = '';

  if (typeof property === 'string') {
    return node.style.getPropertyValue(hyphenateStyleName(property)) || getComputedStyle(node).getPropertyValue(hyphenateStyleName(property));
  }

  Object.keys(property).forEach(function (key) {
    var value = property[key];

    if (!value && value !== 0) {
      node.style.removeProperty(hyphenateStyleName(key));
    } else if (isTransform(key)) {
      transforms += key + "(" + value + ") ";
    } else {
      css += hyphenateStyleName(key) + ": " + value + ";";
    }
  });

  if (transforms) {
    css += "transform: " + transforms + ";";
  }

  node.style.cssText += ";" + css;
}

/* harmony default export */ const css = (style);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js

function inheritsLoose_inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
;// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/config.js
/* harmony default export */ const config = ({
  disabled: false
});
;// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/TransitionGroupContext.js

/* harmony default export */ const TransitionGroupContext = (external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createContext(null));
;// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/utils/reflow.js
var forceReflow = function forceReflow(node) {
  return node.scrollTop;
};
;// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/Transition.js









var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  inheritsLoose_inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom.findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
          // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
          // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.

          if (node) forceReflow(node);
        }

        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [react_dom.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : react_dom.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().cloneElement(external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().Children.only(children), childProps))
    );
  };

  return Transition;
}((external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default()).Component);

Transition.contextType = TransitionGroupContext;
Transition.propTypes =  false ? 0 : {}; // Name the function so it is clearer in the documentation

function Transition_noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: Transition_noop,
  onEntering: Transition_noop,
  onEntered: Transition_noop,
  onExit: Transition_noop,
  onExiting: Transition_noop,
  onExited: Transition_noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
/* harmony default export */ const esm_Transition = (Transition);
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/canUseDOM.js
/* harmony default export */ const canUseDOM = (!!(typeof window !== 'undefined' && window.document && window.document.createElement));
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/addEventListener.js
/* eslint-disable no-return-assign */

var optionsSupported = false;
var onceSupported = false;

try {
  var options = {
    get passive() {
      return optionsSupported = true;
    },

    get once() {
      // eslint-disable-next-line no-multi-assign
      return onceSupported = optionsSupported = true;
    }

  };

  if (canUseDOM) {
    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, true);
  }
} catch (e) {
  /* */
}

/**
 * An `addEventListener` ponyfill, supports the `once` option
 * 
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */
function addEventListener(node, eventName, handler, options) {
  if (options && typeof options !== 'boolean' && !onceSupported) {
    var once = options.once,
        capture = options.capture;
    var wrappedHandler = handler;

    if (!onceSupported && once) {
      wrappedHandler = handler.__once || function onceHandler(event) {
        this.removeEventListener(eventName, onceHandler, capture);
        handler.call(this, event);
      };

      handler.__once = wrappedHandler;
    }

    node.addEventListener(eventName, wrappedHandler, optionsSupported ? options : capture);
  }

  node.addEventListener(eventName, handler, options);
}

/* harmony default export */ const esm_addEventListener = (addEventListener);
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/removeEventListener.js
/**
 * A `removeEventListener` ponyfill
 * 
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */
function removeEventListener(node, eventName, handler, options) {
  var capture = options && typeof options !== 'boolean' ? options.capture : options;
  node.removeEventListener(eventName, handler, capture);

  if (handler.__once) {
    node.removeEventListener(eventName, handler.__once, capture);
  }
}

/* harmony default export */ const esm_removeEventListener = (removeEventListener);
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/listen.js



function listen(node, eventName, handler, options) {
  esm_addEventListener(node, eventName, handler, options);
  return function () {
    esm_removeEventListener(node, eventName, handler, options);
  };
}

/* harmony default export */ const esm_listen = (listen);
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/triggerEvent.js
/**
 * Triggers an event on a given element.
 * 
 * @param node the element
 * @param eventName the event name to trigger
 * @param bubbles whether the event should bubble up
 * @param cancelable whether the event should be cancelable
 */
function triggerEvent(node, eventName, bubbles, cancelable) {
  if (bubbles === void 0) {
    bubbles = false;
  }

  if (cancelable === void 0) {
    cancelable = true;
  }

  if (node) {
    var event = document.createEvent('HTMLEvents');
    event.initEvent(eventName, bubbles, cancelable);
    node.dispatchEvent(event);
  }
}
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/transitionEnd.js




function parseDuration(node) {
  var str = css(node, 'transitionDuration') || '';
  var mult = str.indexOf('ms') === -1 ? 1000 : 1;
  return parseFloat(str) * mult;
}

function emulateTransitionEnd(element, duration, padding) {
  if (padding === void 0) {
    padding = 5;
  }

  var called = false;
  var handle = setTimeout(function () {
    if (!called) triggerEvent(element, 'transitionend', true);
  }, duration + padding);
  var remove = esm_listen(element, 'transitionend', function () {
    called = true;
  }, {
    once: true
  });
  return function () {
    clearTimeout(handle);
    remove();
  };
}

function transitionEnd(element, handler, duration, padding) {
  if (duration == null) duration = parseDuration(element) || 0;
  var removeEmulate = emulateTransitionEnd(element, duration, padding);
  var remove = esm_listen(element, 'transitionend', handler);
  return function () {
    removeEmulate();
    remove();
  };
}
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/transitionEndListener.js



function transitionEndListener_parseDuration(node, property) {
  const str = css(node, property) || '';
  const mult = str.indexOf('ms') === -1 ? 1000 : 1;
  return parseFloat(str) * mult;
}

function transitionEndListener(element, handler) {
  const duration = transitionEndListener_parseDuration(element, 'transitionDuration');
  const delay = transitionEndListener_parseDuration(element, 'transitionDelay');
  const remove = transitionEnd(element, e => {
    if (e.target === element) {
      remove();
      handler(e);
    }
  }, duration + delay);
}
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/createChainedFunction.js
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction(...funcs) {
  return funcs.filter(f => f != null).reduce((acc, f) => {
    if (typeof f !== 'function') {
      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
    }

    if (acc === null) return f;
    return function chainedFunction(...args) {
      // @ts-ignore
      acc.apply(this, args); // @ts-ignore

      f.apply(this, args);
    };
  }, null);
}

/* harmony default export */ const esm_createChainedFunction = (createChainedFunction);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/triggerBrowserReflow.js
// reading a dimension prop will cause the browser to recalculate,
// which will let our animations work
function triggerBrowserReflow(node) {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  node.offsetHeight;
}
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/safeFindDOMNode.js

function safeFindDOMNode(componentOrElement) {
  if (componentOrElement && 'setState' in componentOrElement) {
    return react_dom.findDOMNode(componentOrElement);
  }

  return componentOrElement != null ? componentOrElement : null;
}
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/TransitionWrapper.js





// Normalizes Transition callbacks when nodeRef is used.
const TransitionWrapper = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().forwardRef(({
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  onExited,
  addEndListener,
  children,
  childRef,
  ...props
}, ref) => {
  const nodeRef = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useRef)(null);
  const mergedRef = esm_useMergedRefs(nodeRef, childRef);

  const attachRef = r => {
    mergedRef(safeFindDOMNode(r));
  };

  const normalize = callback => param => {
    if (callback && nodeRef.current) {
      callback(nodeRef.current, param);
    }
  };
  /* eslint-disable react-hooks/exhaustive-deps */


  const handleEnter = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useCallback)(normalize(onEnter), [onEnter]);
  const handleEntering = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useCallback)(normalize(onEntering), [onEntering]);
  const handleEntered = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useCallback)(normalize(onEntered), [onEntered]);
  const handleExit = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useCallback)(normalize(onExit), [onExit]);
  const handleExiting = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useCallback)(normalize(onExiting), [onExiting]);
  const handleExited = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useCallback)(normalize(onExited), [onExited]);
  const handleAddEndListener = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useCallback)(normalize(addEndListener), [addEndListener]);
  /* eslint-enable react-hooks/exhaustive-deps */

  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_Transition, {
    ref: ref,
    ...props,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    nodeRef: nodeRef,
    children: typeof children === 'function' ? (status, innerProps) => children(status, { ...innerProps,
      ref: attachRef
    }) : /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().cloneElement(children, {
      ref: attachRef
    })
  });
});
/* harmony default export */ const esm_TransitionWrapper = (TransitionWrapper);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Collapse.js









const MARGINS = {
  height: ['marginTop', 'marginBottom'],
  width: ['marginLeft', 'marginRight']
};

function getDefaultDimensionValue(dimension, elem) {
  const offset = `offset${dimension[0].toUpperCase()}${dimension.slice(1)}`;
  const value = elem[offset];
  const margins = MARGINS[dimension];
  return value + // @ts-ignore
  parseInt(css(elem, margins[0]), 10) + // @ts-ignore
  parseInt(css(elem, margins[1]), 10);
}

const collapseStyles = {
  [EXITED]: 'collapse',
  [EXITING]: 'collapsing',
  [ENTERING]: 'collapsing',
  [ENTERED]: 'collapse show'
};
const Collapse_defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  getDimensionValue: getDefaultDimensionValue
};
const Collapse = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().forwardRef(({
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  className,
  children,
  dimension = 'height',
  getDimensionValue = getDefaultDimensionValue,
  ...props
}, ref) => {
  /* Compute dimension */
  const computedDimension = typeof dimension === 'function' ? dimension() : dimension;
  /* -- Expanding -- */

  const handleEnter = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useMemo)(() => esm_createChainedFunction(elem => {
    elem.style[computedDimension] = '0';
  }, onEnter), [computedDimension, onEnter]);
  const handleEntering = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useMemo)(() => esm_createChainedFunction(elem => {
    const scroll = `scroll${computedDimension[0].toUpperCase()}${computedDimension.slice(1)}`;
    elem.style[computedDimension] = `${elem[scroll]}px`;
  }, onEntering), [computedDimension, onEntering]);
  const handleEntered = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useMemo)(() => esm_createChainedFunction(elem => {
    elem.style[computedDimension] = null;
  }, onEntered), [computedDimension, onEntered]);
  /* -- Collapsing -- */

  const handleExit = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useMemo)(() => esm_createChainedFunction(elem => {
    elem.style[computedDimension] = `${getDimensionValue(computedDimension, elem)}px`;
    triggerBrowserReflow(elem);
  }, onExit), [onExit, getDimensionValue, computedDimension]);
  const handleExiting = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useMemo)(() => esm_createChainedFunction(elem => {
    elem.style[computedDimension] = null;
  }, onExiting), [computedDimension, onExiting]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_TransitionWrapper, {
    ref: ref,
    addEndListener: transitionEndListener,
    ...props,
    "aria-expanded": props.role ? props.in : null,
    onEnter: handleEnter,
    onEntering: handleEntering,
    onEntered: handleEntered,
    onExit: handleExit,
    onExiting: handleExiting,
    childRef: children.ref,
    children: (state, innerProps) => /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().cloneElement(children, { ...innerProps,
      className: classnames_default()(className, children.props.className, collapseStyles[state], computedDimension === 'width' && 'collapse-horizontal')
    })
  });
}); // @ts-ignore

// @ts-ignore
Collapse.defaultProps = Collapse_defaultProps;
/* harmony default export */ const esm_Collapse = (Collapse);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/NavbarCollapse.js






const NavbarCollapse = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.forwardRef(({
  children,
  bsPrefix,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'navbar-collapse');
  const context = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useContext)(NavbarContext);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_Collapse, {
    in: !!(context && context.expanded),
    ...props,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      ref: ref,
      className: bsPrefix,
      children: children
    })
  });
});
NavbarCollapse.displayName = 'NavbarCollapse';
/* harmony default export */ const esm_NavbarCollapse = (NavbarCollapse);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/NavbarToggle.js







const NavbarToggle_defaultProps = {
  label: 'Toggle navigation'
};
const NavbarToggle = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.forwardRef(({
  bsPrefix,
  className,
  children,
  label,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'button',
  onClick,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'navbar-toggler');
  const {
    onToggle,
    expanded
  } = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useContext)(NavbarContext) || {};
  const handleClick = useEventCallback_useEventCallback(e => {
    if (onClick) onClick(e);
    if (onToggle) onToggle();
  });

  if (Component === 'button') {
    props.type = 'button';
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, { ...props,
    ref: ref,
    onClick: handleClick,
    "aria-label": label,
    className: classnames_default()(className, bsPrefix, !expanded && 'collapsed'),
    children: children || /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: `${bsPrefix}-icon`
    })
  });
});
NavbarToggle.displayName = 'NavbarToggle';
NavbarToggle.defaultProps = NavbarToggle_defaultProps;
/* harmony default export */ const esm_NavbarToggle = (NavbarToggle);
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useMediaQuery.js


var matchersByWindow = new WeakMap();

var getMatcher = function getMatcher(query, targetWindow) {
  if (!query || !targetWindow) return undefined;
  var matchers = matchersByWindow.get(targetWindow) || new Map();
  matchersByWindow.set(targetWindow, matchers);
  var mql = matchers.get(query);

  if (!mql) {
    mql = targetWindow.matchMedia(query);
    mql.refCount = 0;
    matchers.set(mql.media, mql);
  }

  return mql;
};
/**
 * Match a media query and get updates as the match changes. The media string is
 * passed directly to `window.matchMedia` and run as a Layout Effect, so initial
 * matches are returned before the browser has a chance to paint.
 *
 * ```tsx
 * function Page() {
 *   const isWide = useMediaQuery('min-width: 1000px')
 *
 *   return isWide ? "very wide" : 'not so wide'
 * }
 * ```
 *
 * Media query lists are also reused globally, hook calls for the same query
 * will only create a matcher once under the hood.
 *
 * @param query A media query
 * @param targetWindow The window to match against, uses the globally available one as a default.
 */


function useMediaQuery(query, targetWindow) {
  if (targetWindow === void 0) {
    targetWindow = typeof window === 'undefined' ? undefined : window;
  }

  var mql = getMatcher(query, targetWindow);

  var _useState = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useState)(function () {
    return mql ? mql.matches : false;
  }),
      matches = _useState[0],
      setMatches = _useState[1];

  useIsomorphicEffect(function () {
    var mql = getMatcher(query, targetWindow);

    if (!mql) {
      return setMatches(false);
    }

    var matchers = matchersByWindow.get(targetWindow);

    var handleChange = function handleChange() {
      setMatches(mql.matches);
    };

    mql.refCount++;
    mql.addListener(handleChange);
    handleChange();
    return function () {
      mql.removeListener(handleChange);
      mql.refCount--;

      if (mql.refCount <= 0) {
        matchers == null ? void 0 : matchers.delete(mql.media);
      }

      mql = undefined;
    };
  }, [query]);
  return matches;
}
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useBreakpoint.js



/**
 * Create a responsive hook we a set of breakpoint names and widths.
 * You can use any valid css units as well as a numbers (for pixels).
 *
 * **NOTE:** The object key order is important! it's assumed to be in order from smallest to largest
 *
 * ```ts
 * const useBreakpoint = createBreakpointHook({
 *  xs: 0,
 *  sm: 576,
 *  md: 768,
 *  lg: 992,
 *  xl: 1200,
 * })
 * ```
 *
 * **Watch out!** using string values will sometimes construct media queries using css `calc()` which
 * is NOT supported in media queries by all browsers at the moment. use numbers for
 * the widest range of browser support.
 *
 * @param breakpointValues A object hash of names to breakpoint dimensions
 */
function createBreakpointHook(breakpointValues) {
  var names = Object.keys(breakpointValues);

  function and(query, next) {
    if (query === next) {
      return next;
    }

    return query ? query + " and " + next : next;
  }

  function getNext(breakpoint) {
    return names[Math.min(names.indexOf(breakpoint) + 1, names.length - 1)];
  }

  function getMaxQuery(breakpoint) {
    var next = getNext(breakpoint);
    var value = breakpointValues[next];
    if (typeof value === 'number') value = value - 0.2 + "px";else value = "calc(" + value + " - 0.2px)";
    return "(max-width: " + value + ")";
  }

  function getMinQuery(breakpoint) {
    var value = breakpointValues[breakpoint];

    if (typeof value === 'number') {
      value = value + "px";
    }

    return "(min-width: " + value + ")";
  }
  /**
   * Match a set of breakpoints
   *
   * ```tsx
   * const MidSizeOnly = () => {
   *   const isMid = useBreakpoint({ lg: 'down', sm: 'up' });
   *
   *   if (isMid) return <div>On a Reasonable sized Screen!</div>
   *   return null;
   * }
   * ```
   * @param breakpointMap An object map of breakpoints and directions, queries are constructed using "and" to join
   * breakpoints together
   * @param window Optionally specify the target window to match against (useful when rendering into iframes)
   */


  function useBreakpoint(breakpointOrMap, direction, window) {
    var breakpointMap;

    if (typeof breakpointOrMap === 'object') {
      breakpointMap = breakpointOrMap;
      window = direction;
      direction = true;
    } else {
      var _breakpointMap;

      direction = direction || true;
      breakpointMap = (_breakpointMap = {}, _breakpointMap[breakpointOrMap] = direction, _breakpointMap);
    }

    var query = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useMemo)(function () {
      return Object.entries(breakpointMap).reduce(function (query, _ref) {
        var key = _ref[0],
            direction = _ref[1];

        if (direction === 'up' || direction === true) {
          query = and(query, getMinQuery(key));
        }

        if (direction === 'down' || direction === true) {
          query = and(query, getMaxQuery(key));
        }

        return query;
      }, '');
    }, [JSON.stringify(breakpointMap)]);
    return useMediaQuery(query, window);
  }

  return useBreakpoint;
}
var useBreakpoint = createBreakpointHook({
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
});
/* harmony default export */ const esm_useBreakpoint = (useBreakpoint);
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/activeElement.js

/**
 * Returns the actively focused element safely.
 *
 * @param doc the document to check
 */

function activeElement(doc) {
  if (doc === void 0) {
    doc = ownerDocument();
  }

  // Support: IE 9 only
  // IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
  try {
    var active = doc.activeElement; // IE11 returns a seemingly empty object in some cases when accessing
    // document.activeElement from an <iframe>

    if (!active || !active.nodeName) return null;
    return active;
  } catch (e) {
    /* ie throws if no active element */
    return doc.body;
  }
}
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/contains.js
/* eslint-disable no-bitwise, no-cond-assign */

/**
 * Checks if an element contains another given element.
 * 
 * @param context the context element
 * @param node the element to check
 */
function contains(context, node) {
  // HTML DOM and SVG DOM may have different support levels,
  // so we need to check on context instead of a document root element.
  if (context.contains) return context.contains(node);
  if (context.compareDocumentPosition) return context === node || !!(context.compareDocumentPosition(node) & 16);
}
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useUpdatedRef.js

/**
 * Returns a ref that is immediately updated with the new value
 *
 * @param value The Ref value
 * @category refs
 */

function useUpdatedRef(value) {
  var valueRef = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useRef)(value);
  valueRef.current = value;
  return valueRef;
}
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useWillUnmount.js


/**
 * Attach a callback that fires when a component unmounts
 *
 * @param fn Handler to run when the component unmounts
 * @category effects
 */

function useWillUnmount(fn) {
  var onUnmount = useUpdatedRef(fn);
  (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useEffect)(function () {
    return function () {
      return onUnmount.current();
    };
  }, []);
}
;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/getScrollbarWidth.js
/**
 * Get the width of the vertical window scrollbar if it's visible
 */
function getBodyScrollbarWidth(ownerDocument = document) {
  const window = ownerDocument.defaultView;
  return Math.abs(window.innerWidth - ownerDocument.documentElement.clientWidth);
}
;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/ModalManager.js



const OPEN_DATA_ATTRIBUTE = dataAttr('modal-open');
/**
 * Manages a stack of Modals as well as ensuring
 * body scrolling is is disabled and padding accounted for
 */

class ModalManager {
  constructor({
    ownerDocument,
    handleContainerOverflow = true,
    isRTL = false
  } = {}) {
    this.handleContainerOverflow = handleContainerOverflow;
    this.isRTL = isRTL;
    this.modals = [];
    this.ownerDocument = ownerDocument;
  }

  getScrollbarWidth() {
    return getBodyScrollbarWidth(this.ownerDocument);
  }

  getElement() {
    return (this.ownerDocument || document).body;
  }

  setModalAttributes(_modal) {// For overriding
  }

  removeModalAttributes(_modal) {// For overriding
  }

  setContainerStyle(containerState) {
    const style = {
      overflow: 'hidden'
    }; // we are only interested in the actual `style` here
    // because we will override it

    const paddingProp = this.isRTL ? 'paddingLeft' : 'paddingRight';
    const container = this.getElement();
    containerState.style = {
      overflow: container.style.overflow,
      [paddingProp]: container.style[paddingProp]
    };

    if (containerState.scrollBarWidth) {
      // use computed style, here to get the real padding
      // to add our scrollbar width
      style[paddingProp] = `${parseInt(css(container, paddingProp) || '0', 10) + containerState.scrollBarWidth}px`;
    }

    container.setAttribute(OPEN_DATA_ATTRIBUTE, '');
    css(container, style);
  }

  reset() {
    [...this.modals].forEach(m => this.remove(m));
  }

  removeContainerStyle(containerState) {
    const container = this.getElement();
    container.removeAttribute(OPEN_DATA_ATTRIBUTE);
    Object.assign(container.style, containerState.style);
  }

  add(modal) {
    let modalIdx = this.modals.indexOf(modal);

    if (modalIdx !== -1) {
      return modalIdx;
    }

    modalIdx = this.modals.length;
    this.modals.push(modal);
    this.setModalAttributes(modal);

    if (modalIdx !== 0) {
      return modalIdx;
    }

    this.state = {
      scrollBarWidth: this.getScrollbarWidth(),
      style: {}
    };

    if (this.handleContainerOverflow) {
      this.setContainerStyle(this.state);
    }

    return modalIdx;
  }

  remove(modal) {
    const modalIdx = this.modals.indexOf(modal);

    if (modalIdx === -1) {
      return;
    }

    this.modals.splice(modalIdx, 1); // if that was the last modal in a container,
    // clean up the container

    if (!this.modals.length && this.handleContainerOverflow) {
      this.removeContainerStyle(this.state);
    }

    this.removeModalAttributes(modal);
  }

  isTopModal(modal) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
  }

}

/* harmony default export */ const esm_ModalManager = (ModalManager);
;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/useWindow.js


const Context = /*#__PURE__*/(0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.createContext)(canUseDOM ? window : undefined);
const WindowProvider = Context.Provider;
/**
 * The document "window" placed in React context. Helpful for determining
 * SSR context, or when rendering into an iframe.
 *
 * @returns the current window
 */

function useWindow() {
  return (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useContext)(Context);
}
;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/useWaitForDOMRef.js




const resolveContainerRef = (ref, document) => {
  if (!canUseDOM) return null;
  if (ref == null) return (document || ownerDocument()).body;
  if (typeof ref === 'function') ref = ref();
  if (ref && 'current' in ref) ref = ref.current;
  if (ref && ('nodeType' in ref || ref.getBoundingClientRect)) return ref;
  return null;
};
function useWaitForDOMRef(ref, onResolved) {
  const window = useWindow();
  const [resolvedRef, setRef] = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useState)(() => resolveContainerRef(ref, window == null ? void 0 : window.document));

  if (!resolvedRef) {
    const earlyRef = resolveContainerRef(ref);
    if (earlyRef) setRef(earlyRef);
  }

  (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useEffect)(() => {
    if (onResolved && resolvedRef) {
      onResolved(resolvedRef);
    }
  }, [onResolved, resolvedRef]);
  (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useEffect)(() => {
    const nextRef = resolveContainerRef(ref);

    if (nextRef !== resolvedRef) {
      setRef(nextRef);
    }
  }, [ref, resolvedRef]);
  return resolvedRef;
}
;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/Modal.js
const Modal_excluded = ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "backdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"];

function Modal_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable @typescript-eslint/no-use-before-define, react/prop-types */

















let manager;

function getManager(window) {
  if (!manager) manager = new esm_ModalManager({
    ownerDocument: window == null ? void 0 : window.document
  });
  return manager;
}

function useModalManager(provided) {
  const window = useWindow();
  const modalManager = provided || getManager(window);
  const modal = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useRef)({
    dialog: null,
    backdrop: null
  });
  return Object.assign(modal.current, {
    add: () => modalManager.add(modal.current),
    remove: () => modalManager.remove(modal.current),
    isTopModal: () => modalManager.isTopModal(modal.current),
    setDialogRef: (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useCallback)(ref => {
      modal.current.dialog = ref;
    }, []),
    setBackdropRef: (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useCallback)(ref => {
      modal.current.backdrop = ref;
    }, [])
  });
}

const Modal = /*#__PURE__*/(0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.forwardRef)((_ref, ref) => {
  let {
    show = false,
    role = 'dialog',
    className,
    style,
    children,
    backdrop = true,
    keyboard = true,
    onBackdropClick,
    onEscapeKeyDown,
    transition,
    backdropTransition,
    autoFocus = true,
    enforceFocus = true,
    restoreFocus = true,
    restoreFocusOptions,
    renderDialog,
    renderBackdrop = props => /*#__PURE__*/(0,jsx_runtime.jsx)("div", Object.assign({}, props)),
    manager: providedManager,
    container: containerRef,
    onShow,
    onHide = () => {},
    onExit,
    onExited,
    onExiting,
    onEnter,
    onEntering,
    onEntered
  } = _ref,
      rest = Modal_objectWithoutPropertiesLoose(_ref, Modal_excluded);

  const container = useWaitForDOMRef(containerRef);
  const modal = useModalManager(providedManager);
  const isMounted = useMounted();
  const prevShow = usePrevious(show);
  const [exited, setExited] = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useState)(!show);
  const lastFocusRef = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useRef)(null);
  (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useImperativeHandle)(ref, () => modal, [modal]);

  if (canUseDOM && !prevShow && show) {
    lastFocusRef.current = activeElement();
  }

  if (!transition && !show && !exited) {
    setExited(true);
  } else if (show && exited) {
    setExited(false);
  }

  const handleShow = useEventCallback_useEventCallback(() => {
    modal.add();
    removeKeydownListenerRef.current = esm_listen(document, 'keydown', handleDocumentKeyDown);
    removeFocusListenerRef.current = esm_listen(document, 'focus', // the timeout is necessary b/c this will run before the new modal is mounted
    // and so steals focus from it
    () => setTimeout(handleEnforceFocus), true);

    if (onShow) {
      onShow();
    } // autofocus after onShow to not trigger a focus event for previous
    // modals before this one is shown.


    if (autoFocus) {
      const currentActiveElement = activeElement(document);

      if (modal.dialog && currentActiveElement && !contains(modal.dialog, currentActiveElement)) {
        lastFocusRef.current = currentActiveElement;
        modal.dialog.focus();
      }
    }
  });
  const handleHide = useEventCallback_useEventCallback(() => {
    modal.remove();
    removeKeydownListenerRef.current == null ? void 0 : removeKeydownListenerRef.current();
    removeFocusListenerRef.current == null ? void 0 : removeFocusListenerRef.current();

    if (restoreFocus) {
      var _lastFocusRef$current;

      // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)
      (_lastFocusRef$current = lastFocusRef.current) == null ? void 0 : _lastFocusRef$current.focus == null ? void 0 : _lastFocusRef$current.focus(restoreFocusOptions);
      lastFocusRef.current = null;
    }
  }); // TODO: try and combine these effects: https://github.com/react-bootstrap/react-overlays/pull/794#discussion_r409954120
  // Show logic when:
  //  - show is `true` _and_ `container` has resolved

  (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useEffect)(() => {
    if (!show || !container) return;
    handleShow();
  }, [show, container,
  /* should never change: */
  handleShow]); // Hide cleanup logic when:
  //  - `exited` switches to true
  //  - component unmounts;

  (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useEffect)(() => {
    if (!exited) return;
    handleHide();
  }, [exited, handleHide]);
  useWillUnmount(() => {
    handleHide();
  }); // --------------------------------

  const handleEnforceFocus = useEventCallback_useEventCallback(() => {
    if (!enforceFocus || !isMounted() || !modal.isTopModal()) {
      return;
    }

    const currentActiveElement = activeElement();

    if (modal.dialog && currentActiveElement && !contains(modal.dialog, currentActiveElement)) {
      modal.dialog.focus();
    }
  });
  const handleBackdropClick = useEventCallback_useEventCallback(e => {
    if (e.target !== e.currentTarget) {
      return;
    }

    onBackdropClick == null ? void 0 : onBackdropClick(e);

    if (backdrop === true) {
      onHide();
    }
  });
  const handleDocumentKeyDown = useEventCallback_useEventCallback(e => {
    if (keyboard && e.keyCode === 27 && modal.isTopModal()) {
      onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(e);

      if (!e.defaultPrevented) {
        onHide();
      }
    }
  });
  const removeFocusListenerRef = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useRef)();
  const removeKeydownListenerRef = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useRef)();

  const handleHidden = (...args) => {
    setExited(true);
    onExited == null ? void 0 : onExited(...args);
  };

  const Transition = transition;

  if (!container || !(show || Transition && !exited)) {
    return null;
  }

  const dialogProps = Object.assign({
    role,
    ref: modal.setDialogRef,
    // apparently only works on the dialog role element
    'aria-modal': role === 'dialog' ? true : undefined
  }, rest, {
    style,
    className,
    tabIndex: -1
  });
  let dialog = renderDialog ? renderDialog(dialogProps) : /*#__PURE__*/(0,jsx_runtime.jsx)("div", Object.assign({}, dialogProps, {
    children: /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.cloneElement(children, {
      role: 'document'
    })
  }));

  if (Transition) {
    dialog = /*#__PURE__*/(0,jsx_runtime.jsx)(Transition, {
      appear: true,
      unmountOnExit: true,
      in: !!show,
      onExit: onExit,
      onExiting: onExiting,
      onExited: handleHidden,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered,
      children: dialog
    });
  }

  let backdropElement = null;

  if (backdrop) {
    const BackdropTransition = backdropTransition;
    backdropElement = renderBackdrop({
      ref: modal.setBackdropRef,
      onClick: handleBackdropClick
    });

    if (BackdropTransition) {
      backdropElement = /*#__PURE__*/(0,jsx_runtime.jsx)(BackdropTransition, {
        appear: true,
        in: !!show,
        children: backdropElement
      });
    }
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/react_dom.createPortal( /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [backdropElement, dialog]
    }), container)
  });
});
Modal.displayName = 'Modal';
/* harmony default export */ const esm_Modal = (Object.assign(Modal, {
  Manager: esm_ModalManager
}));
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Fade.js








const Fade_defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false
};
const fadeStyles = {
  [ENTERING]: 'show',
  [ENTERED]: 'show'
};
const Fade = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.forwardRef(({
  className,
  children,
  transitionClasses = {},
  ...props
}, ref) => {
  const handleEnter = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useCallback)((node, isAppearing) => {
    triggerBrowserReflow(node);
    props.onEnter == null ? void 0 : props.onEnter(node, isAppearing);
  }, [props]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_TransitionWrapper, {
    ref: ref,
    addEndListener: transitionEndListener,
    ...props,
    onEnter: handleEnter,
    childRef: children.ref,
    children: (status, innerProps) => /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.cloneElement(children, { ...innerProps,
      className: classnames_default()('fade', className, children.props.className, fadeStyles[status], transitionClasses[status])
    })
  });
});
Fade.defaultProps = Fade_defaultProps;
Fade.displayName = 'Fade';
/* harmony default export */ const esm_Fade = (Fade);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/OffcanvasBody.js

/* harmony default export */ const OffcanvasBody = (createWithBsPrefix('offcanvas-body'));
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/OffcanvasToggling.js







const OffcanvasToggling_defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false
};
const transitionStyles = {
  [ENTERING]: 'show',
  [ENTERED]: 'show'
};
const OffcanvasToggling = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.forwardRef(({
  bsPrefix,
  className,
  children,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'offcanvas');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_TransitionWrapper, {
    ref: ref,
    addEndListener: transitionEndListener,
    ...props,
    childRef: children.ref,
    children: (status, innerProps) => /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.cloneElement(children, { ...innerProps,
      className: classnames_default()(className, children.props.className, (status === ENTERING || status === EXITING) && `${bsPrefix}-toggling`, transitionStyles[status])
    })
  });
});
OffcanvasToggling.defaultProps = OffcanvasToggling_defaultProps;
OffcanvasToggling.displayName = 'OffcanvasToggling';
/* harmony default export */ const esm_OffcanvasToggling = (OffcanvasToggling);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/ModalContext.js

const ModalContext = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onHide() {}

});
/* harmony default export */ const esm_ModalContext = (ModalContext);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/CloseButton.js




const propTypes = {
  /** An accessible label indicating the relevant information about the Close Button. */
  'aria-label': (prop_types_default()).string,

  /** A callback fired after the Close Button is clicked. */
  onClick: (prop_types_default()).func,

  /**
   * Render different color variant for the button.
   *
   * Omitting this will render the default dark color.
   */
  variant: prop_types_default().oneOf(['white'])
};
const CloseButton_defaultProps = {
  'aria-label': 'Close'
};
const CloseButton = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.forwardRef(({
  className,
  variant,
  ...props
}, ref) => /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
  ref: ref,
  type: "button",
  className: classnames_default()('btn-close', variant && `btn-close-${variant}`, className),
  ...props
}));
CloseButton.displayName = 'CloseButton';
CloseButton.propTypes = propTypes;
CloseButton.defaultProps = CloseButton_defaultProps;
/* harmony default export */ const esm_CloseButton = (CloseButton);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/AbstractModalHeader.js







const AbstractModalHeader_defaultProps = {
  closeLabel: 'Close',
  closeButton: false
};
const AbstractModalHeader = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.forwardRef(({
  closeLabel,
  closeVariant,
  closeButton,
  onHide,
  children,
  ...props
}, ref) => {
  const context = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useContext)(esm_ModalContext);
  const handleClick = useEventCallback_useEventCallback(() => {
    context == null ? void 0 : context.onHide();
    onHide == null ? void 0 : onHide();
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    ref: ref,
    ...props,
    children: [children, closeButton && /*#__PURE__*/(0,jsx_runtime.jsx)(esm_CloseButton, {
      "aria-label": closeLabel,
      variant: closeVariant,
      onClick: handleClick
    })]
  });
});
AbstractModalHeader.defaultProps = AbstractModalHeader_defaultProps;
/* harmony default export */ const esm_AbstractModalHeader = (AbstractModalHeader);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/OffcanvasHeader.js





const OffcanvasHeader_defaultProps = {
  closeLabel: 'Close',
  closeButton: false
};
const OffcanvasHeader = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.forwardRef(({
  bsPrefix,
  className,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'offcanvas-header');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_AbstractModalHeader, {
    ref: ref,
    ...props,
    className: classnames_default()(className, bsPrefix)
  });
});
OffcanvasHeader.displayName = 'OffcanvasHeader';
OffcanvasHeader.defaultProps = OffcanvasHeader_defaultProps;
/* harmony default export */ const esm_OffcanvasHeader = (OffcanvasHeader);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/divWithClassName.js



/* harmony default export */ const divWithClassName = (className => /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.forwardRef((p, ref) => /*#__PURE__*/(0,jsx_runtime.jsx)("div", { ...p,
  ref: ref,
  className: classnames_default()(p.className, className)
})));
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/OffcanvasTitle.js


const DivStyledAsH5 = divWithClassName('h5');
/* harmony default export */ const OffcanvasTitle = (createWithBsPrefix('offcanvas-title', {
  Component: DivStyledAsH5
}));
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/hasClass.js
/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/addClass.js

/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/removeClass.js
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
/**
 * Removes a CSS class from a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */


function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/BootstrapModalManager.js





const Selector = {
  FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
  STICKY_CONTENT: '.sticky-top',
  NAVBAR_TOGGLER: '.navbar-toggler'
};

class BootstrapModalManager extends esm_ModalManager {
  adjustAndStore(prop, element, adjust) {
    const actual = element.style[prop]; // TODO: DOMStringMap and CSSStyleDeclaration aren't strictly compatible
    // @ts-ignore

    element.dataset[prop] = actual;
    css(element, {
      [prop]: `${parseFloat(css(element, prop)) + adjust}px`
    });
  }

  restore(prop, element) {
    const value = element.dataset[prop];

    if (value !== undefined) {
      delete element.dataset[prop];
      css(element, {
        [prop]: value
      });
    }
  }

  setContainerStyle(containerState) {
    super.setContainerStyle(containerState);
    const container = this.getElement();
    addClass(container, 'modal-open');
    if (!containerState.scrollBarWidth) return;
    const paddingProp = this.isRTL ? 'paddingLeft' : 'paddingRight';
    const marginProp = this.isRTL ? 'marginLeft' : 'marginRight';
    qsa(container, Selector.FIXED_CONTENT).forEach(el => this.adjustAndStore(paddingProp, el, containerState.scrollBarWidth));
    qsa(container, Selector.STICKY_CONTENT).forEach(el => this.adjustAndStore(marginProp, el, -containerState.scrollBarWidth));
    qsa(container, Selector.NAVBAR_TOGGLER).forEach(el => this.adjustAndStore(marginProp, el, containerState.scrollBarWidth));
  }

  removeContainerStyle(containerState) {
    super.removeContainerStyle(containerState);
    const container = this.getElement();
    removeClass(container, 'modal-open');
    const paddingProp = this.isRTL ? 'paddingLeft' : 'paddingRight';
    const marginProp = this.isRTL ? 'marginLeft' : 'marginRight';
    qsa(container, Selector.FIXED_CONTENT).forEach(el => this.restore(paddingProp, el));
    qsa(container, Selector.STICKY_CONTENT).forEach(el => this.restore(marginProp, el));
    qsa(container, Selector.NAVBAR_TOGGLER).forEach(el => this.restore(marginProp, el));
  }

}

let sharedManager;
function getSharedManager(options) {
  if (!sharedManager) sharedManager = new BootstrapModalManager(options);
  return sharedManager;
}
/* harmony default export */ const esm_BootstrapModalManager = (BootstrapModalManager);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Offcanvas.js


















const Offcanvas_defaultProps = {
  show: false,
  backdrop: true,
  keyboard: true,
  scroll: false,
  autoFocus: true,
  enforceFocus: true,
  restoreFocus: true,
  placement: 'start',
  renderStaticNode: false
};

function DialogTransition(props) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_OffcanvasToggling, { ...props
  });
}

function BackdropTransition(props) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_Fade, { ...props
  });
}

const Offcanvas = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.forwardRef(({
  bsPrefix,
  className,
  children,
  'aria-labelledby': ariaLabelledby,
  placement,
  responsive,

  /* BaseModal props */
  show,
  backdrop,
  keyboard,
  scroll,
  onEscapeKeyDown,
  onShow,
  onHide,
  container,
  autoFocus,
  enforceFocus,
  restoreFocus,
  restoreFocusOptions,
  onEntered,
  onExit,
  onExiting,
  onEnter,
  onEntering,
  onExited,
  backdropClassName,
  manager: propsManager,
  renderStaticNode,
  ...props
}, ref) => {
  const modalManager = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useRef)();
  bsPrefix = useBootstrapPrefix(bsPrefix, 'offcanvas');
  const {
    onToggle
  } = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useContext)(NavbarContext) || {};
  const [showOffcanvas, setShowOffcanvas] = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useState)(false);
  const hideResponsiveOffcanvas = esm_useBreakpoint(responsive || 'xs', 'up');
  (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useEffect)(() => {
    // Handles the case where screen is resized while the responsive
    // offcanvas is shown. If `responsive` not provided, just use `show`.
    setShowOffcanvas(responsive ? show && !hideResponsiveOffcanvas : show);
  }, [show, responsive, hideResponsiveOffcanvas]);
  const handleHide = useEventCallback_useEventCallback(() => {
    onToggle == null ? void 0 : onToggle();
    onHide == null ? void 0 : onHide();
  });
  const modalContext = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useMemo)(() => ({
    onHide: handleHide
  }), [handleHide]);

  function getModalManager() {
    if (propsManager) return propsManager;

    if (scroll) {
      // Have to use a different modal manager since the shared
      // one handles overflow.
      if (!modalManager.current) modalManager.current = new esm_BootstrapModalManager({
        handleContainerOverflow: false
      });
      return modalManager.current;
    }

    return getSharedManager();
  }

  const handleEnter = (node, ...args) => {
    if (node) node.style.visibility = 'visible';
    onEnter == null ? void 0 : onEnter(node, ...args);
  };

  const handleExited = (node, ...args) => {
    if (node) node.style.visibility = '';
    onExited == null ? void 0 : onExited(...args);
  };

  const renderBackdrop = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useCallback)(backdropProps => /*#__PURE__*/(0,jsx_runtime.jsx)("div", { ...backdropProps,
    className: classnames_default()(`${bsPrefix}-backdrop`, backdropClassName)
  }), [backdropClassName, bsPrefix]);

  const renderDialog = dialogProps => /*#__PURE__*/(0,jsx_runtime.jsx)("div", { ...dialogProps,
    ...props,
    className: classnames_default()(className, responsive ? `${bsPrefix}-${responsive}` : bsPrefix, `${bsPrefix}-${placement}`),
    "aria-labelledby": ariaLabelledby,
    children: children
  });

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [!showOffcanvas && (responsive || renderStaticNode) && renderDialog({}), /*#__PURE__*/(0,jsx_runtime.jsx)(esm_ModalContext.Provider, {
      value: modalContext,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(esm_Modal, {
        show: showOffcanvas,
        ref: ref,
        backdrop: backdrop,
        container: container,
        keyboard: keyboard,
        autoFocus: autoFocus,
        enforceFocus: enforceFocus && !scroll,
        restoreFocus: restoreFocus,
        restoreFocusOptions: restoreFocusOptions,
        onEscapeKeyDown: onEscapeKeyDown,
        onShow: onShow,
        onHide: handleHide,
        onEnter: handleEnter,
        onEntering: onEntering,
        onEntered: onEntered,
        onExit: onExit,
        onExiting: onExiting,
        onExited: handleExited,
        manager: getModalManager(),
        transition: DialogTransition,
        backdropTransition: BackdropTransition,
        renderBackdrop: renderBackdrop,
        renderDialog: renderDialog
      })
    })]
  });
});
Offcanvas.displayName = 'Offcanvas';
Offcanvas.defaultProps = Offcanvas_defaultProps;
/* harmony default export */ const esm_Offcanvas = (Object.assign(Offcanvas, {
  Body: OffcanvasBody,
  Header: esm_OffcanvasHeader,
  Title: OffcanvasTitle
}));
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/NavbarOffcanvas.js





const NavbarOffcanvas = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.forwardRef((props, ref) => {
  const context = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useContext)(NavbarContext);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_Offcanvas, {
    ref: ref,
    show: !!(context != null && context.expanded),
    ...props,
    renderStaticNode: true
  });
});
NavbarOffcanvas.displayName = 'NavbarOffcanvas';
/* harmony default export */ const esm_NavbarOffcanvas = (NavbarOffcanvas);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Navbar.js













const NavbarText = createWithBsPrefix('navbar-text', {
  Component: 'span'
});
const Navbar_defaultProps = {
  expand: true,
  variant: 'light',
  collapseOnSelect: false
};
const Navbar = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.forwardRef((props, ref) => {
  const {
    bsPrefix: initialBsPrefix,
    expand,
    variant,
    bg,
    fixed,
    sticky,
    className,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'nav',
    expanded,
    onToggle,
    onSelect,
    collapseOnSelect,
    ...controlledProps
  } = useUncontrolled(props, {
    expanded: 'onToggle'
  });
  const bsPrefix = useBootstrapPrefix(initialBsPrefix, 'navbar');
  const handleCollapse = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useCallback)((...args) => {
    onSelect == null ? void 0 : onSelect(...args);

    if (collapseOnSelect && expanded) {
      onToggle == null ? void 0 : onToggle(false);
    }
  }, [onSelect, collapseOnSelect, expanded, onToggle]); // will result in some false positives but that seems better
  // than false negatives. strict `undefined` check allows explicit
  // "nulling" of the role if the user really doesn't want one

  if (controlledProps.role === undefined && Component !== 'nav') {
    controlledProps.role = 'navigation';
  }

  let expandClass = `${bsPrefix}-expand`;
  if (typeof expand === 'string') expandClass = `${expandClass}-${expand}`;
  const navbarContext = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useMemo)(() => ({
    onToggle: () => onToggle == null ? void 0 : onToggle(!expanded),
    bsPrefix,
    expanded: !!expanded,
    expand
  }), [bsPrefix, expanded, expand, onToggle]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(NavbarContext.Provider, {
    value: navbarContext,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(esm_SelectableContext.Provider, {
      value: handleCollapse,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
        ref: ref,
        ...controlledProps,
        className: classnames_default()(className, bsPrefix, expand && expandClass, variant && `${bsPrefix}-${variant}`, bg && `bg-${bg}`, sticky && `sticky-${sticky}`, fixed && `fixed-${fixed}`)
      })
    })
  });
});
Navbar.defaultProps = Navbar_defaultProps;
Navbar.displayName = 'Navbar';
/* harmony default export */ const esm_Navbar = (Object.assign(Navbar, {
  Brand: esm_NavbarBrand,
  Collapse: esm_NavbarCollapse,
  Offcanvas: esm_NavbarOffcanvas,
  Text: NavbarText,
  Toggle: esm_NavbarToggle
}));
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Container.js




const Container_defaultProps = {
  fluid: false
};
const Container = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.forwardRef(({
  bsPrefix,
  fluid,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  className,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'container');
  const suffix = typeof fluid === 'string' ? `-${fluid}` : '-fluid';
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
    ref: ref,
    ...props,
    className: classnames_default()(className, fluid ? `${prefix}${suffix}` : prefix)
  });
});
Container.displayName = 'Container';
Container.defaultProps = Container_defaultProps;
/* harmony default export */ const esm_Container = (Container);
;// CONCATENATED MODULE: ./src/images/header/facebook.svg
/* harmony default export */ const facebook = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyNyIgdmlld0JveD0iMTE3Mi4wMTggMCAyOCAyNyI+PGcgZGF0YS1uYW1lPSJHcm91cCAxNDMiPjxnIGRhdGEtbmFtZT0iR3JvdXAgMTQyIj48cGF0aCBkPSJNMTE3Mi4wMTggMGgyOHYyN2gtMjhWMHoiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgOTkiLz48L2c+PHBhdGggZD0ibTExOTAuMjYgMTQuOTQxLjQ3LTMuMDYxaC0yLjkzN1Y5Ljg5NGMwLS44MzguNDEtMS42NTQgMS43MjYtMS42NTRoMS4zMzVWNS42MzRzLTEuMjEyLS4yMDctMi4zNy0uMjA3Yy0yLjQxOSAwLTQgMS40NjYtNCA0LjEydjIuMzMzaC0yLjY4OXYzLjA2MWgyLjY4OXY3LjRoMy4zMXYtNy40aDIuNDY3WiIgZmlsbC1ydWxlPSJldmVub2RkIiBkYXRhLW5hbWU9Ikljb24gYXdlc29tZS1mYWNlYm9vay1mIi8+PC9nPjwvc3ZnPg==");
;// CONCATENATED MODULE: ./src/images/header/instagram.svg
/* harmony default export */ const instagram = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNyIgaGVpZ2h0PSIyNyIgdmlld0JveD0iMTIyMy4wMTggMCAyNyAyNyI+PGcgZGF0YS1uYW1lPSJHcm91cCAxNDEiPjxwYXRoIGQ9Ik0xMjIzLjAxOCAwaDI3djI3aC0yN1YweiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkYXRhLW5hbWU9IlJlY3RhbmdsZSA5OSIvPjxnIGRhdGEtbmFtZT0iSWNvbiBmZWF0aGVyLWluc3RhZ3JhbSI+PHBhdGggZD0iTTEyMzIuNDc2IDUuNjE3aDcuOTVhMy45NzUgMy45NzUgMCAwIDEgMy45NzUgMy45NzV2Ny45NWEzLjk3NSAzLjk3NSAwIDAgMS0zLjk3NSAzLjk3NWgtNy45NWEzLjk3NSAzLjk3NSAwIDAgMS0zLjk3Ni0zLjk3NXYtNy45NWEzLjk3NSAzLjk3NSAwIDAgMSAzLjk3Ni0zLjk3NVoiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9IiMwMDAiIGZpbGw9InRyYW5zcGFyZW50IiBkYXRhLW5hbWU9IlBhdGggNDI1Ii8+PHBhdGggZD0iTTEyMzkuNjMgMTMuMDY2YTMuMTggMy4xOCAwIDEgMS02LjI5LjkzMyAzLjE4IDMuMTggMCAwIDEgNi4yOS0uOTMzWiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iIzAwMCIgZmlsbD0idHJhbnNwYXJlbnQiIGRhdGEtbmFtZT0iUGF0aCA0MjYiLz48cGF0aCBkPSJNMTI0MC44MjMgOS4xOTRoMCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iIzAwMCIgZmlsbD0idHJhbnNwYXJlbnQiIGRhdGEtbmFtZT0iUGF0aCA0MjciLz48L2c+PC9nPjwvc3ZnPg==");
;// CONCATENATED MODULE: ./src/components/header/navbar/navbar.jsx
const HeaderNavbar=()=>{return/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(esm_Navbar,{bg:"transparent",expand:"lg",className:"navbar-container"},/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(esm_Navbar.Brand,{className:"navbar-logo",href:"#home"},"LOGO"),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(esm_Container,{className:"navbar-list-and-icons"},/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(react_bootstrap_esm_Nav,{className:"links-container"},/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(react_bootstrap_esm_Nav.Link,{href:"#space",className:"link"},"Poznaj przestrze\u0144"),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(react_bootstrap_esm_Nav.Link,{href:"#offer",className:"link"},"Oferta"),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(react_bootstrap_esm_Nav.Link,{href:"#localization",className:"link"},"Lokalizacja"),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(react_bootstrap_esm_Nav.Link,{href:"#office",className:"link"},"W\u0142asne biuro"),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(react_bootstrap_esm_Nav.Link,{href:"#contact",className:"link"},"Kontakt")),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(react_bootstrap_esm_Nav,{className:"nav-icons-container"},/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("img",{src:facebook,alt:"f"}),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("img",{src:instagram,alt:"i"}))));};/* harmony default export */ const navbar = (HeaderNavbar);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Feedback.js




const Feedback_propTypes = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: (prop_types_default()).string,

  /** Display feedback as a tooltip. */
  tooltip: (prop_types_default()).bool,
  as: (prop_types_default()).elementType
};
const Feedback = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({
  as: Component = 'div',
  className,
  type = 'valid',
  tooltip = false,
  ...props
}, ref) => /*#__PURE__*/(0,jsx_runtime.jsx)(Component, { ...props,
  ref: ref,
  className: classnames_default()(className, `${type}-${tooltip ? 'tooltip' : 'feedback'}`)
}));
Feedback.displayName = 'Feedback';
Feedback.propTypes = Feedback_propTypes;
/* harmony default export */ const esm_Feedback = (Feedback);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormContext.js
 // TODO

const FormContext = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.createContext({});
/* harmony default export */ const esm_FormContext = (FormContext);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormCheckInput.js






const FormCheckInput = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.forwardRef(({
  id,
  bsPrefix,
  className,
  type = 'checkbox',
  isValid = false,
  isInvalid = false,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'input',
  ...props
}, ref) => {
  const {
    controlId
  } = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useContext)(esm_FormContext);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-check-input');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, { ...props,
    ref: ref,
    type: type,
    id: id || controlId,
    className: classnames_default()(className, bsPrefix, isValid && 'is-valid', isInvalid && 'is-invalid')
  });
});
FormCheckInput.displayName = 'FormCheckInput';
/* harmony default export */ const esm_FormCheckInput = (FormCheckInput);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormCheckLabel.js






const FormCheckLabel = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.forwardRef(({
  bsPrefix,
  className,
  htmlFor,
  ...props
}, ref) => {
  const {
    controlId
  } = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useContext)(esm_FormContext);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-check-label');
  return /*#__PURE__*/(0,jsx_runtime.jsx)("label", { ...props,
    ref: ref,
    htmlFor: htmlFor || controlId,
    className: classnames_default()(className, bsPrefix)
  });
});
FormCheckLabel.displayName = 'FormCheckLabel';
/* harmony default export */ const esm_FormCheckLabel = (FormCheckLabel);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/ElementChildren.js

/**
 * Iterates through children that are typically specified as `props.children`,
 * but only maps over children that are "valid elements".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 */

function map(children, func) {
  let index = 0;
  return React.Children.map(children, child => /*#__PURE__*/React.isValidElement(child) ? func(child, index++) : child);
}
/**
 * Iterates through children that are "valid elements".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 */


function forEach(children, func) {
  let index = 0;
  React.Children.forEach(children, child => {
    if ( /*#__PURE__*/React.isValidElement(child)) func(child, index++);
  });
}
/**
 * Finds whether a component's `children` prop includes a React element of the
 * specified type.
 */


function hasChildOfType(children, type) {
  return external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.Children.toArray(children).some(child => /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.isValidElement(child) && child.type === type);
}


;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormCheck.js












const FormCheck = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.forwardRef(({
  id,
  bsPrefix,
  bsSwitchPrefix,
  inline = false,
  reverse = false,
  disabled = false,
  isValid = false,
  isInvalid = false,
  feedbackTooltip = false,
  feedback,
  feedbackType,
  className,
  style,
  title = '',
  type = 'checkbox',
  label,
  children,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as = 'input',
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-check');
  bsSwitchPrefix = useBootstrapPrefix(bsSwitchPrefix, 'form-switch');
  const {
    controlId
  } = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useContext)(esm_FormContext);
  const innerFormContext = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useMemo)(() => ({
    controlId: id || controlId
  }), [controlId, id]);
  const hasLabel = !children && label != null && label !== false || hasChildOfType(children, esm_FormCheckLabel);

  const input = /*#__PURE__*/(0,jsx_runtime.jsx)(esm_FormCheckInput, { ...props,
    type: type === 'switch' ? 'checkbox' : type,
    ref: ref,
    isValid: isValid,
    isInvalid: isInvalid,
    disabled: disabled,
    as: as
  });

  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_FormContext.Provider, {
    value: innerFormContext,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      style: style,
      className: classnames_default()(className, hasLabel && bsPrefix, inline && `${bsPrefix}-inline`, reverse && `${bsPrefix}-reverse`, type === 'switch' && bsSwitchPrefix),
      children: children || /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [input, hasLabel && /*#__PURE__*/(0,jsx_runtime.jsx)(esm_FormCheckLabel, {
          title: title,
          children: label
        }), feedback && /*#__PURE__*/(0,jsx_runtime.jsx)(esm_Feedback, {
          type: feedbackType,
          tooltip: feedbackTooltip,
          children: feedback
        })]
      })
    })
  });
});
FormCheck.displayName = 'FormCheck';
/* harmony default export */ const esm_FormCheck = (Object.assign(FormCheck, {
  Input: esm_FormCheckInput,
  Label: esm_FormCheckLabel
}));
// EXTERNAL MODULE: ./node_modules/warning/warning.js
var warning = __webpack_require__(2473);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormControl.js








const FormControl = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.forwardRef(({
  bsPrefix,
  type,
  size,
  htmlSize,
  id,
  className,
  isValid = false,
  isInvalid = false,
  plaintext,
  readOnly,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'input',
  ...props
}, ref) => {
  const {
    controlId
  } = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useContext)(esm_FormContext);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-control');
  let classes;

  if (plaintext) {
    classes = {
      [`${bsPrefix}-plaintext`]: true
    };
  } else {
    classes = {
      [bsPrefix]: true,
      [`${bsPrefix}-${size}`]: size
    };
  }

   false ? 0 : void 0;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, { ...props,
    type: type,
    size: htmlSize,
    ref: ref,
    readOnly: readOnly,
    id: id || controlId,
    className: classnames_default()(className, classes, isValid && `is-valid`, isInvalid && `is-invalid`, type === 'color' && `${bsPrefix}-color`)
  });
});
FormControl.displayName = 'FormControl';
/* harmony default export */ const esm_FormControl = (Object.assign(FormControl, {
  Feedback: esm_Feedback
}));
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormFloating.js

/* harmony default export */ const FormFloating = (createWithBsPrefix('form-floating'));
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormGroup.js




const FormGroup = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.forwardRef(({
  controlId,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  const context = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useMemo)(() => ({
    controlId
  }), [controlId]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_FormContext.Provider, {
    value: context,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Component, { ...props,
      ref: ref
    })
  });
});
FormGroup.displayName = 'FormGroup';
/* harmony default export */ const esm_FormGroup = (FormGroup);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Col.js




function useCol({
  as,
  bsPrefix,
  className,
  ...props
}) {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'col');
  const breakpoints = useBootstrapBreakpoints();
  const minBreakpoint = useBootstrapMinBreakpoint();
  const spans = [];
  const classes = [];
  breakpoints.forEach(brkPoint => {
    const propValue = props[brkPoint];
    delete props[brkPoint];
    let span;
    let offset;
    let order;

    if (typeof propValue === 'object' && propValue != null) {
      ({
        span,
        offset,
        order
      } = propValue);
    } else {
      span = propValue;
    }

    const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : '';
    if (span) spans.push(span === true ? `${bsPrefix}${infix}` : `${bsPrefix}${infix}-${span}`);
    if (order != null) classes.push(`order${infix}-${order}`);
    if (offset != null) classes.push(`offset${infix}-${offset}`);
  });
  return [{ ...props,
    className: classnames_default()(className, ...spans, ...classes)
  }, {
    as,
    bsPrefix,
    spans
  }];
}
const Col = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
(props, ref) => {
  const [{
    className,
    ...colProps
  }, {
    as: Component = 'div',
    bsPrefix,
    spans
  }] = useCol(props);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, { ...colProps,
    ref: ref,
    className: classnames_default()(className, !spans.length && bsPrefix)
  });
});
Col.displayName = 'Col';
/* harmony default export */ const esm_Col = (Col);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormLabel.js








const FormLabel_defaultProps = {
  column: false,
  visuallyHidden: false
};
const FormLabel = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'label',
  bsPrefix,
  column,
  visuallyHidden,
  className,
  htmlFor,
  ...props
}, ref) => {
  const {
    controlId
  } = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useContext)(esm_FormContext);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-label');
  let columnClass = 'col-form-label';
  if (typeof column === 'string') columnClass = `${columnClass} ${columnClass}-${column}`;
  const classes = classnames_default()(className, bsPrefix, visuallyHidden && 'visually-hidden', column && columnClass);
   false ? 0 : void 0;
  htmlFor = htmlFor || controlId;
  if (column) return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_Col, {
    ref: ref,
    as: "label",
    className: classes,
    htmlFor: htmlFor,
    ...props
  });
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    (0,jsx_runtime.jsx)(Component, {
      ref: ref,
      className: classes,
      htmlFor: htmlFor,
      ...props
    })
  );
});
FormLabel.displayName = 'FormLabel';
FormLabel.defaultProps = FormLabel_defaultProps;
/* harmony default export */ const esm_FormLabel = (FormLabel);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormRange.js






const FormRange = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.forwardRef(({
  bsPrefix,
  className,
  id,
  ...props
}, ref) => {
  const {
    controlId
  } = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useContext)(esm_FormContext);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-range');
  return /*#__PURE__*/(0,jsx_runtime.jsx)("input", { ...props,
    type: "range",
    ref: ref,
    className: classnames_default()(className, bsPrefix),
    id: id || controlId
  });
});
FormRange.displayName = 'FormRange';
/* harmony default export */ const esm_FormRange = (FormRange);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormSelect.js






const FormSelect = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.forwardRef(({
  bsPrefix,
  size,
  htmlSize,
  className,
  isValid = false,
  isInvalid = false,
  id,
  ...props
}, ref) => {
  const {
    controlId
  } = (0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useContext)(esm_FormContext);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-select');
  return /*#__PURE__*/(0,jsx_runtime.jsx)("select", { ...props,
    size: htmlSize,
    ref: ref,
    className: classnames_default()(className, bsPrefix, size && `${bsPrefix}-${size}`, isValid && `is-valid`, isInvalid && `is-invalid`),
    id: id || controlId
  });
});
FormSelect.displayName = 'FormSelect';
/* harmony default export */ const esm_FormSelect = (FormSelect);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormText.js




const FormText = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({
  bsPrefix,
  className,
  as: Component = 'small',
  muted,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-text');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, { ...props,
    ref: ref,
    className: classnames_default()(className, bsPrefix, muted && 'text-muted')
  });
});
FormText.displayName = 'FormText';
/* harmony default export */ const esm_FormText = (FormText);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Switch.js



const Switch = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.forwardRef((props, ref) => /*#__PURE__*/(0,jsx_runtime.jsx)(esm_FormCheck, { ...props,
  ref: ref,
  type: "switch"
}));
Switch.displayName = 'Switch';
/* harmony default export */ const esm_Switch = (Object.assign(Switch, {
  Input: esm_FormCheck.Input,
  Label: esm_FormCheck.Label
}));
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FloatingLabel.js






const FloatingLabel = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.forwardRef(({
  bsPrefix,
  className,
  children,
  controlId,
  label,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-floating');
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(esm_FormGroup, {
    ref: ref,
    className: classnames_default()(className, bsPrefix),
    controlId: controlId,
    ...props,
    children: [children, /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
      htmlFor: controlId,
      children: label
    })]
  });
});
FloatingLabel.displayName = 'FloatingLabel';
/* harmony default export */ const esm_FloatingLabel = (FloatingLabel);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Form.js














const Form_propTypes = {
  /**
   * The Form `ref` will be forwarded to the underlying element,
   * which means, unless it's rendered `as` a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias ref
   */
  _ref: (prop_types_default()).any,

  /**
   * Mark a form as having been validated. Setting it to `true` will
   * toggle any validation styles on the forms elements.
   */
  validated: (prop_types_default()).bool,
  as: (prop_types_default()).elementType
};
const Form = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.forwardRef(({
  className,
  validated,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'form',
  ...props
}, ref) => /*#__PURE__*/(0,jsx_runtime.jsx)(Component, { ...props,
  ref: ref,
  className: classnames_default()(className, validated && 'was-validated')
}));
Form.displayName = 'Form';
Form.propTypes = Form_propTypes;
/* harmony default export */ const esm_Form = (Object.assign(Form, {
  Group: esm_FormGroup,
  Control: esm_FormControl,
  Floating: FormFloating,
  Check: esm_FormCheck,
  Switch: esm_Switch,
  Label: esm_FormLabel,
  Text: esm_FormText,
  Range: esm_FormRange,
  Select: esm_FormSelect,
  FloatingLabel: esm_FloatingLabel
}));
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Button.js





const Button_defaultProps = {
  variant: 'primary',
  active: false,
  disabled: false
};
const Button_Button = /*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.forwardRef(({
  as,
  bsPrefix,
  variant,
  size,
  active,
  className,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'btn');
  const [buttonProps, {
    tagName
  }] = useButtonProps({
    tagName: as,
    ...props
  });
  const Component = tagName;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, { ...buttonProps,
    ...props,
    ref: ref,
    className: classnames_default()(className, prefix, active && 'active', variant && `${prefix}-${variant}`, size && `${prefix}-${size}`, props.href && props.disabled && 'disabled')
  });
});
Button_Button.displayName = 'Button';
Button_Button.defaultProps = Button_defaultProps;
/* harmony default export */ const react_bootstrap_esm_Button = (Button_Button);
;// CONCATENATED MODULE: ./src/components/header/form/form.jsx
const HeaderForm=()=>{return/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(esm_Form,{className:"form-container"},/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(esm_Form.Group,{className:"form-title-text-container"},/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(esm_Form.Label,{className:"form-title"},"Lorem ipsum ",/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("br",null),"Lorem ipsum lorem ipsum"),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(esm_Form.Label,{className:"form-description-text"},"consectetur adipiscing elit. Ut auctor arcu"),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(esm_Form.Label,{className:"form-text-message"},"Zostaw kontakt, zadzwonimy do Ciebie")),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(esm_Form.Group,{className:"form-input-container"},/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(esm_Form.Control,{type:"text",placeholder:"Imi\u0119 i nazwisko",className:"form-input"}),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(esm_Form.Control,{type:"text",placeholder:"Telefon",className:"form-input"}),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(esm_Form.Control,{type:"email",placeholder:"Email",className:"form-input"}),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(esm_Form.Control,{type:"text",placeholder:"Lorem ipsum lorem ipsum",className:"form-input"})),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(esm_Form.Group,{className:"form-footer"},/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(esm_Form.Switch,{className:"form-switch",label:/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(esm_Form.Label,{className:"form-footer-text"},"Wyra\u017Cam dobrowoln\u0105 zgod\u0119 na przetwarzanie moich danych",/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("br",null)," osobowych wi\u0119cej...")}),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(react_bootstrap_esm_Button,{className:"form-submit"},"wy\u015Blij")));};/* harmony default export */ const form_form = (HeaderForm);
;// CONCATENATED MODULE: ./src/components/header/title/title.jsx
const Title=()=>{return/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(esm_Container,{className:"title-container"},/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("h1",{className:"title"},"Firma"),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("p",{className:"title-content"},"Lorem ipsum dolor sit amet,",/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("br",null)," consectetur adipiscing elit. Ut auctor"));};/* harmony default export */ const title = (Title);
;// CONCATENATED MODULE: ./src/components/header/swapbar/swapbar.jsx
const Arrow=props=>{return/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("svg",{style:{transform:`rotate(${props.rotate}deg)`},xmlns:"http://www.w3.org/2000/svg",width:"38.268",height:"33.624"},/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("g",{"data-name":"CompositeLayer"},/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("path",{d:"M16.812 0 0 16.812l16.812 16.812",strokeLinejoin:"round",strokeLinecap:"square",strokeWidth:"3",stroke:props.color,fill:"transparent","data-name":"Path 429"}),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("path",{d:"M38.268 16.812H1.763",strokeLinejoin:"round",strokeLinecap:"square",strokeWidth:"3",stroke:props.color,fill:"transparent","data-name":"Path 428"})));};const Swapbar=()=>{const{currentImage,setImage}=(0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useContext)(MoveContext);const{0:currentElement,1:setElement}=(0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useState)(1);const{0:arrowLeft,1:setArrowLeft}=(0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useState)("black");const{0:arrowRight,1:setArrowRight}=(0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useState)("black");const image_move=(current_value,target_value)=>{if(current_value<target_value){let i=currentImage;let interval=setInterval(()=>{if(i===target_value)clearInterval(interval);setImage(i);i++;},1);}if(current_value>target_value){let i=currentImage;let interval=setInterval(()=>{if(i===target_value)clearInterval(interval);setImage(i);i--;},1);}};const image_background=elem=>{switch(elem){case 1:// setImage(-100);
image_move(currentImage,-100);break;case 2:image_move(currentImage,-65);// setImage(-65);
break;case 3:image_move(currentImage,-35);// do {
//   setImage(-30);
// } while (currentImage !== -30);
break;case 4:image_move(currentImage,0);// setImage(0);
break;default:break;}};const SwapBackground=dir=>{if(dir==="left"){if(currentElement===1){setElement(4);image_background(4);}else{setElement(currentElement-1);image_background(currentElement-1);}}if(dir==="right"){if(currentElement===4){setElement(1);image_background(1);}else{setElement(currentElement+1);image_background(currentElement+1);}}};return/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(esm_Container,{className:"swapbar-container"},/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("div",{className:"swap-button",onClick:()=>{SwapBackground("left");},onMouseEnter:()=>{setArrowLeft("white");},onMouseLeave:()=>{setArrowLeft("black");}},/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(Arrow,{color:arrowLeft})),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("div",{className:"swap-button",onClick:()=>{SwapBackground("right");},onMouseEnter:()=>{setArrowRight("white");},onMouseLeave:()=>{setArrowRight("black");}},/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(Arrow,{rotate:"180",color:arrowRight})),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("div",{className:"display-output"},/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("p",{className:"previous-value"},"0",currentElement!==1&&currentElement-1,currentElement===1&&4),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("div",{className:"current-image-bar"},/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("div",{className:"line-bar",style:{marginLeft:currentElement===1?"0%":`${(currentElement-1)*25}%`}})),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("p",{className:"next-value"},"0",currentElement!==4&&currentElement+1,currentElement===4&&1)));};/* harmony default export */ const swapbar = (Swapbar);
;// CONCATENATED MODULE: ./src/images/offer/pic1.png
/* harmony default export */ const pic1 = (__webpack_require__.p + "static/pic1-5022612d20f1cc48e71dc9d0662a0bdc.png");
;// CONCATENATED MODULE: ./src/images/offer/pic2.png
/* harmony default export */ const pic2 = (__webpack_require__.p + "static/pic2-320b848663a8dae36d1e23f0ac413ef1.png");
;// CONCATENATED MODULE: ./src/images/offer/pic3.png
/* harmony default export */ const pic3 = (__webpack_require__.p + "static/pic3-87720cc1109711873830e013db68e79d.png");
;// CONCATENATED MODULE: ./src/images/offer/pic4.png
/* harmony default export */ const pic4 = (__webpack_require__.p + "static/pic4-a5e48d9ab0229dda740f3b6adf2704ca.png");
;// CONCATENATED MODULE: ./src/images/offer/arrow.jsx
const OfferArrow=props=>{return/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24.616",height:"21.538",viewBox:"155 18 24.616 21.538"},/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("g",{"data-name":"Icon feather-arrow-right"},/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("path",{d:"M155 28.769h23.482",strokeLinejoin:"round",strokeLinecap:"square",strokeWidth:"3",stroke:props.hover?"white":"#000",fill:"transparent","data-name":"Path 428"}),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("path",{d:"m168.801 39.538 10.815-10.77L168.8 18",strokeLinejoin:"round",strokeLinecap:"square",strokeWidth:"3",stroke:props.hover?"white":"#000",fill:"transparent","data-name":"Path 429"})));};/* harmony default export */ const arrow = (OfferArrow);
;// CONCATENATED MODULE: ./src/components/offers/offer.jsx
const IndividualOffer=props=>{const{0:isHover,1:setHover}=(0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useState)(false);const buttonStyle={background:" linear-gradient(to right, black 50%, white 50%)",backgroundSize:" 200% 100%",backgroundPosition:isHover?"left bottom":" right bottom",transition:"all 200ms ease-out"};return/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("div",{style:{backgroundImage:`url(${props.src})`,height:` ${props.y}px`},className:"individual-offer"},/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("div",{className:"hover-element",onMouseEnter:()=>{setHover(true);},onMouseLeave:()=>{setHover(false);},style:{height:`${props.y}px`}}),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("div",{className:"offer-coverage",style:{alignItems:props.position==="down"?"flex-end":"flex-start"}},/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("div",{className:"offer-information"},/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("div",{className:"offer-header"},/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("div",null,props.title.split("/n").map((value,key)=>{return/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("p",{className:"offer-title",key:key},value," ",/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("br",null));})),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("div",{className:"offer-rectangle"})),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("div",null,/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("div",{className:"border-line"}),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("div",{className:"offer-price"},props.price))),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("div",{className:"offer-button",style:buttonStyle},/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(arrow,{hover:isHover}))));};const Offer=()=>{return/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(esm_Container,{className:"offer-container"},/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(IndividualOffer,{position:"up",src:pic1,y:"495",title:"Biuro",price:"od 1000z\u0142/msc"}),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(IndividualOffer,{position:"up",src:pic2,y:"495",title:"Lorem/nipsum",price:"od 500z\u0142/msc"}),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(IndividualOffer,{position:"down",src:pic3,y:"362",title:"Biuro/nlorem",price:"od 100z\u0142/h"}),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(IndividualOffer,{position:"down",src:pic4,y:"362",title:"Biuro lorem ipsum/nLorem",price:"od 100z\u0142/h"}));};/* harmony default export */ const offer = (Offer);
;// CONCATENATED MODULE: ./src/images/benefits/1.svg
/* harmony default export */ const _1 = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMzcuNTAzIiBoZWlnaHQ9IjEwNC4xMTMiIHZpZXdCb3g9IjAgMCAxMzcuNTAzIDEwNC4xMTMiPjxkZWZzPjxzdHlsZT4uYXtmaWxsOiNmZmNjNDg7fS5iLC5ke2ZpbGw6bm9uZTt9LmJ7c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjNweDt9LmIsLmMsLmR7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fS5lLC5me3N0cm9rZTpub25lO30uZntmaWxsOiMwMDA7fTwvc3R5bGU+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MDAuNDk3IC0yNTkxKSI+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSI1NSIgaGVpZ2h0PSI1NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjgzIDI1OTEpIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwNDYuNjc0IDI2NjYuNzQzKSI+PHBhdGggY2xhc3M9ImIiIGQ9Ik0xNzc4Ljg3NC0yOS42MDdhNS42ODgsNS42ODgsMCwwLDAtLjg4LTkuOTg0TDE3NDQuNjMtNTMuODc5YTc1LjAzNCw3NS4wMzQsMCwwLDAtNTkuMjQuNDYzbC0zNC4xNjcsMTQuOTkyYTQuMjYyLDQuMjYyLDAsMCwwLS40NTQsNy41NzNsMTEuNzY4LDYuOTQ2YTM4LjMzNCwzOC4zMzQsMCwwLDAsMzkuMTQ5LS4xaDBhMzQuMjgxLDM0LjI4MSwwLDAsMSwzNC42NjctLjI5MWwuNTQzLjMxMmEzMy40MTQsMzMuNDE0LDAsMCwwLDM0Ljk3NC0xLjAyNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz48bGluZSBjbGFzcz0iYiIgeTE9IjQ2LjQxMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTc1My4zNDMgLTE5LjU0NCkiLz48bGluZSBjbGFzcz0iYiIgeTE9IjM5LjkwOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTc3OC41MDUgLTI5LjAxNykiLz48bGluZSBjbGFzcz0iYiIgeTI9IjQ1LjIxOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTY3OC44OTEgLTE4LjY4OCkiLz48bGluZSBjbGFzcz0iYiIgeTI9IjM5Ljg3NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTY1MS41NjUgLTI5LjMyNSkiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjkyLjY4NiAtNDguOTE5KSI+PGcgY2xhc3M9ImMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNjk4Ljg0NyA0Ny40MDQpIj48cGF0aCBjbGFzcz0iZSIgZD0iTSAxNzI3Ljg1ODg4NjcxODc1IDAuODM0Njg1Mzg1MjI3MjAzNCBMIDE3MjcuODU4MDMyMjI2NTYyIDAuODM0Njg1Mzg1MjI3MjAzNCBMIDE3MjcuODU3MTc3NzM0Mzc1IDAuODM0Njg1Mzg1MjI3MjAzNCBMIDE2OTguODQ2OTIzODI4MTI1IDAuODM0Njg1Mzg1MjI3MjAzNCBMIDE2OTcuMzQ2OTIzODI4MTI1IDAuODM0Njg1Mzg1MjI3MjAzNCBMIDE2OTcuMzQ2OTIzODI4MTI1IC0wLjY2NTMxNDYxNDc3Mjc5NjYgTCAxNjk3LjM0NjkyMzgyODEyNSAtMi4yNzY3NDQ2MDQxMTA3MTggQyAxNjk3LjM1MTE5NjI4OTA2MiAtNi4xMjA3NzQ3NDU5NDExNjIgMTY5OC44NDk4NTM1MTU2MjUgLTkuNzMzMjA0ODQxNjEzNzcgMTcwMS41NjcwMTY2MDE1NjIgLTEyLjQ1MDIzNDQxMzE0Njk3IEMgMTcwNC4yODQxNzk2ODc1IC0xNS4xNjcxMjQ3NDgyMjk5OCAxNzA3Ljg5NjQ4NDM3NSAtMTYuNjY1NzM1MjQ0NzUwOTggMTcxMS43Mzg1MjUzOTA2MjUgLTE2LjY2OTk5NDM1NDI0ODA1IEMgMTcxNC43ODEwMDU4NTkzNzUgLTE2LjY3Mzc0NDIwMTY2MDE2IDE3MTcuNjQxNDc5NDkyMTg4IC0xNy44NjA1ODQyNTkwMzMyIDE3MTkuNzkyODQ2Njc5Njg4IC0yMC4wMTE4OTQyMjYwNzQyMiBDIDE3MjEuOTQ0MjEzODY3MTg4IC0yMi4xNjMyMjUxNzM5NTAyIDE3MjMuMTMwOTgxNDQ1MzEyIC0yNS4wMjM0NzM3Mzk2MjQwMiAxNzIzLjEzNDI3NzM0Mzc1IC0yOC4wNjU3NzQ5MTc2MDI1NCBMIDE3MjMuMTM0Mjc3MzQzNzUgLTM3LjczMzYyMzUwNDYzODY3IEMgMTcyMy4xMzc2OTUzMTI1IC00MC43MTczNjUyNjQ4OTI1OCAxNzI0LjMwMDc4MTI1IC00My41MjA3NjMzOTcyMTY4IDE3MjYuNDA4OTM1NTQ2ODc1IC00NS42MjkxNTQyMDUzMjIyNyBDIDE3MjguNTE3MjExOTE0MDYyIC00Ny43Mzc1MzM1NjkzMzU5NCAxNzMxLjMyMDQzNDU3MDMxMiAtNDguOTAwNTY2MTAxMDc0MjIgMTczNC4zMDIxMjQwMjM0MzggLTQ4LjkwMzk5NTUxMzkxNjAyIEwgMTczNy41Mjc1ODc4OTA2MjUgLTQ4LjkwMzk5NTUxMzkxNjAyIEwgMTczOS4wMjc1ODc4OTA2MjUgLTQ4LjkwMzk5NTUxMzkxNjAyIEwgMTczOS4wMjc1ODc4OTA2MjUgLTQ3LjQwMzk5NTUxMzkxNjAyIEwgMTczOS4wMjc1ODc4OTA2MjUgLTEwLjMzNTY4NDc3NjMwNjE1IEMgMTczOS4wMjQyOTE5OTIxODggLTcuMzUxOTU0NDYwMTQ0MDQzIDE3MzcuODYxMjA2MDU0Njg4IC00LjU0ODUxNDg0Mjk4NzA2MSAxNzM1Ljc1MjgwNzYxNzE4OCAtMi40NDAxMjQ1MTE3MTg3NSBDIDE3MzMuNjQ0NDA5MTc5Njg4IC0wLjMzMTc2NDYwODYyMTU5NzMgMTczMC44NDA5NDIzODI4MTIgMC44MzEyNTUzNzYzMzg5NTg3IDE3MjcuODU4ODg2NzE4NzUgMC44MzQ2ODUzODUyMjcyMDM0IFoiLz48cGF0aCBjbGFzcz0iZiIgZD0iTSAxNzI3Ljg1NzE3NzczNDM3NSAtMC42NjUzMDc5MzkwNTI1ODE4IEMgMTczMy4xOTU5MjI4NTE1NjIgLTAuNjcxNDU0NjA4NDQwMzk5MiAxNzM3LjUyMTYwNjQ0NTMxMiAtNC45OTY5NzQ0NjgyMzEyMDEgMTczNy41Mjc1ODc4OTA2MjUgLTEwLjMzNTY4MDk2MTYwODg5IEwgMTczNy41Mjc1ODc4OTA2MjUgLTQ3LjQwNDAwMzE0MzMxMDU1IEwgMTczNC4zMDM4MzMwMDc4MTIgLTQ3LjQwNDAwMzE0MzMxMDU1IEMgMTcyOC45NjU5NDIzODI4MTIgLTQ3LjM5Nzg1Mzg1MTMxODM2IDE3MjQuNjQwNTAyOTI5Njg4IC00My4wNzIzMzQyODk1NTA3OCAxNzI0LjYzNDI3NzM0Mzc1IC0zNy43MzM2MjczMTkzMzU5NCBMIDE3MjQuNjM0Mjc3MzQzNzUgLTI4LjA2NDEyMTI0NjMzNzg5IEMgMTcyNC42MjY0NjQ4NDM3NSAtMjAuOTQ2NDI4Mjk4OTUwMiAxNzE4Ljg1ODAzMjIyNjU2MiAtMTUuMTc4Nzc0ODMzNjc5MiAxNzExLjc0MDIzNDM3NSAtMTUuMTcwMDAxMDI5OTY4MjYgQyAxNzA0LjYyMzQxMzA4NTkzOCAtMTUuMTYyMTA4NDIxMzI1NjggMTY5OC44NTQ3MzYzMjgxMjUgLTkuMzk0NDQxNjA0NjE0MjU4IDE2OTguODQ2OTIzODI4MTI1IC0yLjI3Njc0Nzk0MTk3MDgyNSBMIDE2OTguODQ2OTIzODI4MTI1IC0wLjY2NTMwNzkzOTA1MjU4MTggTCAxNzI3Ljg1NzE3NzczNDM3NSAtMC42NjUzMDc5MzkwNTI1ODE4IE0gMTcyNy44NjA1OTU3MDMxMjUgMi4zMzQ2OTIwMDEzNDI3NzMgTCAxNjk1Ljg0NjkyMzgyODEyNSAyLjMzNDY5MjAwMTM0Mjc3MyBMIDE2OTUuODQ2OTIzODI4MTI1IC0yLjI3Njc0Nzk0MTk3MDgyNSBDIDE2OTUuODQ5MjQzMTY0MDYyIC00LjQyMzA0MTM0MzY4ODk2NSAxNjk2LjI3MTM2MjMwNDY4OCAtNi41MDMzMzQ1MjIyNDczMTQgMTY5Ny4xMDE2ODQ1NzAzMTIgLTguNDYzMTYxNDY4NTA1ODU5IEMgMTY5Ny45MDI5NTQxMDE1NjIgLTEwLjM1NDcyMTA2OTMzNTk0IDE2OTkuMDQ4NDYxOTE0MDYyIC0xMi4wNTMwMjgxMDY2ODk0NSAxNzAwLjUwNjQ2OTcyNjU2MiAtMTMuNTEwOTM0ODI5NzExOTEgQyAxNzAxLjk2NDM1NTQ2ODc1IC0xNC45Njg3NzQ3OTU1MzIyMyAxNzAzLjY2MjcxOTcyNjU2MiAtMTYuMTE0MjEzOTQzNDgxNDUgMTcwNS41NTQxOTkyMTg3NSAtMTYuOTE1NDI4MTYxNjIxMDkgQyAxNzA3LjUxMzkxNjAxNTYyNSAtMTcuNzQ1NTIxNTQ1NDEwMTYgMTcwOS41OTQxMTYyMTA5MzggLTE4LjE2NzYyNzMzNDU5NDczIDE3MTEuNzM2OTM4NDc2NTYyIC0xOC4xNzAwMDE5ODM2NDI1OCBDIDE3MTQuMzc5MTUwMzkwNjI1IC0xOC4xNzMyNTQwMTMwNjE1MiAxNzE2Ljg2MzY0NzQ2MDkzOCAtMTkuMjA0MDgwNTgxNjY1MDQgMTcxOC43MzIxNzc3MzQzNzUgLTIxLjA3MjU3NDYxNTQ3ODUyIEMgMTcyMC42MDA3MDgwMDc4MTIgLTIyLjk0MTAyODU5NDk3MDcgMTcyMS42MzEzNDc2NTYyNSAtMjUuNDI1MTc0NzEzMTM0NzcgMTcyMS42MzQyNzczNDM3NSAtMjguMDY3NDE1MjM3NDI2NzYgTCAxNzIxLjYzNDI3NzM0Mzc1IC0zNy43MzM2MjczMTkzMzU5NCBDIDE3MjEuNjM4MTgzNTkzNzUgLTQxLjExOTEwNjI5MjcyNDYxIDE3MjIuOTU3Mjc1MzkwNjI1IC00NC4yOTg1NDk2NTIwOTk2MSAxNzI1LjM0ODI2NjYwMTU2MiAtNDYuNjg5NzczNTU5NTcwMzEgQyAxNzI3LjczOTM3OTg4MjgxMiAtNDkuMDgxMDM5NDI4NzEwOTQgMTczMC45MTg3MDExNzE4NzUgLTUwLjQwMDEwODMzNzQwMjM0IDE3MzQuMzAwNDE1MDM5MDYyIC01MC40MDQwMDMxNDMzMTA1NSBMIDE3NDAuNTI3NTg3ODkwNjI1IC01MC40MDQwMDMxNDMzMTA1NSBMIDE3NDAuNTI3NTg3ODkwNjI1IC0xMC4zMzU2ODA5NjE2MDg4OSBDIDE3NDAuNTIzODAzNzEwOTM4IC02Ljk1MDIyNzczNzQyNjc1OCAxNzM5LjIwNDcxMTkxNDA2MiAtMy43NzA3MDc4NDU2ODc4NjYgMTczNi44MTM0NzY1NjI1IC0xLjM3OTQ1NDYxMjczMTkzNCBDIDE3MzQuNDIyMjQxMjEwOTM4IDEuMDExNzU4Njg1MTEyIDE3MzEuMjQyNjc1NzgxMjUgMi4zMzA3OTg2MjU5NDYwNDUgMTcyNy44NjA1OTU3MDMxMjUgMi4zMzQ2OTIwMDEzNDI3NzMgWiIvPjwvZz48ZyBjbGFzcz0iZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3MDMuMTAzIDQwLjYwMSkiPjxwYXRoIGNsYXNzPSJlIiBkPSJNMTczNy44NjcsOGExMi43OTEsMTIuNzkxLDAsMCwxLTQuMzYyLjk1Nmw3LjExNSwyNC4xODhoMS4xNjJaIi8+PHBhdGggY2xhc3M9ImYiIGQ9Ik0gMTczNy44Njc0MzE2NDA2MjUgOC4wMDIwMDI3MTYwNjQ0NTMgQyAxNzM2LjQ4MDQ2ODc1IDguNTczOTM2NDYyNDAyMzQ0IDE3MzUuMDA1MTI2OTUzMTI1IDguODk3NjM2NDEzNTc0MjE5IDE3MzMuNTA1ODU5Mzc1IDguOTU4MTU2NTg1NjkzMzU5IEwgMTc0MC42MjA5NzE2Nzk2ODggMzMuMTQ2Mzc3NTYzNDc2NTYgTCAxNzQxLjc4MzMyNTE5NTMxMiAzMy4xNDYzNzc1NjM0NzY1NiBMIDE3MzcuODY3NDMxNjQwNjI1IDguMDAyMDAyNzE2MDY0NDUzIE0gMTc0MC4yNDU0ODMzOTg0MzggMy43NzYzMTM3ODE3MzgyODEgTCAxNzQ1LjI4Njc0MzE2NDA2MiAzNi4xNDYzNzc1NjM0NzY1NiBMIDE3MzguMzc2MzQyNzczNDM4IDM2LjE0NjM3NzU2MzQ3NjU2IEwgMTcyOS41NDI2MDI1MzkwNjIgNi4xMTU2OTk3NjgwNjY0MDYgTCAxNzMzLjM4NDg4NzY5NTMxMiA1Ljk2MDYwMTgwNjY0MDYyNSBDIDE3MzQuNTM1MDM0MTc5Njg4IDUuOTE0MTY5MzExNTIzNDM4IDE3MzUuNjU4NDQ3MjY1NjI1IDUuNjY3ODY5NTY3ODcxMDk0IDE3MzYuNzIzNzU0ODgyODEyIDUuMjI4NTQ2MTQyNTc4MTI1IEwgMTc0MC4yNDU0ODMzOTg0MzggMy43NzYzMTM3ODE3MzgyODEgWiIvPjwvZz48ZyBjbGFzcz0iZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2OTkuMDY2IDQwLjQ3MSkiPjxwYXRoIGNsYXNzPSJlIiBkPSJNMTcwNC41NDMsOS4wODhjMi4yODEsMCwyLjg2Mi0uMDYxLDQuMzYxLDBsLTcuMTE0LDI0LjE4OGgtMS4xNjNaIi8+PHBhdGggY2xhc3M9ImYiIGQ9Ik0gMTcwNy42MTQxMzU3NDIxODggOS4wNjEzMzI3MDI2MzY3MTkgQyAxNzA2LjgyODczNTM1MTU2MiA5LjA2MTMzMjcwMjYzNjcxOSAxNzA2LjA2MzIzMjQyMTg3NSA5LjA4ODIzNzc2MjQ1MTE3MiAxNzA0LjU0Mjg0NjY3OTY4OCA5LjA4ODIzNzc2MjQ1MTE3MiBMIDE3MDAuNjI2OTUzMTI1IDMzLjI3NjQ1ODc0MDIzNDM4IEwgMTcwMS43OTAxNjExMzI4MTIgMzMuMjc2NDU4NzQwMjM0MzggTCAxNzA4LjkwNDI5Njg3NSA5LjA4ODIzNzc2MjQ1MTE3MiBDIDE3MDguNDA0NTQxMDE1NjI1IDkuMDY4MDU0MTk5MjE4NzUgMTcwOC4wMDY5NTgwMDc4MTIgOS4wNjEzMzI3MDI2MzY3MTkgMTcwNy42MTQxMzU3NDIxODggOS4wNjEzMzI3MDI2MzY3MTkgTSAxNzA3LjYxNDEzNTc0MjE4OCA2LjA2MTMzNjUxNzMzMzk4NCBDIDE3MDguMDg3NTI0NDE0MDYyIDYuMDYxMzM2NTE3MzMzOTg0IDE3MDguNTIyNzA1MDc4MTI1IDYuMDcwMzgxMTY0NTUwNzgxIDE3MDkuMDI1MjY4NTU0Njg4IDYuMDkwNjc5MTY4NzAxMTcyIEwgMTcxMi44NjczMDk1NzAzMTIgNi4yNDU4MTUyNzcwOTk2MDkgTCAxNzA0LjAzNDkxMjEwOTM3NSAzNi4yNzY0NTg3NDAyMzQzOCBMIDE2OTcuMTAyMTcyODUxNTYyIDM2LjI3NjQ1ODc0MDIzNDM4IEwgMTcwMS45ODk1MDE5NTMxMjUgNi4wODgyMzc3NjI0NTExNzIgTCAxNzA0LjU0Mjg0NjY3OTY4OCA2LjA4ODIzNzc2MjQ1MTE3MiBDIDE3MDUuNDA1NzYxNzE4NzUgNi4wODgyMzc3NjI0NTExNzIgMTcwNi4wMDc5MzQ1NzAzMTIgNi4wNzk1MTM1NDk4MDQ2ODggMTcwNi41MzkxODQ1NzAzMTIgNi4wNzE4MjMxMjAxMTcxODggQyAxNzA2LjkyODEwMDU4NTkzOCA2LjA2NjIwNDA3MTA0NDkyMiAxNzA3LjI2NDAzODA4NTkzOCA2LjA2MTMzNjUxNzMzMzk4NCAxNzA3LjYxNDEzNTc0MjE4OCA2LjA2MTMzNjUxNzMzMzk4NCBaIi8+PC9nPjxsaW5lIGNsYXNzPSJiIiB4Mj0iMjEuNjMzIiB5Mj0iOC40ODkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwLjcxNSA1NC4wMzYpIi8+PGxpbmUgY2xhc3M9ImIiIHgxPSIyMS41NTEiIHkyPSI4LjMwMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOC4wNzkgNTQuMDM2KSIvPjwvZz48L2c+PC9nPjwvc3ZnPg==");
;// CONCATENATED MODULE: ./src/images/benefits/2.svg
/* harmony default export */ const _2 = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjQuOTM3IiBoZWlnaHQ9IjEyMS4wNzciIHZpZXdCb3g9IjAgMCAxMjQuOTM3IDEyMS4wNzciPjxkZWZzPjxzdHlsZT4uYXtmaWxsOiNmZmNjNDg7fS5iLC5ne2ZpbGw6bm9uZTt9LmIsLmMsLmQsLmV7c3Ryb2tlOiMwMDA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30uYiwuYywuZHtzdHJva2Utd2lkdGg6M3B4O30uZCwuZXtmaWxsOiNmZmY7fS5me3N0cm9rZTpub25lO308L3N0eWxlPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAyNS44ODggLTI1NzMuNSkiPjxyZWN0IGNsYXNzPSJhIiB3aWR0aD0iNTUiIGhlaWdodD0iNTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMjggMjU3NSkiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNy4yNjkgMjgxMi41NjkpIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDMyLjc4MiAtMjM3LjU2OSkiPjxwYXRoIGNsYXNzPSJiIiBkPSJNMTAzNi40NzMtMjA3LjYxN3M1MC43NjQtMjkuNSw0OS45NzQtMjkuOTUybDAsNTkuODU3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAzNi40NzMgMjM3LjU2OSkiLz48cGF0aCBjbGFzcz0iYyIgZD0iTTEwOTQuODEtMjM3LjU2OWwwLDU5Ljg1N2MzLjAyLDEuNyw0OS4yMjcsMjYuNjg3LDQ5LjIyNywyNi42ODd2LTU2LjU5MlMxMDk0LjAxOS0yMzcuMTEyLDEwOTQuODEtMjM3LjU2OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDQ0LjgzNyAyMzcuNTY5KSIvPjwvZz48cGF0aCBjbGFzcz0iYiIgZD0iTTEwMzYuNDc2LTIwMi42bDQ5Ljk3MywyOS45LDAsNTguMjE5LTM3LjgtMjMuODQ1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMy42OTIgLTUuMDE0KSIvPjxwYXRoIGNsYXNzPSJkIiBkPSJNMTE0NC4wMzItMjAyLjZsMCw1Ni41OTJjLTMuMDIsMS43LTQ5LjIxNiwzMS41MzMtNDkuMjE2LDMxLjUzM2wwLTU4LjIxOVMxMTQ0LjgyMy0yMDIuMTQ2LDExNDQuMDMyLTIwMi42WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyLjA1NiAtNS4wMTQpIi8+PHBhdGggY2xhc3M9ImMiIGQ9Ik0xMTQxLjExMi0xNzkuOTg4bC0uMDQ0LDQxLjE3NmMtMy4wMiwxLjctMjEuMTc1LDEzLjU3NC0yMS4xNzUsMTMuNTc0di00MS43MDdhMy41MzEsMy41MzEsMCwwLDEsMS42ODgtMy4wMTJsMTcuODktMTAuOTUyQTEuMDc4LDEuMDc4LDAsMCwxLDExNDEuMTEyLTE3OS45ODhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTUuNjUzIC04LjEwMikiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDEwLjczMSAtMTkyLjQ4NykiPjxwYXRoIGNsYXNzPSJiIiBkPSJNMTAxMC43MzEtMTY3LjQ2M2ExMS4yMzMsMTEuMjMzLDAsMCwxLDQuMDkyLDguNjgxQTExLjIyNCwxMS4yMjQsMCwwLDEsMTAxMS0xNTAuMzMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDEwLjczMSAxODIuNDM1KSIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNMTAxNy4wNTktMTcyLjY4NGExOC4xNTgsMTguMTU4LDAsMCwxLDUuNDM4LDEzLjIxMywxOC4yMzUsMTguMjM1LDAsMCwxLTUuMDgxLDEyLjg2NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwMTEuNjM4IDE4My4xODMpIi8+PHBhdGggY2xhc3M9ImIiIGQ9Ik0xMDIzLjQwNy0xNzcuODJhMjQuMzc1LDI0LjM3NSwwLDAsMSw3LjIxNywxNy42NzIsMjQuNDkzLDI0LjQ5MywwLDAsMS02Ljc0MywxNy4yMDUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDEyLjU0OSAxODMuOTIpIi8+PHBhdGggY2xhc3M9ImIiIGQ9Ik0xMDI5LjI4MS0xODQuOTQxYTMyLjUwNiwzMi41MDYsMCwwLDEsOS45ODUsMjMuODUzLDMyLjYyOSwzMi42MjksMCwwLDEtOS4zMywyMy4yMjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDEzLjM5MSAxODQuOTQxKSIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDQ0Ljk4OSAtMTg2Ljk1NCkiPjxsaW5lIGNsYXNzPSJkIiB4Mj0iMjUuNTYxIiB5Mj0iMzEuNTQ2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwKSIvPjxsaW5lIGNsYXNzPSJkIiB4Mj0iMTIuNzgxIiB5Mj0iMTUuNzczIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjAxNCAxNS43NzMpIi8+PGxpbmUgY2xhc3M9ImQiIHgyPSI0LjM0NyIgeTI9IjUuMzY1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMC40OTQgMzguMjUyKSIvPjwvZz48ZyBjbGFzcz0iZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTExOS41NjggLTE2MS4yNDcpIHJvdGF0ZSgtODUuMjEpIj48ZWxsaXBzZSBjbGFzcz0iZiIgY3g9IjIuMTUyIiBjeT0iMS4zNTgiIHJ4PSIyLjE1MiIgcnk9IjEuMzU4Ii8+PGVsbGlwc2UgY2xhc3M9ImciIGN4PSIyLjE1MiIgY3k9IjEuMzU4IiByeD0iMi42NTIiIHJ5PSIxLjg1OCIvPjwvZz48cGF0aCBjbGFzcz0iYyIgZD0iTTEwOTQuODE0LTE2Ny42OTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMi4wNTcgLTEwLjAyKSIvPjwvZz48L2c+PC9zdmc+");
;// CONCATENATED MODULE: ./src/images/benefits/3.svg
/* harmony default export */ const _3 = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMzMiIGhlaWdodD0iMTA0Ljc2OCIgdmlld0JveD0iMCAwIDEzMyAxMDQuNzY4Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZmZjYzQ4O30uYiwuYywuZHtzdHJva2U6IzAwMDt9LmIsLmMsLmQsLmV7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDozcHg7fS5je2ZpbGw6I2ZmZjt9LmQsLmV7ZmlsbDpub25lO30uZXtzdHJva2U6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0NTMuNSAtMjU4OS41KSI+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSI1NSIgaGVpZ2h0PSI1NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQ1NSAyNjM4KSIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg5LjEwMiAyNjM2LjExKSI+PHBhdGggY2xhc3M9ImIiIGQ9Ik0xNDkyLjQsNzYuMzM2aDI5LjY3NVY2Mi4zNDdhNi43NTksNi43NTksMCwwLDAtMy4xMDgtNS42ODhsLTcuNzU2LTQuNjUtNS40NTQsNC4wMjdhNS44NDIsNS44NDIsMCwwLDEtNi4yNy4xNjNsLTUuODgzLTQuMTktNi43MTgsMy42MzQsMi41NjMsMS45NzhhNy41ODIsNy41ODIsMCwwLDEsMi45NTEsNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNi4xNzQgLTIxLjAxMSkiLz48cGF0aCBjbGFzcz0iYiIgZD0iTTE0NjYuNzYxLTE3LjY4NGMtLjYxNC04LjMyMi0zLjU0OC0xNS4yOTMtOC40ODUtMjAuMTU3LTQuODI3LTQuNzU0LTExLjMyNC03LjI2OC0xOC43OTEtNy4yNjhzLTEzLjk2NSwyLjUxNC0xOC43OTEsNy4yNjhjLTQuOTM3LDQuODY0LTcuODcxLDExLjgzNS04LjQ4NSwyMC4xNTgtMS42NjYsMjIuNTU3LTMuNTYxLDM1LjEzNC00LjMsMzkuNDk1YS4xLjEsMCwwLDAsLjA1Mi4xMjIsNTYuMTM4LDU2LjEzOCwwLDAsMCwxNC43OTIsNi42ODlsMTYuNzMxLTMuNDQ3LDE3LjcxMywzLjQ0N2E0Ni4zMjMsNDYuMzIzLDAsMCwwLDEzLjgxLTYuNjg5LjEuMSwwLDAsMCwuMDUxLS4xMjJDMTQ3MC4zMjIsMTcuNDUsMTQ2OC40MjcsNC44NzIsMTQ2Ni43NjEtMTcuNjg0Wk0xNDYwLjY4LTQuMzYxYzAsMTEuNTMyLTkuMDI1LDIxLjI5Mi0yMC41NTIsMjEuNjM0QTIxLjIxNywyMS4yMTcsMCwwLDEsMTQxOC4yOTMtMy45MVYtNS43NGEyLjM4MywyLjM4MywwLDAsMSwxLjI0Ni0yLjA2bC4wODMtLjA0OGExNy4zMDYsMTcuMzA2LDAsMCwwLDguMzU0LTEyLjY2OGwuMzA2LTIuMjZjMTYuMDQ0LDEuNiwyNi43ODgsNy42ODUsMzAuNzkxLDExLjE2NmE0Ljc1MSw0Ljc1MSwwLDAsMSwxLjYwNiwzLjZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOS4wODkgMCkiLz48cGF0aCBjbGFzcz0iYyIgZD0iTTE0NDMuMTIxLDMzLjgyM2EyNy45MTcsMjcuOTE3LDAsMCwwLDEwLjQyNy0yLjAxdjUuNzU5YTcuNTM1LDcuNTM1LDAsMCwwLDQuNDg5LDYuODlMMTQ2MS41Myw0NmEyMC43LDIwLjcsMCwwLDEtMzYuODE5LDBsMy40OTQtMS41NDNhNy41MzcsNy41MzcsMCwwLDAsNC40ODktNi44OVYzMS44MTNhMjcuOTE0LDI3LjkxNCwwLDAsMCwxMC40MjcsMi4wMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyLjcyNCAtMTYuNjQyKSIvPjxwYXRoIGNsYXNzPSJkIiBkPSJNMTQ3MS42OTUsNDkuOTIybDEyLjk4Miw1Ljc0N2E3LjQ0NCw3LjQ0NCwwLDAsMSw0LjQzNCw2LjgwNXYxMy40MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyLjg4OSAtMjAuNTYpIi8+PHBhdGggY2xhc3M9ImQiIGQ9Ik0xNDAyLjA1Myw3NS42OFY2Mi4yN2E3LjQ0NCw3LjQ0NCwwLDAsMSw0LjQzNC02LjgwNWwxNS02LjQ4OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTcuODIyIC0yMC4zNTUpIi8+PGxpbmUgY2xhc3M9ImQiIHkyPSI4LjQ3NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQwOS4yMDQgNDYuODUpIi8+PGxpbmUgY2xhc3M9ImQiIHkyPSI4LjQ3NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQ1MS41OTEgNDYuODUpIi8+PHBhdGggY2xhc3M9ImQiIGQ9Ik0xNDk5LjY0NywyMS4zNmExMC44MzUsMTAuODM1LDAsMCwwLDIuNDMzLTMuNjE3YzMuNzY4LDEuMTE5LDExLjc1MiwzLjM4MSwxNS44OTUsMTAuMDA5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjguOTM2IC0xMy41OTgpIi8+PHBhdGggY2xhc3M9ImQiIGQ9Ik0xNTE4LjQxNCwxNS45YTE1LjM0OSwxNS4zNDksMCwxLDAtMjcuNTMxLDkuMzExLDEyLjEsMTIuMSwwLDAsMCwyMy42MTYuOUExNS4yNzYsMTUuMjc2LDAsMCwwLDE1MTguNDE0LDE1LjlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjYuMzU1IC05Ljg3OSkiLz48cGF0aCBjbGFzcz0iZCIgZD0iTTE0OTUuNjg3LjYzM2E5LjAwNyw5LjAwNywwLDAsMS0uMjIyLTIsOS4wMTEsOS4wMTEsMCwwLDEsOS4wMTEtOS4wMTEsOS4wMTEsOS4wMTEsMCwwLDEsOS4wMTEsOS4wMTFBOS4wNTYsOS4wNTYsMCwwLDEsMTUxMy4zLjQ1MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI4LjAzMSAtNy41MTUpIi8+PHBhdGggY2xhc3M9ImQiIGQ9Ik0xNTE1LjI1MSw0Mi4zMVY0Ni40YTQsNCwwLDAsMCwyLjA5NSwzLjUxNUwxNTI0LjksNTRhNi4zMiw2LjMyLDAsMCwxLDMuMzEyLDUuNTU4Vjc0LjIzOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMyLjMxMiAtMTguOTEzKSIvPjxwYXRoIGNsYXNzPSJkIiBkPSJNMTQ5NS43LDQyLjMxVjQ2LjRhNCw0LDAsMCwxLTIuMDk1LDMuNTE1bC02LjcxOCwzLjYzNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI2LjE3NCAtMTguOTEzKSIvPjxwYXRoIGNsYXNzPSJkIiBkPSJNMTUxMi43OTEsNTIuMDI2bC00LjY1OSwzLjU2OGE1LjUzMSw1LjUzMSwwLDAsMS02Ljc0MS0uMDFsLTQuNjE1LTMuNTU4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjguMzE1IC0yMS4wMTUpIi8+PGxpbmUgY2xhc3M9ImUiIHkyPSIxMS43ODkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0ODcuMDQyIDQ0Ljg2OSkiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzY1Ljg5OCAtOC41MykiPjxwYXRoIGNsYXNzPSJkIiBkPSJNMTQwMS4zODgsMTguNTM2djQuMjExYTEyLjUyOCwxMi41MjgsMCwwLDEtMjUuMDU2LDBsLjA2OC00LjI1OWExMC43MTgsMTAuNzE4LDAsMCwxLTEuOTE0LTYuMjQ2LDEwLjY3MywxMC42NzMsMCwwLDEsMTAuNjczLTEwLjY3M2gxOS4wOTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzY3Ljc1NiAtMS41NjgpIi8+PHBhdGggY2xhc3M9ImQiIGQ9Ik0xMzk3LjQ4NCwxNy4yODZjLTMuNzI4LTIuODU4LTEyLjkyNS0yLjQ4Ni0xMi45MjUtMi40ODYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzY5LjkzNSAtNC40MjcpIi8+PHBhdGggY2xhc3M9ImQiIGQ9Ik0xNDAxLjc0LDQyLjY2NXYyLjQwNmE0LjAzNiw0LjAzNiwwLDAsMCwyLjg0NywzLjg1N2w4LjE3MiwyLjUxOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzNzMuNjUyIC0xMC40NTkpIi8+PHBhdGggY2xhc3M9ImQiIGQ9Ik0xMzgwLjU4OCw0Mi4zMjV2Mi42NjhhNC4wMzYsNC4wMzYsMCwwLDEtMi44NTIsMy44NTlsLTYuNzUzLDIuMDc0YTcuMiw3LjIsMCwwLDAtNS4wODYsNi44ODFWNzQuMjQxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTM2NS44OTggLTEwLjM4NikiLz48cGF0aCBjbGFzcz0iZCIgZD0iTTEzODQuNjQ0LDQ5LjQ0NWw2LjcyOCw2LjQ2Myw2LjY2OS02Ljc5NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzNjkuOTUzIC0xMS44NTQpIi8+PGxpbmUgY2xhc3M9ImQiIHkyPSIxMi43NTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDguNTc2IDUxLjA5NikiLz48bGluZSBjbGFzcz0iZCIgeTI9IjE5LjgwMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjEuNDE5IDQ0LjA1NCkiLz48L2c+PC9nPjwvZz48L3N2Zz4=");
;// CONCATENATED MODULE: ./src/images/benefits/4.svg
/* harmony default export */ const _4 = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMzAiIGhlaWdodD0iMTMyLjU5MSIgdmlld0JveD0iMCAwIDEzMCAxMzIuNTkxIj48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZmZjYzQ4O308L3N0eWxlPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQ1NSAtMjIwNy40MDkpIj48cmVjdCBjbGFzcz0iYSIgd2lkdGg9IjU1IiBoZWlnaHQ9IjU1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNTMwIDIyODUpIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTM1OC44MTEgMjEyMi43ODYpIj48cGF0aCBkPSJNMTkyLjU2NywxNDAuMTQ2aC04LjQxYTUuNTU5LDUuNTU5LDAsMCwwLC41LTEuOTdsMC0uNzY5aDEuOTc3YTQuMSw0LjEsMCwwLDAsNC4xLTQuMVYxMjkuNzdhNC4xLDQuMSwwLDAsMC00LjEtNC4xaC0zLjMxNGExLjQ4LDEuNDgsMCwwLDAtLjY1Ny4xNThoLTEwLjkyYTIuMjQzLDIuMjQzLDAsMCwwLTIuMjQsMi4yNHY5Ljc1MWE1LjU1MSw1LjU1MSwwLDAsMCwuNTA5LDIuMzI4SDE0MC41NjJjLjAwOS0uMDQzLjAyNS0uMDgzLjAzMS0uMTI3bDEuODI0LTEyLjVhMy4wNzIsMy4wNzIsMCwwLDAtMy4wNC0zLjUyM2gtNS4zdi0yLjk2NWgyLjFhNy4yMzEsNy4yMzEsMCwwLDAsNy4yMjMtNy4yMjN2LTIuMWEzLDMsMCwwLDAtMy0zaC0yLjFhNy4xODksNy4xODksMCwwLDAtNC42MywxLjY4Nyw3LjIzNCw3LjIzNCwwLDAsMC03LjA4LTUuOGgtMy42NzdhMywzLDAsMCwwLTMsM3YzLjY3N2E3LjIzMyw3LjIzMywwLDAsMCw3LjIyMyw3LjIyM2gzLjY3N2MuMDg4LDAsLjE3LS4wMTkuMjU2LS4wMjZWMTI0aC01LjI5NWEzLjAwNywzLjAwNywwLDAsMC0uMzc1LjAyMSwzLjA3OCwzLjA3OCwwLDAsMC0yLjY5NCwzLjQxNGwxLjQ4NywxMi41Yy4wMDkuMDcyLjAzMi4xMzkuMDQ1LjIwOUgxMDguMzYzYTEyLjE4OCwxMi4xODgsMCwwLDAtMTIuMTc0LDEyLjE3M1YxODkuM2ExMi4xODcsMTIuMTg3LDAsMCwwLDEyLjE3NCwxMi4xNzRoNC44OTJsLTEuNzIsOS4xNTFhNC4zNzQsNC4zNzQsMCwwLDAsNC4zLDUuMTgxLDUuMjQ3LDUuMjQ3LDAsMCwwLDQuOS0zLjQxN2w0LjAzMi0xMC45MTVoNTEuNGw0LjAzMiwxMC45MTVhNS4yNDUsNS4yNDUsMCwwLDAsNC45LDMuNDE3LDQuMzczLDQuMzczLDAsMCwwLDQuMy01LjE4MWwtMS43MTktOS4xNTFoNC44OTJBMTIuMTg2LDEyLjE4NiwwLDAsMCwyMDQuNzQsMTg5LjN2LTM2Ljk4QTEyLjE4OCwxMi4xODgsMCwwLDAsMTkyLjU2NywxNDAuMTQ2Wk0xMjIuOTIxLDEwNy42SDEyNi42YTQuMjI3LDQuMjI3LDAsMCwxLDQuMjIzLDQuMjIzVjExNS41aC0zLjY3N2E0LjIyOSw0LjIyOSwwLDAsMS00LjIyMy00LjIyM1ptMTUuMzg3LDQuMTFoMi4xdjIuMWE0LjIyNyw0LjIyNywwLDAsMS00LjIyMyw0LjIyM2gtMi4xdi0yLjFBNC4yMjgsNC4yMjgsMCwwLDEsMTM4LjMwOCwxMTEuNzE0Wk0xMzIuNTY3LDEyN2g2LjgxYS4wODIuMDgyLDAsMCwxLC4wNzIuMDgzbC0xLjksMTIuNTY4LTEwLjM3Mi0uMDY1LTEuNDg4LTEyLjVhLjA4My4wODMsMCwwLDEsLjA2OS0uMDgyaDYuODA2Wm02MS4xNCw1OS45NzZhMi45NTEsMi45NTEsMCwwLDEtMi45NDgsMi45NDdIMTUyLjAxNFYxNzIuMjI5aDEzLjUxMWE2LjcyMiw2LjcyMiwwLDAsMCw2LjYwOSw1LjU1NWgzLjcyYTYuNzIyLDYuNzIyLDAsMCwwLDYuNjA5LTUuNTU1aDExLjI0NFptLTIuOTQ4LTM1LjQzOGEyLjk1MSwyLjk1MSwwLDAsMSwyLjk0OCwyLjk0OHYxNC43NDVIMTUyLjAxNFYxNTEuNTM1aDEzLjUxMWE2LjcyMiw2LjcyMiwwLDAsMCw2LjYwOSw1LjU1N2gzLjcyYTYuNzIyLDYuNzIyLDAsMCwwLDYuNjA5LTUuNTU3Wm0tMTEuMzc0LDIwLjY5NGEzLjcyNCwzLjcyNCwwLDAsMS0zLjUzMSwyLjU1NWgtMy43MmEzLjcyMiwzLjcyMiwwLDAsMS0zLjUzLTIuNTU1Wm0tMy41MzEtMTguMTM3aC0zLjcyYTMuNzIsMy43MiwwLDAsMS0zLjUzLTIuNTU3aDEwLjc4MUEzLjcyMywzLjcyMywwLDAsMSwxNzUuODU0LDE1NC4wOTJabS01Ni4wNjctMi41NTdhNi43MjIsNi43MjIsMCwwLDAsNi42MDksNS41NTdoMy43MjFhNi43MjIsNi43MjIsMCwwLDAsNi42MDktNS41NTdoMTIuMjQxdjE3LjY5M0gxMDcuMjc0VjE1NC40ODNhMi45NTEsMi45NTEsMCwwLDEsMi45NDgtMi45NDhabTEzLjg2LDIwLjY5NGEzLjcyMywzLjcyMywwLDAsMS0zLjUzMSwyLjU1NUgxMjYuNGEzLjcyNCwzLjcyNCwwLDAsMS0zLjUzMS0yLjU1NVptLTEwLjc4Mi0yMC42OTRoMTAuNzgzYTMuNzIzLDMuNzIzLDAsMCwxLTMuNTMyLDIuNTU3SDEyNi40QTMuNzIxLDMuNzIxLDAsMCwxLDEyMi44NjUsMTUxLjUzNVptLTE1LjU5MSwyMC42OTRoMTIuNTEzYTYuNzIyLDYuNzIyLDAsMCwwLDYuNjA5LDUuNTU1aDMuNzIxYTYuNzIyLDYuNzIyLDAsMCwwLDYuNjA5LTUuNTU1aDEyLjI0MVYxODkuOTJIMTEwLjIyMmEyLjk1MSwyLjk1MSwwLDAsMS0yLjk0OC0yLjk0N1ptODAuNDYyLTQyLjQ1OXYzLjUzN2ExLjEsMS4xLDAsMCwxLTEuMSwxLjFIMTg0LjY3di01LjczOGgxLjk2N0ExLjEsMS4xLDAsMCwxLDE4Ny43MzYsMTI5Ljc3WiIvPjxwYXRoIGQ9Ik0xNTIuMjI5LDEwMy44NzNhNi42NDcsNi42NDcsMCwwLDEsNi42MzksNi42MzgsMS41LDEuNSwwLDAsMCwzLDAsNi42NDUsNi42NDUsMCwwLDEsNi42MzctNi42MzcsMS41LDEuNSwwLDAsMCwwLTMsNi42NDcsNi42NDcsMCwwLDEtNi42MzctNi42MzksMS41LDEuNSwwLDAsMC0zLDAsNi42NDcsNi42NDcsMCwwLDEtNi42MzksNi42MzksMS41LDEuNSwwLDAsMCwwLDNabTguMTM5LTQuNDhhOS43MjgsOS43MjgsMCwwLDAsMi45OCwyLjk4LDkuNjkyLDkuNjkyLDAsMCwwLTIuOTgsMi45NzksOS43MjUsOS43MjUsMCwwLDAtMi45OC0yLjk3OUE5LjczOSw5LjczOSwwLDAsMCwxNjAuMzY4LDk5LjM5M1oiLz48cGF0aCBkPSJNMTY1LjA5Miw4OS4wMzJBMi45MTQsMi45MTQsMCwwLDEsMTY4LDkxLjk0M2EuNS41LDAsMCwwLDEsMCwyLjkxNSwyLjkxNSwwLDAsMSwyLjkxMS0yLjkxMS41LjUsMCwwLDAsMC0xQTIuOTE0LDIuOTE0LDAsMCwxLDE2OSw4NS4xMjJhLjUuNSwwLDAsMC0xLDBoMGEyLjkxNCwyLjkxNCwwLDAsMS0yLjkxLDIuOTA5aDBhLjUuNSwwLDAsMCwwLDFaIi8+PHBhdGggZD0iTTE3MS45MTYsMTA2LjZhLjUuNSwwLDAsMC0uNS41LDIuOTEzLDIuOTEzLDAsMCwxLTIuOTA5LDIuOTFoMGEuNS41LDAsMCwwLDAsMWgwYTIuOTE0LDIuOTE0LDAsMCwxLDIuOTA5LDIuOTExLjUuNSwwLDAsMCwxLDAsMi45MTQsMi45MTQsMCwwLDEsMi45MTEtMi45MTEuNS41LDAsMCwwLDAtMSwyLjkxNCwyLjkxNCwwLDAsMS0yLjkxMS0yLjkxQS41LjUsMCwwLDAsMTcxLjkxNiwxMDYuNloiLz48L2c+PC9nPjwvc3ZnPg==");
;// CONCATENATED MODULE: ./src/images/benefits/5.svg
/* harmony default export */ const _5 = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjMuMjQiIGhlaWdodD0iMTIyLjMxNSIgdmlld0JveD0iMCAwIDEyMy4yNCAxMjIuMzE1Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZmZjYzQ4O30uYiwuZHtmaWxsOm5vbmU7fS5iLC5jLC5le3N0cm9rZTojMDAwO30uYiwuYywuZCwuZXtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjNweDt9LmR7c3Ryb2tlOiNmZmY7fS5le2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwMjcuNTEzIC0yMjE4LjAxMSkiPjxyZWN0IGNsYXNzPSJhIiB3aWR0aD0iNTUiIGhlaWdodD0iNTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwOTQgMjIyMCkiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjcwLjIxMSAyNDU0LjEwNCkiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyOTkuMjI0IC0yMjQuNDE3KSI+PHBhdGggY2xhc3M9ImIiIGQ9Ik0xMzIyLjgxOS0yMTAuOTc2aDU5LjIxNmwtOS4wNDksNDUuNTM0aC00MS40MTJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTMwMC44MjQgMjIyLjgxNikiLz48cGF0aCBjbGFzcz0iYiIgZD0iTTE0MDIuNDY5LTIxMC45NzZsLTIyLjAxMSwyNy42LDUuNDg2LTI3LjZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTMwNC43MzIgMjIyLjgxNikiLz48cGF0aCBjbGFzcz0iYyIgZD0iTTEyOTkuMjI0LTIwMi42Njh2MjUuOTg3YTUuMTk0LDUuMTk0LDAsMCwwLDUuMTk0LDUuMTk0aDYuMzg5YTMuNTgyLDMuNTgyLDAsMCwwLDMuNTgyLTMuNTgxaDBhMy41ODIsMy41ODIsMCwwLDAtMi4yMTYtMy4zMTFsLS4wNS0uMDIxYTYuMTkxLDYuMTkxLDAsMCwxLTMuODMxLTUuNzI0di0xMy4yMTlhNS41Niw1LjU2LDAsMCwxLDUuNTYtNS41Nmg5LjAwNmwtMS42MzgtOC4wNzJoLTEzLjY4OEE4LjMwOCw4LjMwOCwwLDAsMCwxMjk5LjIyNC0yMDIuNjY4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyOTkuMjI0IDIyMi44MTYpIi8+PHJlY3QgY2xhc3M9ImMiIHdpZHRoPSIzMy4zMTMiIGhlaWdodD0iMTAuMjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM0Ljg4OSA1Ny4zNzMpIi8+PHBhdGggY2xhc3M9ImIiIGQ9Ik0xMzQ3LjgyMS0yMjMuNjc3bC0yNSwxMS44NGg1OS4yMTZsLTI0LjQyNS0xMS44NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzAwLjgyNCAyMjMuNjc3KSIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNMTMzMS40LTE1MS4xMzVoNDEuNjA5bDguMjA2LDQxLjM5NGgtNTguMDc2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzMDAuODQ2IDIxOC43NTgpIi8+PHBhdGggY2xhc3M9ImMiIGQ9Ik0wLDBINDUuMWEwLDAsMCwwLDEsMCwwVjE2LjAxMUExMi4wOTMsMTIuMDkzLDAsMCwxLDMzLjAxMSwyOC4xSDEyLjA5M0ExMi4wOTMsMTIuMDkzLDAsMCwxLDAsMTYuMDExVjBBMCwwLDAsMCwxLDAsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcyLjE2MiA3MS44NDYpIi8+PHBhdGggY2xhc3M9ImMiIGQ9Ik0wLDBINDkuODdhMCwwLDAsMCwxLDAsMFYuMzY3YTguNyw4LjcsMCwwLDEtOC43LDguN0g4LjdBOC43LDguNywwLDAsMSwwLC4zNjdWMEEwLDAsMCwwLDEsMCwwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzAuMzcgOTkuOTUpIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTQuMTE1IDEuMTQ0KSI+PHBhdGggY2xhc3M9ImIiIGQ9Ik0xMzU3LjI3NS0yMjIuNDVsNS43NDYsMTAuMS0xLjMxOCwyOC45MjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzU3LjI3NSAyMjIuNDUpIi8+PGxpbmUgY2xhc3M9ImIiIHgxPSIwLjM2MiIgeTI9IjcuNTc2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjUwNiA0OC4zOTcpIi8+PGxpbmUgY2xhc3M9ImIiIHgxPSIxLjAxOSIgeTE9IjEyLjM0NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNC43MjggNjYuNDgpIi8+PGxpbmUgY2xhc3M9ImIiIHgxPSIxLjc2MiIgeTE9IjIwLjg2MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNi41MDIgODcuMDEzKSIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC42OCAxLjE0NCkiPjxwYXRoIGNsYXNzPSJiIiBkPSJNMTM1MS4zMS0yMjIuNDVsLTUuNzQ2LDEwLjEsMS4zMTgsMjguOTIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTM0My4wNDcgMjIyLjQ1KSIvPjxsaW5lIGNsYXNzPSJiIiB4Mj0iMC4zNjIiIHkyPSI3LjU3NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNC4zOTQgNDguMzk3KSIvPjxsaW5lIGNsYXNzPSJiIiB5MT0iMTIuMzQ0IiB4Mj0iMS4wMTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuNTE3IDY2LjQ4KSIvPjxsaW5lIGNsYXNzPSJiIiB5MT0iMjAuODYxIiB4Mj0iMS43NjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgODcuMDEzKSIvPjwvZz48cGF0aCBjbGFzcz0iZCIgZD0iTTE0MTYuMDIyLTEzNy44OTJ2OC4zNTJhNC4wMDYsNC4wMDYsMCwwLDEtNC4wMDcsNC4wMDZoLS43NjciIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzA2LjgyIDIxNy44NikiLz48cGF0aCBjbGFzcz0iYiIgZD0iTTE0MTIuNDU2LTE3MS4yMjNsLTIuNSw0LjJhMy44MTYsMy44MTYsMCwwLDAsLjI4OSw0LjMyM2gwYTMuODE0LDMuODE0LDAsMCwxLC4zMDksNC4yODhsLTEuNzM4LDIuOTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzA2LjY1NiAyMjAuMTIpIi8+PHBhdGggY2xhc3M9ImIiIGQ9Ik0xNDAyLjA0OS0xNzEuMjIzbC0yLjUsNC4yYTMuODE2LDMuODE2LDAsMCwwLC4yODksNC4zMjNoMGEzLjgxNCwzLjgxNCwwLDAsMSwuMzA5LDQuMjg4bC0xLjczOCwyLjk5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTMwNS45NSAyMjAuMTIpIi8+PHBhdGggY2xhc3M9ImIiIGQ9Ik0xMzkxLjA1My0xNzEuMjIzbC0yLjUsNC4yYTMuODE0LDMuODE0LDAsMCwwLC4yOSw0LjMyM2gwYTMuODE0LDMuODE0LDAsMCwxLC4zMDgsNC4yODhsLTEuNzM4LDIuOTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzA1LjIwNCAyMjAuMTIpIi8+PC9nPjxjaXJjbGUgY2xhc3M9ImUiIGN4PSI2LjA3NiIgY3k9IjYuMDc2IiByPSI2LjA3NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTM0NC42OTQgLTIzNC41OTMpIi8+PC9nPjwvZz48L3N2Zz4=");
;// CONCATENATED MODULE: ./src/images/benefits/6.svg
/* harmony default export */ const _6 = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDkuNSIgaGVpZ2h0PSIxMzAuMjIxIiB2aWV3Qm94PSIwIDAgMTA5LjUgMTMwLjIyMSI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6I2ZmY2M0ODt9LmIsLmN7ZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9LmJ7c3Ryb2tlLXdpZHRoOjIuODg1cHg7fS5je3N0cm9rZS13aWR0aDozcHg7fTwvc3R5bGU+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MDAuNSAtMjIxMCkiPjxyZWN0IGNsYXNzPSJhIiB3aWR0aD0iNTUiIGhlaWdodD0iNTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY1NSAyMjMyKSIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTIyLjM1MSAyNDcwLjMzKSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTc0OC43MTcgLTI2MC4zMykiPjxwYXRoIGQ9Ik0xNzY0LjM4MS0yNjAuMzNhMTMuMzA4LDEzLjMwOCwwLDAsMC0xMy4zLDEzLjMsMTMuMzEyLDEzLjMxMiwwLDAsMCwxMy4zLDEzLjI5NCwxMy4zMTEsMTMuMzExLDAsMCwwLDEzLjMtMTMuM0ExMy4zMDgsMTMuMzA4LDAsMCwwLDE3NjQuMzgxLTI2MC4zM1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNzUxLjA4MyAyNjAuMzMpIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTkuOTI0IDI3Ljc0KSI+PHBhdGggZD0iTTE3ODYuMjQxLTIyOS45YTEzLjMsMTMuMywwLDAsMC0xMy4zLDEzLjMsMTMuMywxMy4zLDAsMCwwLDEzLjMsMTMuMywxMy4zLDEzLjMsMCwwLDAsMTMuMy0xMy4zdjBBMTMuMzEzLDEzLjMxMywwLDAsMCwxNzg2LjI0MS0yMjkuOVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNzcyLjk0MiAyMjkuODk2KSIvPjwvZz48cGF0aCBkPSJNMTgxNi4zMjMtMTY1LjdoLTI0Ljc0YTEyLjc1MiwxMi43NTIsMCwwLDAtMTIuNjQzLDEyLjg1OCwxMi43NSwxMi43NSwwLDAsMCwxMi42NDMsMTIuNjQyaDIzLjg1M2E5LjgxNiw5LjgxNiwwLDAsMCw1Ljc1OC0xLjg2MWwwLTI4LjUxNUE0Ljg4LDQuODgsMCwwLDEsMTgxNi4zMjMtMTY1LjdabS0xOS44NDIsMTYuNjVhNS4xNTMsNS4xNTMsMCwwLDEtNy4yODYsMCw1LjE1Myw1LjE1MywwLDAsMSwwLTcuMjg3LDUuMTU0LDUuMTU0LDAsMCwxLDcuMjg3LDAsNS4yMTUsNS4yMTUsMCwwLDEsMS41MSwzLjY0NkE1LjE1NSw1LjE1NSwwLDAsMSwxNzk2LjQ4MS0xNDkuMDU0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3NTMuNTQ5IDI1Mi4zODYpIi8+PC9nPjxwYXRoIGNsYXNzPSJiIiBkPSJNMTc4Mi44OTUtMTkxLjA4OWgtNTIuMzE2YTYuMjI4LDYuMjI4LDAsMCwxLTYuMjI4LTYuMjI4aDBhNi4yMjksNi4yMjksMCwwLDEsNi4yMjgtNi4yMjhoMTMuNzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTUuMDI2KSIvPjxwYXRoIGNsYXNzPSJjIiBkPSJNMTgwMC43NjgtMTkwLjUzOWE2LjQzOCw2LjQzOCwwLDAsMSw2LjQzOCw2LjQzOHY1MS42OGE2LjQzOCw2LjQzOCwwLDAsMS02LjQzOCw2LjQzOGgtNjkuOThhNi40MzgsNi40MzgsMCwwLDEtNi40MzctNi40Mzh2LTY0LjM0NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtNS42MjYpIi8+PHBhdGggY2xhc3M9ImMiIGQ9Ik0xODAwLjc2OC0xOTEuMTQ0aC03MC4xODlhNi4yMjgsNi4yMjgsMCwwLDEtNi4yMjgtNi4yMjhoMGE2LjIyOCw2LjIyOCwwLDAsMSw2LjIyOC02LjIyOGgxMy43MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtNS4wMjEpIi8+PHBhdGggY2xhc3M9ImMiIGQ9Ik0xODA0LjgxMy0yMDMuNmgxMi40MTFhNi42NzEsNi42NzEsMCwwLDEsNi42Nyw2LjY3djYzLjY3MmE2LjY3MSw2LjY3MSwwLDAsMS02LjY3LDYuNjdoLTE4LjM1MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYuNTk2IC01LjAyMSkiLz48bGluZSBjbGFzcz0iYyIgeTI9IjcuOTA3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNzY3LjQyNyAtMjA0LjAyMSkiLz48bGluZSBjbGFzcz0iYyIgeTI9IjcuOTA3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNzU1LjQ3NCAtMjEyLjUyNCkiLz48bGluZSBjbGFzcz0iYyIgeTI9IjE2LjU2NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTczNi4xNyAtMTc4LjgxKSIvPjxsaW5lIGNsYXNzPSJjIiB5Mj0iNy41MTciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3OTMuODkxIC0yNDUuNTA4KSIvPjxsaW5lIGNsYXNzPSJjIiB4Mj0iNy42NjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3ODkuOTc4IC0yNDEuNzQ5KSIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3MzQuODcxIC0xNTcuMDA0KSI+PHBhdGggZD0iTTE3MzguMTExLTE0Ni41OWExLjMsMS4zLDAsMCwwLTEuODM3LDAsMS4zLDEuMywwLDAsMCwwLDEuODM4LDEuMywxLjMsMCwwLDAsMS44MzcsMCwxLjMsMS4zLDAsMCwwLC4zODEtLjkxNUExLjMxNCwxLjMxNCwwLDAsMCwxNzM4LjExMS0xNDYuNTlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTczNS44OTMgMTQ2Ljk3KSIvPjwvZz48L2c+PC9nPjwvc3ZnPg==");
;// CONCATENATED MODULE: ./src/images/benefits/7.svg
/* harmony default export */ const _7 = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDEuNTMyIiBoZWlnaHQ9IjExNy41IiB2aWV3Qm94PSIwIDAgMTAxLjUzMiAxMTcuNSI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6I2ZmY2M0ODt9LmJ7ZmlsbDpub25lO30uYiwuY3tzdHJva2U6IzAwMDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjNweDt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3My41IC0yNTgzLjUpIj48cmVjdCBjbGFzcz0iYSIgd2lkdGg9IjU1IiBoZWlnaHQ9IjU1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNzUgMjY0NikiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQyOS45NjUgMzAwNS44MDUpIj48bGluZSBjbGFzcz0iYiIgeDI9IjY4LjAzNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYzNS40NjMgLTM2NC41MDIpIi8+PHBhdGggY2xhc3M9ImIiIGQ9Ik0xNjgxLjUxOC0zNTguOTc0aDkuMzg0djcuMDM4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTUuNTU4IC0xMi41NjYpIi8+PHBhdGggY2xhc3M9ImIiIGQ9Ik0xNzA1LjA3My0zNTkuMTE2di03LjAzOGgxNC4wNzZ2LTI4LjE1MmgtMTEuNzMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMC4zNDUgLTUuMzg1KSIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNMCwwSDUuODQxQTUuODg5LDUuODg5LDAsMCwxLDExLjczLDUuODg5djI4LjFhNS44ODksNS44ODksMCwwLDEtNS44ODksNS44ODlIMGEwLDAsMCwwLDEsMCwwVjBBMCwwLDAsMCwxLDAsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2NzcuNjkxIC00MjAuODA1KSIvPjxsaW5lIGNsYXNzPSJiIiB5Mj0iMTEuNzMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2MjYuMDc5IC0zMjkuMzEyKSIvPjxwYXRoIGNsYXNzPSJjIiBkPSJNMTYzMC44MTktMzY1LjUwOGwxNC4wNzYsOS4zODRoOS4zODRjMTAuNzMxLDAsOS4zODQtMTEuNzMsOS4zODQtMTEuNzNoLTExLjczbC0xNi40MjItMTEuNzI5aC05LjM4NGE5LjM4NCw5LjM4NCwwLDAsMC05LjM4NCw5LjM4NHYyNS44MDZhMTQuMDc1LDE0LjA3NSwwLDAsMCwxNC4wNzYsMTQuMDc2aDE2LjQyMmwxNC4wNzYsMjUuODA2aDEwLjY2OWwtMTEuMzI3LTM0LjM3M2ExMS43MjksMTEuNzI5LDAsMCwwLTExLjA3MS03Ljg1NWgtMTEuNzN2LTE0LjA3NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuMzkzIC04LjM3NykiLz48cGF0aCBjbGFzcz0iYiIgZD0iTTE2MDQuOTY1LTM3My43djM1LjE5YTE4Ljc2OCwxOC43NjgsMCwwLDAsMTguNzY4LDE4Ljc2OGgxNi40MjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTkuNTc0KSIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNMTYwNC45NjUtMzM4LjM2M2gxOC43NjhsNC42OTIsNy4wMzgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTE2Ljc1NCkiLz48cGF0aCBjbGFzcz0iYiIgZD0iTTE2NDEuOTUtMjg2LjU2MmgtOS4zODRsLTQuNjkzLTQuNjkyLTQuNjkxLDQuNjkySDE2MTMuOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuNzk1IC0yNi4zMjgpIi8+PHBhdGggY2xhc3M9ImMiIGQ9Ik0xNjMwLjI0NC0zOTQuNGExMC4yNzMsMTAuMjczLDAsMCwwLDEwLjU1Ni0xMC4wNTR2LTMuMzUzYTEwLjI3MywxMC4yNzMsMCwwLDAtMTAuNTU2LTEwLjA1NCwxMC4yNzQsMTAuMjc0LDAsMCwwLTEwLjU1NywxMC4wNTR2My4zNTNBMTAuMjc0LDEwLjI3NCwwLDAsMCwxNjMwLjI0NC0zOTQuNFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yLjk5MiAtMC41OTgpIi8+PC9nPjwvZz48L3N2Zz4=");
;// CONCATENATED MODULE: ./src/images/benefits/arrow.jsx
const BenefitsArrow=props=>{return/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24.616",height:"21.538",viewBox:"155 18 24.616 21.538"},/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("g",{"data-name":"Icon feather-arrow-right"},/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("path",{d:"M155 28.769h23.482",strokeLinejoin:"round",strokeLinecap:"square",strokeWidth:"3",stroke:props.stroke,fill:"transparent","data-name":"Path 428"}),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("path",{d:"m168.801 39.538 10.815-10.77L168.8 18",strokeLinejoin:"round",strokeLinecap:"square",strokeWidth:"3",stroke:props.stroke,fill:"transparent","data-name":"Path 429"})));};/* harmony default export */ const benefits_arrow = (BenefitsArrow);
;// CONCATENATED MODULE: ./src/components/benefits/benefits.jsx
const BenefitItem=props=>{return/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("div",{className:props.type==="title"?"benefit-item-container benefit-item-container-title":"benefit-item-container benefit-item-container-item"},props.type==="item"&&/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("div",{style:{display:"flex",gap:"44px",flexDirection:"column"}},/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("img",{src:props.src,style:{height:"120px"},alt:"img"}),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("div",null,props.text.split("/n").map((text,key)=>{return/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("div",{key:key},text);}))),props.type==="title"&&/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("div",null,props.text.split("/n").map((text,key)=>{return/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement((external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default()).Fragment,null,/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("div",{key:key,style:{fontSize:"48px",fontWeight:"bold",lineHeight:"1.25"}},text));}),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("div",{className:"under-line"})));};const Benefits=()=>{const{0:hover,1:setHover}=(0,external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_.useState)(false);console.log(hover);return/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(esm_Container,{className:"benefits-container"},/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("div",{className:"items-container"},/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(BenefitItem,{type:"title",text:"Lorem/nipsum/ndolor sit/namet,/nconse"}),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(BenefitItem,{type:"item",src:_6,text:"Lorem ipsum"}),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(BenefitItem,{type:"item",src:_5,text:"Lorem ipsum/ndolor sit amet conse"}),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(BenefitItem,{type:"item",src:_4,text:"Lorem ipsum/ndolor sit amet, conse"}),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(BenefitItem,{type:"item",src:_7,text:"Lorem ipsum/ndolor sit amet, conse"}),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(BenefitItem,{type:"item",src:_1,text:"Lorem ipsum dolor/nsit amet, conse/nlorem ipsum lorem ipsum"}),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(BenefitItem,{type:"item",src:_2,text:"Lorem ipsum dolor/nsit amet, conse/nlorem ipsum lorem ipsum"}),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(BenefitItem,{type:"item",src:_3,text:"Lorem ipsum dolor/nsit amet, conse/nlorem ipsum lorem ipsum"})),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("div",{className:"benefit-button",onMouseEnter:()=>{setHover(true);},onMouseLeave:()=>{setHover(false);}},/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("div",{className:"benefit-button-text",style:{background:"linear-gradient(to right, #ffcc48 50%, black 50%)",backgroundSize:"200% 100%",backgroundPosition:hover?"left bottom":"right bottom",transition:"all 0.15s ease-out",color:hover?"black":"white"}},"Dowiedz si\u0119 wi\u0119cej"),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("div",{className:"benefit-arrow-button"},/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(benefits_arrow,{stroke:"white"}))));};/* harmony default export */ const benefits = (Benefits);
;// CONCATENATED MODULE: ./src/components/adversity/adversity.jsx
const Adversity=()=>{return/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(esm_Container,{className:"adversity-container"},/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("div",{className:"adversity-background"}),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("div",{className:"adversity-lines-background"}),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("div",{className:"adversity-text"},"Lorem ipsum",/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("br",null)," vs w\u0142asne biuro"),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("div",{className:"adversity-underline"}));};/* harmony default export */ const adversity = (Adversity);
;// CONCATENATED MODULE: ./src/components/news/news.jsx
const NewsItem=()=>{};const News=()=>{return/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(esm_Container,{className:"news-container"},/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("div",{className:"news-title"},"Aktualno\u015Bci"),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(NewsItem,null),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(NewsItem,null),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(NewsItem,null));};/* harmony default export */ const news = (News);
;// CONCATENATED MODULE: ./src/components/imports.js

;// CONCATENATED MODULE: ./src/pages/index.js
function App(){return/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement("div",{className:"App"},/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(header,null),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(offer,null),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(benefits,null),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(adversity,null),/*#__PURE__*/external_C_Users_mateu_OneDrive_Pulpit_pixel_perfect_project_node_modules_react_index_js_default().createElement(news,null));}/* harmony default export */ const pages = (App);

/***/ }),

/***/ 4391:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = all;

var _createChainableTypeChecker = __webpack_require__(2613);

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function all() {
  for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  function allPropTypes() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var error = null;

    validators.forEach(function (validator) {
      if (error != null) {
        return;
      }

      var result = validator.apply(undefined, args);
      if (result != null) {
        error = result;
      }
    });

    return error;
  }

  return (0, _createChainableTypeChecker2.default)(allPropTypes);
}
module.exports = exports['default'];

/***/ }),

/***/ 2613:
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = createChainableTypeChecker;
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

// Mostly taken from ReactPropTypes.

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] == null) {
      if (isRequired) {
        return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
      }

      return null;
    }

    for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      args[_key - 6] = arguments[_key];
    }

    return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}
module.exports = exports['default'];

/***/ }),

/***/ 4448:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(4377),ca=__webpack_require__(3840);function p(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(a,b){ha(a,b);ha(a+"Capture",b)}
function ha(a,b){ea[a]=b;for(a=0;a<b.length;a++)da.add(b[a])}
var ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la=
{},ma={};function oa(a){if(ja.call(ma,a))return!0;if(ja.call(la,a))return!1;if(ka.test(a))return ma[a]=!0;la[a]=!0;return!1}function pa(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function qa(a,b,c,d){if(null===b||"undefined"===typeof b||pa(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function v(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var z={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z[a]=new v(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z[b]=new v(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new v(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new v(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new v(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){z[a]=new v(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){z[a]=new v(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){z[a]=new v(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){z[a]=new v(a,5,!1,a.toLowerCase(),null,!1,!1)});var ra=/[\-:]([a-z])/g;function sa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ra,
sa);z[b]=new v(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!1,!1)});
z.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!0,!0)});
function ta(a,b,c,d){var e=z.hasOwnProperty(b)?z[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])qa(b,c,e,d)&&(c=null),d||null===e?oa(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)))}
var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");
var Ia=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Ja=Symbol.iterator;function Ka(a){if(null===a||"object"!==typeof a)return null;a=Ja&&a[Ja]||a["@@iterator"];return"function"===typeof a?a:null}var A=Object.assign,La;function Ma(a){if(void 0===La)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);La=b&&b[1]||""}return"\n"+La+a}var Na=!1;
function Oa(a,b){if(!a||Na)return"";Na=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(l){var d=l}Reflect.construct(a,[],b)}else{try{b.call()}catch(l){d=l}a.call(b.prototype)}else{try{throw Error();}catch(l){d=l}a()}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{Na=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Ma(a):""}
function Pa(a){switch(a.tag){case 5:return Ma(a.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return a=Oa(a.type,!1),a;case 11:return a=Oa(a.type.render,!1),a;case 1:return a=Oa(a.type,!0),a;default:return""}}
function Qa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ya:return"Fragment";case wa:return"Portal";case Aa:return"Profiler";case za:return"StrictMode";case Ea:return"Suspense";case Fa:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ca:return(a.displayName||"Context")+".Consumer";case Ba:return(a._context.displayName||"Context")+".Provider";case Da:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Ga:return b=a.displayName||null,null!==b?b:Qa(a.type)||"Memo";case Ha:b=a._payload;a=a._init;try{return Qa(a(b))}catch(c){}}return null}
function Ra(a){var b=a.type;switch(a.tag){case 24:return"Cache";case 9:return(b.displayName||"Context")+".Consumer";case 10:return(b._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return b;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa(b);case 8:return b===za?"StrictMode":"Mode";case 22:return"Offscreen";
case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return""}}
function Ta(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return A({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function ab(a,b){b=b.checked;null!=b&&ta(a,"checked",b,!1)}
function bb(a,b){ab(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?cb(a,b.type,c):b.hasOwnProperty("defaultValue")&&cb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function db(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function cb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var eb=Array.isArray;
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(p(91));return A({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(p(92));if(eb(c)){if(1<c.length)throw Error(p(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Sa(c)}}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}function kb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
function lb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?kb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var mb,nb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else{mb=mb||document.createElement("div");mb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=mb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function ob(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,
zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(a){qb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pb[b]=pb[a]})});function rb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pb.hasOwnProperty(a)&&pb[a]?(""+b).trim():b+"px"}
function sb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var tb=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function ub(a,b){if(b){if(tb[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(p(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(p(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(p(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(p(62));}}
function vb(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var wb=null;function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(p(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a])}}function Gb(a,b){return a(b)}function Hb(){}var Ib=!1;function Jb(a,b,c){if(Ib)return a(b,c);Ib=!0;try{return Gb(a,b,c)}finally{if(Ib=!1,null!==zb||null!==Ab)Hb(),Fb()}}
function Kb(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(p(231,b,typeof c));return c}var Lb=!1;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0}});window.addEventListener("test",Mb,Mb);window.removeEventListener("test",Mb,Mb)}catch(a){Lb=!1}function Nb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(a){Ob=!0;Pb=a}};function Tb(a,b,c,d,e,f,g,h,k){Ob=!1;Pb=null;Nb.apply(Sb,arguments)}
function Ub(a,b,c,d,e,f,g,h,k){Tb.apply(this,arguments);if(Ob){if(Ob){var l=Pb;Ob=!1;Pb=null}else throw Error(p(198));Qb||(Qb=!0,Rb=l)}}function Vb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Wb(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Xb(a){if(Vb(a)!==a)throw Error(p(188));}
function Yb(a){var b=a.alternate;if(!b){b=Vb(a);if(null===b)throw Error(p(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Xb(e),a;if(f===d)return Xb(e),b;f=f.sibling}throw Error(p(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(p(189));}}if(c.alternate!==d)throw Error(p(190));}if(3!==c.tag)throw Error(p(188));return c.stateNode.current===c?a:b}function Zb(a){a=Yb(a);return null!==a?$b(a):null}function $b(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=$b(a);if(null!==b)return b;a=a.sibling}return null}
var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(a){if(lc&&"function"===typeof lc.onCommitFiberRoot)try{lc.onCommitFiberRoot(kc,a,void 0,128===(a.current.flags&128))}catch(b){}}
var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(a){a>>>=0;return 0===a?32:31-(pc(a)/qc|0)|0}var rc=64,sc=4194304;
function tc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
default:return a}}function uc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=tc(h):(f&=g,0!==f&&(d=tc(f)))}else g=c&~e,0!==g?d=tc(g):0!==f&&(d=tc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-oc(b),e=1<<c,d|=a[c],b&=~e;return d}
function vc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}
function wc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-oc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=vc(h,b)}else k<=b&&(a.expiredLanes|=h);f&=~h}}function xc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function yc(){var a=rc;rc<<=1;0===(rc&4194240)&&(rc=64);return a}function zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function Ac(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-oc(b);a[b]=c}function Bc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-oc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f}}
function Cc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-oc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e}}var C=0;function Dc(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a,b){switch(a){case "focusin":case "focusout":Lc=null;break;case "dragenter":case "dragleave":Mc=null;break;case "mouseover":case "mouseout":Nc=null;break;case "pointerover":case "pointerout":Oc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Pc.delete(b.pointerId)}}
function Tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=Cb(b),null!==b&&Fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function Uc(a,b,c,d,e){switch(b){case "focusin":return Lc=Tc(Lc,a,b,c,d,e),!0;case "dragenter":return Mc=Tc(Mc,a,b,c,d,e),!0;case "mouseover":return Nc=Tc(Nc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Oc.set(f,Tc(Oc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,Pc.set(f,Tc(Pc.get(f)||null,a,b,c,d,e)),!0}return!1}
function Vc(a){var b=Wc(a.target);if(null!==b){var c=Vb(b);if(null!==c)if(b=c.tag,13===b){if(b=Wb(c),null!==b){a.blockedOn=b;Ic(a.priority,function(){Gc(c)});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function Xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=Yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);wb=d;c.target.dispatchEvent(d);wb=null}else return b=Cb(c),null!==b&&Fc(b),a.blockedOn=c,!1;b.shift()}return!0}function Zc(a,b,c){Xc(a)&&c.delete(b)}function $c(){Jc=!1;null!==Lc&&Xc(Lc)&&(Lc=null);null!==Mc&&Xc(Mc)&&(Mc=null);null!==Nc&&Xc(Nc)&&(Nc=null);Oc.forEach(Zc);Pc.forEach(Zc)}
function ad(a,b){a.blockedOn===b&&(a.blockedOn=null,Jc||(Jc=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)))}
function bd(a){function b(b){return ad(b,a)}if(0<Kc.length){ad(Kc[0],a);for(var c=1;c<Kc.length;c++){var d=Kc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==Lc&&ad(Lc,a);null!==Mc&&ad(Mc,a);null!==Nc&&ad(Nc,a);Oc.forEach(b);Pc.forEach(b);for(c=0;c<Qc.length;c++)d=Qc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Qc.length&&(c=Qc[0],null===c.blockedOn);)Vc(c),null===c.blockedOn&&Qc.shift()}var cd=ua.ReactCurrentBatchConfig,dd=!0;
function ed(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=1,fd(a,b,c,d)}finally{C=e,cd.transition=f}}function gd(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=4,fd(a,b,c,d)}finally{C=e,cd.transition=f}}
function fd(a,b,c,d){if(dd){var e=Yc(a,b,c,d);if(null===e)hd(a,b,d,id,c),Sc(a,d);else if(Uc(e,a,b,c,d))d.stopPropagation();else if(Sc(a,d),b&4&&-1<Rc.indexOf(a)){for(;null!==e;){var f=Cb(e);null!==f&&Ec(f);f=Yc(a,b,c,d);null===f&&hd(a,b,d,id,c);if(f===e)break;e=f}null!==e&&d.stopPropagation()}else hd(a,b,d,null,c)}}var id=null;
function Yc(a,b,c,d){id=null;a=xb(d);a=Wc(a);if(null!==a)if(b=Vb(a),null===b)a=null;else if(c=b.tag,13===c){a=Wb(b);if(null!==a)return a;a=null}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===b.tag?b.stateNode.containerInfo:null;a=null}else b!==a&&(a=null);id=a;return null}
function jd(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;
case "message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}
function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return!0}function qd(){return!1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}A(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return"movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=A({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return"keypress"===a.type?od(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return-1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function he(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return"compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var pe=null,qe=null;function re(a){se(a,0)}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));Jb(re,b)}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae()}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge;
function Ie(a,b){if(He(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++){var e=c[d];if(!ja.call(b,e)||!He(a[e],b[e]))return!1}return!0}function Je(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Ke(a,b){var c=Je(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Je(c)}}function Le(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Le(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Me(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}function Ne(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
function Oe(a){var b=Me(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Le(c.ownerDocument.documentElement,c)){if(null!==d&&Ne(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ke(c,f);var g=Ke(c,
d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)))}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}
var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Ne(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Ie(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}
function Ve(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};
ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(a){if(Xe[a])return Xe[a];if(!We[a])return a;var b=We[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Ye)return Xe[a]=b[c];return a}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a,b){df.set(a,b);fa(b,[a])}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf)}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);
ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Ub(d,b,void 0,a);a.currentTarget=null}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}}}if(Qb)throw a=Rb,Qb=!1,Rb=null,a;}
function D(a,b){var c=b[of];void 0===c&&(c=b[of]=new Set);var d=a+"__bubble";c.has(d)||(pf(b,a,2,!1),c.add(d))}function qf(a,b,c){var d=0;b&&(d|=4);pf(c,a,d,b)}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(a){if(!a[rf]){a[rf]=!0;da.forEach(function(b){"selectionchange"!==b&&(mf.has(b)||qf(b,!1,a),qf(b,!0,a))});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[rf]||(b[rf]=!0,qf("selectionchange",!1,b))}}
function pf(a,b,c,d){switch(jd(b)){case 1:var e=ed;break;case 4:e=gd;break;default:e=fd}c=e.bind(null,b,c,a);e=void 0;!Lb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function hd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=Wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}Jb(function(){var d=f,e=xb(c),g=[];
a:{var h=df.get(a);if(void 0!==h){var k=td,n=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":n="focus";k=Fd;break;case "focusout":n="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case $e:case af:case bf:k=Hd;break;case cf:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td}var t=0!==(b&4),J=!t&&"scroll"===a,x=t?null!==h?h+"Capture":null:h;t=[];for(var w=d,u;null!==
w;){u=w;var F=u.stateNode;5===u.tag&&null!==F&&(u=F,null!==x&&(F=Kb(w,x),null!=F&&t.push(tf(w,F,u))));if(J)break;w=w.return}0<t.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:t}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&c!==wb&&(n=c.relatedTarget||c.fromElement)&&(Wc(n)||n[uf]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?Wc(n):null,null!==
n&&(J=Vb(n),n!==J||5!==n.tag&&6!==n.tag))n=null}else k=null,n=d;if(k!==n){t=Bd;F="onMouseLeave";x="onMouseEnter";w="mouse";if("pointerout"===a||"pointerover"===a)t=Td,F="onPointerLeave",x="onPointerEnter",w="pointer";J=null==k?h:ue(k);u=null==n?h:ue(n);h=new t(F,w+"leave",k,c,e);h.target=J;h.relatedTarget=u;F=null;Wc(e)===d&&(t=new t(x,w+"enter",n,c,e),t.target=u,t.relatedTarget=J,F=t);J=F;if(k&&n)b:{t=k;x=n;w=0;for(u=t;u;u=vf(u))w++;u=0;for(F=x;F;F=vf(F))u++;for(;0<w-u;)t=vf(t),w--;for(;0<u-w;)x=
vf(x),u--;for(;w--;){if(t===x||null!==x&&t===x.alternate)break b;t=vf(t);x=vf(x)}t=null}else t=null;null!==k&&wf(g,h,k,t,!1);null!==n&&null!==J&&wf(g,J,n,t,!0)}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var na=ve;else if(me(h))if(we)na=Fe;else{na=De;var xa=Ce}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(na=Ee);if(na&&(na=na(a,d))){ne(g,na,c,e);break a}xa&&xa(a,h,d);"focusout"===a&&(xa=h._wrapperState)&&
xa.controlled&&"number"===h.type&&cb(h,"number",h.value)}xa=d?ue(d):window;switch(a){case "focusin":if(me(xa)||"true"===xa.contentEditable)Qe=xa,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e)}var $a;if(ae)b:{switch(a){case "compositionstart":var ba="onCompositionStart";break b;case "compositionend":ba="onCompositionEnd";
break b;case "compositionupdate":ba="onCompositionUpdate";break b}ba=void 0}else ie?ge(a,c)&&(ba="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(ba="onCompositionStart");ba&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==ba?"onCompositionEnd"===ba&&ie&&($a=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),xa=oe(d,ba),0<xa.length&&(ba=new Ld(ba,a,null,c,e),g.push({event:ba,listeners:xa}),$a?ba.data=$a:($a=he(c),null!==$a&&(ba.data=$a))));if($a=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),
0<d.length&&(e=new Ld("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=$a)}se(g,b)})}function tf(a,b,c){return{instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Kb(a,c),null!=f&&d.unshift(tf(a,f,e)),f=Kb(a,b),null!=f&&d.push(tf(a,f,e)));a=a.return}return d}function vf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function wf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Kb(c,f),null!=k&&g.unshift(tf(c,k,h))):e||(k=Kb(c,f),null!=k&&g.push(tf(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(a){return("string"===typeof a?a:""+a).replace(xf,"\n").replace(yf,"")}function Af(a,b,c){b=zf(b);if(zf(a)!==b&&c)throw Error(p(425));}function Bf(){}
var Cf=null,Df=null;function Ef(a,b){return"textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
var Ff="function"===typeof setTimeout?setTimeout:void 0,Gf="function"===typeof clearTimeout?clearTimeout:void 0,Hf="function"===typeof Promise?Promise:void 0,Jf="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Hf?function(a){return Hf.resolve(null).then(a).catch(If)}:Ff;function If(a){setTimeout(function(){throw a;})}
function Kf(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);bd(b);return}d--}else"$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e}while(c);bd(b)}function Lf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}
function Mf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;
function Wc(a){var b=a[Of];if(b)return b;for(var c=a.parentNode;c;){if(b=c[uf]||c[Of]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Mf(a);null!==a;){if(c=a[Of])return c;a=Mf(a)}return b}a=c;c=a.parentNode}return null}function Cb(a){a=a[Of]||a[uf];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(p(33));}function Db(a){return a[Pf]||null}var Sf=[],Tf=-1;function Uf(a){return{current:a}}
function E(a){0>Tf||(a.current=Sf[Tf],Sf[Tf]=null,Tf--)}function G(a,b){Tf++;Sf[Tf]=a.current;a.current=b}var Vf={},H=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(a,b){var c=a.type.contextTypes;if(!c)return Vf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
function Zf(a){a=a.childContextTypes;return null!==a&&void 0!==a}function $f(){E(Wf);E(H)}function ag(a,b,c){if(H.current!==Vf)throw Error(p(168));G(H,b);G(Wf,c)}function bg(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(p(108,Ra(a)||"Unknown",e));return A({},c,d)}
function cg(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Vf;Xf=H.current;G(H,a);G(Wf,Wf.current);return!0}function dg(a,b,c){var d=a.stateNode;if(!d)throw Error(p(169));c?(a=bg(a,b,Xf),d.__reactInternalMemoizedMergedChildContext=a,E(Wf),E(H),G(H,a)):E(Wf);G(Wf,c)}var eg=null,fg=!1,gg=!1;function hg(a){null===eg?eg=[a]:eg.push(a)}function ig(a){fg=!0;hg(a)}
function jg(){if(!gg&&null!==eg){gg=!0;var a=0,b=C;try{var c=eg;for(C=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}eg=null;fg=!1}catch(e){throw null!==eg&&(eg=eg.slice(a+1)),ac(fc,jg),e;}finally{C=b,gg=!1}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(a,b){kg[lg++]=ng;kg[lg++]=mg;mg=a;ng=b}
function ug(a,b,c){og[pg++]=rg;og[pg++]=sg;og[pg++]=qg;qg=a;var d=rg;a=sg;var e=32-oc(d)-1;d&=~(1<<e);c+=1;var f=32-oc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;rg=1<<32-oc(b)+e|c<<e|d;sg=f+a}else rg=1<<f|c<<e|d,sg=a}function vg(a){null!==a.return&&(tg(a,1),ug(a,1,0))}function wg(a){for(;a===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;a===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null}var xg=null,yg=null,I=!1,zg=null;
function Ag(a,b){var c=Bg(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c)}
function Cg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,xg=a,yg=Lf(b.firstChild),!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,xg=a,yg=null,!0):!1;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==qg?{id:rg,overflow:sg}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=Bg(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,xg=a,yg=
null,!0):!1;default:return!1}}function Dg(a){return 0!==(a.mode&1)&&0===(a.flags&128)}function Eg(a){if(I){var b=yg;if(b){var c=b;if(!Cg(a,b)){if(Dg(a))throw Error(p(418));b=Lf(c.nextSibling);var d=xg;b&&Cg(a,b)?Ag(d,c):(a.flags=a.flags&-4097|2,I=!1,xg=a)}}else{if(Dg(a))throw Error(p(418));a.flags=a.flags&-4097|2;I=!1;xg=a}}}function Fg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;xg=a}
function Gg(a){if(a!==xg)return!1;if(!I)return Fg(a),I=!0,!1;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Ef(a.type,a.memoizedProps));if(b&&(b=yg)){if(Dg(a))throw Hg(),Error(p(418));for(;b;)Ag(a,b),b=Lf(b.nextSibling)}Fg(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(p(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){yg=Lf(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}yg=
null}}else yg=xg?Lf(a.stateNode.nextSibling):null;return!0}function Hg(){for(var a=yg;a;)a=Lf(a.nextSibling)}function Ig(){yg=xg=null;I=!1}function Jg(a){null===zg?zg=[a]:zg.push(a)}var Kg=ua.ReactCurrentBatchConfig;function Lg(a,b){if(a&&a.defaultProps){b=A({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var Mg=Uf(null),Ng=null,Og=null,Pg=null;function Qg(){Pg=Og=Ng=null}function Rg(a){var b=Mg.current;E(Mg);a._currentValue=b}
function Sg(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return}}function Tg(a,b){Ng=a;Pg=Og=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(Ug=!0),a.firstContext=null)}
function Vg(a){var b=a._currentValue;if(Pg!==a)if(a={context:a,memoizedValue:b,next:null},null===Og){if(null===Ng)throw Error(p(308));Og=a;Ng.dependencies={lanes:0,firstContext:a}}else Og=Og.next=a;return b}var Wg=null;function Xg(a){null===Wg?Wg=[a]:Wg.push(a)}function Yg(a,b,c,d){var e=b.interleaved;null===e?(c.next=c,Xg(b)):(c.next=e.next,e.next=c);b.interleaved=c;return Zg(a,d)}
function Zg(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}var $g=!1;function ah(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}
function bh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function ch(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
function dh(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(K&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return Zg(a,c)}e=d.interleaved;null===e?(b.next=b,Xg(d)):(b.next=e.next,e.next=b);d.interleaved=b;return Zg(a,c)}function eh(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
function fh(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function gh(a,b,c,d){var e=a.updateQueue;$g=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k))}if(null!==f){var q=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,y=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:y,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
next:null});a:{var n=a,t=h;r=b;y=c;switch(t.tag){case 1:n=t.payload;if("function"===typeof n){q=n.call(y,q,r);break a}q=n;break a;case 3:n.flags=n.flags&-65537|128;case 0:n=t.payload;r="function"===typeof n?n.call(y,q,r):n;if(null===r||void 0===r)break a;q=A({},q,r);break a;case 2:$g=!0}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h))}else y={eventTime:y,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=y,k=q):m=m.next=y,g|=r;
h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null}while(1);null===m&&(k=q);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);hh|=g;a.lanes=g;a.memoizedState=q}}
function ih(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(p(191,e));e.call(d)}}}var jh=(new aa.Component).refs;function kh(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:A({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var nh={isMounted:function(a){return(a=a._reactInternals)?Vb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=L(),e=lh(a),f=ch(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=dh(a,f,e);null!==b&&(mh(b,a,e,d),eh(b,a,e))},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=L(),e=lh(a),f=ch(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=dh(a,f,e);null!==b&&(mh(b,a,e,d),eh(b,a,e))},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=L(),d=
lh(a),e=ch(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=dh(a,e,d);null!==b&&(mh(b,a,d,c),eh(b,a,d))}};function oh(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie(c,d)||!Ie(e,f):!0}
function ph(a,b,c){var d=!1,e=Vf;var f=b.contextType;"object"===typeof f&&null!==f?f=Vg(f):(e=Zf(b)?Xf:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Yf(a,e):Vf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=nh;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function qh(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&nh.enqueueReplaceState(b,b.state,null)}
function rh(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=jh;ah(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=Vg(f):(f=Zf(b)?Xf:H.current,e.context=Yf(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(kh(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&nh.enqueueReplaceState(e,e.state,null),gh(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308)}
function sh(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(p(309));var d=c.stateNode}if(!d)throw Error(p(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;b===jh&&(b=e.refs={});null===a?delete b[f]:b[f]=a};b._stringRef=f;return b}if("string"!==typeof a)throw Error(p(284));if(!c._owner)throw Error(p(290,a));}return a}
function th(a,b){a=Object.prototype.toString.call(b);throw Error(p(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function uh(a){var b=a._init;return b(a._payload)}
function vh(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c)}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=wh(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=xh(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===ya)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ha&&uh(f)===b.type))return d=e(b,c.props),d.ref=sh(a,b,c),d.return=a,d;d=yh(c.type,c.key,c.props,null,a.mode,d);d.ref=sh(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=zh(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Ah(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function q(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=xh(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case va:return c=yh(b.type,b.key,b.props,null,a.mode,c),
c.ref=sh(a,null,b),c.return=a,c;case wa:return b=zh(b,a.mode,c),b.return=a,b;case Ha:var d=b._init;return q(a,d(b._payload),c)}if(eb(b)||Ka(b))return b=Ah(b,a.mode,c,null),b.return=a,b;th(a,b)}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case va:return c.key===e?k(a,b,c,d):null;case wa:return c.key===e?l(a,b,c,d):null;case Ha:return e=c._init,r(a,
b,e(c._payload),d)}if(eb(c)||Ka(c))return null!==e?null:m(a,b,c,d,null);th(a,c)}return null}function y(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case va:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case wa:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case Ha:var f=d._init;return y(a,b,c,f(d._payload),e)}if(eb(d)||Ka(d))return a=a.get(c)||null,m(b,a,d,e,null);th(b,d)}return null}
function n(e,g,h,k){for(var l=null,m=null,u=g,w=g=0,x=null;null!==u&&w<h.length;w++){u.index>w?(x=u,u=null):x=u.sibling;var n=r(e,u,h[w],k);if(null===n){null===u&&(u=x);break}a&&u&&null===n.alternate&&b(e,u);g=f(n,g,w);null===m?l=n:m.sibling=n;m=n;u=x}if(w===h.length)return c(e,u),I&&tg(e,w),l;if(null===u){for(;w<h.length;w++)u=q(e,h[w],k),null!==u&&(g=f(u,g,w),null===m?l=u:m.sibling=u,m=u);I&&tg(e,w);return l}for(u=d(e,u);w<h.length;w++)x=y(u,e,w,h[w],k),null!==x&&(a&&null!==x.alternate&&u.delete(null===
x.key?w:x.key),g=f(x,g,w),null===m?l=x:m.sibling=x,m=x);a&&u.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function t(e,g,h,k){var l=Ka(h);if("function"!==typeof l)throw Error(p(150));h=l.call(h);if(null==h)throw Error(p(151));for(var u=l=null,m=g,w=g=0,x=null,n=h.next();null!==m&&!n.done;w++,n=h.next()){m.index>w?(x=m,m=null):x=m.sibling;var t=r(e,m,n.value,k);if(null===t){null===m&&(m=x);break}a&&m&&null===t.alternate&&b(e,m);g=f(t,g,w);null===u?l=t:u.sibling=t;u=t;m=x}if(n.done)return c(e,
m),I&&tg(e,w),l;if(null===m){for(;!n.done;w++,n=h.next())n=q(e,n.value,k),null!==n&&(g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);I&&tg(e,w);return l}for(m=d(e,m);!n.done;w++,n=h.next())n=y(m,e,w,n.value,k),null!==n&&(a&&null!==n.alternate&&m.delete(null===n.key?w:n.key),g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);a&&m.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function J(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ya&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case va:a:{for(var k=
f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ya){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ha&&uh(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=sh(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling}f.type===ya?(d=Ah(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=yh(f.type,f.key,f.props,null,a.mode,h),h.ref=sh(a,d,f),h.return=a,a=h)}return g(a);case wa:a:{for(l=f.key;null!==
d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=zh(f,a.mode,h);d.return=a;a=d}return g(a);case Ha:return l=f._init,J(a,d,l(f._payload),h)}if(eb(f))return n(a,d,f,h);if(Ka(f))return t(a,d,f,h);th(a,f)}return"string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):
(c(a,d),d=xh(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return J}var Bh=vh(!0),Ch=vh(!1),Dh={},Eh=Uf(Dh),Fh=Uf(Dh),Gh=Uf(Dh);function Hh(a){if(a===Dh)throw Error(p(174));return a}function Ih(a,b){G(Gh,b);G(Fh,a);G(Eh,Dh);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:lb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=lb(b,a)}E(Eh);G(Eh,b)}function Jh(){E(Eh);E(Fh);E(Gh)}
function Kh(a){Hh(Gh.current);var b=Hh(Eh.current);var c=lb(b,a.type);b!==c&&(G(Fh,a),G(Eh,c))}function Lh(a){Fh.current===a&&(E(Eh),E(Fh))}var M=Uf(0);
function Mh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var Nh=[];
function Oh(){for(var a=0;a<Nh.length;a++)Nh[a]._workInProgressVersionPrimary=null;Nh.length=0}var Ph=ua.ReactCurrentDispatcher,Qh=ua.ReactCurrentBatchConfig,Rh=0,N=null,O=null,P=null,Sh=!1,Th=!1,Uh=0,Vh=0;function Q(){throw Error(p(321));}function Wh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}
function Xh(a,b,c,d,e,f){Rh=f;N=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Ph.current=null===a||null===a.memoizedState?Yh:Zh;a=c(d,e);if(Th){f=0;do{Th=!1;Uh=0;if(25<=f)throw Error(p(301));f+=1;P=O=null;b.updateQueue=null;Ph.current=$h;a=c(d,e)}while(Th)}Ph.current=ai;b=null!==O&&null!==O.next;Rh=0;P=O=N=null;Sh=!1;if(b)throw Error(p(300));return a}function bi(){var a=0!==Uh;Uh=0;return a}
function ci(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===P?N.memoizedState=P=a:P=P.next=a;return P}function di(){if(null===O){var a=N.alternate;a=null!==a?a.memoizedState:null}else a=O.next;var b=null===P?N.memoizedState:P.next;if(null!==b)P=b,O=a;else{if(null===a)throw Error(p(310));O=a;a={memoizedState:O.memoizedState,baseState:O.baseState,baseQueue:O.baseQueue,queue:O.queue,next:null};null===P?N.memoizedState=P=a:P=P.next=a}return P}
function ei(a,b){return"function"===typeof b?b(a):b}
function fi(a){var b=di(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=O,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Rh&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else{var q={lane:m,action:l.action,hasEagerState:l.hasEagerState,
eagerState:l.eagerState,next:null};null===k?(h=k=q,g=d):k=k.next=q;N.lanes|=m;hh|=m}l=l.next}while(null!==l&&l!==f);null===k?g=d:k.next=h;He(d,b.memoizedState)||(Ug=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d}a=c.interleaved;if(null!==a){e=a;do f=e.lane,N.lanes|=f,hh|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return[b.memoizedState,c.dispatch]}
function gi(a){var b=di(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(Ug=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}function hi(){}
function ii(a,b){var c=N,d=di(),e=b(),f=!He(d.memoizedState,e);f&&(d.memoizedState=e,Ug=!0);d=d.queue;ji(ki.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==P&&P.memoizedState.tag&1){c.flags|=2048;li(9,mi.bind(null,c,d,e,b),void 0,null);if(null===R)throw Error(p(349));0!==(Rh&30)||ni(c,b,e)}return e}function ni(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=N.updateQueue;null===b?(b={lastEffect:null,stores:null},N.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a))}
function mi(a,b,c,d){b.value=c;b.getSnapshot=d;oi(b)&&pi(a)}function ki(a,b,c){return c(function(){oi(b)&&pi(a)})}function oi(a){var b=a.getSnapshot;a=a.value;try{var c=b();return!He(a,c)}catch(d){return!0}}function pi(a){var b=Zg(a,1);null!==b&&mh(b,a,1,-1)}
function qi(a){var b=ci();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ei,lastRenderedState:a};b.queue=a;a=a.dispatch=ri.bind(null,N,a);return[b.memoizedState,a]}
function li(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=N.updateQueue;null===b?(b={lastEffect:null,stores:null},N.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function si(){return di().memoizedState}function ti(a,b,c,d){var e=ci();N.flags|=a;e.memoizedState=li(1|b,c,void 0,void 0===d?null:d)}
function ui(a,b,c,d){var e=di();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&Wh(d,g.deps)){e.memoizedState=li(b,c,f,d);return}}N.flags|=a;e.memoizedState=li(1|b,c,f,d)}function vi(a,b){return ti(8390656,8,a,b)}function ji(a,b){return ui(2048,8,a,b)}function wi(a,b){return ui(4,2,a,b)}function xi(a,b){return ui(4,4,a,b)}
function yi(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function zi(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ui(4,4,yi.bind(null,b,a),c)}function Ai(){}function Bi(a,b){var c=di();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Wh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function Ci(a,b){var c=di();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Wh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function Di(a,b,c){if(0===(Rh&21))return a.baseState&&(a.baseState=!1,Ug=!0),a.memoizedState=c;He(c,b)||(c=yc(),N.lanes|=c,hh|=c,a.baseState=!0);return b}function Ei(a,b){var c=C;C=0!==c&&4>c?c:4;a(!0);var d=Qh.transition;Qh.transition={};try{a(!1),b()}finally{C=c,Qh.transition=d}}function Fi(){return di().memoizedState}
function Gi(a,b,c){var d=lh(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(Hi(a))Ii(b,c);else if(c=Yg(a,b,c,d),null!==c){var e=L();mh(c,a,d,e);Ji(c,b,d)}}
function ri(a,b,c){var d=lh(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(Hi(a))Ii(b,e);else{var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(He(h,g)){var k=b.interleaved;null===k?(e.next=e,Xg(b)):(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(l){}finally{}c=Yg(a,b,e,d);null!==c&&(e=L(),mh(c,a,d,e),Ji(c,b,d))}}
function Hi(a){var b=a.alternate;return a===N||null!==b&&b===N}function Ii(a,b){Th=Sh=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}function Ji(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
var ai={readContext:Vg,useCallback:Q,useContext:Q,useEffect:Q,useImperativeHandle:Q,useInsertionEffect:Q,useLayoutEffect:Q,useMemo:Q,useReducer:Q,useRef:Q,useState:Q,useDebugValue:Q,useDeferredValue:Q,useTransition:Q,useMutableSource:Q,useSyncExternalStore:Q,useId:Q,unstable_isNewReconciler:!1},Yh={readContext:Vg,useCallback:function(a,b){ci().memoizedState=[a,void 0===b?null:b];return a},useContext:Vg,useEffect:vi,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ti(4194308,
4,yi.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ti(4194308,4,a,b)},useInsertionEffect:function(a,b){return ti(4,2,a,b)},useMemo:function(a,b){var c=ci();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=ci();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=Gi.bind(null,N,a);return[d.memoizedState,a]},useRef:function(a){var b=
ci();a={current:a};return b.memoizedState=a},useState:qi,useDebugValue:Ai,useDeferredValue:function(a){return ci().memoizedState=a},useTransition:function(){var a=qi(!1),b=a[0];a=Ei.bind(null,a[1]);ci().memoizedState=a;return[b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=N,e=ci();if(I){if(void 0===c)throw Error(p(407));c=c()}else{c=b();if(null===R)throw Error(p(349));0!==(Rh&30)||ni(d,b,c)}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;vi(ki.bind(null,d,
f,a),[a]);d.flags|=2048;li(9,mi.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=ci(),b=R.identifierPrefix;if(I){var c=sg;var d=rg;c=(d&~(1<<32-oc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Uh++;0<c&&(b+="H"+c.toString(32));b+=":"}else c=Vh++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},Zh={readContext:Vg,useCallback:Bi,useContext:Vg,useEffect:ji,useImperativeHandle:zi,useInsertionEffect:wi,useLayoutEffect:xi,useMemo:Ci,useReducer:fi,useRef:si,useState:function(){return fi(ei)},
useDebugValue:Ai,useDeferredValue:function(a){var b=di();return Di(b,O.memoizedState,a)},useTransition:function(){var a=fi(ei)[0],b=di().memoizedState;return[a,b]},useMutableSource:hi,useSyncExternalStore:ii,useId:Fi,unstable_isNewReconciler:!1},$h={readContext:Vg,useCallback:Bi,useContext:Vg,useEffect:ji,useImperativeHandle:zi,useInsertionEffect:wi,useLayoutEffect:xi,useMemo:Ci,useReducer:gi,useRef:si,useState:function(){return gi(ei)},useDebugValue:Ai,useDeferredValue:function(a){var b=di();return null===
O?b.memoizedState=a:Di(b,O.memoizedState,a)},useTransition:function(){var a=gi(ei)[0],b=di().memoizedState;return[a,b]},useMutableSource:hi,useSyncExternalStore:ii,useId:Fi,unstable_isNewReconciler:!1};function Ki(a,b){try{var c="",d=b;do c+=Pa(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e,digest:null}}function Li(a,b,c){return{value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}
function Mi(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Ni="function"===typeof WeakMap?WeakMap:Map;function Oi(a,b,c){c=ch(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Pi||(Pi=!0,Qi=d);Mi(a,b)};return c}
function Ri(a,b,c){c=ch(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){Mi(a,b)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){Mi(a,b);"function"!==typeof d&&(null===Si?Si=new Set([this]):Si.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
function Ti(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new Ni;var e=new Set;d.set(b,e)}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Ui.bind(null,a,b,c),b.then(a,a))}function Vi(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return}while(null!==a);return null}
function Wi(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=ch(-1,1),b.tag=2,dh(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}var Xi=ua.ReactCurrentOwner,Ug=!1;function Yi(a,b,c,d){b.child=null===a?Ch(b,null,c,d):Bh(b,a.child,c,d)}
function Zi(a,b,c,d,e){c=c.render;var f=b.ref;Tg(b,e);d=Xh(a,b,c,d,f,e);c=bi();if(null!==a&&!Ug)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,$i(a,b,e);I&&c&&vg(b);b.flags|=1;Yi(a,b,d,e);return b.child}
function aj(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!bj(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,cj(a,b,f,d,e);a=yh(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Ie;if(c(g,d)&&a.ref===b.ref)return $i(a,b,e)}b.flags|=1;a=wh(f,d);a.ref=b.ref;a.return=b;return b.child=a}
function cj(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(Ie(f,d)&&a.ref===b.ref)if(Ug=!1,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(Ug=!0);else return b.lanes=a.lanes,$i(a,b,e)}return dj(a,b,c,d,e)}
function ej(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(fj,gj),gj|=c;else{if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,G(fj,gj),gj|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;G(fj,gj);gj|=d}else null!==
f?(d=f.baseLanes|c,b.memoizedState=null):d=c,G(fj,gj),gj|=d;Yi(a,b,e,c);return b.child}function hj(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152}function dj(a,b,c,d,e){var f=Zf(c)?Xf:H.current;f=Yf(b,f);Tg(b,e);c=Xh(a,b,c,d,f,e);d=bi();if(null!==a&&!Ug)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,$i(a,b,e);I&&d&&vg(b);b.flags|=1;Yi(a,b,c,e);return b.child}
function ij(a,b,c,d,e){if(Zf(c)){var f=!0;cg(b)}else f=!1;Tg(b,e);if(null===b.stateNode)jj(a,b),ph(b,c,d),rh(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=Vg(l):(l=Zf(c)?Xf:H.current,l=Yf(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||
(h!==d||k!==l)&&qh(b,g,d,l);$g=!1;var r=b.memoizedState;g.state=r;gh(b,d,g,e);k=b.memoizedState;h!==d||r!==k||Wf.current||$g?("function"===typeof m&&(kh(b,c,m,d),k=b.memoizedState),(h=$g||oh(b,c,h,d,r,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):
("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1)}else{g=b.stateNode;bh(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Lg(b.type,h);g.props=l;q=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=Vg(k):(k=Zf(c)?Xf:H.current,k=Yf(b,k));var y=c.getDerivedStateFromProps;(m="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||
"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==q||r!==k)&&qh(b,g,d,k);$g=!1;r=b.memoizedState;g.state=r;gh(b,d,g,e);var n=b.memoizedState;h!==q||r!==n||Wf.current||$g?("function"===typeof y&&(kh(b,c,y,d),n=b.memoizedState),(l=$g||oh(b,c,l,d,r,n,k)||!1)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,n,k),"function"===typeof g.UNSAFE_componentWillUpdate&&
g.UNSAFE_componentWillUpdate(d,n,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=n),g.props=d,g.state=n,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===
a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1)}return kj(a,b,c,d,f,e)}
function kj(a,b,c,d,e,f){hj(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&dg(b,c,!1),$i(a,b,f);d=b.stateNode;Xi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Bh(b,a.child,null,f),b.child=Bh(b,null,h,f)):Yi(a,b,h,f);b.memoizedState=d.state;e&&dg(b,c,!0);return b.child}function lj(a){var b=a.stateNode;b.pendingContext?ag(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ag(a,b.context,!1);Ih(a,b.containerInfo)}
function mj(a,b,c,d,e){Ig();Jg(e);b.flags|=256;Yi(a,b,c,d);return b.child}var nj={dehydrated:null,treeContext:null,retryLane:0};function oj(a){return{baseLanes:a,cachePool:null,transitions:null}}
function pj(a,b,c){var d=b.pendingProps,e=M.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;G(M,e&1);if(null===a){Eg(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=
g):f=qj(g,d,0,null),a=Ah(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=oj(c),b.memoizedState=nj,a):rj(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return sj(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=wh(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=wh(h,f):(f=Ah(f,g,c,null),f.flags|=2);f.return=
b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?oj(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=nj;return d}f=a.child;a=f.sibling;d=wh(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
function rj(a,b){b=qj({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function tj(a,b,c,d){null!==d&&Jg(d);Bh(b,a.child,null,c);a=rj(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
function sj(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=Li(Error(p(422))),tj(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=qj({mode:"visible",children:d.children},e,0,null);f=Ah(f,e,g,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Bh(b,a.child,null,g);b.child.memoizedState=oj(g);b.memoizedState=nj;return f}if(0===(b.mode&1))return tj(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;
if(d)var h=d.dgst;d=h;f=Error(p(419));d=Li(f,d,void 0);return tj(a,b,g,d)}h=0!==(g&a.childLanes);if(Ug||h){d=R;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=32;break;case 536870912:e=268435456;break;default:e=0}e=0!==(e&(d.suspendedLanes|g))?0:e;
0!==e&&e!==f.retryLane&&(f.retryLane=e,Zg(a,e),mh(d,a,e,-1))}uj();d=Li(Error(p(421)));return tj(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=vj.bind(null,a),e._reactRetry=b,null;a=f.treeContext;yg=Lf(e.nextSibling);xg=b;I=!0;zg=null;null!==a&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=a.id,sg=a.overflow,qg=b);b=rj(b,d.children);b.flags|=4096;return b}function wj(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);Sg(a.return,b,c)}
function xj(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e)}
function yj(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Yi(a,b,d.children,c);d=M.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else{if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&wj(a,c,b);else if(19===a.tag)wj(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}G(M,d);if(0===(b.mode&1))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Mh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);xj(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Mh(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}xj(b,!0,c,null,f);break;case "together":xj(b,!1,null,null,void 0);break;default:b.memoizedState=null}return b.child}
function jj(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2)}function $i(a,b,c){null!==a&&(b.dependencies=a.dependencies);hh|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(p(153));if(null!==b.child){a=b.child;c=wh(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=wh(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}
function zj(a,b,c){switch(b.tag){case 3:lj(b);Ig();break;case 5:Kh(b);break;case 1:Zf(b.type)&&cg(b);break;case 4:Ih(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;G(Mg,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return G(M,M.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return pj(a,b,c);G(M,M.current&1);a=$i(a,b,c);return null!==a?a.sibling:null}G(M,M.current&1);break;case 19:d=0!==(c&
b.childLanes);if(0!==(a.flags&128)){if(d)return yj(a,b,c);b.flags|=128}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);G(M,M.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,ej(a,b,c)}return $i(a,b,c)}var Aj,Bj,Cj,Dj;
Aj=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Bj=function(){};
Cj=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;Hh(Eh.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "select":e=A({},e,{value:void 0});d=A({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=Bf)}ub(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&
(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ea.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,
c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ea.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&D("scroll",a),f||h===k||(f=[])):(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",c);var l=f;if(b.updateQueue=l)b.flags|=4}};Dj=function(a,b,c,d){c!==d&&(b.flags|=4)};
function Ej(a,b){if(!I)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function S(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
function Fj(a,b,c){var d=b.pendingProps;wg(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(b),null;case 1:return Zf(b.type)&&$f(),S(b),null;case 3:d=b.stateNode;Jh();E(Wf);E(H);Oh();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Gg(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==zg&&(Gj(zg),zg=null));Bj(a,b);S(b);return null;case 5:Lh(b);var e=Hh(Gh.current);
c=b.type;if(null!==a&&null!=b.stateNode)Cj(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else{if(!d){if(null===b.stateNode)throw Error(p(166));S(b);return null}a=Hh(Eh.current);if(Gg(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Of]=b;d[Pf]=f;a=0!==(b.mode&1);switch(c){case "dialog":D("cancel",d);D("close",d);break;case "iframe":case "object":case "embed":D("load",d);break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],d);break;case "source":D("error",d);break;case "img":case "image":case "link":D("error",
d);D("load",d);break;case "details":D("toggle",d);break;case "input":Za(d,f);D("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};D("invalid",d);break;case "textarea":hb(d,f),D("invalid",d)}ub(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,
h,a),e=["children",""+h]):ea.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&D("scroll",d)}switch(c){case "input":Va(d);db(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=Bf)}d=e;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=kb(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):
"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Of]=b;a[Pf]=d;Aj(a,b,!1,!1);b.stateNode=a;a:{g=vb(c,d);switch(c){case "dialog":D("cancel",a);D("close",a);e=d;break;case "iframe":case "object":case "embed":D("load",a);e=d;break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],a);e=d;break;case "source":D("error",a);e=d;break;case "img":case "image":case "link":D("error",
a);D("load",a);e=d;break;case "details":D("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);D("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=A({},d,{value:void 0});D("invalid",a);break;case "textarea":hb(a,d);e=gb(a,d);D("invalid",a);break;default:e=d}ub(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?sb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&nb(a,k)):"children"===f?"string"===typeof k?("textarea"!==
c||""!==k)&&ob(a,k):"number"===typeof k&&ob(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ea.hasOwnProperty(f)?null!=k&&"onScroll"===f&&D("scroll",a):null!=k&&ta(a,f,k,g))}switch(c){case "input":Va(a);db(a,d,!1);break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,
!0);break;default:"function"===typeof e.onClick&&(a.onclick=Bf)}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=!0;break a;default:d=!1}}d&&(b.flags|=4)}null!==b.ref&&(b.flags|=512,b.flags|=2097152)}S(b);return null;case 6:if(a&&null!=b.stateNode)Dj(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(p(166));c=Hh(Gh.current);Hh(Eh.current);if(Gg(b)){d=b.stateNode;c=b.memoizedProps;d[Of]=b;if(f=d.nodeValue!==c)if(a=
xg,null!==a)switch(a.tag){case 3:Af(d.nodeValue,c,0!==(a.mode&1));break;case 5:!0!==a.memoizedProps.suppressHydrationWarning&&Af(d.nodeValue,c,0!==(a.mode&1))}f&&(b.flags|=4)}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Of]=b,b.stateNode=d}S(b);return null;case 13:E(M);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(I&&null!==yg&&0!==(b.mode&1)&&0===(b.flags&128))Hg(),Ig(),b.flags|=98560,f=!1;else if(f=Gg(b),null!==d&&null!==d.dehydrated){if(null===
a){if(!f)throw Error(p(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(p(317));f[Of]=b}else Ig(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;S(b);f=!1}else null!==zg&&(Gj(zg),zg=null),f=!0;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(M.current&1)?0===T&&(T=3):uj()));null!==b.updateQueue&&(b.flags|=4);S(b);return null;case 4:return Jh(),
Bj(a,b),null===a&&sf(b.stateNode.containerInfo),S(b),null;case 10:return Rg(b.type._context),S(b),null;case 17:return Zf(b.type)&&$f(),S(b),null;case 19:E(M);f=b.memoizedState;if(null===f)return S(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Ej(f,!1);else{if(0!==T||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=Mh(a);if(null!==g){b.flags|=128;Ej(f,!1);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,
g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;G(M,M.current&1|2);return b.child}a=
a.sibling}null!==f.tail&&B()>Hj&&(b.flags|=128,d=!0,Ej(f,!1),b.lanes=4194304)}else{if(!d)if(a=Mh(g),null!==a){if(b.flags|=128,d=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Ej(f,!0),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!I)return S(b),null}else 2*B()-f.renderingStartTime>Hj&&1073741824!==c&&(b.flags|=128,d=!0,Ej(f,!1),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g)}if(null!==f.tail)return b=f.tail,f.rendering=
b,f.tail=b.sibling,f.renderingStartTime=B(),b.sibling=null,c=M.current,G(M,d?c&1|2:c&1),b;S(b);return null;case 22:case 23:return Ij(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(gj&1073741824)&&(S(b),b.subtreeFlags&6&&(b.flags|=8192)):S(b),null;case 24:return null;case 25:return null}throw Error(p(156,b.tag));}
function Jj(a,b){wg(b);switch(b.tag){case 1:return Zf(b.type)&&$f(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return Jh(),E(Wf),E(H),Oh(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return Lh(b),null;case 13:E(M);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(p(340));Ig()}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return E(M),null;case 4:return Jh(),null;case 10:return Rg(b.type._context),null;case 22:case 23:return Ij(),
null;case 24:return null;default:return null}}var Kj=!1,U=!1,Lj="function"===typeof WeakSet?WeakSet:Set,V=null;function Mj(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null)}catch(d){W(a,b,d)}else c.current=null}function Nj(a,b,c){try{c()}catch(d){W(a,b,d)}}var Oj=!1;
function Pj(a,b){Cf=dd;a=Me();if(Ne(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType}catch(F){c=null;break a}var g=0,h=-1,k=-1,l=0,m=0,q=a,r=null;b:for(;;){for(var y;;){q!==c||0!==e&&3!==q.nodeType||(h=g+e);q!==f||0!==d&&3!==q.nodeType||(k=g+d);3===q.nodeType&&(g+=
q.nodeValue.length);if(null===(y=q.firstChild))break;r=q;q=y}for(;;){if(q===a)break b;r===c&&++l===e&&(h=g);r===f&&++m===d&&(k=g);if(null!==(y=q.nextSibling))break;q=r;r=q.parentNode}q=y}c=-1===h||-1===k?null:{start:h,end:k}}else c=null}c=c||{start:0,end:0}}else c=null;Df={focusedElem:a,selectionRange:c};dd=!1;for(V=b;null!==V;)if(b=V,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,V=a;else for(;null!==V;){b=V;try{var n=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;
case 1:if(null!==n){var t=n.memoizedProps,J=n.memoizedState,x=b.stateNode,w=x.getSnapshotBeforeUpdate(b.elementType===b.type?t:Lg(b.type,t),J);x.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var u=b.stateNode.containerInfo;1===u.nodeType?u.textContent="":9===u.nodeType&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163));}}catch(F){W(b,b.return,F)}a=b.sibling;if(null!==a){a.return=b.return;V=a;break}V=b.return}n=Oj;Oj=!1;return n}
function Qj(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Nj(b,c,f)}e=e.next}while(e!==d)}}function Rj(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}function Sj(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c}"function"===typeof b?b(a):b.current=a}}
function Tj(a){var b=a.alternate;null!==b&&(a.alternate=null,Tj(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Of],delete b[Pf],delete b[of],delete b[Qf],delete b[Rf]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null}function Uj(a){return 5===a.tag||3===a.tag||4===a.tag}
function Vj(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Uj(a.return))return null;a=a.return}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}
function Wj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=Bf));else if(4!==d&&(a=a.child,null!==a))for(Wj(a,b,c),a=a.sibling;null!==a;)Wj(a,b,c),a=a.sibling}
function Xj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Xj(a,b,c),a=a.sibling;null!==a;)Xj(a,b,c),a=a.sibling}var X=null,Yj=!1;function Zj(a,b,c){for(c=c.child;null!==c;)ak(a,b,c),c=c.sibling}
function ak(a,b,c){if(lc&&"function"===typeof lc.onCommitFiberUnmount)try{lc.onCommitFiberUnmount(kc,c)}catch(h){}switch(c.tag){case 5:U||Mj(c,b);case 6:var d=X,e=Yj;X=null;Zj(a,b,c);X=d;Yj=e;null!==X&&(Yj?(a=X,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):X.removeChild(c.stateNode));break;case 18:null!==X&&(Yj?(a=X,c=c.stateNode,8===a.nodeType?Kf(a.parentNode,c):1===a.nodeType&&Kf(a,c),bd(a)):Kf(X,c.stateNode));break;case 4:d=X;e=Yj;X=c.stateNode.containerInfo;Yj=!0;
Zj(a,b,c);X=d;Yj=e;break;case 0:case 11:case 14:case 15:if(!U&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?Nj(c,b,g):0!==(f&4)&&Nj(c,b,g));e=e.next}while(e!==d)}Zj(a,b,c);break;case 1:if(!U&&(Mj(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount()}catch(h){W(c,b,h)}Zj(a,b,c);break;case 21:Zj(a,b,c);break;case 22:c.mode&1?(U=(d=U)||null!==
c.memoizedState,Zj(a,b,c),U=d):Zj(a,b,c);break;default:Zj(a,b,c)}}function bk(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Lj);b.forEach(function(b){var d=ck.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function dk(a,b){var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:X=h.stateNode;Yj=!1;break a;case 3:X=h.stateNode.containerInfo;Yj=!0;break a;case 4:X=h.stateNode.containerInfo;Yj=!0;break a}h=h.return}if(null===X)throw Error(p(160));ak(f,g,e);X=null;Yj=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null}catch(l){W(e,b,l)}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)ek(b,a),b=b.sibling}
function ek(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:dk(b,a);fk(a);if(d&4){try{Qj(3,a,a.return),Rj(3,a)}catch(t){W(a,a.return,t)}try{Qj(5,a,a.return)}catch(t){W(a,a.return,t)}}break;case 1:dk(b,a);fk(a);d&512&&null!==c&&Mj(c,c.return);break;case 5:dk(b,a);fk(a);d&512&&null!==c&&Mj(c,c.return);if(a.flags&32){var e=a.stateNode;try{ob(e,"")}catch(t){W(a,a.return,t)}}if(d&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==c?c.memoizedProps:f,h=a.type,k=a.updateQueue;
a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&ab(e,f);vb(h,g);var l=vb(h,f);for(g=0;g<k.length;g+=2){var m=k[g],q=k[g+1];"style"===m?sb(e,q):"dangerouslySetInnerHTML"===m?nb(e,q):"children"===m?ob(e,q):ta(e,m,q,l)}switch(h){case "input":bb(e,f);break;case "textarea":ib(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var y=f.value;null!=y?fb(e,!!f.multiple,y,!1):r!==!!f.multiple&&(null!=f.defaultValue?fb(e,!!f.multiple,
f.defaultValue,!0):fb(e,!!f.multiple,f.multiple?[]:"",!1))}e[Pf]=f}catch(t){W(a,a.return,t)}}break;case 6:dk(b,a);fk(a);if(d&4){if(null===a.stateNode)throw Error(p(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f}catch(t){W(a,a.return,t)}}break;case 3:dk(b,a);fk(a);if(d&4&&null!==c&&c.memoizedState.isDehydrated)try{bd(b.containerInfo)}catch(t){W(a,a.return,t)}break;case 4:dk(b,a);fk(a);break;case 13:dk(b,a);fk(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||
null!==e.alternate&&null!==e.alternate.memoizedState||(gk=B()));d&4&&bk(a);break;case 22:m=null!==c&&null!==c.memoizedState;a.mode&1?(U=(l=U)||m,dk(b,a),U=l):dk(b,a);fk(a);if(d&8192){l=null!==a.memoizedState;if((a.stateNode.isHidden=l)&&!m&&0!==(a.mode&1))for(V=a,m=a.child;null!==m;){for(q=V=m;null!==V;){r=V;y=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Qj(4,r,r.return);break;case 1:Mj(r,r.return);var n=r.stateNode;if("function"===typeof n.componentWillUnmount){d=r;c=r.return;try{b=d,n.props=
b.memoizedProps,n.state=b.memoizedState,n.componentWillUnmount()}catch(t){W(d,c,t)}}break;case 5:Mj(r,r.return);break;case 22:if(null!==r.memoizedState){hk(q);continue}}null!==y?(y.return=r,V=y):hk(q)}m=m.sibling}a:for(m=null,q=a;;){if(5===q.tag){if(null===m){m=q;try{e=q.stateNode,l?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=q.stateNode,k=q.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=
rb("display",g))}catch(t){W(a,a.return,t)}}}else if(6===q.tag){if(null===m)try{q.stateNode.nodeValue=l?"":q.memoizedProps}catch(t){W(a,a.return,t)}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===a)&&null!==q.child){q.child.return=q;q=q.child;continue}if(q===a)break a;for(;null===q.sibling;){if(null===q.return||q.return===a)break a;m===q&&(m=null);q=q.return}m===q&&(m=null);q.sibling.return=q.return;q=q.sibling}}break;case 19:dk(b,a);fk(a);d&4&&bk(a);break;case 21:break;default:dk(b,
a),fk(a)}}function fk(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Uj(c)){var d=c;break a}c=c.return}throw Error(p(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(ob(e,""),d.flags&=-33);var f=Vj(a);Xj(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Vj(a);Wj(a,h,g);break;default:throw Error(p(161));}}catch(k){W(a,a.return,k)}a.flags&=-3}b&4096&&(a.flags&=-4097)}function ik(a,b,c){V=a;jk(a,b,c)}
function jk(a,b,c){for(var d=0!==(a.mode&1);null!==V;){var e=V,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Kj;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||U;h=Kj;var l=U;Kj=g;if((U=k)&&!l)for(V=e;null!==V;)g=V,k=g.child,22===g.tag&&null!==g.memoizedState?kk(e):null!==k?(k.return=g,V=k):kk(e);for(;null!==f;)V=f,jk(f,b,c),f=f.sibling;V=e;Kj=h;U=l}lk(a,b,c)}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,V=f):lk(a,b,c)}}
function lk(a){for(;null!==V;){var b=V;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:U||Rj(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!U)if(null===c)d.componentDidMount();else{var e=b.elementType===b.type?c.memoizedProps:Lg(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var f=b.updateQueue;null!==f&&ih(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
b.child.stateNode;break;case 1:c=b.child.stateNode}ih(b,g,c)}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&c.focus();break;case "img":k.src&&(c.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var l=b.alternate;if(null!==l){var m=l.memoizedState;if(null!==m){var q=m.dehydrated;null!==q&&bd(q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;
default:throw Error(p(163));}U||b.flags&512&&Sj(b)}catch(r){W(b,b.return,r)}}if(b===a){V=null;break}c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}function hk(a){for(;null!==V;){var b=V;if(b===a){V=null;break}var c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}
function kk(a){for(;null!==V;){var b=V;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Rj(4,b)}catch(k){W(b,c,k)}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount()}catch(k){W(b,e,k)}}var f=b.return;try{Sj(b)}catch(k){W(b,f,k)}break;case 5:var g=b.return;try{Sj(b)}catch(k){W(b,g,k)}}}catch(k){W(b,b.return,k)}if(b===a){V=null;break}var h=b.sibling;if(null!==h){h.return=b.return;V=h;break}V=b.return}}
var mk=Math.ceil,nk=ua.ReactCurrentDispatcher,ok=ua.ReactCurrentOwner,pk=ua.ReactCurrentBatchConfig,K=0,R=null,Y=null,Z=0,gj=0,fj=Uf(0),T=0,qk=null,hh=0,rk=0,sk=0,tk=null,uk=null,gk=0,Hj=Infinity,vk=null,Pi=!1,Qi=null,Si=null,wk=!1,xk=null,yk=0,zk=0,Ak=null,Bk=-1,Ck=0;function L(){return 0!==(K&6)?B():-1!==Bk?Bk:Bk=B()}
function lh(a){if(0===(a.mode&1))return 1;if(0!==(K&2)&&0!==Z)return Z&-Z;if(null!==Kg.transition)return 0===Ck&&(Ck=yc()),Ck;a=C;if(0!==a)return a;a=window.event;a=void 0===a?16:jd(a.type);return a}function mh(a,b,c,d){if(50<zk)throw zk=0,Ak=null,Error(p(185));Ac(a,c,d);if(0===(K&2)||a!==R)a===R&&(0===(K&2)&&(rk|=c),4===T&&Dk(a,Z)),Ek(a,d),1===c&&0===K&&0===(b.mode&1)&&(Hj=B()+500,fg&&jg())}
function Ek(a,b){var c=a.callbackNode;wc(a,b);var d=uc(a,a===R?Z:0);if(0===d)null!==c&&bc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&bc(c);if(1===b)0===a.tag?ig(Fk.bind(null,a)):hg(Fk.bind(null,a)),Jf(function(){0===(K&6)&&jg()}),c=null;else{switch(Dc(d)){case 1:c=fc;break;case 4:c=gc;break;case 16:c=hc;break;case 536870912:c=jc;break;default:c=hc}c=Gk(c,Hk.bind(null,a))}a.callbackPriority=b;a.callbackNode=c}}
function Hk(a,b){Bk=-1;Ck=0;if(0!==(K&6))throw Error(p(327));var c=a.callbackNode;if(Ik()&&a.callbackNode!==c)return null;var d=uc(a,a===R?Z:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Jk(a,d);else{b=d;var e=K;K|=2;var f=Kk();if(R!==a||Z!==b)vk=null,Hj=B()+500,Lk(a,b);do try{Mk();break}catch(h){Nk(a,h)}while(1);Qg();nk.current=f;K=e;null!==Y?b=0:(R=null,Z=0,b=T)}if(0!==b){2===b&&(e=xc(a),0!==e&&(d=e,b=Ok(a,e)));if(1===b)throw c=qk,Lk(a,0),Dk(a,d),Ek(a,B()),c;if(6===b)Dk(a,d);
else{e=a.current.alternate;if(0===(d&30)&&!Pk(e)&&(b=Jk(a,d),2===b&&(f=xc(a),0!==f&&(d=f,b=Ok(a,f))),1===b))throw c=qk,Lk(a,0),Dk(a,d),Ek(a,B()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(p(345));case 2:Qk(a,uk,vk);break;case 3:Dk(a,d);if((d&130023424)===d&&(b=gk+500-B(),10<b)){if(0!==uc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){L();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Ff(Qk.bind(null,a,uk,vk),b);break}Qk(a,uk,vk);break;case 4:Dk(a,d);if((d&4194240)===
d)break;b=a.eventTimes;for(e=-1;0<d;){var g=31-oc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f}d=e;d=B()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*mk(d/1960))-d;if(10<d){a.timeoutHandle=Ff(Qk.bind(null,a,uk,vk),d);break}Qk(a,uk,vk);break;case 5:Qk(a,uk,vk);break;default:throw Error(p(329));}}}Ek(a,B());return a.callbackNode===c?Hk.bind(null,a):null}
function Ok(a,b){var c=tk;a.current.memoizedState.isDehydrated&&(Lk(a,b).flags|=256);a=Jk(a,b);2!==a&&(b=uk,uk=c,null!==b&&Gj(b));return a}function Gj(a){null===uk?uk=a:uk.push.apply(uk,a)}
function Pk(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!He(f(),e))return!1}catch(g){return!1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else{if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return!0;b=b.return}b.sibling.return=b.return;b=b.sibling}}return!0}
function Dk(a,b){b&=~sk;b&=~rk;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-oc(b),d=1<<c;a[c]=-1;b&=~d}}function Fk(a){if(0!==(K&6))throw Error(p(327));Ik();var b=uc(a,0);if(0===(b&1))return Ek(a,B()),null;var c=Jk(a,b);if(0!==a.tag&&2===c){var d=xc(a);0!==d&&(b=d,c=Ok(a,d))}if(1===c)throw c=qk,Lk(a,0),Dk(a,b),Ek(a,B()),c;if(6===c)throw Error(p(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Qk(a,uk,vk);Ek(a,B());return null}
function Rk(a,b){var c=K;K|=1;try{return a(b)}finally{K=c,0===K&&(Hj=B()+500,fg&&jg())}}function Sk(a){null!==xk&&0===xk.tag&&0===(K&6)&&Ik();var b=K;K|=1;var c=pk.transition,d=C;try{if(pk.transition=null,C=1,a)return a()}finally{C=d,pk.transition=c,K=b,0===(K&6)&&jg()}}function Ij(){gj=fj.current;E(fj)}
function Lk(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Gf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;wg(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$f();break;case 3:Jh();E(Wf);E(H);Oh();break;case 5:Lh(d);break;case 4:Jh();break;case 13:E(M);break;case 19:E(M);break;case 10:Rg(d.type._context);break;case 22:case 23:Ij()}c=c.return}R=a;Y=a=wh(a.current,null);Z=gj=b;T=0;qk=null;sk=rk=hh=0;uk=tk=null;if(null!==Wg){for(b=
0;b<Wg.length;b++)if(c=Wg[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g}c.pending=d}Wg=null}return a}
function Nk(a,b){do{var c=Y;try{Qg();Ph.current=ai;if(Sh){for(var d=N.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}Sh=!1}Rh=0;P=O=N=null;Th=!1;Uh=0;ok.current=null;if(null===c||null===c.return){T=1;qk=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=Z;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,q=m.tag;if(0===(m.mode&1)&&(0===q||11===q||15===q)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,
m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Vi(g);if(null!==y){y.flags&=-257;Wi(y,g,h,f,b);y.mode&1&&Ti(f,l,b);b=y;k=l;var n=b.updateQueue;if(null===n){var t=new Set;t.add(k);b.updateQueue=t}else n.add(k);break a}else{if(0===(b&1)){Ti(f,l,b);uj();break a}k=Error(p(426))}}else if(I&&h.mode&1){var J=Vi(g);if(null!==J){0===(J.flags&65536)&&(J.flags|=256);Wi(J,g,h,f,b);Jg(Ki(k,h));break a}}f=k=Ki(k,h);4!==T&&(T=2);null===tk?tk=[f]:tk.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;
b&=-b;f.lanes|=b;var x=Oi(f,k,b);fh(f,x);break a;case 1:h=k;var w=f.type,u=f.stateNode;if(0===(f.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Si||!Si.has(u)))){f.flags|=65536;b&=-b;f.lanes|=b;var F=Ri(f,h,b);fh(f,F);break a}}f=f.return}while(null!==f)}Tk(c)}catch(na){b=na;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}function Kk(){var a=nk.current;nk.current=ai;return null===a?ai:a}
function uj(){if(0===T||3===T||2===T)T=4;null===R||0===(hh&268435455)&&0===(rk&268435455)||Dk(R,Z)}function Jk(a,b){var c=K;K|=2;var d=Kk();if(R!==a||Z!==b)vk=null,Lk(a,b);do try{Uk();break}catch(e){Nk(a,e)}while(1);Qg();K=c;nk.current=d;if(null!==Y)throw Error(p(261));R=null;Z=0;return T}function Uk(){for(;null!==Y;)Vk(Y)}function Mk(){for(;null!==Y&&!cc();)Vk(Y)}function Vk(a){var b=Wk(a.alternate,a,gj);a.memoizedProps=a.pendingProps;null===b?Tk(a):Y=b;ok.current=null}
function Tk(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Fj(c,b,gj),null!==c){Y=c;return}}else{c=Jj(c,b);if(null!==c){c.flags&=32767;Y=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else{T=6;Y=null;return}}b=b.sibling;if(null!==b){Y=b;return}Y=b=a}while(null!==b);0===T&&(T=5)}function Qk(a,b,c){var d=C,e=pk.transition;try{pk.transition=null,C=1,Xk(a,b,c,d)}finally{pk.transition=e,C=d}return null}
function Xk(a,b,c,d){do Ik();while(null!==xk);if(0!==(K&6))throw Error(p(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(p(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;Bc(a,f);a===R&&(Y=R=null,Z=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||wk||(wk=!0,Gk(hc,function(){Ik();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=pk.transition;pk.transition=null;
var g=C;C=1;var h=K;K|=4;ok.current=null;Pj(a,c);ek(c,a);Oe(Df);dd=!!Cf;Df=Cf=null;a.current=c;ik(c,a,e);dc();K=h;C=g;pk.transition=f}else a.current=c;wk&&(wk=!1,xk=a,yk=e);f=a.pendingLanes;0===f&&(Si=null);mc(c.stateNode,d);Ek(a,B());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Pi)throw Pi=!1,a=Qi,Qi=null,a;0!==(yk&1)&&0!==a.tag&&Ik();f=a.pendingLanes;0!==(f&1)?a===Ak?zk++:(zk=0,Ak=a):zk=0;jg();return null}
function Ik(){if(null!==xk){var a=Dc(yk),b=pk.transition,c=C;try{pk.transition=null;C=16>a?16:a;if(null===xk)var d=!1;else{a=xk;xk=null;yk=0;if(0!==(K&6))throw Error(p(331));var e=K;K|=4;for(V=a.current;null!==V;){var f=V,g=f.child;if(0!==(V.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(V=l;null!==V;){var m=V;switch(m.tag){case 0:case 11:case 15:Qj(8,m,f)}var q=m.child;if(null!==q)q.return=m,V=q;else for(;null!==V;){m=V;var r=m.sibling,y=m.return;Tj(m);if(m===
l){V=null;break}if(null!==r){r.return=y;V=r;break}V=y}}}var n=f.alternate;if(null!==n){var t=n.child;if(null!==t){n.child=null;do{var J=t.sibling;t.sibling=null;t=J}while(null!==t)}}V=f}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,V=g;else b:for(;null!==V;){f=V;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Qj(9,f,f.return)}var x=f.sibling;if(null!==x){x.return=f.return;V=x;break b}V=f.return}}var w=a.current;for(V=w;null!==V;){g=V;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
u)u.return=g,V=u;else b:for(g=w;null!==V;){h=V;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Rj(9,h)}}catch(na){W(h,h.return,na)}if(h===g){V=null;break b}var F=h.sibling;if(null!==F){F.return=h.return;V=F;break b}V=h.return}}K=e;jg();if(lc&&"function"===typeof lc.onPostCommitFiberRoot)try{lc.onPostCommitFiberRoot(kc,a)}catch(na){}d=!0}return d}finally{C=c,pk.transition=b}}return!1}function Yk(a,b,c){b=Ki(c,b);b=Oi(a,b,1);a=dh(a,b,1);b=L();null!==a&&(Ac(a,1,b),Ek(a,b))}
function W(a,b,c){if(3===a.tag)Yk(a,a,c);else for(;null!==b;){if(3===b.tag){Yk(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Si||!Si.has(d))){a=Ki(c,a);a=Ri(b,a,1);b=dh(b,a,1);a=L();null!==b&&(Ac(b,1,a),Ek(b,a));break}}b=b.return}}
function Ui(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=L();a.pingedLanes|=a.suspendedLanes&c;R===a&&(Z&c)===c&&(4===T||3===T&&(Z&130023424)===Z&&500>B()-gk?Lk(a,0):sk|=c);Ek(a,b)}function Zk(a,b){0===b&&(0===(a.mode&1)?b=1:(b=sc,sc<<=1,0===(sc&130023424)&&(sc=4194304)));var c=L();a=Zg(a,b);null!==a&&(Ac(a,b,c),Ek(a,c))}function vj(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Zk(a,c)}
function ck(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(p(314));}null!==d&&d.delete(b);Zk(a,c)}var Wk;
Wk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||Wf.current)Ug=!0;else{if(0===(a.lanes&c)&&0===(b.flags&128))return Ug=!1,zj(a,b,c);Ug=0!==(a.flags&131072)?!0:!1}else Ug=!1,I&&0!==(b.flags&1048576)&&ug(b,ng,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;jj(a,b);a=b.pendingProps;var e=Yf(b,H.current);Tg(b,c);e=Xh(null,b,d,a,e,c);var f=bi();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=
null,Zf(d)?(f=!0,cg(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,ah(b),e.updater=nh,b.stateNode=e,e._reactInternals=b,rh(b,d,a,c),b=kj(null,b,d,!0,f,c)):(b.tag=0,I&&f&&vg(b),Yi(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{jj(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=$k(d);a=Lg(d,a);switch(e){case 0:b=dj(null,b,d,a,c);break a;case 1:b=ij(null,b,d,a,c);break a;case 11:b=Zi(null,b,d,a,c);break a;case 14:b=aj(null,b,d,Lg(d.type,a),c);break a}throw Error(p(306,
d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),dj(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),ij(a,b,d,e,c);case 3:a:{lj(b);if(null===a)throw Error(p(387));d=b.pendingProps;f=b.memoizedState;e=f.element;bh(a,b);gh(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=
f,b.memoizedState=f,b.flags&256){e=Ki(Error(p(423)),b);b=mj(a,b,d,c,e);break a}else if(d!==e){e=Ki(Error(p(424)),b);b=mj(a,b,d,c,e);break a}else for(yg=Lf(b.stateNode.containerInfo.firstChild),xg=b,I=!0,zg=null,c=Ch(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{Ig();if(d===e){b=$i(a,b,c);break a}Yi(a,b,d,c)}b=b.child}return b;case 5:return Kh(b),null===a&&Eg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ef(d,e)?g=null:null!==f&&Ef(d,f)&&(b.flags|=32),
hj(a,b),Yi(a,b,g,c),b.child;case 6:return null===a&&Eg(b),null;case 13:return pj(a,b,c);case 4:return Ih(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Bh(b,null,d,c):Yi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),Zi(a,b,d,e,c);case 7:return Yi(a,b,b.pendingProps,c),b.child;case 8:return Yi(a,b,b.pendingProps.children,c),b.child;case 12:return Yi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;
g=e.value;G(Mg,d._currentValue);d._currentValue=g;if(null!==f)if(He(f.value,g)){if(f.children===e.children&&!Wf.current){b=$i(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=ch(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);Sg(f.return,
c,b);h.lanes|=c;break}k=k.next}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(p(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);Sg(g,c,b);g=f.sibling}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return}f=g}Yi(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,d=b.pendingProps.children,Tg(b,c),e=Vg(e),d=d(e),b.flags|=1,Yi(a,b,d,c),
b.child;case 14:return d=b.type,e=Lg(d,b.pendingProps),e=Lg(d.type,e),aj(a,b,d,e,c);case 15:return cj(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),jj(a,b),b.tag=1,Zf(d)?(a=!0,cg(b)):a=!1,Tg(b,c),ph(b,d,e),rh(b,d,e,c),kj(null,b,d,!0,a,c);case 19:return yj(a,b,c);case 22:return ej(a,b,c)}throw Error(p(156,b.tag));};function Gk(a,b){return ac(a,b)}
function al(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null}function Bg(a,b,c,d){return new al(a,b,c,d)}function bj(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function $k(a){if("function"===typeof a)return bj(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Da)return 11;if(a===Ga)return 14}return 2}
function wh(a,b){var c=a.alternate;null===c?(c=Bg(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function yh(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)bj(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ya:return Ah(c.children,e,f,b);case za:g=8;e|=8;break;case Aa:return a=Bg(12,c,b,e|2),a.elementType=Aa,a.lanes=f,a;case Ea:return a=Bg(13,c,b,e),a.elementType=Ea,a.lanes=f,a;case Fa:return a=Bg(19,c,b,e),a.elementType=Fa,a.lanes=f,a;case Ia:return qj(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Ba:g=10;break a;case Ca:g=9;break a;case Da:g=11;
break a;case Ga:g=14;break a;case Ha:g=16;d=null;break a}throw Error(p(130,null==a?a:typeof a,""));}b=Bg(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Ah(a,b,c,d){a=Bg(7,a,d,b);a.lanes=c;return a}function qj(a,b,c,d){a=Bg(22,a,d,b);a.elementType=Ia;a.lanes=c;a.stateNode={isHidden:!1};return a}function xh(a,b,c){a=Bg(6,a,null,b);a.lanes=c;return a}
function zh(a,b,c){b=Bg(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function bl(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=zc(0);this.expirationTimes=zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=zc(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=
null}function cl(a,b,c,d,e,f,g,h,k){a=new bl(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=Bg(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null};ah(f);return a}function dl(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:wa,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function el(a){if(!a)return Vf;a=a._reactInternals;a:{if(Vb(a)!==a||1!==a.tag)throw Error(p(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Zf(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return}while(null!==b);throw Error(p(171));}if(1===a.tag){var c=a.type;if(Zf(c))return bg(a,c,b)}return b}
function fl(a,b,c,d,e,f,g,h,k){a=cl(c,d,!0,a,e,f,g,h,k);a.context=el(null);c=a.current;d=L();e=lh(c);f=ch(d,e);f.callback=void 0!==b&&null!==b?b:null;dh(c,f,e);a.current.lanes=e;Ac(a,e,d);Ek(a,d);return a}function gl(a,b,c,d){var e=b.current,f=L(),g=lh(e);c=el(c);null===b.context?b.context=c:b.pendingContext=c;b=ch(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=dh(e,b,g);null!==a&&(mh(a,e,g,f),eh(a,e,g));return g}
function hl(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function il(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function jl(a,b){il(a,b);(a=a.alternate)&&il(a,b)}function kl(){return null}var ll="function"===typeof reportError?reportError:function(a){console.error(a)};function ml(a){this._internalRoot=a}
nl.prototype.render=ml.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(p(409));gl(a,b,null,null)};nl.prototype.unmount=ml.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;Sk(function(){gl(null,a,null,null)});b[uf]=null}};function nl(a){this._internalRoot=a}
nl.prototype.unstable_scheduleHydration=function(a){if(a){var b=Hc();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Qc.length&&0!==b&&b<Qc[c].priority;c++);Qc.splice(c,0,a);0===c&&Vc(a)}};function ol(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)}function pl(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function ql(){}
function rl(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=hl(g);f.call(a)}}var g=fl(b,d,a,0,null,!1,!1,"",ql);a._reactRootContainer=g;a[uf]=g.current;sf(8===a.nodeType?a.parentNode:a);Sk();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=hl(k);h.call(a)}}var k=cl(a,0,!1,null,null,!1,!1,"",ql);a._reactRootContainer=k;a[uf]=k.current;sf(8===a.nodeType?a.parentNode:a);Sk(function(){gl(b,k,c,d)});return k}
function sl(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=hl(g);h.call(a)}}gl(b,g,a,e)}else g=rl(c,b,a,e,d);return hl(g)}Ec=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=tc(b.pendingLanes);0!==c&&(Cc(b,c|1),Ek(b,B()),0===(K&6)&&(Hj=B()+500,jg()))}break;case 13:Sk(function(){var b=Zg(a,1);if(null!==b){var c=L();mh(b,a,1,c)}}),jl(a,1)}};
Fc=function(a){if(13===a.tag){var b=Zg(a,134217728);if(null!==b){var c=L();mh(b,a,134217728,c)}jl(a,134217728)}};Gc=function(a){if(13===a.tag){var b=lh(a),c=Zg(a,b);if(null!==c){var d=L();mh(c,a,b,d)}jl(a,b)}};Hc=function(){return C};Ic=function(a,b){var c=C;try{return C=a,b()}finally{C=c}};
yb=function(a,b,c){switch(b){case "input":bb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(p(90));Wa(d);bb(d,e)}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1)}};Gb=Rk;Hb=Sk;
var tl={usingClientEntryPoint:!1,Events:[Cb,ue,Db,Eb,Fb,Rk]},ul={findFiberByHostInstance:Wc,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"};
var vl={bundleType:ul.bundleType,version:ul.version,rendererPackageName:ul.rendererPackageName,rendererConfig:ul.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Zb(a);return null===a?null:a.stateNode},findFiberByHostInstance:ul.findFiberByHostInstance||
kl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wl.isDisabled&&wl.supportsFiber)try{kc=wl.inject(vl),lc=wl}catch(a){}}exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tl;
exports.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!ol(b))throw Error(p(200));return dl(a,b,null,c)};exports.createRoot=function(a,b){if(!ol(a))throw Error(p(299));var c=!1,d="",e=ll;null!==b&&void 0!==b&&(!0===b.unstable_strictMode&&(c=!0),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=cl(a,1,!1,null,null,c,!1,d,e);a[uf]=b.current;sf(8===a.nodeType?a.parentNode:a);return new ml(b)};
exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(p(188));a=Object.keys(a).join(",");throw Error(p(268,a));}a=Zb(b);a=null===a?null:a.stateNode;return a};exports.flushSync=function(a){return Sk(a)};exports.hydrate=function(a,b,c){if(!pl(b))throw Error(p(200));return sl(null,a,b,!0,c)};
exports.hydrateRoot=function(a,b,c){if(!ol(a))throw Error(p(405));var d=null!=c&&c.hydratedSources||null,e=!1,f="",g=ll;null!==c&&void 0!==c&&(!0===c.unstable_strictMode&&(e=!0),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=fl(b,null,a,1,null!=c?c:null,e,!1,f,g);a[uf]=b.current;sf(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,
e);return new nl(b)};exports.render=function(a,b,c){if(!pl(b))throw Error(p(200));return sl(null,a,b,!1,c)};exports.unmountComponentAtNode=function(a){if(!pl(a))throw Error(p(40));return a._reactRootContainer?(Sk(function(){sl(null,null,a,!1,function(){a._reactRootContainer=null;a[uf]=null})}),!0):!1};exports.unstable_batchedUpdates=Rk;
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!pl(c))throw Error(p(200));if(null==a||void 0===a._reactInternals)throw Error(p(38));return sl(a,b,c,!1,d)};exports.version="18.2.0-next-9e3b772b8-20220608";


/***/ }),

/***/ 3935:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(4448);
} else {}


/***/ }),

/***/ 5251:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(4377),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 5893:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(5251);
} else {}


/***/ }),

/***/ 53:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t)}}function H(a){B=!1;G(a);if(!A)if(null!==h(r))A=!0,I(J);else{var b=h(t);null!==b&&K(H,b.startTime-a)}}
function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b)}else k(r);v=h(r)}if(null!==v)var w=!0;else{var m=h(t);null!==m&&K(H,m.startTime-b);w=!1}return w}finally{v=null,y=c,z=!1}}var N=!1,O=null,L=-1,P=5,Q=-1;
function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a)}finally{b?S():(N=!1,O=null)}}else N=!1}var S;if("function"===typeof F)S=function(){F(R)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null)}}else S=function(){D(R,0)};function I(a){O=a;N||(N=!0,S())}function K(a,b){L=D(function(){a(exports.unstable_now())},b)}
exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J))};
exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y}var c=y;y=b;try{return a()}finally{y=c}};exports.unstable_pauseExecution=function(){};
exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=y;y=a;try{return b()}finally{y=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J)));return a};
exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c}}};


/***/ }),

/***/ 3840:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(53);
} else {}


/***/ }),

/***/ 2473:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "production" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map