import './List.css';

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

export function List({ items, variant = 'plain', emptyMessage = 'No items yet.' }: ListProps) {
  if (!items.length) return <p className="list__empty">{emptyMessage}</p>;

  return (
    <ul className={`list list--${variant}`}>
      {items.map((item) => (
        <li className="list__item" key={item.id}>
          <span className="list__title">{item.title}</span>
          {item.description && <span className="list__description">{item.description}</span>}
        </li>
      ))}
    </ul>
  );
}
