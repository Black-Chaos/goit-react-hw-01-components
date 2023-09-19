import styled from "@emotion/styled";

export const Table = styled.table`
  margin: 20px;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #00bcd5;
`;

export const TableBody = styled.tbody``;

export const HeadData = styled.th`
    width: 350px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.text};
`;

export const TableRow = styled.tr`
  :nth-of-type(2n) {
    background-color: #ecf1f3;
  }
`;

export const TableData = styled.td`
  padding: 10px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.text};
`;