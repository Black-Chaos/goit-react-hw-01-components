import PropTypes from 'prop-types';
import {Description, ProfileCard } from './Profile.styled';
import { Avatar } from '../../partials/Avatar/Avatar';
import { CardTitle } from '../../partials/CardTitle/CardTitle';
import { StatsList } from 'partials/StatsList/StatsList';
import { StatsItem } from 'partials/StatsList/StatsItem';

export function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfileCard>
      <Description>
        <Avatar avatar={avatar} tag={tag} size={'large'} />
        <CardTitle title={username} />
        <p>{`@${tag}`}</p>
        <p>{location}</p>
      </Description>
      <StatsList>
        {Object.keys(stats).map((stat, i) => {
          return <StatsItem key={i} name={stat} date={stats[stat]} />;
        })}
      </StatsList>
    </ProfileCard>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
