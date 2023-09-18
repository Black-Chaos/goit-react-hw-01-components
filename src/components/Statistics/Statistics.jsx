import { StatsBlock } from "./Statistics.styled";
import { CardTitle } from "components/CardTitle/CardTitle";
import { StatsList } from "components/StatsList/StatsList";
import { StatsItem } from "components/StatsList/StatsItem";


export function Statistics({title, data}) {
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