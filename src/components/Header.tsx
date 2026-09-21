import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { GestureResponderEvent } from 'react-native';
import { colors, spacing } from '../tokens';

export interface HeaderProps {
  siteName?: string;
  loggedIn?: boolean;
  userName?: string;
  onSignIn?: (event: GestureResponderEvent) => void;
  onSignOut?: (event: GestureResponderEvent) => void;
}

export function Header({ siteName = 'Acme', loggedIn = false, userName = 'Alex', onSignIn, onSignOut }: HeaderProps) {
  return <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.brand}>{siteName}</Text><View style={styles.nav}><Text style={styles.link}>Products</Text><Text style={styles.link}>About</Text></View>
      {loggedIn ? (
        <View style={styles.account}><Text style={styles.greeting}>Hi, {userName}</Text><Pressable accessibilityRole="button" onPress={onSignOut}><Text style={styles.action}>Sign out</Text></Pressable></View>
      ) : (
        <Pressable accessibilityRole="button" onPress={onSignIn}><Text style={styles.action}>Sign in</Text></Pressable>
      )}
    </View>;
}

const styles = StyleSheet.create({ container: { alignItems: 'center', backgroundColor: colors.surface, borderBottomColor: colors.border, borderBottomWidth: 1, flexDirection: 'row', gap: spacing.lg, justifyContent: 'space-between', paddingHorizontal: spacing.lg, paddingVertical: spacing.md }, brand: { color: colors.ink, fontSize: 20, fontWeight: '800' }, nav: { flexDirection: 'row', gap: spacing.md, flex: 1 }, link: { color: colors.muted, fontSize: 14 }, account: { alignItems: 'center', flexDirection: 'row', gap: spacing.sm }, greeting: { color: colors.muted, fontSize: 14 }, action: { color: colors.primary, fontSize: 14, fontWeight: '700' } });
