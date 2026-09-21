// src/components/Button.tsx
import { Pressable, StyleSheet, Text } from "react-native";

// src/tokens.ts
var colors = { ink: "#18202a", muted: "#657383", canvas: "#f5f7fa", surface: "#ffffff", primary: "#2563eb", primaryPressed: "#1d4ed8", secondary: "#e8eef8", danger: "#b42318", dangerSurface: "#fff1f0", border: "#cbd5e1", focus: "#93c5fd", success: "#16794b" };
var spacing = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32 };
var radii = { sm: 6, md: 10, lg: 16, pill: 999 };
var tokens = { colors, spacing, radii };

// src/components/Button.tsx
import { jsx } from "react/jsx-runtime";
function Button({ variant = "primary", size = "medium", children, disabled, style, ...props }) {
  return /* @__PURE__ */ jsx(Pressable, { accessibilityRole: "button", accessibilityState: { disabled }, disabled, style: ({ pressed }) => [styles.base, styles[size], styles[variant], disabled && styles.disabled, pressed && !disabled && styles.pressed, typeof style === "function" ? style({ pressed }) : style], ...props, children: /* @__PURE__ */ jsx(Text, { style: [styles.label, variant === "secondary" && styles.secondaryLabel, disabled && styles.disabledLabel], children }) });
}
var styles = StyleSheet.create({
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
import { Pressable as Pressable2, StyleSheet as StyleSheet2, Text as Text2, View } from "react-native";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
function Header({ siteName = "Acme", loggedIn = false, userName = "Alex", onSignIn, onSignOut }) {
  return /* @__PURE__ */ jsxs(View, { style: styles2.container, children: [
    /* @__PURE__ */ jsx2(Text2, { accessibilityRole: "header", style: styles2.brand, children: siteName }),
    /* @__PURE__ */ jsxs(View, { style: styles2.nav, children: [
      /* @__PURE__ */ jsx2(Text2, { style: styles2.link, children: "Products" }),
      /* @__PURE__ */ jsx2(Text2, { style: styles2.link, children: "About" })
    ] }),
    loggedIn ? /* @__PURE__ */ jsxs(View, { style: styles2.account, children: [
      /* @__PURE__ */ jsxs(Text2, { style: styles2.greeting, children: [
        "Hi, ",
        userName
      ] }),
      /* @__PURE__ */ jsx2(Pressable2, { accessibilityRole: "button", onPress: onSignOut, children: /* @__PURE__ */ jsx2(Text2, { style: styles2.action, children: "Sign out" }) })
    ] }) : /* @__PURE__ */ jsx2(Pressable2, { accessibilityRole: "button", onPress: onSignIn, children: /* @__PURE__ */ jsx2(Text2, { style: styles2.action, children: "Sign in" }) })
  ] });
}
var styles2 = StyleSheet2.create({ container: { alignItems: "center", backgroundColor: colors.surface, borderBottomColor: colors.border, borderBottomWidth: 1, flexDirection: "row", gap: spacing.lg, justifyContent: "space-between", paddingHorizontal: spacing.lg, paddingVertical: spacing.md }, brand: { color: colors.ink, fontSize: 20, fontWeight: "800" }, nav: { flexDirection: "row", gap: spacing.md, flex: 1 }, link: { color: colors.muted, fontSize: 14 }, account: { alignItems: "center", flexDirection: "row", gap: spacing.sm }, greeting: { color: colors.muted, fontSize: 14 }, action: { color: colors.primary, fontSize: 14, fontWeight: "700" } });

// src/components/Input.tsx
import { StyleSheet as StyleSheet3, Text as Text3, TextInput, View as View2 } from "react-native";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function Input({ label, error, hint, id, accessibilityLabel, style, ...props }) {
  const inputId = id ?? `input-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  return /* @__PURE__ */ jsxs2(View2, { style: styles3.field, children: [
    /* @__PURE__ */ jsx3(Text3, { nativeID: `${inputId}-label`, style: styles3.label, children: label }),
    /* @__PURE__ */ jsx3(TextInput, { nativeID: inputId, accessibilityLabel: accessibilityLabel ?? label, accessibilityState: { disabled: props.editable === false }, style: [styles3.control, error && styles3.errorControl, style], placeholderTextColor: colors.muted, ...props }),
    (error || hint) && /* @__PURE__ */ jsx3(Text3, { style: error ? styles3.error : styles3.hint, children: error ?? hint })
  ] });
}
var styles3 = StyleSheet3.create({ field: { gap: spacing.sm, width: "100%" }, label: { color: colors.ink, fontSize: 15, fontWeight: "700" }, control: { backgroundColor: colors.surface, borderColor: colors.border, borderRadius: radii.md, borderWidth: 1, color: colors.ink, fontSize: 16, minHeight: 46, paddingHorizontal: spacing.md, paddingVertical: spacing.sm }, errorControl: { borderColor: colors.danger, backgroundColor: colors.dangerSurface }, hint: { color: colors.muted, fontSize: 13 }, error: { color: colors.danger, fontSize: 13, fontWeight: "600" } });

// src/components/List.tsx
import { StyleSheet as StyleSheet4, Text as Text4, View as View3 } from "react-native";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function List({ items, variant = "plain", emptyMessage = "No items yet." }) {
  if (!items.length) return /* @__PURE__ */ jsx4(Text4, { style: styles4.empty, children: emptyMessage });
  return /* @__PURE__ */ jsx4(View3, { accessibilityRole: "list", style: [styles4.list, variant === "bordered" && styles4.bordered, variant === "compact" && styles4.compact], children: items.map((item) => /* @__PURE__ */ jsxs3(View3, { accessibilityRole: "listitem", style: styles4.item, children: [
    /* @__PURE__ */ jsx4(Text4, { style: styles4.title, children: item.title }),
    item.description && /* @__PURE__ */ jsx4(Text4, { style: styles4.description, children: item.description })
  ] }, item.id)) });
}
var styles4 = StyleSheet4.create({ list: { gap: spacing.md, width: "100%" }, bordered: { backgroundColor: colors.surface, borderColor: colors.border, borderRadius: radii.md, borderWidth: 1, padding: spacing.md }, compact: { gap: spacing.xs }, item: { gap: spacing.xs, paddingVertical: spacing.sm }, title: { color: colors.ink, fontSize: 16, fontWeight: "700" }, description: { color: colors.muted, fontSize: 14 }, empty: { color: colors.muted, fontSize: 15, paddingVertical: spacing.lg } });
export {
  Button,
  Header,
  Input,
  List,
  colors,
  radii,
  spacing,
  tokens
};
//# sourceMappingURL=index.js.map