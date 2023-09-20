import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json'
import transactions from 'data/transactions.json';
import { Container, UserColumn } from './App.styled';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

export const App = () => (
  <Container>
    <UserColumn>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={'Upload stats'} data={data} />
      <FriendList friends={friends} />
    </UserColumn>
    <TransactionHistory tx={transactions} />
  </Container>
);
