import { Item } from './StatsItem.styled';

export function StatsItem({ name, date }) {
  return (
    <Item>
      <span>{name}</span>
      <span>{date}</span>
    </Item>
  );
}
