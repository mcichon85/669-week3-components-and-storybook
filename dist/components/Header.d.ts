import type { GestureResponderEvent } from 'react-native';
export interface HeaderProps {
    siteName?: string;
    loggedIn?: boolean;
    userName?: string;
    onSignIn?: (event: GestureResponderEvent) => void;
    onSignOut?: (event: GestureResponderEvent) => void;
}
export declare function Header({ siteName, loggedIn, userName, onSignIn, onSignOut }: HeaderProps): import("react").JSX.Element;
