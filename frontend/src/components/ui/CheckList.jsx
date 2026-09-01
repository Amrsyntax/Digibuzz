import { Icon } from './Icon';

export function CheckList({ items }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}>
          <span className="check-list__icon">
            <Icon name="check" size={14} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
