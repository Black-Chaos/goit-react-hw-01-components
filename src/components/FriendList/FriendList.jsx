import PropTypes from 'prop-types';
import { ListOfFriends } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';

export function FriendList({ friends = [] }) {
  return (
    <ListOfFriends>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem key={id} isOnline={isOnline} avatar={avatar} name={name}/>
      ))}
    </ListOfFriends>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
