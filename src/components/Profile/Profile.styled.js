import styled from "@emotion/styled";

export const ProfileCard = styled.div`
  text-align: center;
  border-radius: 4px;
  box-shadow: 4px 4px 8px ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.bgCard};
`;

export const Description = styled.div`
  padding: 40px;
  display: grid;
  gap: 12px;
  place-items: center;
`;