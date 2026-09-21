export interface ListItem {
    id: string;
    title: string;
    description?: string;
}
export interface ListProps {
    items: ListItem[];
    variant?: 'plain' | 'bordered' | 'compact';
    emptyMessage?: string;
}
export declare function List({ items, variant, emptyMessage }: ListProps): import("react").JSX.Element;
