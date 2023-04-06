import {
  __commonJS,
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-3FJBLRJU.js";

// ../../packages/header/dist/index.js
var require_dist = __commonJS({
  "../../packages/header/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    var Nr = {};
    var Wt = { get exports() {
      return Nr;
    }, set exports(k) {
      Nr = k;
    } };
    var yr = {};
    var Vt = { get exports() {
      return yr;
    }, set exports(k) {
      yr = k;
    } };
    var Ke = {};
    var Yt = { get exports() {
      return Ke;
    }, set exports(k) {
      Ke = k;
    } };
    var ct;
    function Bt() {
      return ct || (ct = 1, function(k, h) {
        (function() {
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
          var be = "18.1.0", Ee = false, Re = false, Ce = false, se = false, ce = false, F = Symbol.for("react.element"), fe = Symbol.for("react.portal"), W = Symbol.for("react.fragment"), G = Symbol.for("react.strict_mode"), Q = Symbol.for("react.profiler"), K = Symbol.for("react.provider"), te = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), le = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), Fe = Symbol.for("react.offscreen"), we = Symbol.iterator, re = "@@iterator";
          function L(e) {
            if (e === null || typeof e != "object")
              return null;
            var r = we && e[we] || e[re];
            return typeof r == "function" ? r : null;
          }
          var Se = { current: null }, ae = { transition: null }, N = { current: null, isBatchingLegacy: false, didScheduleLegacyUpdate: false }, X = { current: null }, oe = {}, U = null;
          function H(e) {
            U = e;
          }
          oe.setExtraStackFrame = function(e) {
            U = e;
          }, oe.getCurrentStack = null, oe.getStackAddendum = function() {
            var e = "";
            U && (e += U);
            var r = oe.getCurrentStack;
            return r && (e += r() || ""), e;
          };
          var Y = { ReactCurrentDispatcher: Se, ReactCurrentBatchConfig: ae, ReactCurrentOwner: X };
          Y.ReactDebugCurrentFrame = oe, Y.ReactCurrentActQueue = N;
          function ue(e) {
            {
              for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
                a[o - 1] = arguments[o];
              de("warn", e, a);
            }
          }
          function d(e) {
            {
              for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
                a[o - 1] = arguments[o];
              de("error", e, a);
            }
          }
          function de(e, r, a) {
            {
              var o = Y.ReactDebugCurrentFrame, i = o.getStackAddendum();
              i !== "" && (r += "%s", a = a.concat([i]));
              var p = a.map(function(l) {
                return String(l);
              });
              p.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, p);
            }
          }
          var Te = {};
          function n(e, r) {
            {
              var a = e.constructor, o = a && (a.displayName || a.name) || "ReactClass", i = o + "." + r;
              if (Te[i])
                return;
              d("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, o), Te[i] = true;
            }
          }
          var s = { isMounted: function(e) {
            return false;
          }, enqueueForceUpdate: function(e, r, a) {
            n(e, "forceUpdate");
          }, enqueueReplaceState: function(e, r, a, o) {
            n(e, "replaceState");
          }, enqueueSetState: function(e, r, a, o) {
            n(e, "setState");
          } }, y = Object.assign, C = {};
          Object.freeze(C);
          function _(e, r, a) {
            this.props = e, this.context = r, this.refs = C, this.updater = a || s;
          }
          _.prototype.isReactComponent = {}, _.prototype.setState = function(e, r) {
            if (typeof e != "object" && typeof e != "function" && e != null)
              throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, e, r, "setState");
          }, _.prototype.forceUpdate = function(e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          };
          {
            var P = { isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."], replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."] }, j = function(e, r) {
              Object.defineProperty(_.prototype, e, { get: function() {
                ue("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
              } });
            };
            for (var T in P)
              P.hasOwnProperty(T) && j(T, P[T]);
          }
          function w() {
          }
          w.prototype = _.prototype;
          function V(e, r, a) {
            this.props = e, this.context = r, this.refs = C, this.updater = a || s;
          }
          var ye = V.prototype = new w();
          ye.constructor = V, y(ye, _.prototype), ye.isPureReactComponent = true;
          function hr() {
            var e = { current: null };
            return Object.seal(e), e;
          }
          var Je = Array.isArray;
          function $e(e) {
            return Je(e);
          }
          function mr(e) {
            {
              var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
              return a;
            }
          }
          function Le(e) {
            try {
              return Oe(e), false;
            } catch {
              return true;
            }
          }
          function Oe(e) {
            return "" + e;
          }
          function Pe(e) {
            if (Le(e))
              return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", mr(e)), Oe(e);
          }
          function Xe(e, r, a) {
            var o = e.displayName;
            if (o)
              return o;
            var i = r.displayName || r.name || "";
            return i !== "" ? a + "(" + i + ")" : a;
          }
          function ke(e) {
            return e.displayName || "Context";
          }
          function pe(e) {
            if (e == null)
              return null;
            if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
              return e.displayName || e.name || null;
            if (typeof e == "string")
              return e;
            switch (e) {
              case W:
                return "Fragment";
              case fe:
                return "Portal";
              case Q:
                return "Profiler";
              case G:
                return "StrictMode";
              case q:
                return "Suspense";
              case le:
                return "SuspenseList";
            }
            if (typeof e == "object")
              switch (e.$$typeof) {
                case te:
                  var r = e;
                  return ke(r) + ".Consumer";
                case K:
                  var a = e;
                  return ke(a._context) + ".Provider";
                case Z:
                  return Xe(e, e.render, "ForwardRef");
                case ee:
                  var o = e.displayName || null;
                  return o !== null ? o : pe(e.type) || "Memo";
                case ne: {
                  var i = e, p = i._payload, l = i._init;
                  try {
                    return pe(l(p));
                  } catch {
                    return null;
                  }
                }
              }
            return null;
          }
          var je = Object.prototype.hasOwnProperty, Ne = { key: true, ref: true, __self: true, __source: true }, Qe, Ze, Me;
          Me = {};
          function Ye(e) {
            if (je.call(e, "ref")) {
              var r = Object.getOwnPropertyDescriptor(e, "ref").get;
              if (r && r.isReactWarning)
                return false;
            }
            return e.ref !== void 0;
          }
          function he(e) {
            if (je.call(e, "key")) {
              var r = Object.getOwnPropertyDescriptor(e, "key").get;
              if (r && r.isReactWarning)
                return false;
            }
            return e.key !== void 0;
          }
          function gr(e, r) {
            var a = function() {
              Qe || (Qe = true, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
            };
            a.isReactWarning = true, Object.defineProperty(e, "key", { get: a, configurable: true });
          }
          function er(e, r) {
            var a = function() {
              Ze || (Ze = true, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
            };
            a.isReactWarning = true, Object.defineProperty(e, "ref", { get: a, configurable: true });
          }
          function rr(e) {
            if (typeof e.ref == "string" && X.current && e.__self && X.current.stateNode !== e.__self) {
              var r = pe(X.current.type);
              Me[r] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), Me[r] = true);
            }
          }
          var Ae = function(e, r, a, o, i, p, l) {
            var v = { $$typeof: F, type: e, key: r, ref: a, props: l, _owner: p };
            return v._store = {}, Object.defineProperty(v._store, "validated", { configurable: false, enumerable: false, writable: true, value: false }), Object.defineProperty(v, "_self", { configurable: false, enumerable: false, writable: false, value: o }), Object.defineProperty(v, "_source", { configurable: false, enumerable: false, writable: false, value: i }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
          };
          function _r(e, r, a) {
            var o, i = {}, p = null, l = null, v = null, E = null;
            if (r != null) {
              Ye(r) && (l = r.ref, rr(r)), he(r) && (Pe(r.key), p = "" + r.key), v = r.__self === void 0 ? null : r.__self, E = r.__source === void 0 ? null : r.__source;
              for (o in r)
                je.call(r, o) && !Ne.hasOwnProperty(o) && (i[o] = r[o]);
            }
            var O = arguments.length - 2;
            if (O === 1)
              i.children = a;
            else if (O > 1) {
              for (var A = Array(O), x = 0; x < O; x++)
                A[x] = arguments[x + 2];
              Object.freeze && Object.freeze(A), i.children = A;
            }
            if (e && e.defaultProps) {
              var I = e.defaultProps;
              for (o in I)
                i[o] === void 0 && (i[o] = I[o]);
            }
            if (p || l) {
              var M = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
              p && gr(i, M), l && er(i, M);
            }
            return Ae(e, p, l, v, E, X.current, i);
          }
          function br(e, r) {
            var a = Ae(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
            return a;
          }
          function Er(e, r, a) {
            if (e == null)
              throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
            var o, i = y({}, e.props), p = e.key, l = e.ref, v = e._self, E = e._source, O = e._owner;
            if (r != null) {
              Ye(r) && (l = r.ref, O = X.current), he(r) && (Pe(r.key), p = "" + r.key);
              var A;
              e.type && e.type.defaultProps && (A = e.type.defaultProps);
              for (o in r)
                je.call(r, o) && !Ne.hasOwnProperty(o) && (r[o] === void 0 && A !== void 0 ? i[o] = A[o] : i[o] = r[o]);
            }
            var x = arguments.length - 2;
            if (x === 1)
              i.children = a;
            else if (x > 1) {
              for (var I = Array(x), M = 0; M < x; M++)
                I[M] = arguments[M + 2];
              i.children = I;
            }
            return Ae(e.type, p, l, v, E, O, i);
          }
          function me(e) {
            return typeof e == "object" && e !== null && e.$$typeof === F;
          }
          var tr = ".", Rr = ":";
          function Cr(e) {
            var r = /[=:]/g, a = { "=": "=0", ":": "=2" }, o = e.replace(r, function(i) {
              return a[i];
            });
            return "$" + o;
          }
          var We = false, nr = /\/+/g;
          function ve(e) {
            return e.replace(nr, "$&/");
          }
          function xe(e, r) {
            return typeof e == "object" && e !== null && e.key != null ? (Pe(e.key), Cr("" + e.key)) : r.toString(36);
          }
          function ge(e, r, a, o, i) {
            var p = typeof e;
            (p === "undefined" || p === "boolean") && (e = null);
            var l = false;
            if (e === null)
              l = true;
            else
              switch (p) {
                case "string":
                case "number":
                  l = true;
                  break;
                case "object":
                  switch (e.$$typeof) {
                    case F:
                    case fe:
                      l = true;
                  }
              }
            if (l) {
              var v = e, E = i(v), O = o === "" ? tr + xe(v, 0) : o;
              if ($e(E)) {
                var A = "";
                O != null && (A = ve(O) + "/"), ge(E, r, A, "", function(Mt) {
                  return Mt;
                });
              } else
                E != null && (me(E) && (E.key && (!v || v.key !== E.key) && Pe(E.key), E = br(E, a + (E.key && (!v || v.key !== E.key) ? ve("" + E.key) + "/" : "") + O)), r.push(E));
              return 1;
            }
            var x, I, M = 0, z = o === "" ? tr : o + Rr;
            if ($e(e))
              for (var vr = 0; vr < e.length; vr++)
                x = e[vr], I = z + xe(x, vr), M += ge(x, r, a, I, i);
            else {
              var Lr = L(e);
              if (typeof Lr == "function") {
                var ot = e;
                Lr === ot.entries && (We || ue("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), We = true);
                for (var Lt = Lr.call(ot), ut, Nt = 0; !(ut = Lt.next()).done; )
                  x = ut.value, I = z + xe(x, Nt++), M += ge(x, r, a, I, i);
              } else if (p === "object") {
                var it = String(e);
                throw new Error("Objects are not valid as a React child (found: " + (it === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : it) + "). If you meant to render a collection of children, use an array instead.");
              }
            }
            return M;
          }
          function De(e, r, a) {
            if (e == null)
              return e;
            var o = [], i = 0;
            return ge(e, o, "", "", function(p) {
              return r.call(a, p, i++);
            }), o;
          }
          function wr(e) {
            var r = 0;
            return De(e, function() {
              r++;
            }), r;
          }
          function ar(e, r, a) {
            De(e, function() {
              r.apply(this, arguments);
            }, a);
          }
          function Sr(e) {
            return De(e, function(r) {
              return r;
            }) || [];
          }
          function or(e) {
            if (!me(e))
              throw new Error("React.Children.only expected to receive a single React element child.");
            return e;
          }
          function ur(e) {
            var r = { $$typeof: te, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
            r.Provider = { $$typeof: K, _context: r };
            var a = false, o = false, i = false;
            {
              var p = { $$typeof: te, _context: r };
              Object.defineProperties(p, { Provider: { get: function() {
                return o || (o = true, d("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              }, set: function(l) {
                r.Provider = l;
              } }, _currentValue: { get: function() {
                return r._currentValue;
              }, set: function(l) {
                r._currentValue = l;
              } }, _currentValue2: { get: function() {
                return r._currentValue2;
              }, set: function(l) {
                r._currentValue2 = l;
              } }, _threadCount: { get: function() {
                return r._threadCount;
              }, set: function(l) {
                r._threadCount = l;
              } }, Consumer: { get: function() {
                return a || (a = true, d("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              } }, displayName: { get: function() {
                return r.displayName;
              }, set: function(l) {
                i || (ue("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", l), i = true);
              } } }), r.Consumer = p;
            }
            return r._currentRenderer = null, r._currentRenderer2 = null, r;
          }
          var Ie = -1, Be = 0, ze = 1, Tr = 2;
          function Or(e) {
            if (e._status === Ie) {
              var r = e._result, a = r();
              if (a.then(function(p) {
                if (e._status === Be || e._status === Ie) {
                  var l = e;
                  l._status = ze, l._result = p;
                }
              }, function(p) {
                if (e._status === Be || e._status === Ie) {
                  var l = e;
                  l._status = Tr, l._result = p;
                }
              }), e._status === Ie) {
                var o = e;
                o._status = Be, o._result = a;
              }
            }
            if (e._status === ze) {
              var i = e._result;
              return i === void 0 && d(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, i), "default" in i || d(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, i), i.default;
            } else
              throw e._result;
          }
          function Pr(e) {
            var r = { _status: Ie, _result: e }, a = { $$typeof: ne, _payload: r, _init: Or };
            {
              var o, i;
              Object.defineProperties(a, { defaultProps: { configurable: true, get: function() {
                return o;
              }, set: function(p) {
                d("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = p, Object.defineProperty(a, "defaultProps", { enumerable: true });
              } }, propTypes: { configurable: true, get: function() {
                return i;
              }, set: function(p) {
                d("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), i = p, Object.defineProperty(a, "propTypes", { enumerable: true });
              } } });
            }
            return a;
          }
          function kr(e) {
            e != null && e.$$typeof === ee ? d("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? d("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && d("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && d("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
            var r = { $$typeof: Z, render: e };
            {
              var a;
              Object.defineProperty(r, "displayName", { enumerable: false, configurable: true, get: function() {
                return a;
              }, set: function(o) {
                a = o, !e.name && !e.displayName && (e.displayName = o);
              } });
            }
            return r;
          }
          var t;
          t = Symbol.for("react.module.reference");
          function u(e) {
            return !!(typeof e == "string" || typeof e == "function" || e === W || e === Q || ce || e === G || e === q || e === le || se || e === Fe || Ee || Re || Ce || typeof e == "object" && e !== null && (e.$$typeof === ne || e.$$typeof === ee || e.$$typeof === K || e.$$typeof === te || e.$$typeof === Z || e.$$typeof === t || e.getModuleId !== void 0));
          }
          function c(e, r) {
            u(e) || d("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
            var a = { $$typeof: ee, type: e, compare: r === void 0 ? null : r };
            {
              var o;
              Object.defineProperty(a, "displayName", { enumerable: false, configurable: true, get: function() {
                return o;
              }, set: function(i) {
                o = i, !e.name && !e.displayName && (e.displayName = i);
              } });
            }
            return a;
          }
          function f() {
            var e = Se.current;
            return e === null && d(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
          }
          function R(e) {
            var r = f();
            if (e._context !== void 0) {
              var a = e._context;
              a.Consumer === e ? d("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : a.Provider === e && d("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
            }
            return r.useContext(e);
          }
          function S(e) {
            var r = f();
            return r.useState(e);
          }
          function b(e, r, a) {
            var o = f();
            return o.useReducer(e, r, a);
          }
          function m(e) {
            var r = f();
            return r.useRef(e);
          }
          function B(e, r) {
            var a = f();
            return a.useEffect(e, r);
          }
          function D(e, r) {
            var a = f();
            return a.useInsertionEffect(e, r);
          }
          function $(e, r) {
            var a = f();
            return a.useLayoutEffect(e, r);
          }
          function J(e, r) {
            var a = f();
            return a.useCallback(e, r);
          }
          function _e(e, r) {
            var a = f();
            return a.useMemo(e, r);
          }
          function ir(e, r, a) {
            var o = f();
            return o.useImperativeHandle(e, r, a);
          }
          function ie(e, r) {
            {
              var a = f();
              return a.useDebugValue(e, r);
            }
          }
          function vt() {
            var e = f();
            return e.useTransition();
          }
          function yt(e) {
            var r = f();
            return r.useDeferredValue(e);
          }
          function ht() {
            var e = f();
            return e.useId();
          }
          function mt(e, r, a) {
            var o = f();
            return o.useSyncExternalStore(e, r, a);
          }
          var qe = 0, Mr, Wr, Vr, Ur, Yr, Br, zr;
          function qr() {
          }
          qr.__reactDisabledLog = true;
          function gt() {
            {
              if (qe === 0) {
                Mr = console.log, Wr = console.info, Vr = console.warn, Ur = console.error, Yr = console.group, Br = console.groupCollapsed, zr = console.groupEnd;
                var e = { configurable: true, enumerable: true, value: qr, writable: true };
                Object.defineProperties(console, { info: e, log: e, warn: e, error: e, group: e, groupCollapsed: e, groupEnd: e });
              }
              qe++;
            }
          }
          function _t() {
            {
              if (qe--, qe === 0) {
                var e = { configurable: true, enumerable: true, writable: true };
                Object.defineProperties(console, { log: y({}, e, { value: Mr }), info: y({}, e, { value: Wr }), warn: y({}, e, { value: Vr }), error: y({}, e, { value: Ur }), group: y({}, e, { value: Yr }), groupCollapsed: y({}, e, { value: Br }), groupEnd: y({}, e, { value: zr }) });
              }
              qe < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
          var jr = Y.ReactCurrentDispatcher, Ar;
          function sr(e, r, a) {
            {
              if (Ar === void 0)
                try {
                  throw Error();
                } catch (i) {
                  var o = i.stack.trim().match(/\n( *(at )?)/);
                  Ar = o && o[1] || "";
                }
              return `
` + Ar + e;
            }
          }
          var xr = false, cr;
          {
            var bt = typeof WeakMap == "function" ? WeakMap : Map;
            cr = new bt();
          }
          function Hr(e, r) {
            if (!e || xr)
              return "";
            {
              var a = cr.get(e);
              if (a !== void 0)
                return a;
            }
            var o;
            xr = true;
            var i = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var p;
            p = jr.current, jr.current = null, gt();
            try {
              if (r) {
                var l = function() {
                  throw Error();
                };
                if (Object.defineProperty(l.prototype, "props", { set: function() {
                  throw Error();
                } }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(l, []);
                  } catch (z) {
                    o = z;
                  }
                  Reflect.construct(e, [], l);
                } else {
                  try {
                    l.call();
                  } catch (z) {
                    o = z;
                  }
                  e.call(l.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (z) {
                  o = z;
                }
                e();
              }
            } catch (z) {
              if (z && o && typeof z.stack == "string") {
                for (var v = z.stack.split(`
`), E = o.stack.split(`
`), O = v.length - 1, A = E.length - 1; O >= 1 && A >= 0 && v[O] !== E[A]; )
                  A--;
                for (; O >= 1 && A >= 0; O--, A--)
                  if (v[O] !== E[A]) {
                    if (O !== 1 || A !== 1)
                      do
                        if (O--, A--, A < 0 || v[O] !== E[A]) {
                          var x = `
` + v[O].replace(" at new ", " at ");
                          return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && cr.set(e, x), x;
                        }
                      while (O >= 1 && A >= 0);
                    break;
                  }
              }
            } finally {
              xr = false, jr.current = p, _t(), Error.prepareStackTrace = i;
            }
            var I = e ? e.displayName || e.name : "", M = I ? sr(I) : "";
            return typeof e == "function" && cr.set(e, M), M;
          }
          function Et(e, r, a) {
            return Hr(e, false);
          }
          function Rt(e) {
            var r = e.prototype;
            return !!(r && r.isReactComponent);
          }
          function fr(e, r, a) {
            if (e == null)
              return "";
            if (typeof e == "function")
              return Hr(e, Rt(e));
            if (typeof e == "string")
              return sr(e);
            switch (e) {
              case q:
                return sr("Suspense");
              case le:
                return sr("SuspenseList");
            }
            if (typeof e == "object")
              switch (e.$$typeof) {
                case Z:
                  return Et(e.render);
                case ee:
                  return fr(e.type, r, a);
                case ne: {
                  var o = e, i = o._payload, p = o._init;
                  try {
                    return fr(p(i), r, a);
                  } catch {
                  }
                }
              }
            return "";
          }
          var Gr = {}, Kr = Y.ReactDebugCurrentFrame;
          function lr(e) {
            if (e) {
              var r = e._owner, a = fr(e.type, e._source, r ? r.type : null);
              Kr.setExtraStackFrame(a);
            } else
              Kr.setExtraStackFrame(null);
          }
          function Ct(e, r, a, o, i) {
            {
              var p = Function.call.bind(je);
              for (var l in e)
                if (p(e, l)) {
                  var v = void 0;
                  try {
                    if (typeof e[l] != "function") {
                      var E = Error((o || "React class") + ": " + a + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                      throw E.name = "Invariant Violation", E;
                    }
                    v = e[l](r, l, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                  } catch (O) {
                    v = O;
                  }
                  v && !(v instanceof Error) && (lr(i), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, l, typeof v), lr(null)), v instanceof Error && !(v.message in Gr) && (Gr[v.message] = true, lr(i), d("Failed %s type: %s", a, v.message), lr(null));
                }
            }
          }
          function Ve(e) {
            if (e) {
              var r = e._owner, a = fr(e.type, e._source, r ? r.type : null);
              H(a);
            } else
              H(null);
          }
          var Dr;
          Dr = false;
          function Jr() {
            if (X.current) {
              var e = pe(X.current.type);
              if (e)
                return `

Check the render method of \`` + e + "`.";
            }
            return "";
          }
          function wt(e) {
            if (e !== void 0) {
              var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
              return `

Check your code at ` + r + ":" + a + ".";
            }
            return "";
          }
          function St(e) {
            return e != null ? wt(e.__source) : "";
          }
          var Xr = {};
          function Tt(e) {
            var r = Jr();
            if (!r) {
              var a = typeof e == "string" ? e : e.displayName || e.name;
              a && (r = `

Check the top-level render call using <` + a + ">.");
            }
            return r;
          }
          function Qr(e, r) {
            if (!(!e._store || e._store.validated || e.key != null)) {
              e._store.validated = true;
              var a = Tt(r);
              if (!Xr[a]) {
                Xr[a] = true;
                var o = "";
                e && e._owner && e._owner !== X.current && (o = " It was passed a child from " + pe(e._owner.type) + "."), Ve(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, o), Ve(null);
              }
            }
          }
          function Zr(e, r) {
            if (typeof e == "object") {
              if ($e(e))
                for (var a = 0; a < e.length; a++) {
                  var o = e[a];
                  me(o) && Qr(o, r);
                }
              else if (me(e))
                e._store && (e._store.validated = true);
              else if (e) {
                var i = L(e);
                if (typeof i == "function" && i !== e.entries)
                  for (var p = i.call(e), l; !(l = p.next()).done; )
                    me(l.value) && Qr(l.value, r);
              }
            }
          }
          function et(e) {
            {
              var r = e.type;
              if (r == null || typeof r == "string")
                return;
              var a;
              if (typeof r == "function")
                a = r.propTypes;
              else if (typeof r == "object" && (r.$$typeof === Z || r.$$typeof === ee))
                a = r.propTypes;
              else
                return;
              if (a) {
                var o = pe(r);
                Ct(a, e.props, "prop", o, e);
              } else if (r.PropTypes !== void 0 && !Dr) {
                Dr = true;
                var i = pe(r);
                d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
              }
              typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
          function Ot(e) {
            {
              for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
                var o = r[a];
                if (o !== "children" && o !== "key") {
                  Ve(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), Ve(null);
                  break;
                }
              }
              e.ref !== null && (Ve(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), Ve(null));
            }
          }
          function rt(e, r, a) {
            var o = u(e);
            if (!o) {
              var i = "";
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var p = St(r);
              p ? i += p : i += Jr();
              var l;
              e === null ? l = "null" : $e(e) ? l = "array" : e !== void 0 && e.$$typeof === F ? (l = "<" + (pe(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, d("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, i);
            }
            var v = _r.apply(this, arguments);
            if (v == null)
              return v;
            if (o)
              for (var E = 2; E < arguments.length; E++)
                Zr(arguments[E], e);
            return e === W ? Ot(v) : et(v), v;
          }
          var tt = false;
          function Pt(e) {
            var r = rt.bind(null, e);
            return r.type = e, tt || (tt = true, ue("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", { enumerable: false, get: function() {
              return ue("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", { value: e }), e;
            } }), r;
          }
          function kt(e, r, a) {
            for (var o = Er.apply(this, arguments), i = 2; i < arguments.length; i++)
              Zr(arguments[i], o.type);
            return et(o), o;
          }
          function jt(e, r) {
            var a = ae.transition;
            ae.transition = {};
            var o = ae.transition;
            ae.transition._updatedFibers = /* @__PURE__ */ new Set();
            try {
              e();
            } finally {
              if (ae.transition = a, a === null && o._updatedFibers) {
                var i = o._updatedFibers.size;
                i > 10 && ue("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
              }
            }
          }
          var nt = false, dr = null;
          function At(e) {
            if (dr === null)
              try {
                var r = ("require" + Math.random()).slice(0, 7), a = k && k[r];
                dr = a.call(k, "timers").setImmediate;
              } catch {
                dr = function(i) {
                  nt === false && (nt = true, typeof MessageChannel > "u" && d("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
                  var p = new MessageChannel();
                  p.port1.onmessage = i, p.port2.postMessage(void 0);
                };
              }
            return dr(e);
          }
          var Ue = 0, at = false;
          function xt(e) {
            {
              var r = Ue;
              Ue++, N.current === null && (N.current = []);
              var a = N.isBatchingLegacy, o;
              try {
                if (N.isBatchingLegacy = true, o = e(), !a && N.didScheduleLegacyUpdate) {
                  var i = N.current;
                  i !== null && (N.didScheduleLegacyUpdate = false, $r(i));
                }
              } catch (I) {
                throw pr(r), I;
              } finally {
                N.isBatchingLegacy = a;
              }
              if (o !== null && typeof o == "object" && typeof o.then == "function") {
                var p = o, l = false, v = { then: function(I, M) {
                  l = true, p.then(function(z) {
                    pr(r), Ue === 0 ? Ir(z, I, M) : I(z);
                  }, function(z) {
                    pr(r), M(z);
                  });
                } };
                return !at && typeof Promise < "u" && Promise.resolve().then(function() {
                }).then(function() {
                  l || (at = true, d("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
                }), v;
              } else {
                var E = o;
                if (pr(r), Ue === 0) {
                  var O = N.current;
                  O !== null && ($r(O), N.current = null);
                  var A = { then: function(I, M) {
                    N.current === null ? (N.current = [], Ir(E, I, M)) : I(E);
                  } };
                  return A;
                } else {
                  var x = { then: function(I, M) {
                    I(E);
                  } };
                  return x;
                }
              }
            }
          }
          function pr(e) {
            e !== Ue - 1 && d("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ue = e;
          }
          function Ir(e, r, a) {
            {
              var o = N.current;
              if (o !== null)
                try {
                  $r(o), At(function() {
                    o.length === 0 ? (N.current = null, r(e)) : Ir(e, r, a);
                  });
                } catch (i) {
                  a(i);
                }
              else
                r(e);
            }
          }
          var Fr = false;
          function $r(e) {
            if (!Fr) {
              Fr = true;
              var r = 0;
              try {
                for (; r < e.length; r++) {
                  var a = e[r];
                  do
                    a = a(true);
                  while (a !== null);
                }
                e.length = 0;
              } catch (o) {
                throw e = e.slice(r + 1), o;
              } finally {
                Fr = false;
              }
            }
          }
          var Dt = rt, It = kt, Ft = Pt, $t = { map: De, forEach: ar, count: wr, toArray: Sr, only: or };
          h.Children = $t, h.Component = _, h.Fragment = W, h.Profiler = Q, h.PureComponent = V, h.StrictMode = G, h.Suspense = q, h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y, h.cloneElement = It, h.createContext = ur, h.createElement = Dt, h.createFactory = Ft, h.createRef = hr, h.forwardRef = kr, h.isValidElement = me, h.lazy = Pr, h.memo = c, h.startTransition = jt, h.unstable_act = xt, h.useCallback = J, h.useContext = R, h.useDebugValue = ie, h.useDeferredValue = yt, h.useEffect = B, h.useId = ht, h.useImperativeHandle = ir, h.useInsertionEffect = D, h.useLayoutEffect = $, h.useMemo = _e, h.useReducer = b, h.useRef = m, h.useState = S, h.useSyncExternalStore = mt, h.useTransition = vt, h.version = be, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        })();
      }(Yt, Ke)), Ke;
    }
    var ft;
    function pt() {
      return ft || (ft = 1, function(k) {
        false ? k.exports = Ut() : k.exports = Bt();
      }(Vt)), yr;
    }
    var Ge = {};
    var dt;
    function qt() {
      return dt || (dt = 1, function() {
        var k = pt(), h = false, be = false, Ee = false, Re = false, Ce = false, se = Symbol.for("react.element"), ce = Symbol.for("react.portal"), F = Symbol.for("react.fragment"), fe = Symbol.for("react.strict_mode"), W = Symbol.for("react.profiler"), G = Symbol.for("react.provider"), Q = Symbol.for("react.context"), K = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), q = Symbol.for("react.memo"), le = Symbol.for("react.lazy"), ee = Symbol.for("react.offscreen"), ne = Symbol.iterator, Fe = "@@iterator";
        function we(t) {
          if (t === null || typeof t != "object")
            return null;
          var u = ne && t[ne] || t[Fe];
          return typeof u == "function" ? u : null;
        }
        var re = k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function L(t) {
          {
            for (var u = arguments.length, c = new Array(u > 1 ? u - 1 : 0), f = 1; f < u; f++)
              c[f - 1] = arguments[f];
            Se("error", t, c);
          }
        }
        function Se(t, u, c) {
          {
            var f = re.ReactDebugCurrentFrame, R = f.getStackAddendum();
            R !== "" && (u += "%s", c = c.concat([R]));
            var S = c.map(function(b) {
              return String(b);
            });
            S.unshift("Warning: " + u), Function.prototype.apply.call(console[t], console, S);
          }
        }
        var ae;
        ae = Symbol.for("react.module.reference");
        function N(t) {
          return !!(typeof t == "string" || typeof t == "function" || t === F || t === W || Ce || t === fe || t === te || t === Z || Re || t === ee || h || be || Ee || typeof t == "object" && t !== null && (t.$$typeof === le || t.$$typeof === q || t.$$typeof === G || t.$$typeof === Q || t.$$typeof === K || t.$$typeof === ae || t.getModuleId !== void 0));
        }
        function X(t, u, c) {
          var f = t.displayName;
          if (f)
            return f;
          var R = u.displayName || u.name || "";
          return R !== "" ? c + "(" + R + ")" : c;
        }
        function oe(t) {
          return t.displayName || "Context";
        }
        function U(t) {
          if (t == null)
            return null;
          if (typeof t.tag == "number" && L("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
            return t.displayName || t.name || null;
          if (typeof t == "string")
            return t;
          switch (t) {
            case F:
              return "Fragment";
            case ce:
              return "Portal";
            case W:
              return "Profiler";
            case fe:
              return "StrictMode";
            case te:
              return "Suspense";
            case Z:
              return "SuspenseList";
          }
          if (typeof t == "object")
            switch (t.$$typeof) {
              case Q:
                var u = t;
                return oe(u) + ".Consumer";
              case G:
                var c = t;
                return oe(c._context) + ".Provider";
              case K:
                return X(t, t.render, "ForwardRef");
              case q:
                var f = t.displayName || null;
                return f !== null ? f : U(t.type) || "Memo";
              case le: {
                var R = t, S = R._payload, b = R._init;
                try {
                  return U(b(S));
                } catch {
                  return null;
                }
              }
            }
          return null;
        }
        var H = Object.assign, Y = 0, ue, d, de, Te, n, s, y;
        function C() {
        }
        C.__reactDisabledLog = true;
        function _() {
          {
            if (Y === 0) {
              ue = console.log, d = console.info, de = console.warn, Te = console.error, n = console.group, s = console.groupCollapsed, y = console.groupEnd;
              var t = { configurable: true, enumerable: true, value: C, writable: true };
              Object.defineProperties(console, { info: t, log: t, warn: t, error: t, group: t, groupCollapsed: t, groupEnd: t });
            }
            Y++;
          }
        }
        function P() {
          {
            if (Y--, Y === 0) {
              var t = { configurable: true, enumerable: true, writable: true };
              Object.defineProperties(console, { log: H({}, t, { value: ue }), info: H({}, t, { value: d }), warn: H({}, t, { value: de }), error: H({}, t, { value: Te }), group: H({}, t, { value: n }), groupCollapsed: H({}, t, { value: s }), groupEnd: H({}, t, { value: y }) });
            }
            Y < 0 && L("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
          }
        }
        var j = re.ReactCurrentDispatcher, T;
        function w(t, u, c) {
          {
            if (T === void 0)
              try {
                throw Error();
              } catch (R) {
                var f = R.stack.trim().match(/\n( *(at )?)/);
                T = f && f[1] || "";
              }
            return `
` + T + t;
          }
        }
        var V = false, ye;
        {
          var hr = typeof WeakMap == "function" ? WeakMap : Map;
          ye = new hr();
        }
        function Je(t, u) {
          if (!t || V)
            return "";
          {
            var c = ye.get(t);
            if (c !== void 0)
              return c;
          }
          var f;
          V = true;
          var R = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var S;
          S = j.current, j.current = null, _();
          try {
            if (u) {
              var b = function() {
                throw Error();
              };
              if (Object.defineProperty(b.prototype, "props", { set: function() {
                throw Error();
              } }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(b, []);
                } catch (ie) {
                  f = ie;
                }
                Reflect.construct(t, [], b);
              } else {
                try {
                  b.call();
                } catch (ie) {
                  f = ie;
                }
                t.call(b.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (ie) {
                f = ie;
              }
              t();
            }
          } catch (ie) {
            if (ie && f && typeof ie.stack == "string") {
              for (var m = ie.stack.split(`
`), B = f.stack.split(`
`), D = m.length - 1, $ = B.length - 1; D >= 1 && $ >= 0 && m[D] !== B[$]; )
                $--;
              for (; D >= 1 && $ >= 0; D--, $--)
                if (m[D] !== B[$]) {
                  if (D !== 1 || $ !== 1)
                    do
                      if (D--, $--, $ < 0 || m[D] !== B[$]) {
                        var J = `
` + m[D].replace(" at new ", " at ");
                        return t.displayName && J.includes("<anonymous>") && (J = J.replace("<anonymous>", t.displayName)), typeof t == "function" && ye.set(t, J), J;
                      }
                    while (D >= 1 && $ >= 0);
                  break;
                }
            }
          } finally {
            V = false, j.current = S, P(), Error.prepareStackTrace = R;
          }
          var _e = t ? t.displayName || t.name : "", ir = _e ? w(_e) : "";
          return typeof t == "function" && ye.set(t, ir), ir;
        }
        function $e(t, u, c) {
          return Je(t, false);
        }
        function mr(t) {
          var u = t.prototype;
          return !!(u && u.isReactComponent);
        }
        function Le(t, u, c) {
          if (t == null)
            return "";
          if (typeof t == "function")
            return Je(t, mr(t));
          if (typeof t == "string")
            return w(t);
          switch (t) {
            case te:
              return w("Suspense");
            case Z:
              return w("SuspenseList");
          }
          if (typeof t == "object")
            switch (t.$$typeof) {
              case K:
                return $e(t.render);
              case q:
                return Le(t.type, u, c);
              case le: {
                var f = t, R = f._payload, S = f._init;
                try {
                  return Le(S(R), u, c);
                } catch {
                }
              }
            }
          return "";
        }
        var Oe = Object.prototype.hasOwnProperty, Pe = {}, Xe = re.ReactDebugCurrentFrame;
        function ke(t) {
          if (t) {
            var u = t._owner, c = Le(t.type, t._source, u ? u.type : null);
            Xe.setExtraStackFrame(c);
          } else
            Xe.setExtraStackFrame(null);
        }
        function pe(t, u, c, f, R) {
          {
            var S = Function.call.bind(Oe);
            for (var b in t)
              if (S(t, b)) {
                var m = void 0;
                try {
                  if (typeof t[b] != "function") {
                    var B = Error((f || "React class") + ": " + c + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    throw B.name = "Invariant Violation", B;
                  }
                  m = t[b](u, b, f, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (D) {
                  m = D;
                }
                m && !(m instanceof Error) && (ke(R), L("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", c, b, typeof m), ke(null)), m instanceof Error && !(m.message in Pe) && (Pe[m.message] = true, ke(R), L("Failed %s type: %s", c, m.message), ke(null));
              }
          }
        }
        var je = Array.isArray;
        function Ne(t) {
          return je(t);
        }
        function Qe(t) {
          {
            var u = typeof Symbol == "function" && Symbol.toStringTag, c = u && t[Symbol.toStringTag] || t.constructor.name || "Object";
            return c;
          }
        }
        function Ze(t) {
          try {
            return Me(t), false;
          } catch {
            return true;
          }
        }
        function Me(t) {
          return "" + t;
        }
        function Ye(t) {
          if (Ze(t))
            return L("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(t)), Me(t);
        }
        var he = re.ReactCurrentOwner, gr = { key: true, ref: true, __self: true, __source: true }, er, rr, Ae;
        Ae = {};
        function _r(t) {
          if (Oe.call(t, "ref")) {
            var u = Object.getOwnPropertyDescriptor(t, "ref").get;
            if (u && u.isReactWarning)
              return false;
          }
          return t.ref !== void 0;
        }
        function br(t) {
          if (Oe.call(t, "key")) {
            var u = Object.getOwnPropertyDescriptor(t, "key").get;
            if (u && u.isReactWarning)
              return false;
          }
          return t.key !== void 0;
        }
        function Er(t, u) {
          if (typeof t.ref == "string" && he.current && u && he.current.stateNode !== u) {
            var c = U(he.current.type);
            Ae[c] || (L('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', U(he.current.type), t.ref), Ae[c] = true);
          }
        }
        function me(t, u) {
          {
            var c = function() {
              er || (er = true, L("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
            };
            c.isReactWarning = true, Object.defineProperty(t, "key", { get: c, configurable: true });
          }
        }
        function tr(t, u) {
          {
            var c = function() {
              rr || (rr = true, L("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
            };
            c.isReactWarning = true, Object.defineProperty(t, "ref", { get: c, configurable: true });
          }
        }
        var Rr = function(t, u, c, f, R, S, b) {
          var m = { $$typeof: se, type: t, key: u, ref: c, props: b, _owner: S };
          return m._store = {}, Object.defineProperty(m._store, "validated", { configurable: false, enumerable: false, writable: true, value: false }), Object.defineProperty(m, "_self", { configurable: false, enumerable: false, writable: false, value: f }), Object.defineProperty(m, "_source", { configurable: false, enumerable: false, writable: false, value: R }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
        };
        function Cr(t, u, c, f, R) {
          {
            var S, b = {}, m = null, B = null;
            c !== void 0 && (Ye(c), m = "" + c), br(u) && (Ye(u.key), m = "" + u.key), _r(u) && (B = u.ref, Er(u, R));
            for (S in u)
              Oe.call(u, S) && !gr.hasOwnProperty(S) && (b[S] = u[S]);
            if (t && t.defaultProps) {
              var D = t.defaultProps;
              for (S in D)
                b[S] === void 0 && (b[S] = D[S]);
            }
            if (m || B) {
              var $ = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
              m && me(b, $), B && tr(b, $);
            }
            return Rr(t, m, B, R, f, he.current, b);
          }
        }
        var We = re.ReactCurrentOwner, nr = re.ReactDebugCurrentFrame;
        function ve(t) {
          if (t) {
            var u = t._owner, c = Le(t.type, t._source, u ? u.type : null);
            nr.setExtraStackFrame(c);
          } else
            nr.setExtraStackFrame(null);
        }
        var xe;
        xe = false;
        function ge(t) {
          return typeof t == "object" && t !== null && t.$$typeof === se;
        }
        function De() {
          {
            if (We.current) {
              var t = U(We.current.type);
              if (t)
                return `

Check the render method of \`` + t + "`.";
            }
            return "";
          }
        }
        function wr(t) {
          {
            if (t !== void 0) {
              var u = t.fileName.replace(/^.*[\\\/]/, ""), c = t.lineNumber;
              return `

Check your code at ` + u + ":" + c + ".";
            }
            return "";
          }
        }
        var ar = {};
        function Sr(t) {
          {
            var u = De();
            if (!u) {
              var c = typeof t == "string" ? t : t.displayName || t.name;
              c && (u = `

Check the top-level render call using <` + c + ">.");
            }
            return u;
          }
        }
        function or(t, u) {
          {
            if (!t._store || t._store.validated || t.key != null)
              return;
            t._store.validated = true;
            var c = Sr(u);
            if (ar[c])
              return;
            ar[c] = true;
            var f = "";
            t && t._owner && t._owner !== We.current && (f = " It was passed a child from " + U(t._owner.type) + "."), ve(t), L('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, f), ve(null);
          }
        }
        function ur(t, u) {
          {
            if (typeof t != "object")
              return;
            if (Ne(t))
              for (var c = 0; c < t.length; c++) {
                var f = t[c];
                ge(f) && or(f, u);
              }
            else if (ge(t))
              t._store && (t._store.validated = true);
            else if (t) {
              var R = we(t);
              if (typeof R == "function" && R !== t.entries)
                for (var S = R.call(t), b; !(b = S.next()).done; )
                  ge(b.value) && or(b.value, u);
            }
          }
        }
        function Ie(t) {
          {
            var u = t.type;
            if (u == null || typeof u == "string")
              return;
            var c;
            if (typeof u == "function")
              c = u.propTypes;
            else if (typeof u == "object" && (u.$$typeof === K || u.$$typeof === q))
              c = u.propTypes;
            else
              return;
            if (c) {
              var f = U(u);
              pe(c, t.props, "prop", f, t);
            } else if (u.PropTypes !== void 0 && !xe) {
              xe = true;
              var R = U(u);
              L("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", R || "Unknown");
            }
            typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && L("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
          }
        }
        function Be(t) {
          {
            for (var u = Object.keys(t.props), c = 0; c < u.length; c++) {
              var f = u[c];
              if (f !== "children" && f !== "key") {
                ve(t), L("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", f), ve(null);
                break;
              }
            }
            t.ref !== null && (ve(t), L("Invalid attribute `ref` supplied to `React.Fragment`."), ve(null));
          }
        }
        function ze(t, u, c, f, R, S) {
          {
            var b = N(t);
            if (!b) {
              var m = "";
              (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var B = wr(R);
              B ? m += B : m += De();
              var D;
              t === null ? D = "null" : Ne(t) ? D = "array" : t !== void 0 && t.$$typeof === se ? (D = "<" + (U(t.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : D = typeof t, L("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", D, m);
            }
            var $ = Cr(t, u, c, R, S);
            if ($ == null)
              return $;
            if (b) {
              var J = u.children;
              if (J !== void 0)
                if (f)
                  if (Ne(J)) {
                    for (var _e = 0; _e < J.length; _e++)
                      ur(J[_e], t);
                    Object.freeze && Object.freeze(J);
                  } else
                    L("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                else
                  ur(J, t);
            }
            return t === F ? Be($) : Ie($), $;
          }
        }
        function Tr(t, u, c) {
          return ze(t, u, c, true);
        }
        function Or(t, u, c) {
          return ze(t, u, c, false);
        }
        var Pr = Or, kr = Tr;
        Ge.Fragment = F, Ge.jsx = Pr, Ge.jsxs = kr;
      }()), Ge;
    }
    (function(k) {
      false ? k.exports = zt() : k.exports = qt();
    })(Wt);
    var Ht = Nr.jsx;
    function Gt() {
      return Ht("header", { children: "Lerna is the original monorepo tool!" });
    }
    exports.Header = Gt;
  }
});

// ../../packages/footer/dist/index.js
var require_dist2 = __commonJS({
  "../../packages/footer/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    var Nr = {};
    var Wt = { get exports() {
      return Nr;
    }, set exports(k) {
      Nr = k;
    } };
    var yr = {};
    var Vt = { get exports() {
      return yr;
    }, set exports(k) {
      yr = k;
    } };
    var Ke = {};
    var Yt = { get exports() {
      return Ke;
    }, set exports(k) {
      Ke = k;
    } };
    var ct;
    function Bt() {
      return ct || (ct = 1, function(k, h) {
        (function() {
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
          var be = "18.1.0", Ee = false, Re = false, Ce = false, se = false, ce = false, I = Symbol.for("react.element"), fe = Symbol.for("react.portal"), W = Symbol.for("react.fragment"), G = Symbol.for("react.strict_mode"), Q = Symbol.for("react.profiler"), K = Symbol.for("react.provider"), te = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), le = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), Ie = Symbol.for("react.offscreen"), we = Symbol.iterator, re = "@@iterator";
          function L(e) {
            if (e === null || typeof e != "object")
              return null;
            var r = we && e[we] || e[re];
            return typeof r == "function" ? r : null;
          }
          var Se = { current: null }, ae = { transition: null }, N = { current: null, isBatchingLegacy: false, didScheduleLegacyUpdate: false }, X = { current: null }, oe = {}, U = null;
          function H(e) {
            U = e;
          }
          oe.setExtraStackFrame = function(e) {
            U = e;
          }, oe.getCurrentStack = null, oe.getStackAddendum = function() {
            var e = "";
            U && (e += U);
            var r = oe.getCurrentStack;
            return r && (e += r() || ""), e;
          };
          var Y = { ReactCurrentDispatcher: Se, ReactCurrentBatchConfig: ae, ReactCurrentOwner: X };
          Y.ReactDebugCurrentFrame = oe, Y.ReactCurrentActQueue = N;
          function ue(e) {
            {
              for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
                a[o - 1] = arguments[o];
              de("warn", e, a);
            }
          }
          function d(e) {
            {
              for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
                a[o - 1] = arguments[o];
              de("error", e, a);
            }
          }
          function de(e, r, a) {
            {
              var o = Y.ReactDebugCurrentFrame, i = o.getStackAddendum();
              i !== "" && (r += "%s", a = a.concat([i]));
              var p = a.map(function(l) {
                return String(l);
              });
              p.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, p);
            }
          }
          var Te = {};
          function n(e, r) {
            {
              var a = e.constructor, o = a && (a.displayName || a.name) || "ReactClass", i = o + "." + r;
              if (Te[i])
                return;
              d("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, o), Te[i] = true;
            }
          }
          var s = { isMounted: function(e) {
            return false;
          }, enqueueForceUpdate: function(e, r, a) {
            n(e, "forceUpdate");
          }, enqueueReplaceState: function(e, r, a, o) {
            n(e, "replaceState");
          }, enqueueSetState: function(e, r, a, o) {
            n(e, "setState");
          } }, y = Object.assign, C = {};
          Object.freeze(C);
          function _(e, r, a) {
            this.props = e, this.context = r, this.refs = C, this.updater = a || s;
          }
          _.prototype.isReactComponent = {}, _.prototype.setState = function(e, r) {
            if (typeof e != "object" && typeof e != "function" && e != null)
              throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, e, r, "setState");
          }, _.prototype.forceUpdate = function(e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          };
          {
            var P = { isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."], replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."] }, j = function(e, r) {
              Object.defineProperty(_.prototype, e, { get: function() {
                ue("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
              } });
            };
            for (var T in P)
              P.hasOwnProperty(T) && j(T, P[T]);
          }
          function w() {
          }
          w.prototype = _.prototype;
          function V(e, r, a) {
            this.props = e, this.context = r, this.refs = C, this.updater = a || s;
          }
          var ye = V.prototype = new w();
          ye.constructor = V, y(ye, _.prototype), ye.isPureReactComponent = true;
          function hr() {
            var e = { current: null };
            return Object.seal(e), e;
          }
          var Je = Array.isArray;
          function $e(e) {
            return Je(e);
          }
          function mr(e) {
            {
              var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
              return a;
            }
          }
          function Le(e) {
            try {
              return Oe(e), false;
            } catch {
              return true;
            }
          }
          function Oe(e) {
            return "" + e;
          }
          function Pe(e) {
            if (Le(e))
              return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", mr(e)), Oe(e);
          }
          function Xe(e, r, a) {
            var o = e.displayName;
            if (o)
              return o;
            var i = r.displayName || r.name || "";
            return i !== "" ? a + "(" + i + ")" : a;
          }
          function ke(e) {
            return e.displayName || "Context";
          }
          function pe(e) {
            if (e == null)
              return null;
            if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
              return e.displayName || e.name || null;
            if (typeof e == "string")
              return e;
            switch (e) {
              case W:
                return "Fragment";
              case fe:
                return "Portal";
              case Q:
                return "Profiler";
              case G:
                return "StrictMode";
              case q:
                return "Suspense";
              case le:
                return "SuspenseList";
            }
            if (typeof e == "object")
              switch (e.$$typeof) {
                case te:
                  var r = e;
                  return ke(r) + ".Consumer";
                case K:
                  var a = e;
                  return ke(a._context) + ".Provider";
                case Z:
                  return Xe(e, e.render, "ForwardRef");
                case ee:
                  var o = e.displayName || null;
                  return o !== null ? o : pe(e.type) || "Memo";
                case ne: {
                  var i = e, p = i._payload, l = i._init;
                  try {
                    return pe(l(p));
                  } catch {
                    return null;
                  }
                }
              }
            return null;
          }
          var je = Object.prototype.hasOwnProperty, Ne = { key: true, ref: true, __self: true, __source: true }, Qe, Ze, Me;
          Me = {};
          function Ye(e) {
            if (je.call(e, "ref")) {
              var r = Object.getOwnPropertyDescriptor(e, "ref").get;
              if (r && r.isReactWarning)
                return false;
            }
            return e.ref !== void 0;
          }
          function he(e) {
            if (je.call(e, "key")) {
              var r = Object.getOwnPropertyDescriptor(e, "key").get;
              if (r && r.isReactWarning)
                return false;
            }
            return e.key !== void 0;
          }
          function gr(e, r) {
            var a = function() {
              Qe || (Qe = true, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
            };
            a.isReactWarning = true, Object.defineProperty(e, "key", { get: a, configurable: true });
          }
          function er(e, r) {
            var a = function() {
              Ze || (Ze = true, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
            };
            a.isReactWarning = true, Object.defineProperty(e, "ref", { get: a, configurable: true });
          }
          function rr(e) {
            if (typeof e.ref == "string" && X.current && e.__self && X.current.stateNode !== e.__self) {
              var r = pe(X.current.type);
              Me[r] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), Me[r] = true);
            }
          }
          var Ae = function(e, r, a, o, i, p, l) {
            var v = { $$typeof: I, type: e, key: r, ref: a, props: l, _owner: p };
            return v._store = {}, Object.defineProperty(v._store, "validated", { configurable: false, enumerable: false, writable: true, value: false }), Object.defineProperty(v, "_self", { configurable: false, enumerable: false, writable: false, value: o }), Object.defineProperty(v, "_source", { configurable: false, enumerable: false, writable: false, value: i }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
          };
          function _r(e, r, a) {
            var o, i = {}, p = null, l = null, v = null, E = null;
            if (r != null) {
              Ye(r) && (l = r.ref, rr(r)), he(r) && (Pe(r.key), p = "" + r.key), v = r.__self === void 0 ? null : r.__self, E = r.__source === void 0 ? null : r.__source;
              for (o in r)
                je.call(r, o) && !Ne.hasOwnProperty(o) && (i[o] = r[o]);
            }
            var O = arguments.length - 2;
            if (O === 1)
              i.children = a;
            else if (O > 1) {
              for (var A = Array(O), x = 0; x < O; x++)
                A[x] = arguments[x + 2];
              Object.freeze && Object.freeze(A), i.children = A;
            }
            if (e && e.defaultProps) {
              var F = e.defaultProps;
              for (o in F)
                i[o] === void 0 && (i[o] = F[o]);
            }
            if (p || l) {
              var M = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
              p && gr(i, M), l && er(i, M);
            }
            return Ae(e, p, l, v, E, X.current, i);
          }
          function br(e, r) {
            var a = Ae(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
            return a;
          }
          function Er(e, r, a) {
            if (e == null)
              throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
            var o, i = y({}, e.props), p = e.key, l = e.ref, v = e._self, E = e._source, O = e._owner;
            if (r != null) {
              Ye(r) && (l = r.ref, O = X.current), he(r) && (Pe(r.key), p = "" + r.key);
              var A;
              e.type && e.type.defaultProps && (A = e.type.defaultProps);
              for (o in r)
                je.call(r, o) && !Ne.hasOwnProperty(o) && (r[o] === void 0 && A !== void 0 ? i[o] = A[o] : i[o] = r[o]);
            }
            var x = arguments.length - 2;
            if (x === 1)
              i.children = a;
            else if (x > 1) {
              for (var F = Array(x), M = 0; M < x; M++)
                F[M] = arguments[M + 2];
              i.children = F;
            }
            return Ae(e.type, p, l, v, E, O, i);
          }
          function me(e) {
            return typeof e == "object" && e !== null && e.$$typeof === I;
          }
          var tr = ".", Rr = ":";
          function Cr(e) {
            var r = /[=:]/g, a = { "=": "=0", ":": "=2" }, o = e.replace(r, function(i) {
              return a[i];
            });
            return "$" + o;
          }
          var We = false, nr = /\/+/g;
          function ve(e) {
            return e.replace(nr, "$&/");
          }
          function xe(e, r) {
            return typeof e == "object" && e !== null && e.key != null ? (Pe(e.key), Cr("" + e.key)) : r.toString(36);
          }
          function ge(e, r, a, o, i) {
            var p = typeof e;
            (p === "undefined" || p === "boolean") && (e = null);
            var l = false;
            if (e === null)
              l = true;
            else
              switch (p) {
                case "string":
                case "number":
                  l = true;
                  break;
                case "object":
                  switch (e.$$typeof) {
                    case I:
                    case fe:
                      l = true;
                  }
              }
            if (l) {
              var v = e, E = i(v), O = o === "" ? tr + xe(v, 0) : o;
              if ($e(E)) {
                var A = "";
                O != null && (A = ve(O) + "/"), ge(E, r, A, "", function(Mt) {
                  return Mt;
                });
              } else
                E != null && (me(E) && (E.key && (!v || v.key !== E.key) && Pe(E.key), E = br(E, a + (E.key && (!v || v.key !== E.key) ? ve("" + E.key) + "/" : "") + O)), r.push(E));
              return 1;
            }
            var x, F, M = 0, z = o === "" ? tr : o + Rr;
            if ($e(e))
              for (var vr = 0; vr < e.length; vr++)
                x = e[vr], F = z + xe(x, vr), M += ge(x, r, a, F, i);
            else {
              var Lr = L(e);
              if (typeof Lr == "function") {
                var ot = e;
                Lr === ot.entries && (We || ue("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), We = true);
                for (var Lt = Lr.call(ot), ut, Nt = 0; !(ut = Lt.next()).done; )
                  x = ut.value, F = z + xe(x, Nt++), M += ge(x, r, a, F, i);
              } else if (p === "object") {
                var it = String(e);
                throw new Error("Objects are not valid as a React child (found: " + (it === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : it) + "). If you meant to render a collection of children, use an array instead.");
              }
            }
            return M;
          }
          function De(e, r, a) {
            if (e == null)
              return e;
            var o = [], i = 0;
            return ge(e, o, "", "", function(p) {
              return r.call(a, p, i++);
            }), o;
          }
          function wr(e) {
            var r = 0;
            return De(e, function() {
              r++;
            }), r;
          }
          function ar(e, r, a) {
            De(e, function() {
              r.apply(this, arguments);
            }, a);
          }
          function Sr(e) {
            return De(e, function(r) {
              return r;
            }) || [];
          }
          function or(e) {
            if (!me(e))
              throw new Error("React.Children.only expected to receive a single React element child.");
            return e;
          }
          function ur(e) {
            var r = { $$typeof: te, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
            r.Provider = { $$typeof: K, _context: r };
            var a = false, o = false, i = false;
            {
              var p = { $$typeof: te, _context: r };
              Object.defineProperties(p, { Provider: { get: function() {
                return o || (o = true, d("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              }, set: function(l) {
                r.Provider = l;
              } }, _currentValue: { get: function() {
                return r._currentValue;
              }, set: function(l) {
                r._currentValue = l;
              } }, _currentValue2: { get: function() {
                return r._currentValue2;
              }, set: function(l) {
                r._currentValue2 = l;
              } }, _threadCount: { get: function() {
                return r._threadCount;
              }, set: function(l) {
                r._threadCount = l;
              } }, Consumer: { get: function() {
                return a || (a = true, d("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              } }, displayName: { get: function() {
                return r.displayName;
              }, set: function(l) {
                i || (ue("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", l), i = true);
              } } }), r.Consumer = p;
            }
            return r._currentRenderer = null, r._currentRenderer2 = null, r;
          }
          var Fe = -1, Be = 0, ze = 1, Tr = 2;
          function Or(e) {
            if (e._status === Fe) {
              var r = e._result, a = r();
              if (a.then(function(p) {
                if (e._status === Be || e._status === Fe) {
                  var l = e;
                  l._status = ze, l._result = p;
                }
              }, function(p) {
                if (e._status === Be || e._status === Fe) {
                  var l = e;
                  l._status = Tr, l._result = p;
                }
              }), e._status === Fe) {
                var o = e;
                o._status = Be, o._result = a;
              }
            }
            if (e._status === ze) {
              var i = e._result;
              return i === void 0 && d(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, i), "default" in i || d(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, i), i.default;
            } else
              throw e._result;
          }
          function Pr(e) {
            var r = { _status: Fe, _result: e }, a = { $$typeof: ne, _payload: r, _init: Or };
            {
              var o, i;
              Object.defineProperties(a, { defaultProps: { configurable: true, get: function() {
                return o;
              }, set: function(p) {
                d("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = p, Object.defineProperty(a, "defaultProps", { enumerable: true });
              } }, propTypes: { configurable: true, get: function() {
                return i;
              }, set: function(p) {
                d("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), i = p, Object.defineProperty(a, "propTypes", { enumerable: true });
              } } });
            }
            return a;
          }
          function kr(e) {
            e != null && e.$$typeof === ee ? d("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? d("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && d("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && d("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
            var r = { $$typeof: Z, render: e };
            {
              var a;
              Object.defineProperty(r, "displayName", { enumerable: false, configurable: true, get: function() {
                return a;
              }, set: function(o) {
                a = o, !e.name && !e.displayName && (e.displayName = o);
              } });
            }
            return r;
          }
          var t;
          t = Symbol.for("react.module.reference");
          function u(e) {
            return !!(typeof e == "string" || typeof e == "function" || e === W || e === Q || ce || e === G || e === q || e === le || se || e === Ie || Ee || Re || Ce || typeof e == "object" && e !== null && (e.$$typeof === ne || e.$$typeof === ee || e.$$typeof === K || e.$$typeof === te || e.$$typeof === Z || e.$$typeof === t || e.getModuleId !== void 0));
          }
          function c(e, r) {
            u(e) || d("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
            var a = { $$typeof: ee, type: e, compare: r === void 0 ? null : r };
            {
              var o;
              Object.defineProperty(a, "displayName", { enumerable: false, configurable: true, get: function() {
                return o;
              }, set: function(i) {
                o = i, !e.name && !e.displayName && (e.displayName = i);
              } });
            }
            return a;
          }
          function f() {
            var e = Se.current;
            return e === null && d(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
          }
          function R(e) {
            var r = f();
            if (e._context !== void 0) {
              var a = e._context;
              a.Consumer === e ? d("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : a.Provider === e && d("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
            }
            return r.useContext(e);
          }
          function S(e) {
            var r = f();
            return r.useState(e);
          }
          function b(e, r, a) {
            var o = f();
            return o.useReducer(e, r, a);
          }
          function m(e) {
            var r = f();
            return r.useRef(e);
          }
          function B(e, r) {
            var a = f();
            return a.useEffect(e, r);
          }
          function D(e, r) {
            var a = f();
            return a.useInsertionEffect(e, r);
          }
          function $(e, r) {
            var a = f();
            return a.useLayoutEffect(e, r);
          }
          function J(e, r) {
            var a = f();
            return a.useCallback(e, r);
          }
          function _e(e, r) {
            var a = f();
            return a.useMemo(e, r);
          }
          function ir(e, r, a) {
            var o = f();
            return o.useImperativeHandle(e, r, a);
          }
          function ie(e, r) {
            {
              var a = f();
              return a.useDebugValue(e, r);
            }
          }
          function vt() {
            var e = f();
            return e.useTransition();
          }
          function yt(e) {
            var r = f();
            return r.useDeferredValue(e);
          }
          function ht() {
            var e = f();
            return e.useId();
          }
          function mt(e, r, a) {
            var o = f();
            return o.useSyncExternalStore(e, r, a);
          }
          var qe = 0, Mr, Wr, Vr, Ur, Yr, Br, zr;
          function qr() {
          }
          qr.__reactDisabledLog = true;
          function gt() {
            {
              if (qe === 0) {
                Mr = console.log, Wr = console.info, Vr = console.warn, Ur = console.error, Yr = console.group, Br = console.groupCollapsed, zr = console.groupEnd;
                var e = { configurable: true, enumerable: true, value: qr, writable: true };
                Object.defineProperties(console, { info: e, log: e, warn: e, error: e, group: e, groupCollapsed: e, groupEnd: e });
              }
              qe++;
            }
          }
          function _t() {
            {
              if (qe--, qe === 0) {
                var e = { configurable: true, enumerable: true, writable: true };
                Object.defineProperties(console, { log: y({}, e, { value: Mr }), info: y({}, e, { value: Wr }), warn: y({}, e, { value: Vr }), error: y({}, e, { value: Ur }), group: y({}, e, { value: Yr }), groupCollapsed: y({}, e, { value: Br }), groupEnd: y({}, e, { value: zr }) });
              }
              qe < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
          var jr = Y.ReactCurrentDispatcher, Ar;
          function sr(e, r, a) {
            {
              if (Ar === void 0)
                try {
                  throw Error();
                } catch (i) {
                  var o = i.stack.trim().match(/\n( *(at )?)/);
                  Ar = o && o[1] || "";
                }
              return `
` + Ar + e;
            }
          }
          var xr = false, cr;
          {
            var bt = typeof WeakMap == "function" ? WeakMap : Map;
            cr = new bt();
          }
          function Hr(e, r) {
            if (!e || xr)
              return "";
            {
              var a = cr.get(e);
              if (a !== void 0)
                return a;
            }
            var o;
            xr = true;
            var i = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var p;
            p = jr.current, jr.current = null, gt();
            try {
              if (r) {
                var l = function() {
                  throw Error();
                };
                if (Object.defineProperty(l.prototype, "props", { set: function() {
                  throw Error();
                } }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(l, []);
                  } catch (z) {
                    o = z;
                  }
                  Reflect.construct(e, [], l);
                } else {
                  try {
                    l.call();
                  } catch (z) {
                    o = z;
                  }
                  e.call(l.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (z) {
                  o = z;
                }
                e();
              }
            } catch (z) {
              if (z && o && typeof z.stack == "string") {
                for (var v = z.stack.split(`
`), E = o.stack.split(`
`), O = v.length - 1, A = E.length - 1; O >= 1 && A >= 0 && v[O] !== E[A]; )
                  A--;
                for (; O >= 1 && A >= 0; O--, A--)
                  if (v[O] !== E[A]) {
                    if (O !== 1 || A !== 1)
                      do
                        if (O--, A--, A < 0 || v[O] !== E[A]) {
                          var x = `
` + v[O].replace(" at new ", " at ");
                          return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && cr.set(e, x), x;
                        }
                      while (O >= 1 && A >= 0);
                    break;
                  }
              }
            } finally {
              xr = false, jr.current = p, _t(), Error.prepareStackTrace = i;
            }
            var F = e ? e.displayName || e.name : "", M = F ? sr(F) : "";
            return typeof e == "function" && cr.set(e, M), M;
          }
          function Et(e, r, a) {
            return Hr(e, false);
          }
          function Rt(e) {
            var r = e.prototype;
            return !!(r && r.isReactComponent);
          }
          function fr(e, r, a) {
            if (e == null)
              return "";
            if (typeof e == "function")
              return Hr(e, Rt(e));
            if (typeof e == "string")
              return sr(e);
            switch (e) {
              case q:
                return sr("Suspense");
              case le:
                return sr("SuspenseList");
            }
            if (typeof e == "object")
              switch (e.$$typeof) {
                case Z:
                  return Et(e.render);
                case ee:
                  return fr(e.type, r, a);
                case ne: {
                  var o = e, i = o._payload, p = o._init;
                  try {
                    return fr(p(i), r, a);
                  } catch {
                  }
                }
              }
            return "";
          }
          var Gr = {}, Kr = Y.ReactDebugCurrentFrame;
          function lr(e) {
            if (e) {
              var r = e._owner, a = fr(e.type, e._source, r ? r.type : null);
              Kr.setExtraStackFrame(a);
            } else
              Kr.setExtraStackFrame(null);
          }
          function Ct(e, r, a, o, i) {
            {
              var p = Function.call.bind(je);
              for (var l in e)
                if (p(e, l)) {
                  var v = void 0;
                  try {
                    if (typeof e[l] != "function") {
                      var E = Error((o || "React class") + ": " + a + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                      throw E.name = "Invariant Violation", E;
                    }
                    v = e[l](r, l, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                  } catch (O) {
                    v = O;
                  }
                  v && !(v instanceof Error) && (lr(i), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, l, typeof v), lr(null)), v instanceof Error && !(v.message in Gr) && (Gr[v.message] = true, lr(i), d("Failed %s type: %s", a, v.message), lr(null));
                }
            }
          }
          function Ve(e) {
            if (e) {
              var r = e._owner, a = fr(e.type, e._source, r ? r.type : null);
              H(a);
            } else
              H(null);
          }
          var Dr;
          Dr = false;
          function Jr() {
            if (X.current) {
              var e = pe(X.current.type);
              if (e)
                return `

Check the render method of \`` + e + "`.";
            }
            return "";
          }
          function wt(e) {
            if (e !== void 0) {
              var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
              return `

Check your code at ` + r + ":" + a + ".";
            }
            return "";
          }
          function St(e) {
            return e != null ? wt(e.__source) : "";
          }
          var Xr = {};
          function Tt(e) {
            var r = Jr();
            if (!r) {
              var a = typeof e == "string" ? e : e.displayName || e.name;
              a && (r = `

Check the top-level render call using <` + a + ">.");
            }
            return r;
          }
          function Qr(e, r) {
            if (!(!e._store || e._store.validated || e.key != null)) {
              e._store.validated = true;
              var a = Tt(r);
              if (!Xr[a]) {
                Xr[a] = true;
                var o = "";
                e && e._owner && e._owner !== X.current && (o = " It was passed a child from " + pe(e._owner.type) + "."), Ve(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, o), Ve(null);
              }
            }
          }
          function Zr(e, r) {
            if (typeof e == "object") {
              if ($e(e))
                for (var a = 0; a < e.length; a++) {
                  var o = e[a];
                  me(o) && Qr(o, r);
                }
              else if (me(e))
                e._store && (e._store.validated = true);
              else if (e) {
                var i = L(e);
                if (typeof i == "function" && i !== e.entries)
                  for (var p = i.call(e), l; !(l = p.next()).done; )
                    me(l.value) && Qr(l.value, r);
              }
            }
          }
          function et(e) {
            {
              var r = e.type;
              if (r == null || typeof r == "string")
                return;
              var a;
              if (typeof r == "function")
                a = r.propTypes;
              else if (typeof r == "object" && (r.$$typeof === Z || r.$$typeof === ee))
                a = r.propTypes;
              else
                return;
              if (a) {
                var o = pe(r);
                Ct(a, e.props, "prop", o, e);
              } else if (r.PropTypes !== void 0 && !Dr) {
                Dr = true;
                var i = pe(r);
                d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
              }
              typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
          function Ot(e) {
            {
              for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
                var o = r[a];
                if (o !== "children" && o !== "key") {
                  Ve(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), Ve(null);
                  break;
                }
              }
              e.ref !== null && (Ve(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), Ve(null));
            }
          }
          function rt(e, r, a) {
            var o = u(e);
            if (!o) {
              var i = "";
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var p = St(r);
              p ? i += p : i += Jr();
              var l;
              e === null ? l = "null" : $e(e) ? l = "array" : e !== void 0 && e.$$typeof === I ? (l = "<" + (pe(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, d("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, i);
            }
            var v = _r.apply(this, arguments);
            if (v == null)
              return v;
            if (o)
              for (var E = 2; E < arguments.length; E++)
                Zr(arguments[E], e);
            return e === W ? Ot(v) : et(v), v;
          }
          var tt = false;
          function Pt(e) {
            var r = rt.bind(null, e);
            return r.type = e, tt || (tt = true, ue("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", { enumerable: false, get: function() {
              return ue("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", { value: e }), e;
            } }), r;
          }
          function kt(e, r, a) {
            for (var o = Er.apply(this, arguments), i = 2; i < arguments.length; i++)
              Zr(arguments[i], o.type);
            return et(o), o;
          }
          function jt(e, r) {
            var a = ae.transition;
            ae.transition = {};
            var o = ae.transition;
            ae.transition._updatedFibers = /* @__PURE__ */ new Set();
            try {
              e();
            } finally {
              if (ae.transition = a, a === null && o._updatedFibers) {
                var i = o._updatedFibers.size;
                i > 10 && ue("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
              }
            }
          }
          var nt = false, dr = null;
          function At(e) {
            if (dr === null)
              try {
                var r = ("require" + Math.random()).slice(0, 7), a = k && k[r];
                dr = a.call(k, "timers").setImmediate;
              } catch {
                dr = function(i) {
                  nt === false && (nt = true, typeof MessageChannel > "u" && d("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
                  var p = new MessageChannel();
                  p.port1.onmessage = i, p.port2.postMessage(void 0);
                };
              }
            return dr(e);
          }
          var Ue = 0, at = false;
          function xt(e) {
            {
              var r = Ue;
              Ue++, N.current === null && (N.current = []);
              var a = N.isBatchingLegacy, o;
              try {
                if (N.isBatchingLegacy = true, o = e(), !a && N.didScheduleLegacyUpdate) {
                  var i = N.current;
                  i !== null && (N.didScheduleLegacyUpdate = false, $r(i));
                }
              } catch (F) {
                throw pr(r), F;
              } finally {
                N.isBatchingLegacy = a;
              }
              if (o !== null && typeof o == "object" && typeof o.then == "function") {
                var p = o, l = false, v = { then: function(F, M) {
                  l = true, p.then(function(z) {
                    pr(r), Ue === 0 ? Fr(z, F, M) : F(z);
                  }, function(z) {
                    pr(r), M(z);
                  });
                } };
                return !at && typeof Promise < "u" && Promise.resolve().then(function() {
                }).then(function() {
                  l || (at = true, d("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
                }), v;
              } else {
                var E = o;
                if (pr(r), Ue === 0) {
                  var O = N.current;
                  O !== null && ($r(O), N.current = null);
                  var A = { then: function(F, M) {
                    N.current === null ? (N.current = [], Fr(E, F, M)) : F(E);
                  } };
                  return A;
                } else {
                  var x = { then: function(F, M) {
                    F(E);
                  } };
                  return x;
                }
              }
            }
          }
          function pr(e) {
            e !== Ue - 1 && d("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ue = e;
          }
          function Fr(e, r, a) {
            {
              var o = N.current;
              if (o !== null)
                try {
                  $r(o), At(function() {
                    o.length === 0 ? (N.current = null, r(e)) : Fr(e, r, a);
                  });
                } catch (i) {
                  a(i);
                }
              else
                r(e);
            }
          }
          var Ir = false;
          function $r(e) {
            if (!Ir) {
              Ir = true;
              var r = 0;
              try {
                for (; r < e.length; r++) {
                  var a = e[r];
                  do
                    a = a(true);
                  while (a !== null);
                }
                e.length = 0;
              } catch (o) {
                throw e = e.slice(r + 1), o;
              } finally {
                Ir = false;
              }
            }
          }
          var Dt = rt, Ft = kt, It = Pt, $t = { map: De, forEach: ar, count: wr, toArray: Sr, only: or };
          h.Children = $t, h.Component = _, h.Fragment = W, h.Profiler = Q, h.PureComponent = V, h.StrictMode = G, h.Suspense = q, h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y, h.cloneElement = Ft, h.createContext = ur, h.createElement = Dt, h.createFactory = It, h.createRef = hr, h.forwardRef = kr, h.isValidElement = me, h.lazy = Pr, h.memo = c, h.startTransition = jt, h.unstable_act = xt, h.useCallback = J, h.useContext = R, h.useDebugValue = ie, h.useDeferredValue = yt, h.useEffect = B, h.useId = ht, h.useImperativeHandle = ir, h.useInsertionEffect = D, h.useLayoutEffect = $, h.useMemo = _e, h.useReducer = b, h.useRef = m, h.useState = S, h.useSyncExternalStore = mt, h.useTransition = vt, h.version = be, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        })();
      }(Yt, Ke)), Ke;
    }
    var ft;
    function pt() {
      return ft || (ft = 1, function(k) {
        false ? k.exports = Ut() : k.exports = Bt();
      }(Vt)), yr;
    }
    var Ge = {};
    var dt;
    function qt() {
      return dt || (dt = 1, function() {
        var k = pt(), h = false, be = false, Ee = false, Re = false, Ce = false, se = Symbol.for("react.element"), ce = Symbol.for("react.portal"), I = Symbol.for("react.fragment"), fe = Symbol.for("react.strict_mode"), W = Symbol.for("react.profiler"), G = Symbol.for("react.provider"), Q = Symbol.for("react.context"), K = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), q = Symbol.for("react.memo"), le = Symbol.for("react.lazy"), ee = Symbol.for("react.offscreen"), ne = Symbol.iterator, Ie = "@@iterator";
        function we(t) {
          if (t === null || typeof t != "object")
            return null;
          var u = ne && t[ne] || t[Ie];
          return typeof u == "function" ? u : null;
        }
        var re = k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function L(t) {
          {
            for (var u = arguments.length, c = new Array(u > 1 ? u - 1 : 0), f = 1; f < u; f++)
              c[f - 1] = arguments[f];
            Se("error", t, c);
          }
        }
        function Se(t, u, c) {
          {
            var f = re.ReactDebugCurrentFrame, R = f.getStackAddendum();
            R !== "" && (u += "%s", c = c.concat([R]));
            var S = c.map(function(b) {
              return String(b);
            });
            S.unshift("Warning: " + u), Function.prototype.apply.call(console[t], console, S);
          }
        }
        var ae;
        ae = Symbol.for("react.module.reference");
        function N(t) {
          return !!(typeof t == "string" || typeof t == "function" || t === I || t === W || Ce || t === fe || t === te || t === Z || Re || t === ee || h || be || Ee || typeof t == "object" && t !== null && (t.$$typeof === le || t.$$typeof === q || t.$$typeof === G || t.$$typeof === Q || t.$$typeof === K || t.$$typeof === ae || t.getModuleId !== void 0));
        }
        function X(t, u, c) {
          var f = t.displayName;
          if (f)
            return f;
          var R = u.displayName || u.name || "";
          return R !== "" ? c + "(" + R + ")" : c;
        }
        function oe(t) {
          return t.displayName || "Context";
        }
        function U(t) {
          if (t == null)
            return null;
          if (typeof t.tag == "number" && L("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
            return t.displayName || t.name || null;
          if (typeof t == "string")
            return t;
          switch (t) {
            case I:
              return "Fragment";
            case ce:
              return "Portal";
            case W:
              return "Profiler";
            case fe:
              return "StrictMode";
            case te:
              return "Suspense";
            case Z:
              return "SuspenseList";
          }
          if (typeof t == "object")
            switch (t.$$typeof) {
              case Q:
                var u = t;
                return oe(u) + ".Consumer";
              case G:
                var c = t;
                return oe(c._context) + ".Provider";
              case K:
                return X(t, t.render, "ForwardRef");
              case q:
                var f = t.displayName || null;
                return f !== null ? f : U(t.type) || "Memo";
              case le: {
                var R = t, S = R._payload, b = R._init;
                try {
                  return U(b(S));
                } catch {
                  return null;
                }
              }
            }
          return null;
        }
        var H = Object.assign, Y = 0, ue, d, de, Te, n, s, y;
        function C() {
        }
        C.__reactDisabledLog = true;
        function _() {
          {
            if (Y === 0) {
              ue = console.log, d = console.info, de = console.warn, Te = console.error, n = console.group, s = console.groupCollapsed, y = console.groupEnd;
              var t = { configurable: true, enumerable: true, value: C, writable: true };
              Object.defineProperties(console, { info: t, log: t, warn: t, error: t, group: t, groupCollapsed: t, groupEnd: t });
            }
            Y++;
          }
        }
        function P() {
          {
            if (Y--, Y === 0) {
              var t = { configurable: true, enumerable: true, writable: true };
              Object.defineProperties(console, { log: H({}, t, { value: ue }), info: H({}, t, { value: d }), warn: H({}, t, { value: de }), error: H({}, t, { value: Te }), group: H({}, t, { value: n }), groupCollapsed: H({}, t, { value: s }), groupEnd: H({}, t, { value: y }) });
            }
            Y < 0 && L("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
          }
        }
        var j = re.ReactCurrentDispatcher, T;
        function w(t, u, c) {
          {
            if (T === void 0)
              try {
                throw Error();
              } catch (R) {
                var f = R.stack.trim().match(/\n( *(at )?)/);
                T = f && f[1] || "";
              }
            return `
` + T + t;
          }
        }
        var V = false, ye;
        {
          var hr = typeof WeakMap == "function" ? WeakMap : Map;
          ye = new hr();
        }
        function Je(t, u) {
          if (!t || V)
            return "";
          {
            var c = ye.get(t);
            if (c !== void 0)
              return c;
          }
          var f;
          V = true;
          var R = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var S;
          S = j.current, j.current = null, _();
          try {
            if (u) {
              var b = function() {
                throw Error();
              };
              if (Object.defineProperty(b.prototype, "props", { set: function() {
                throw Error();
              } }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(b, []);
                } catch (ie) {
                  f = ie;
                }
                Reflect.construct(t, [], b);
              } else {
                try {
                  b.call();
                } catch (ie) {
                  f = ie;
                }
                t.call(b.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (ie) {
                f = ie;
              }
              t();
            }
          } catch (ie) {
            if (ie && f && typeof ie.stack == "string") {
              for (var m = ie.stack.split(`
`), B = f.stack.split(`
`), D = m.length - 1, $ = B.length - 1; D >= 1 && $ >= 0 && m[D] !== B[$]; )
                $--;
              for (; D >= 1 && $ >= 0; D--, $--)
                if (m[D] !== B[$]) {
                  if (D !== 1 || $ !== 1)
                    do
                      if (D--, $--, $ < 0 || m[D] !== B[$]) {
                        var J = `
` + m[D].replace(" at new ", " at ");
                        return t.displayName && J.includes("<anonymous>") && (J = J.replace("<anonymous>", t.displayName)), typeof t == "function" && ye.set(t, J), J;
                      }
                    while (D >= 1 && $ >= 0);
                  break;
                }
            }
          } finally {
            V = false, j.current = S, P(), Error.prepareStackTrace = R;
          }
          var _e = t ? t.displayName || t.name : "", ir = _e ? w(_e) : "";
          return typeof t == "function" && ye.set(t, ir), ir;
        }
        function $e(t, u, c) {
          return Je(t, false);
        }
        function mr(t) {
          var u = t.prototype;
          return !!(u && u.isReactComponent);
        }
        function Le(t, u, c) {
          if (t == null)
            return "";
          if (typeof t == "function")
            return Je(t, mr(t));
          if (typeof t == "string")
            return w(t);
          switch (t) {
            case te:
              return w("Suspense");
            case Z:
              return w("SuspenseList");
          }
          if (typeof t == "object")
            switch (t.$$typeof) {
              case K:
                return $e(t.render);
              case q:
                return Le(t.type, u, c);
              case le: {
                var f = t, R = f._payload, S = f._init;
                try {
                  return Le(S(R), u, c);
                } catch {
                }
              }
            }
          return "";
        }
        var Oe = Object.prototype.hasOwnProperty, Pe = {}, Xe = re.ReactDebugCurrentFrame;
        function ke(t) {
          if (t) {
            var u = t._owner, c = Le(t.type, t._source, u ? u.type : null);
            Xe.setExtraStackFrame(c);
          } else
            Xe.setExtraStackFrame(null);
        }
        function pe(t, u, c, f, R) {
          {
            var S = Function.call.bind(Oe);
            for (var b in t)
              if (S(t, b)) {
                var m = void 0;
                try {
                  if (typeof t[b] != "function") {
                    var B = Error((f || "React class") + ": " + c + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    throw B.name = "Invariant Violation", B;
                  }
                  m = t[b](u, b, f, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (D) {
                  m = D;
                }
                m && !(m instanceof Error) && (ke(R), L("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", c, b, typeof m), ke(null)), m instanceof Error && !(m.message in Pe) && (Pe[m.message] = true, ke(R), L("Failed %s type: %s", c, m.message), ke(null));
              }
          }
        }
        var je = Array.isArray;
        function Ne(t) {
          return je(t);
        }
        function Qe(t) {
          {
            var u = typeof Symbol == "function" && Symbol.toStringTag, c = u && t[Symbol.toStringTag] || t.constructor.name || "Object";
            return c;
          }
        }
        function Ze(t) {
          try {
            return Me(t), false;
          } catch {
            return true;
          }
        }
        function Me(t) {
          return "" + t;
        }
        function Ye(t) {
          if (Ze(t))
            return L("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(t)), Me(t);
        }
        var he = re.ReactCurrentOwner, gr = { key: true, ref: true, __self: true, __source: true }, er, rr, Ae;
        Ae = {};
        function _r(t) {
          if (Oe.call(t, "ref")) {
            var u = Object.getOwnPropertyDescriptor(t, "ref").get;
            if (u && u.isReactWarning)
              return false;
          }
          return t.ref !== void 0;
        }
        function br(t) {
          if (Oe.call(t, "key")) {
            var u = Object.getOwnPropertyDescriptor(t, "key").get;
            if (u && u.isReactWarning)
              return false;
          }
          return t.key !== void 0;
        }
        function Er(t, u) {
          if (typeof t.ref == "string" && he.current && u && he.current.stateNode !== u) {
            var c = U(he.current.type);
            Ae[c] || (L('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', U(he.current.type), t.ref), Ae[c] = true);
          }
        }
        function me(t, u) {
          {
            var c = function() {
              er || (er = true, L("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
            };
            c.isReactWarning = true, Object.defineProperty(t, "key", { get: c, configurable: true });
          }
        }
        function tr(t, u) {
          {
            var c = function() {
              rr || (rr = true, L("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
            };
            c.isReactWarning = true, Object.defineProperty(t, "ref", { get: c, configurable: true });
          }
        }
        var Rr = function(t, u, c, f, R, S, b) {
          var m = { $$typeof: se, type: t, key: u, ref: c, props: b, _owner: S };
          return m._store = {}, Object.defineProperty(m._store, "validated", { configurable: false, enumerable: false, writable: true, value: false }), Object.defineProperty(m, "_self", { configurable: false, enumerable: false, writable: false, value: f }), Object.defineProperty(m, "_source", { configurable: false, enumerable: false, writable: false, value: R }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
        };
        function Cr(t, u, c, f, R) {
          {
            var S, b = {}, m = null, B = null;
            c !== void 0 && (Ye(c), m = "" + c), br(u) && (Ye(u.key), m = "" + u.key), _r(u) && (B = u.ref, Er(u, R));
            for (S in u)
              Oe.call(u, S) && !gr.hasOwnProperty(S) && (b[S] = u[S]);
            if (t && t.defaultProps) {
              var D = t.defaultProps;
              for (S in D)
                b[S] === void 0 && (b[S] = D[S]);
            }
            if (m || B) {
              var $ = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
              m && me(b, $), B && tr(b, $);
            }
            return Rr(t, m, B, R, f, he.current, b);
          }
        }
        var We = re.ReactCurrentOwner, nr = re.ReactDebugCurrentFrame;
        function ve(t) {
          if (t) {
            var u = t._owner, c = Le(t.type, t._source, u ? u.type : null);
            nr.setExtraStackFrame(c);
          } else
            nr.setExtraStackFrame(null);
        }
        var xe;
        xe = false;
        function ge(t) {
          return typeof t == "object" && t !== null && t.$$typeof === se;
        }
        function De() {
          {
            if (We.current) {
              var t = U(We.current.type);
              if (t)
                return `

Check the render method of \`` + t + "`.";
            }
            return "";
          }
        }
        function wr(t) {
          {
            if (t !== void 0) {
              var u = t.fileName.replace(/^.*[\\\/]/, ""), c = t.lineNumber;
              return `

Check your code at ` + u + ":" + c + ".";
            }
            return "";
          }
        }
        var ar = {};
        function Sr(t) {
          {
            var u = De();
            if (!u) {
              var c = typeof t == "string" ? t : t.displayName || t.name;
              c && (u = `

Check the top-level render call using <` + c + ">.");
            }
            return u;
          }
        }
        function or(t, u) {
          {
            if (!t._store || t._store.validated || t.key != null)
              return;
            t._store.validated = true;
            var c = Sr(u);
            if (ar[c])
              return;
            ar[c] = true;
            var f = "";
            t && t._owner && t._owner !== We.current && (f = " It was passed a child from " + U(t._owner.type) + "."), ve(t), L('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, f), ve(null);
          }
        }
        function ur(t, u) {
          {
            if (typeof t != "object")
              return;
            if (Ne(t))
              for (var c = 0; c < t.length; c++) {
                var f = t[c];
                ge(f) && or(f, u);
              }
            else if (ge(t))
              t._store && (t._store.validated = true);
            else if (t) {
              var R = we(t);
              if (typeof R == "function" && R !== t.entries)
                for (var S = R.call(t), b; !(b = S.next()).done; )
                  ge(b.value) && or(b.value, u);
            }
          }
        }
        function Fe(t) {
          {
            var u = t.type;
            if (u == null || typeof u == "string")
              return;
            var c;
            if (typeof u == "function")
              c = u.propTypes;
            else if (typeof u == "object" && (u.$$typeof === K || u.$$typeof === q))
              c = u.propTypes;
            else
              return;
            if (c) {
              var f = U(u);
              pe(c, t.props, "prop", f, t);
            } else if (u.PropTypes !== void 0 && !xe) {
              xe = true;
              var R = U(u);
              L("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", R || "Unknown");
            }
            typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && L("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
          }
        }
        function Be(t) {
          {
            for (var u = Object.keys(t.props), c = 0; c < u.length; c++) {
              var f = u[c];
              if (f !== "children" && f !== "key") {
                ve(t), L("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", f), ve(null);
                break;
              }
            }
            t.ref !== null && (ve(t), L("Invalid attribute `ref` supplied to `React.Fragment`."), ve(null));
          }
        }
        function ze(t, u, c, f, R, S) {
          {
            var b = N(t);
            if (!b) {
              var m = "";
              (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var B = wr(R);
              B ? m += B : m += De();
              var D;
              t === null ? D = "null" : Ne(t) ? D = "array" : t !== void 0 && t.$$typeof === se ? (D = "<" + (U(t.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : D = typeof t, L("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", D, m);
            }
            var $ = Cr(t, u, c, R, S);
            if ($ == null)
              return $;
            if (b) {
              var J = u.children;
              if (J !== void 0)
                if (f)
                  if (Ne(J)) {
                    for (var _e = 0; _e < J.length; _e++)
                      ur(J[_e], t);
                    Object.freeze && Object.freeze(J);
                  } else
                    L("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                else
                  ur(J, t);
            }
            return t === I ? Be($) : Fe($), $;
          }
        }
        function Tr(t, u, c) {
          return ze(t, u, c, true);
        }
        function Or(t, u, c) {
          return ze(t, u, c, false);
        }
        var Pr = Or, kr = Tr;
        Ge.Fragment = I, Ge.jsx = Pr, Ge.jsxs = kr;
      }()), Ge;
    }
    (function(k) {
      false ? k.exports = zt() : k.exports = qt();
    })(Wt);
    var Ht = Nr.jsx;
    function Gt() {
      return Ht("footer", { children: "Footer" });
    }
    exports.Footer = Gt;
  }
});

// ../../packages/shared/dist/index.js
var require_dist3 = __commonJS({
  "../../packages/shared/dist/index.js"(exports, module) {
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export = (target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export(src_exports, {
      hello: () => hello2
    });
    module.exports = __toCommonJS(src_exports);
    function hello2() {
      console.warn("Hello World");
      return "Hello";
    }
  }
});

// app/routes/index.tsx
var import_header = __toESM(require_dist());
var import_footer = __toESM(require_dist2());
var import_shared = __toESM(require_dist3());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_header.Header, {}, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => (0, import_shared.hello)(), children: "Content!" }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_footer.Footer, {}, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/index.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-N7RZDU4W.js.map
