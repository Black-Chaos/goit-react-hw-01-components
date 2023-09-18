import PropTypes from 'prop-types';
import { ListOfFriends } from './FriendList.styled';
import { FriendItem } from './FriendList.styled';
import { Led } from './FriendList.styled';
import { Avatar } from 'components/Profile/Avatar/Avatar';
import { CardTitle } from 'components/CardTitle/CardTitle';

export function FriendList({friends=[]}) {
    return (
      <ListOfFriends>
        {friends.map(({
          avatar,
          name,
          isOnline,
          id,
        }) => (
            <FriendItem key={id} >
                <Led isOnline={isOnline}/>
                <Avatar avatar={avatar} tag={name} size={'mid'} />
                <CardTitle title={name}/>
            </FriendItem>
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
    })
  ),
};