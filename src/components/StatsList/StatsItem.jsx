import PropTypes from 'prop-types';
import { Item } from './StatsItem.styled';

export function StatsItem({ name, date, units='' }) {
  return (
    <Item>
      <span>{name}</span>
      <span>{`${date}${units}`}</span>
    </Item>
  );
}

StatsItem.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
}