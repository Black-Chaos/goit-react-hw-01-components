import PropTypes from 'prop-types';
import { ProfileCard } from './Profile.styled';
import { Description } from './Profile.styled';
import { Avatar } from './Avatar/Avatar';
import { CardTitle } from '../CardTitle/CardTitle';
import { DescriptionUser } from './DescriptionUser/DescriptionUser';
import { StatsList } from 'components/StatsList/StatsList';
import { StatsItem } from 'components/StatsList/StatsItem';

export function Profile({ user: { username, tag, location, avatar, stats } }) {
  return (
    <ProfileCard>
      <Description>
        <Avatar avatar={avatar} tag={tag} />
        <CardTitle title={username} />
        <DescriptionUser text={`@${tag}`} />
        <DescriptionUser text={location} />
      </Description>
      <StatsList>
        {Object.keys(stats).map((stat, i) => {
          return (
            <StatsItem key={i} name={stat} date={stats[stat]}/>
          );
        })}
      </StatsList>
    </ProfileCard>
  );
}

Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
