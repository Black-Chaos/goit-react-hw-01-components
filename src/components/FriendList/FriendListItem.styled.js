import styled from '@emotion/styled';

export const FriendItem = styled.li`
  padding: 8px;
  display: flex;
  gap: 16px;
  align-items: center;
  box-shadow: 4px 4px 8px ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.bgCard};

  //   ::marker {
  //     color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
  //     font-size: 32px
  //   }
`;

export const Led = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;
