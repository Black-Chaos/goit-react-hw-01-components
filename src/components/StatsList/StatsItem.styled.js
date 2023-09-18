import styled from "@emotion/styled";

export const Item = styled.li`
  padding: 12px 8px;
  min-width: 50px;
  flex: 1 0;
  display: grid;
  gap: 8px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.defaultBgTable};
  border: 1px solid ${({ theme }) => theme.colors.text};
  font-size: 18px;
  > span:last-child {
    color: ${({ theme }) => theme.colors.title};
    font-weight: 700;
  }
`;