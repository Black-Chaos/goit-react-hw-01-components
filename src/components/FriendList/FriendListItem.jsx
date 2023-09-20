import { FriendItem } from './FriendListItem.styled';
import { Led } from './FriendListItem.styled';
import { Avatar } from 'partials/Avatar/Avatar';
import { CardTitle } from 'partials/CardTitle/CardTitle';

export function FriendListItem({isOnline, avatar, name}) {
  return (
        <FriendItem>
          <Led isOnline={isOnline} />
          <Avatar avatar={avatar} tag={name} size={'mid'} />
          <CardTitle title={name} />
        </FriendItem>
      )
}
