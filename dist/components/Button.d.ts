import type { ReactNode } from 'react';
import type { PressableProps } from 'react-native';
export interface ButtonProps extends Omit<PressableProps, 'children'> {
    children?: ReactNode;
    variant?: 'primary' | 'secondary' | 'danger';
    size?: 'small' | 'medium' | 'large';
}
export declare function Button({ variant, size, children, disabled, style, ...props }: ButtonProps): import("react").JSX.Element;
