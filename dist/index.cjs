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

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Button: () => Button,
  Header: () => Header,
  Input: () => Input,
  List: () => List,
  colors: () => colors,
  radii: () => radii,
  spacing: () => spacing,
  tokens: () => tokens
});
module.exports = __toCommonJS(index_exports);

// src/components/Button.tsx
var import_react_native = require("react-native");

// src/tokens.ts
var colors = { ink: "#18202a", muted: "#657383", canvas: "#f5f7fa", surface: "#ffffff", primary: "#2563eb", primaryPressed: "#1d4ed8", secondary: "#e8eef8", danger: "#b42318", dangerSurface: "#fff1f0", border: "#cbd5e1", focus: "#93c5fd", success: "#16794b" };
var spacing = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32 };
var radii = { sm: 6, md: 10, lg: 16, pill: 999 };
var tokens = { colors, spacing, radii };

// src/components/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Button({ variant = "primary", size = "medium", children, disabled, style, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native.Pressable, { accessibilityRole: "button", accessibilityState: { disabled }, disabled, style: ({ pressed }) => [styles.base, styles[size], styles[variant], disabled && styles.disabled, pressed && !disabled && styles.pressed, typeof style === "function" ? style({ pressed }) : style], ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native.Text, { style: [styles.label, variant === "secondary" && styles.secondaryLabel, disabled && styles.disabledLabel], children }) });
}
var styles = import_react_native.StyleSheet.create({
  base: { alignItems: "center", justifyContent: "center", borderRadius: radii.md },
  small: { minHeight: 36, paddingHorizontal: spacing.md },
  medium: { minHeight: 44, paddingHorizontal: spacing.lg },
  large: { minHeight: 52, paddingHorizontal: spacing.xl },
  primary: { backgroundColor: colors.primary },
  secondary: { backgroundColor: colors.secondary },
  danger: { backgroundColor: colors.danger },
  label: { color: colors.surface, fontSize: 16, fontWeight: "700" },
  secondaryLabel: { color: colors.ink },
  disabled: { backgroundColor: colors.border },
  disabledLabel: { color: colors.muted },
  pressed: { opacity: 0.8 }
});

// src/components/Header.tsx
var import_react_native2 = require("react-native");
var import_jsx_runtime2 = require("react/jsx-runtime");
function Header({ siteName = "Acme", loggedIn = false, userName = "Alex", onSignIn, onSignOut }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react_native2.View, { style: styles2.container, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_native2.Text, { accessibilityRole: "header", style: styles2.brand, children: siteName }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react_native2.View, { style: styles2.nav, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_native2.Text, { style: styles2.link, children: "Products" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_native2.Text, { style: styles2.link, children: "About" })
    ] }),
    loggedIn ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react_native2.View, { style: styles2.account, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react_native2.Text, { style: styles2.greeting, children: [
        "Hi, ",
        userName
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_native2.Pressable, { accessibilityRole: "button", onPress: onSignOut, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_native2.Text, { style: styles2.action, children: "Sign out" }) })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_native2.Pressable, { accessibilityRole: "button", onPress: onSignIn, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_native2.Text, { style: styles2.action, children: "Sign in" }) })
  ] });
}
var styles2 = import_react_native2.StyleSheet.create({ container: { alignItems: "center", backgroundColor: colors.surface, borderBottomColor: colors.border, borderBottomWidth: 1, flexDirection: "row", gap: spacing.lg, justifyContent: "space-between", paddingHorizontal: spacing.lg, paddingVertical: spacing.md }, brand: { color: colors.ink, fontSize: 20, fontWeight: "800" }, nav: { flexDirection: "row", gap: spacing.md, flex: 1 }, link: { color: colors.muted, fontSize: 14 }, account: { alignItems: "center", flexDirection: "row", gap: spacing.sm }, greeting: { color: colors.muted, fontSize: 14 }, action: { color: colors.primary, fontSize: 14, fontWeight: "700" } });

// src/components/Input.tsx
var import_react_native3 = require("react-native");
var import_jsx_runtime3 = require("react/jsx-runtime");
function Input({ label, error, hint, id, accessibilityLabel, style, ...props }) {
  const inputId = id ?? `input-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react_native3.View, { style: styles3.field, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_native3.Text, { nativeID: `${inputId}-label`, style: styles3.label, children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_native3.TextInput, { nativeID: inputId, accessibilityLabel: accessibilityLabel ?? label, accessibilityState: { disabled: props.editable === false }, style: [styles3.control, error && styles3.errorControl, style], placeholderTextColor: colors.muted, ...props }),
    (error || hint) && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_native3.Text, { style: error ? styles3.error : styles3.hint, children: error ?? hint })
  ] });
}
var styles3 = import_react_native3.StyleSheet.create({ field: { gap: spacing.sm, width: "100%" }, label: { color: colors.ink, fontSize: 15, fontWeight: "700" }, control: { backgroundColor: colors.surface, borderColor: colors.border, borderRadius: radii.md, borderWidth: 1, color: colors.ink, fontSize: 16, minHeight: 46, paddingHorizontal: spacing.md, paddingVertical: spacing.sm }, errorControl: { borderColor: colors.danger, backgroundColor: colors.dangerSurface }, hint: { color: colors.muted, fontSize: 13 }, error: { color: colors.danger, fontSize: 13, fontWeight: "600" } });

// src/components/List.tsx
var import_react_native4 = require("react-native");
var import_jsx_runtime4 = require("react/jsx-runtime");
function List({ items, variant = "plain", emptyMessage = "No items yet." }) {
  if (!items.length) return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_native4.Text, { style: styles4.empty, children: emptyMessage });
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_native4.View, { accessibilityRole: "list", style: [styles4.list, variant === "bordered" && styles4.bordered, variant === "compact" && styles4.compact], children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_react_native4.View, { accessibilityRole: "listitem", style: styles4.item, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_native4.Text, { style: styles4.title, children: item.title }),
    item.description && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_native4.Text, { style: styles4.description, children: item.description })
  ] }, item.id)) });
}
var styles4 = import_react_native4.StyleSheet.create({ list: { gap: spacing.md, width: "100%" }, bordered: { backgroundColor: colors.surface, borderColor: colors.border, borderRadius: radii.md, borderWidth: 1, padding: spacing.md }, compact: { gap: spacing.xs }, item: { gap: spacing.xs, paddingVertical: spacing.sm }, title: { color: colors.ink, fontSize: 16, fontWeight: "700" }, description: { color: colors.muted, fontSize: 14 }, empty: { color: colors.muted, fontSize: 15, paddingVertical: spacing.lg } });
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Header,
  Input,
  List,
  colors,
  radii,
  spacing,
  tokens
});
//# sourceMappingURL=index.cjs.map