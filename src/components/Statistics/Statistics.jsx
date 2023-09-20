import { StatsBlock } from './Statistics.styled';
import { CardTitle } from 'partials/CardTitle/CardTitle';
import { StatsList } from 'partials/StatsList/StatsList';
import { StatsItem } from 'partials/StatsList/StatsItem';

export function Statistics({ title, data }) {
  return (
    <StatsBlock>
      {title && <CardTitle title={title} />}
      <StatsList>
        {data.map(({ id, label, percentage }) => (
          <StatsItem key={id} name={label} date={percentage} units={'%'} />
        ))}
      </StatsList>
    </StatsBlock>
  );
}
