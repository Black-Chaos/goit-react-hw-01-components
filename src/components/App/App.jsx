import user from 'data/user.json';
import { UserColumn } from './App.styled';
import { Profile } from 'components/Profile/Profile';

export const App = () => (
  <UserColumn>
    <Profile user={user} />
  </UserColumn>
);
