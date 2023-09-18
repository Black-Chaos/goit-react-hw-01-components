import user from 'data/user.json';
import data from 'data/data.json';
import { UserColumn } from './App.styled';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';

export const App = () => (
  <UserColumn>
    <Profile user={user} />
    <Statistics title={'Upload stats'} data={data} />
  </UserColumn>
);
