import { StyleSheet, Text, View } from 'react-native';
import { colors, radii, spacing } from '../tokens';

export interface ListItem { id: string; title: string; description?: string }

export interface ListProps { items: ListItem[]; variant?: 'plain' | 'bordered' | 'compact'; emptyMessage?: string }

export function List({ items, variant = 'plain', emptyMessage = 'No items yet.' }: ListProps) {
  if (!items.length) return <Text style={styles.empty}>{emptyMessage}</Text>;
  return <View accessibilityRole="list" style={[styles.list, variant === 'bordered' && styles.bordered, variant === 'compact' && styles.compact]}>{items.map((item) => <View accessibilityRole="listitem" key={item.id} style={styles.item}><Text style={styles.title}>{item.title}</Text>{item.description && <Text style={styles.description}>{item.description}</Text>}</View>)}</View>;
}

const styles = StyleSheet.create({ list: { gap: spacing.md, width: '100%' }, bordered: { backgroundColor: colors.surface, borderColor: colors.border, borderRadius: radii.md, borderWidth: 1, padding: spacing.md }, compact: { gap: spacing.xs }, item: { gap: spacing.xs, paddingVertical: spacing.sm }, title: { color: colors.ink, fontSize: 16, fontWeight: '700' }, description: { color: colors.muted, fontSize: 14 }, empty: { color: colors.muted, fontSize: 15, paddingVertical: spacing.lg } });
