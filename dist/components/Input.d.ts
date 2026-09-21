import type { TextInputProps } from 'react-native';
export interface InputProps extends TextInputProps {
    label: string;
    error?: string;
    hint?: string;
}
export declare function Input({ label, error, hint, id, accessibilityLabel, style, ...props }: InputProps): import("react").JSX.Element;
