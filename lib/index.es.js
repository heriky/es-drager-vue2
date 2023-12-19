import { watch as U, onBeforeUnmount as _e, ref as x, onMounted as ye, defineComponent as oe, computed as P } from "vue";
const be = {
  tag: {
    type: [String, Object],
    default: "div"
  },
  resizable: {
    type: Boolean,
    default: !0
  },
  rotatable: {
    type: Boolean,
    default: !1
  },
  boundary: {
    // 边界
    type: Boolean
  },
  disabled: Boolean,
  width: {
    type: Number,
    default: 0
  },
  height: {
    type: Number,
    default: 0
  },
  left: {
    type: Number,
    default: 0
  },
  top: {
    type: Number,
    default: 0
  },
  zIndex: {
    type: Number,
    default: 0
  },
  angle: {
    type: Number,
    default: 0
  },
  color: {
    type: String,
    default: "#3a7afe"
  },
  minWidth: {
    type: Number,
    default: -1 / 0
  },
  minHeight: {
    type: Number,
    default: -1 / 0
  },
  maxWidth: {
    type: Number,
    default: 0
  },
  maxHeight: {
    type: Number,
    default: 0
  },
  aspectRatio: {
    // 缩放比例
    type: Number
  },
  selected: Boolean,
  snapToGrid: Boolean,
  gridX: {
    type: Number,
    default: 50
  },
  gridY: {
    type: Number,
    default: 50
  },
  scaleRatio: {
    type: Number,
    default: 1
  },
  disabledKeyEvent: Boolean,
  border: {
    type: Boolean,
    default: !0
    // 兼容默认
  },
  resizeList: {
    type: Array
    // 要显示的缩放handle列表，默认显示全部
  },
  equalProportion: {
    // 是否等比例缩放
    type: Boolean
  },
  checkCollision: {
    // 是否开启碰撞检查
    type: Boolean
  }
};
function q(o, n) {
  const e = (t) => {
    n && n(t), document.removeEventListener("mousemove", o), document.removeEventListener("mouseup", e), document.removeEventListener("mouseleave", e), document.removeEventListener("touchmove", o), document.removeEventListener("touchend", e);
  };
  document.addEventListener("mousemove", o), document.addEventListener("mouseup", e), document.addEventListener("mouseleave", e), document.addEventListener("touchmove", o), document.addEventListener("touchend", e);
}
function N(o) {
  let n = 0, e = 0;
  if (Me(o)) {
    const t = o.targetTouches[0];
    n = t.pageX, e = t.pageY;
  } else
    n = o.clientX, e = o.clientY;
  return { clientX: n, clientY: e };
}
function Me(o) {
  const n = Object.prototype.toString.call(o);
  return n.substring(8, n.length - 1) === "TouchEvent";
}
const I = (o = 0) => parseInt(o + "") + "px", K = {
  n: "top",
  s: "bottom",
  e: "right",
  w: "left",
  ne: "top-right",
  nw: "top-left",
  se: "bottom-right",
  sw: "bottom-left"
}, O = ["n", "ne", "e", "se", "s", "sw", "w", "nw"], Re = { n: 0, ne: 1, e: 2, se: 3, s: 4, sw: 5, w: 6, nw: 7 }, Ee = {
  0: 0,
  1: 1,
  2: 2,
  3: 2,
  4: 3,
  5: 4,
  6: 4,
  7: 5,
  8: 6,
  9: 6,
  10: 7,
  11: 8
}, ke = (o, n) => {
  const e = Ee[Math.floor(o / 30)], s = (Re[n] + e) % 8;
  return O[s];
}, ne = (o = 0, n) => {
  let e = [];
  for (let t = 0; t < O.length; t++) {
    const s = O[t], [h, c] = K[s].split("-"), d = ke(o, s), i = {
      [h]: "0%",
      cursor: d + "-resize",
      side: K[s]
    };
    if (c)
      i[c] = "0%";
    else {
      const f = ["top", "bottom"].includes(h) ? "left" : "top";
      i[f] = "50%";
    }
    n ? n.includes(K[s]) && e.push(i) : e.push(i);
  }
  return e;
}, V = (o) => o * Math.PI / 180, Ae = (o, n) => Math.sqrt(o * o + n * n), m = (o) => Math.cos(V(o)), _ = (o) => Math.sin(V(o)), De = (o, n, e, t, s, h, c) => {
  let { width: d, height: i, centerX: f, centerY: p, rotateAngle: r } = n;
  const u = d < 0 ? -1 : 1, g = i < 0 ? -1 : 1;
  switch (d = Math.abs(d), i = Math.abs(i), o) {
    case "right": {
      const a = z(d, e, h);
      d = a.width, e = a.deltaW, s ? (t = e / s, i = d / s, f += e / 2 * m(r) - t / 2 * _(r), p += e / 2 * _(r) + t / 2 * m(r)) : (f += e / 2 * m(r), p += e / 2 * _(r));
      break;
    }
    case "top-right": {
      t = -t;
      const a = z(d, e, h);
      d = a.width, e = a.deltaW;
      const v = Y(i, t, c);
      i = v.height, t = v.deltaH, s && (e = t * s, d = i * s), f += e / 2 * m(r) + t / 2 * _(r), p += e / 2 * _(r) - t / 2 * m(r);
      break;
    }
    case "bottom-right": {
      const a = z(d, e, h);
      d = a.width, e = a.deltaW;
      const v = Y(i, t, c);
      i = v.height, t = v.deltaH, s && (e = t * s, d = i * s), f += e / 2 * m(r) - t / 2 * _(r), p += e / 2 * _(r) + t / 2 * m(r);
      break;
    }
    case "bottom": {
      const a = Y(i, t, c);
      i = a.height, t = a.deltaH, s ? (e = t * s, d = i * s, f += e / 2 * m(r) - t / 2 * _(r), p += e / 2 * _(r) + t / 2 * m(r)) : (f -= t / 2 * _(r), p += t / 2 * m(r));
      break;
    }
    case "bottom-left": {
      e = -e;
      const a = z(d, e, h);
      d = a.width, e = a.deltaW;
      const v = Y(i, t, c);
      i = v.height, t = v.deltaH, s && (i = d / s, t = e / s), f -= e / 2 * m(r) + t / 2 * _(r), p -= e / 2 * _(r) - t / 2 * m(r);
      break;
    }
    case "left": {
      e = -e;
      const a = z(d, e, h);
      d = a.width, e = a.deltaW, s ? (i = d / s, t = e / s, f -= e / 2 * m(r) + t / 2 * _(r), p -= e / 2 * _(r) - t / 2 * m(r)) : (f -= e / 2 * m(r), p -= e / 2 * _(r));
      break;
    }
    case "top-left": {
      e = -e, t = -t;
      const a = z(d, e, h);
      d = a.width, e = a.deltaW;
      const v = Y(i, t, c);
      i = v.height, t = v.deltaH, s && (d = i * s, e = t * s), f -= e / 2 * m(r) - t / 2 * _(r), p -= e / 2 * _(r) + t / 2 * m(r);
      break;
    }
    case "top": {
      t = -t;
      const a = Y(i, t, c);
      i = a.height, t = a.deltaH, s ? (d = i * s, e = t * s, f += e / 2 * m(r) + t / 2 * _(r), p += e / 2 * _(r) - t / 2 * m(r)) : (f += t / 2 * _(r), p -= t / 2 * m(r));
      break;
    }
  }
  return {
    position: {
      centerX: f,
      centerY: p
    },
    size: {
      width: d * u,
      height: i * g
    }
  };
}, Y = (o, n, e) => {
  const t = o + n;
  return t > e ? o = t : (n = e - o, o = e), { height: o, deltaH: n };
}, z = (o, n, e) => {
  const t = o + n;
  return t > e ? o = t : (n = e - o, o = e), { width: o, deltaW: n };
}, Le = ({
  centerX: o,
  centerY: n,
  width: e,
  height: t,
  angle: s
}) => ({
  top: n - t / 2,
  left: o - e / 2,
  width: e,
  height: t,
  angle: s
}), Xe = (o, n, e) => {
  const { width: t, height: s } = o;
  return {
    width: Math.abs(t),
    height: Math.abs(s),
    left: n - Math.abs(t) / 2,
    top: e - Math.abs(s) / 2
  };
};
function F(o, n) {
  const e = Math.abs(o) % n, t = o > 0 ? n : -n;
  let s = 0;
  return e > n / 2 ? s = t * Math.ceil(Math.abs(o) / n) : s = t * Math.floor(Math.abs(o) / n), s;
}
function Ce(o, n) {
  if (!o || !n)
    return !1;
  const e = o.getBoundingClientRect(), t = n.getBoundingClientRect();
  return e.left < t.left + t.width && e.left + e.width > t.left && e.top < t.top + t.height && e.top + e.height > t.top;
}
function Ye(o, n, e, {
  getBoundary: t,
  fixBoundary: s,
  checkDragerCollision: h,
  emit: c
}) {
  let d = 0, i = 0;
  const f = (r) => {
    let { left: u, top: g } = n.value;
    if (d || (d = u), i || (i = g), ["ArrowRight", "ArrowLeft"].includes(r.key)) {
      const a = r.key === "ArrowRight";
      let v = a ? 1 : -1;
      o.snapToGrid && (v = a ? o.gridX : -o.gridX), u = u + v;
    } else if (["ArrowUp", "ArrowDown"].includes(r.key)) {
      const a = r.key === "ArrowDown";
      let v = a ? 1 : -1;
      o.snapToGrid && (v = a ? o.gridY : -o.gridY), g = g + v;
    }
    if (o.boundary) {
      const [a, v, b, M] = t();
      [u, g] = s(u, g, a, v, b, M);
    }
    n.value.left = u, n.value.top = g, c("change", { ...n.value });
  }, p = (r) => {
    ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"].includes(r.key) && o.checkCollision && h() && (n.value.left = d, n.value.top = i), d = 0, i = 0;
  };
  U(e, (r) => {
    o.disabledKeyEvent || (r ? (document.addEventListener("keydown", f), document.addEventListener("keyup", p)) : (document.removeEventListener("keydown", f), document.removeEventListener("keyup", p)));
  }), _e(() => {
    document.removeEventListener("keydown", f), document.removeEventListener("keyup", p);
  });
}
function ze(o, n, e) {
  const t = x(!1), s = x(!1), h = x({
    width: n.width,
    height: n.height,
    left: n.left,
    top: n.top,
    angle: n.angle
  }), c = /* @__PURE__ */ new Set();
  function d(u) {
    if (c.add(u.button), n.disabled)
      return;
    t.value = !0, s.value = !0;
    let { clientX: g, clientY: a } = N(u);
    const { left: v, top: b } = h.value;
    let M = 0, l = 0, y = 0, w = 0;
    n.boundary && ([M, l, y, w] = i()), e && e("drag-start", h.value), q((A) => {
      if (c.size > 1)
        return;
      const { clientX: R, clientY: C } = N(A);
      let E = (R - g) / n.scaleRatio + v, D = (C - a) / n.scaleRatio + b;
      if (n.snapToGrid) {
        let { left: B, top: T } = h.value;
        const G = E - B, L = D - T;
        E = B + F(G, n.gridX), D = T + F(L, n.gridY);
      }
      n.boundary && ([E, D] = f(E, D, M, l, y, w)), h.value.left = E, h.value.top = D, e && e("drag", h.value);
    }, (A) => {
      n.checkCollision && p() && (h.value.top = b, h.value.left = v), c.clear(), t.value = !1, document.addEventListener("click", r, { once: !0 }), e && e("drag-end", h.value);
    });
  }
  const i = () => {
    let u = 0, g = 0;
    const { left: a, top: v, height: b, width: M, angle: l } = h.value, w = (o.value.parentElement || document.body).getBoundingClientRect();
    if (l && n.scaleRatio === 1) {
      const R = o.value.getBoundingClientRect();
      u = Math.abs(R.left - (a + w.left)), g = Math.abs(R.top - (v + w.top));
    }
    const k = w.width / n.scaleRatio - M, A = w.height / n.scaleRatio - b;
    return [u, k - u, g, A - g, w.width / n.scaleRatio, w.height / n.scaleRatio];
  }, f = (u, g, a, v, b, M) => (u = u < a ? a : u, u = u > v ? v : u, g = g < b ? b : g, g = g > M ? M : g, [u, g]), p = () => {
    const u = o.value.parentElement || document.body, g = Array.from(u.children).filter((a) => a !== o.value && a.classList.contains("es-drager"));
    for (let a = 0; a < g.length; a++) {
      const v = g[a];
      if (Ce(o.value, v))
        return !0;
    }
  }, r = () => {
    s.value = !1;
  };
  return Ye(
    n,
    h,
    s,
    {
      getBoundary: i,
      fixBoundary: f,
      checkDragerCollision: p,
      emit: e
    }
  ), ye(() => {
    if (o.value) {
      if (!h.value.width && !h.value.height) {
        const { width: u, height: g } = o.value.getBoundingClientRect();
        h.value = {
          ...h.value,
          width: u || 100,
          height: g || 100
        }, e("change", { ...h.value });
      }
      o.value.addEventListener("mousedown", d), o.value.addEventListener("touchstart", d, {
        passive: !0
      });
    }
  }), {
    isMousedown: t,
    selected: s,
    dragData: h,
    getBoundary: i,
    checkDragerCollision: p
  };
}
const xe = /* @__PURE__ */ oe({
  __name: "rotate",
  props: {
    value: {
      type: Number,
      default: 0
    },
    element: {
      type: HTMLElement,
      default: null
    }
  },
  emits: [
    "input",
    "rotate",
    "rotate-start",
    "rotate-end"
  ],
  setup(o, { emit: n }) {
    const e = o, t = x(null), s = P({
      get: () => e.value,
      set: (c) => {
        n("input", c);
      }
    });
    function h(c) {
      if (!e.element)
        return console.warn(
          "[es-drager] rotate component need drag element property"
        );
      c.stopPropagation();
      const { width: d, height: i, left: f, top: p } = e.element.getBoundingClientRect(), r = f + d / 2, u = p + i / 2;
      n("rotate-start", s.value), q(
        (g) => {
          const { clientX: a, clientY: v } = N(g), b = r - a, M = u - v, y = Math.atan2(M, b) * 180 / Math.PI - 90;
          s.value = (y + 360) % 360, n("rotate", s.value);
        },
        () => {
          n("rotate-end", s.value);
        }
      );
    }
    return { __sfc: !0, props: e, emit: n, rotateRef: t, angle: s, onRotateMousedown: h };
  }
});
function se(o, n, e, t, s, h, c, d) {
  var i = typeof o == "function" ? o.options : o;
  n && (i.render = n, i.staticRenderFns = e, i._compiled = !0), t && (i.functional = !0), h && (i._scopeId = "data-v-" + h);
  var f;
  if (c ? (f = function(u) {
    u = u || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !u && typeof __VUE_SSR_CONTEXT__ < "u" && (u = __VUE_SSR_CONTEXT__), s && s.call(this, u), u && u._registeredComponents && u._registeredComponents.add(c);
  }, i._ssrRegister = f) : s && (f = d ? function() {
    s.call(
      this,
      (i.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : s), f)
    if (i.functional) {
      i._injectStyles = f;
      var p = i.render;
      i.render = function(g, a) {
        return f.call(a), p(g, a);
      };
    } else {
      var r = i.beforeCreate;
      i.beforeCreate = r ? [].concat(r, f) : [f];
    }
  return {
    exports: o,
    options: i
  };
}
var Be = function() {
  var n = this, e = n._self._c, t = n._self._setupProxy;
  return e("div", { ref: "rotateRef", staticClass: "es-drager-rotate", on: { mousedown: t.onRotateMousedown, "&touchstart": function(s) {
    return t.onRotateMousedown.apply(null, arguments);
  } } }, [n._t("default", function() {
    return [e("div", { staticClass: "es-drager-rotate-handle" }, [e("svg", { attrs: { viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg" } }, [e("path", { attrs: { fill: "currentColor", d: "M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z" } })])])];
  })], 2);
}, Ne = [], Te = /* @__PURE__ */ se(
  xe,
  Be,
  Ne,
  !1,
  null,
  null,
  null,
  null
);
const $e = Te.exports, Se = /* @__PURE__ */ oe({
  __name: "drager",
  props: be,
  emits: [
    "change",
    "drag",
    "drag-start",
    "drag-end",
    "resize",
    "resize-start",
    "resize-end",
    "rotate",
    "rotate-start",
    "rotate-end"
  ],
  setup(o, { emit: n }) {
    const e = o, t = (l, ...y) => {
      n(l, ...y), n("change", ...y);
    }, s = x(null), { selected: h, dragData: c, isMousedown: d, getBoundary: i, checkDragerCollision: f } = ze(
      s,
      e,
      t
    ), p = x(ne(0, e.resizeList)), r = P(() => e.resizable && !e.disabled), u = P(
      () => e.rotatable && !e.disabled && h.value
    ), g = P(() => {
      const { width: l, height: y, left: w, top: k, angle: A } = c.value, R = {};
      return l && (R.width = I(l)), y && (R.height = I(y)), {
        ...R,
        left: I(w),
        top: I(k),
        zIndex: e.zIndex,
        transform: `rotate(${A}deg)`,
        "--es-drager-color": e.color
      };
    });
    function a(l) {
      s.value || (s.value = l.$el || l);
    }
    function v(l) {
      p.value = ne(l, e.resizeList), t("rotate-end", c.value);
    }
    function b(l, y) {
      if (e.disabled)
        return;
      y.stopPropagation();
      const { clientX: w, clientY: k } = N(y), A = w, R = k, { width: C, height: E, left: D, top: B } = c.value, T = D + C / 2, G = B + E / 2, L = {
        width: C,
        height: E,
        centerX: T,
        centerY: G,
        rotateAngle: c.value.angle
      }, re = l.side, { minWidth: ae, minHeight: ce, aspectRatio: j, equalProportion: le } = e;
      t("resize-start", c.value);
      let J = [];
      e.boundary && (J = i()), q((Q) => {
        const { clientX: ue, clientY: he } = N(Q);
        let $ = (ue - A) / e.scaleRatio, S = (he - R) / e.scaleRatio;
        e.snapToGrid && ($ = F($, e.gridX), S = F(S, e.gridY));
        const de = Math.atan2(S, $), Z = Ae($, S), fe = Q.shiftKey, H = de - V(L.rotateAngle), ge = Z * Math.cos(H), ve = Z * Math.sin(H), W = (le || fe) && !j ? L.width / L.height : j, {
          position: { centerX: ee, centerY: te },
          size: { width: pe, height: we }
        } = De(
          re,
          { ...L, rotateAngle: L.rotateAngle },
          ge,
          ve,
          W,
          ae,
          ce
        ), me = Le({
          centerX: ee,
          centerY: te,
          width: pe,
          height: we,
          angle: c.value.angle
        });
        let X = {
          ...c.value,
          ...Xe(me, ee, te)
        };
        e.maxWidth > 0 && (X.width = Math.min(X.width, e.maxWidth)), e.maxHeight > 0 && (X.height = Math.min(X.height, e.maxHeight)), e.boundary && (X = M(X, J, W)), c.value = X, t("resize", c.value);
      }, () => {
        e.checkCollision && f() && (c.value = { ...c.value, width: C, height: E, left: D, top: B }), t("resize-end", c.value);
      });
    }
    function M(l, y, w) {
      const [k, A, R, C, E, D] = y;
      return l.left < k && (l.left = k, l.width = c.value.width, w && (l.height = c.value.height)), l.left + l.width > E && (l.left = c.value.left, l.width = E - l.left, w && (l.height = c.value.height)), l.top < R && (l.top = R, l.height = c.value.height, w && (l.width = c.value.width)), l.top + l.height > D && (l.top = c.value.top, l.height = D - l.top, w && (l.width = c.value.width)), l;
    }
    return U(
      () => [e.width, e.height, e.left, e.top, e.angle],
      ([l, y, w, k, A]) => {
        c.value = {
          ...c.value,
          width: l,
          height: y,
          left: w,
          top: k,
          angle: A
        };
      }
    ), U(
      () => e.selected,
      (l) => {
        h.value = l;
      },
      { immediate: !0 }
    ), { __sfc: !0, props: e, emit: n, emitFn: t, dragRef: s, selected: h, dragData: c, isMousedown: d, getBoundary: i, checkDragerCollision: f, dotList: p, showResize: r, showRotate: u, dragStyle: g, setRef: a, handleRotateEnd: v, onDotMousedown: b, fixResizeBoundary: M, Rotate: $e };
  }
});
var Ie = function() {
  var n = this, e = n._self._c, t = n._self._setupProxy;
  return e(n.tag, { ref: t.setRef, tag: "component", class: [
    "es-drager",
    { disabled: n.disabled, dragging: t.isMousedown, selected: t.selected, border: n.border }
  ], style: t.dragStyle, on: { click: function(s) {
    s.stopPropagation();
  } } }, [n._t("default"), t.showResize ? n._l(t.dotList, function(s, h) {
    return e("div", { key: h, staticClass: "es-drager-dot", style: { ...s }, attrs: { "data-side": s.side }, on: { mousedown: function(c) {
      return t.onDotMousedown(s, c);
    }, "&touchstart": function(c) {
      return t.onDotMousedown(s, c);
    } } }, [n._t("resize", function() {
      return [e("div", { staticClass: "es-drager-dot-handle" })];
    }, null, { side: s.side })], 2);
  }) : n._e(), t.showRotate ? e(t.Rotate, { attrs: { element: t.dragRef }, on: { rotate: function(s) {
    return t.emitFn("rotate", t.dragData);
  }, "rotate-start": function(s) {
    return t.emitFn("rotate-start", t.dragData);
  }, "rotate-end": t.handleRotateEnd }, model: { value: t.dragData.angle, callback: function(s) {
    n.$set(t.dragData, "angle", s);
  }, expression: "dragData.angle" } }, [n._t("rotate")], 2) : n._e()], 2);
}, Pe = [], Fe = /* @__PURE__ */ se(
  Se,
  Ie,
  Pe,
  !1,
  null,
  null,
  null,
  null
);
const ie = Fe.exports, Ge = (o) => {
  o.component("es-drager", ie);
};
ie.install = Ge;
export {
  ie as ESDrager,
  ie as default,
  Ge as install
};
