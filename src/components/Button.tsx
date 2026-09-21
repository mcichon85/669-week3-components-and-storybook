import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import type { PressableProps } from 'react-native';
import { colors, radii, spacing } from '../tokens';

export interface ButtonProps extends Omit<PressableProps, 'children'> {
  children?: ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
}

export function Button({ variant = 'primary', size = 'medium', children, disabled, style, ...props }: ButtonProps) {
  return <Pressable accessibilityRole="button" accessibilityState={{ disabled }} disabled={disabled} style={({ pressed }) => [styles.base, styles[size], styles[variant], disabled && styles.disabled, pressed && !disabled && styles.pressed, typeof style === 'function' ? style({ pressed }) : style]} {...props}><Text style={[styles.label, variant === 'secondary' && styles.secondaryLabel, disabled && styles.disabledLabel]}>{children}</Text></Pressable>;
}

const styles = StyleSheet.create({
  base: { alignItems: 'center', justifyContent: 'center', borderRadius: radii.md },
  small: { minHeight: 36, paddingHorizontal: spacing.md }, medium: { minHeight: 44, paddingHorizontal: spacing.lg }, large: { minHeight: 52, paddingHorizontal: spacing.xl },
  primary: { backgroundColor: colors.primary }, secondary: { backgroundColor: colors.secondary }, danger: { backgroundColor: colors.danger },
  label: { color: colors.surface, fontSize: 16, fontWeight: '700' }, secondaryLabel: { color: colors.ink }, disabled: { backgroundColor: colors.border }, disabledLabel: { color: colors.muted }, pressed: { opacity: 0.8 },
});
