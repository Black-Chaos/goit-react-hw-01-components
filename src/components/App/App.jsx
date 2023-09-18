import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json'
import { UserColumn } from './App.styled';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';

export const App = () => (
  <UserColumn>
    <Profile user={user} />
    <Statistics title={'Upload stats'} data={data} />
    <FriendList friends={friends}/>
  </UserColumn>
);
