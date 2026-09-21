import { StyleSheet, Text, TextInput, View } from 'react-native';
import type { TextInputProps } from 'react-native';
import { colors, radii, spacing } from '../tokens';

export interface InputProps extends TextInputProps {
  label: string;
  error?: string;
  hint?: string;
}

export function Input({ label, error, hint, id, accessibilityLabel, style, ...props }: InputProps) {
  const inputId = id ?? `input-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  return <View style={styles.field}><Text nativeID={`${inputId}-label`} style={styles.label}>{label}</Text><TextInput nativeID={inputId} accessibilityLabel={accessibilityLabel ?? label} accessibilityState={{ disabled: props.editable === false }} style={[styles.control, error && styles.errorControl, style]} placeholderTextColor={colors.muted} {...props} />{(error || hint) && <Text style={error ? styles.error : styles.hint}>{error ?? hint}</Text>}</View>;
}

const styles = StyleSheet.create({ field: { gap: spacing.sm, width: '100%' }, label: { color: colors.ink, fontSize: 15, fontWeight: '700' }, control: { backgroundColor: colors.surface, borderColor: colors.border, borderRadius: radii.md, borderWidth: 1, color: colors.ink, fontSize: 16, minHeight: 46, paddingHorizontal: spacing.md, paddingVertical: spacing.sm }, errorControl: { borderColor: colors.danger, backgroundColor: colors.dangerSurface }, hint: { color: colors.muted, fontSize: 13 }, error: { color: colors.danger, fontSize: 13, fontWeight: '600' } });
