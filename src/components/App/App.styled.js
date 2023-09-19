import styled from "@emotion/styled";

export const Container = styled.div`
max-width: 1440px;
margin-inline: auto;
display: flex;
`;

export const UserColumn = styled.div`
max-width: 400px;
padding: 20px;
display: grid;
gap: 20px;
  background-color: ${({ theme }) => theme.colors.bgUserColumn};
`;