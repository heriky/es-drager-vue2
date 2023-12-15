import { watch as q, onBeforeUnmount as Xe, ref as _, onMounted as Ye, defineComponent as de, computed as G, openBlock as T, createElementBlock as J, renderSlot as K, createElementVNode as U, createBlock as ae, resolveDynamicComponent as ze, normalizeClass as De, unref as Y, normalizeStyle as le, withModifiers as Be, withCtx as ce, Fragment as xe, renderList as Ce, normalizeProps as _e, guardReactiveProps as Ne, createCommentVNode as ue } from "vue";
const Te = {
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
function Z(n, o) {
  const e = (t) => {
    o && o(t), document.removeEventListener("mousemove", n), document.removeEventListener("mouseup", e), document.removeEventListener("mouseleave", e), document.removeEventListener("touchmove", n), document.removeEventListener("touchend", e);
  };
  document.addEventListener("mousemove", n), document.addEventListener("mouseup", e), document.addEventListener("mouseleave", e), document.addEventListener("touchmove", n), document.addEventListener("touchend", e);
}
function S(n) {
  let o = 0, e = 0;
  if (Se(n)) {
    const t = n.targetTouches[0];
    o = t.pageX, e = t.pageY;
  } else
    o = n.clientX, e = n.clientY;
  return { clientX: o, clientY: e };
}
function Se(n) {
  const o = Object.prototype.toString.call(n);
  return o.substring(8, o.length - 1) === "TouchEvent";
}
const V = (n = 0) => parseInt(n + "") + "px", j = {
  n: "top",
  s: "bottom",
  e: "right",
  w: "left",
  ne: "top-right",
  nw: "top-left",
  se: "bottom-right",
  sw: "bottom-left"
}, Q = ["n", "ne", "e", "se", "s", "sw", "w", "nw"], Pe = { n: 0, ne: 1, e: 2, se: 3, s: 4, sw: 5, w: 6, nw: 7 }, Ie = {
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
}, $e = (n, o) => {
  const e = Ie[Math.floor(n / 30)], s = (Pe[o] + e) % 8;
  return Q[s];
}, he = (n = 0, o) => {
  let e = [];
  for (let t = 0; t < Q.length; t++) {
    const s = Q[t], [h, l] = j[s].split("-"), u = $e(n, s), c = {
      [h]: "0%",
      cursor: u + "-resize",
      side: j[s]
    };
    if (l)
      c[l] = "0%";
    else {
      const m = ["top", "bottom"].includes(h) ? "left" : "top";
      c[m] = "50%";
    }
    o ? o.includes(j[s]) && e.push(c) : e.push(c);
  }
  return e;
}, H = (n) => n * Math.PI / 180, Ve = (n, o) => Math.sqrt(n * n + o * o), y = (n) => Math.cos(H(n)), b = (n) => Math.sin(H(n)), Ge = (n, o, e, t, s, h, l) => {
  let { width: u, height: c, centerX: m, centerY: p, rotateAngle: i } = o;
  const f = u < 0 ? -1 : 1, g = c < 0 ? -1 : 1;
  switch (u = Math.abs(u), c = Math.abs(c), n) {
    case "right": {
      const a = C(u, e, h);
      u = a.width, e = a.deltaW, s ? (t = e / s, c = u / s, m += e / 2 * y(i) - t / 2 * b(i), p += e / 2 * b(i) + t / 2 * y(i)) : (m += e / 2 * y(i), p += e / 2 * b(i));
      break;
    }
    case "top-right": {
      t = -t;
      const a = C(u, e, h);
      u = a.width, e = a.deltaW;
      const d = x(c, t, l);
      c = d.height, t = d.deltaH, s && (e = t * s, u = c * s), m += e / 2 * y(i) + t / 2 * b(i), p += e / 2 * b(i) - t / 2 * y(i);
      break;
    }
    case "bottom-right": {
      const a = C(u, e, h);
      u = a.width, e = a.deltaW;
      const d = x(c, t, l);
      c = d.height, t = d.deltaH, s && (e = t * s, u = c * s), m += e / 2 * y(i) - t / 2 * b(i), p += e / 2 * b(i) + t / 2 * y(i);
      break;
    }
    case "bottom": {
      const a = x(c, t, l);
      c = a.height, t = a.deltaH, s ? (e = t * s, u = c * s, m += e / 2 * y(i) - t / 2 * b(i), p += e / 2 * b(i) + t / 2 * y(i)) : (m -= t / 2 * b(i), p += t / 2 * y(i));
      break;
    }
    case "bottom-left": {
      e = -e;
      const a = C(u, e, h);
      u = a.width, e = a.deltaW;
      const d = x(c, t, l);
      c = d.height, t = d.deltaH, s && (c = u / s, t = e / s), m -= e / 2 * y(i) + t / 2 * b(i), p -= e / 2 * b(i) - t / 2 * y(i);
      break;
    }
    case "left": {
      e = -e;
      const a = C(u, e, h);
      u = a.width, e = a.deltaW, s ? (c = u / s, t = e / s, m -= e / 2 * y(i) + t / 2 * b(i), p -= e / 2 * b(i) - t / 2 * y(i)) : (m -= e / 2 * y(i), p -= e / 2 * b(i));
      break;
    }
    case "top-left": {
      e = -e, t = -t;
      const a = C(u, e, h);
      u = a.width, e = a.deltaW;
      const d = x(c, t, l);
      c = d.height, t = d.deltaH, s && (u = c * s, e = t * s), m -= e / 2 * y(i) - t / 2 * b(i), p -= e / 2 * b(i) + t / 2 * y(i);
      break;
    }
    case "top": {
      t = -t;
      const a = x(c, t, l);
      c = a.height, t = a.deltaH, s ? (u = c * s, e = t * s, m += e / 2 * y(i) + t / 2 * b(i), p += e / 2 * b(i) - t / 2 * y(i)) : (m += t / 2 * b(i), p -= t / 2 * y(i));
      break;
    }
  }
  return {
    position: {
      centerX: m,
      centerY: p
    },
    size: {
      width: u * f,
      height: c * g
    }
  };
}, x = (n, o, e) => {
  const t = n + o;
  return t > e ? n = t : (o = e - n, n = e), { height: n, deltaH: o };
}, C = (n, o, e) => {
  const t = n + o;
  return t > e ? n = t : (o = e - n, n = e), { width: n, deltaW: o };
}, Ke = ({
  centerX: n,
  centerY: o,
  width: e,
  height: t,
  angle: s
}) => ({
  top: o - t / 2,
  left: n - e / 2,
  width: e,
  height: t,
  angle: s
}), Ue = (n, o, e) => {
  const { width: t, height: s } = n;
  return {
    width: Math.abs(t),
    height: Math.abs(s),
    left: o - Math.abs(t) / 2,
    top: e - Math.abs(s) / 2
  };
};
function F(n, o) {
  const e = Math.abs(n) % o, t = n > 0 ? o : -o;
  let s = 0;
  return e > o / 2 ? s = t * Math.ceil(Math.abs(n) / o) : s = t * Math.floor(Math.abs(n) / o), s;
}
function Fe(n, o) {
  if (!n || !o)
    return !1;
  const e = n.getBoundingClientRect(), t = o.getBoundingClientRect();
  return e.left < t.left + t.width && e.left + e.width > t.left && e.top < t.top + t.height && e.top + e.height > t.top;
}
function Oe(n, o, e, {
  getBoundary: t,
  fixBoundary: s,
  checkDragerCollision: h,
  emit: l
}) {
  let u = 0, c = 0;
  const m = (i) => {
    let { left: f, top: g } = o.value;
    if (u || (u = f), c || (c = g), ["ArrowRight", "ArrowLeft"].includes(i.key)) {
      const a = i.key === "ArrowRight";
      let d = a ? 1 : -1;
      n.snapToGrid && (d = a ? n.gridX : -n.gridX), f = f + d;
    } else if (["ArrowUp", "ArrowDown"].includes(i.key)) {
      const a = i.key === "ArrowDown";
      let d = a ? 1 : -1;
      n.snapToGrid && (d = a ? n.gridY : -n.gridY), g = g + d;
    }
    if (n.boundary) {
      const [a, d, M, A] = t();
      [f, g] = s(f, g, a, d, M, A);
    }
    o.value.left = f, o.value.top = g, l("change", { ...o.value });
  }, p = (i) => {
    ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"].includes(i.key) && n.checkCollision && h() && (o.value.left = u, o.value.top = c), u = 0, c = 0;
  };
  q(e, (i) => {
    n.disabledKeyEvent || (i ? (document.addEventListener("keydown", m), document.addEventListener("keyup", p)) : (document.removeEventListener("keydown", m), document.removeEventListener("keyup", p)));
  }), Xe(() => {
    document.removeEventListener("keydown", m), document.removeEventListener("keyup", p);
  });
}
function je(n, o, e) {
  const t = _(!1), s = _(!1), h = _({
    width: o.width,
    height: o.height,
    left: o.left,
    top: o.top,
    angle: o.angle
  }), l = /* @__PURE__ */ new Set();
  function u(f) {
    if (l.add(f.button), o.disabled)
      return;
    t.value = !0, s.value = !0;
    let { clientX: g, clientY: a } = S(f);
    const { left: d, top: M } = h.value;
    let A = 0, r = 0, w = 0, v = 0;
    o.boundary && ([A, r, w, v] = c()), e && e("drag-start", h.value), Z((k) => {
      if (l.size > 1)
        return;
      const { clientX: E, clientY: B } = S(k);
      let R = (E - g) / o.scaleRatio + d, X = (B - a) / o.scaleRatio + M;
      if (o.snapToGrid) {
        let { left: N, top: P } = h.value;
        const O = R - N, z = X - P;
        R = N + F(O, o.gridX), X = P + F(z, o.gridY);
      }
      o.boundary && ([R, X] = m(R, X, A, r, w, v)), h.value.left = R, h.value.top = X, e && e("drag", h.value);
    }, (k) => {
      o.checkCollision && p() && (h.value.top = M, h.value.left = d), l.clear(), t.value = !1, document.addEventListener("click", i, { once: !0 }), e && e("drag-end", h.value);
    });
  }
  const c = () => {
    let f = 0, g = 0;
    const { left: a, top: d, height: M, width: A, angle: r } = h.value, v = (n.value.parentElement || document.body).getBoundingClientRect();
    if (r && o.scaleRatio === 1) {
      const E = n.value.getBoundingClientRect();
      f = Math.abs(E.left - (a + v.left)), g = Math.abs(E.top - (d + v.top));
    }
    const L = v.width / o.scaleRatio - A, k = v.height / o.scaleRatio - M;
    return [f, L - f, g, k - g, v.width / o.scaleRatio, v.height / o.scaleRatio];
  }, m = (f, g, a, d, M, A) => (f = f < a ? a : f, f = f > d ? d : f, g = g < M ? M : g, g = g > A ? A : g, [f, g]), p = () => {
    const f = n.value.parentElement || document.body, g = Array.from(f.children).filter((a) => a !== n.value && a.classList.contains("es-drager"));
    for (let a = 0; a < g.length; a++) {
      const d = g[a];
      if (Fe(n.value, d))
        return !0;
    }
  }, i = () => {
    s.value = !1;
  };
  return Oe(
    o,
    h,
    s,
    {
      getBoundary: c,
      fixBoundary: m,
      checkDragerCollision: p,
      emit: e
    }
  ), Ye(() => {
    if (n.value) {
      if (!h.value.width && !h.value.height) {
        const { width: f, height: g } = n.value.getBoundingClientRect();
        h.value = {
          ...h.value,
          width: f || 100,
          height: g || 100
        }, e("change", { ...h.value });
      }
      n.value.addEventListener("mousedown", u), n.value.addEventListener("touchstart", u, {
        passive: !0
      });
    }
  }), {
    isMousedown: t,
    selected: s,
    dragData: h,
    getBoundary: c,
    checkDragerCollision: p
  };
}
const qe = /* @__PURE__ */ U("div", { class: "es-drager-rotate-handle" }, [
  /* @__PURE__ */ U("svg", {
    viewBox: "0 0 1024 1024",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    /* @__PURE__ */ U("path", {
      fill: "currentColor",
      d: "M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z"
    })
  ])
], -1), Je = /* @__PURE__ */ de({
  __name: "rotate",
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    element: {
      type: Object
    }
  },
  emits: [
    "update:modelValue",
    "rotate",
    "rotate-start",
    "rotate-end"
  ],
  setup(n, { emit: o }) {
    const e = n, t = _(null), s = G({
      get: () => e.modelValue,
      set: (l) => {
        o("update:modelValue", l);
      }
    });
    function h(l) {
      if (!e.element)
        return console.warn(
          "[es-drager] rotate component need drag element property"
        );
      l.stopPropagation();
      const { width: u, height: c, left: m, top: p } = e.element.getBoundingClientRect(), i = m + u / 2, f = p + c / 2;
      o("rotate-start", s.value), Z(
        (g) => {
          const { clientX: a, clientY: d } = S(g), M = i - a, A = f - d, w = Math.atan2(A, M) * 180 / Math.PI - 90;
          s.value = (w + 360) % 360, o("rotate", s.value);
        },
        () => {
          o("rotate-end", s.value);
        }
      );
    }
    return (l, u) => (T(), J("div", {
      ref_key: "rotateRef",
      ref: t,
      class: "es-drager-rotate",
      onMousedown: h,
      onTouchstartPassive: h
    }, [
      K(l.$slots, "default", {}, () => [
        qe
      ])
    ], 544));
  }
});
const Qe = ["data-side", "onMousedown", "onTouchstartPassive"], Ze = /* @__PURE__ */ U("div", { class: "es-drager-dot-handle" }, null, -1), fe = /* @__PURE__ */ de({
  __name: "drager",
  props: Te,
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
  setup(n, { emit: o }) {
    const e = n, t = (r, ...w) => {
      o(r, ...w), o("change", ...w);
    }, s = _(null), { selected: h, dragData: l, isMousedown: u, getBoundary: c, checkDragerCollision: m } = je(
      s,
      e,
      t
    ), p = _(he(0, e.resizeList)), i = G(() => e.resizable && !e.disabled), f = G(
      () => e.rotatable && !e.disabled && h.value
    ), g = G(() => {
      const { width: r, height: w, left: v, top: L, angle: k } = l.value, E = {};
      return r && (E.width = V(r)), w && (E.height = V(w)), {
        ...E,
        left: V(v),
        top: V(L),
        zIndex: e.zIndex,
        transform: `rotate(${k}deg)`,
        "--es-drager-color": e.color
      };
    });
    function a(r) {
      s.value || (s.value = r.$el || r);
    }
    function d(r) {
      p.value = he(r, e.resizeList), t("rotate-end", l.value);
    }
    function M(r, w) {
      if (e.disabled)
        return;
      w.stopPropagation();
      const { clientX: v, clientY: L } = S(w), k = v, E = L, { width: B, height: R, left: X, top: N } = l.value, P = X + B / 2, O = N + R / 2, z = {
        width: B,
        height: R,
        centerX: P,
        centerY: O,
        rotateAngle: l.value.angle
      }, ge = r.side, { minWidth: ve, minHeight: we, aspectRatio: W, equalProportion: me } = e;
      t("resize-start", l.value);
      let ee = [];
      e.boundary && (ee = c()), Z((te) => {
        const { clientX: pe, clientY: ye } = S(te);
        let I = (pe - k) / e.scaleRatio, $ = (ye - E) / e.scaleRatio;
        e.snapToGrid && (I = F(I, e.gridX), $ = F($, e.gridY));
        const be = Math.atan2($, I), ne = Ve(I, $), Me = te.shiftKey, oe = be - H(z.rotateAngle), ke = ne * Math.cos(oe), Ee = ne * Math.sin(oe), se = (me || Me) && !W ? z.width / z.height : W, {
          position: { centerX: ie, centerY: re },
          size: { width: Ae, height: Le }
        } = Ge(
          ge,
          { ...z, rotateAngle: z.rotateAngle },
          ke,
          Ee,
          se,
          ve,
          we
        ), Re = Ke({
          centerX: ie,
          centerY: re,
          width: Ae,
          height: Le,
          angle: l.value.angle
        });
        let D = {
          ...l.value,
          ...Ue(Re, ie, re)
        };
        e.maxWidth > 0 && (D.width = Math.min(D.width, e.maxWidth)), e.maxHeight > 0 && (D.height = Math.min(D.height, e.maxHeight)), e.boundary && (D = A(D, ee, se)), l.value = D, t("resize", l.value);
      }, () => {
        e.checkCollision && m() && (l.value = { ...l.value, width: B, height: R, left: X, top: N }), t("resize-end", l.value);
      });
    }
    function A(r, w, v) {
      const [L, k, E, B, R, X] = w;
      return r.left < L && (r.left = L, r.width = l.value.width, v && (r.height = l.value.height)), r.left + r.width > R && (r.left = l.value.left, r.width = R - r.left, v && (r.height = l.value.height)), r.top < E && (r.top = E, r.height = l.value.height, v && (r.width = l.value.width)), r.top + r.height > X && (r.top = l.value.top, r.height = X - r.top, v && (r.width = l.value.width)), r;
    }
    return q(
      () => [e.width, e.height, e.left, e.top, e.angle],
      ([r, w, v, L, k]) => {
        l.value = {
          ...l.value,
          width: r,
          height: w,
          left: v,
          top: L,
          angle: k
        };
      }
    ), q(
      () => e.selected,
      (r) => {
        h.value = r;
      },
      { immediate: !0 }
    ), (r, w) => (T(), ae(ze(r.tag), {
      ref: a,
      class: De([
        "es-drager",
        { disabled: r.disabled, dragging: Y(u), selected: Y(h), border: r.border }
      ]),
      style: le(Y(g)),
      onClick: w[3] || (w[3] = Be(() => {
      }, ["stop"]))
    }, {
      default: ce(() => [
        K(r.$slots, "default"),
        Y(i) ? (T(!0), J(xe, { key: 0 }, Ce(Y(p), (v, L) => (T(), J("div", {
          key: L,
          class: "es-drager-dot",
          "data-side": v.side,
          style: le({ ...v }),
          onMousedown: (k) => M(v, k),
          onTouchstartPassive: (k) => M(v, k)
        }, [
          K(r.$slots, "resize", _e(Ne({ side: v.side })), () => [
            Ze
          ])
        ], 44, Qe))), 128)) : ue("", !0),
        Y(f) ? (T(), ae(Je, {
          key: 1,
          modelValue: Y(l).angle,
          "onUpdate:modelValue": w[0] || (w[0] = (v) => Y(l).angle = v),
          element: Y(s),
          onRotate: w[1] || (w[1] = (v) => t("rotate", Y(l))),
          onRotateStart: w[2] || (w[2] = (v) => t("rotate-start", Y(l))),
          onRotateEnd: d
        }, {
          default: ce(() => [
            K(r.$slots, "rotate")
          ]),
          _: 3
        }, 8, ["modelValue", "element"])) : ue("", !0)
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
});
const He = (n) => {
  n.component("es-drager", fe);
};
fe.install = He;
export {
  fe as ESDrager,
  fe as default,
  He as install
};
