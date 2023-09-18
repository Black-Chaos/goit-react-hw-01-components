import styled from "@emotion/styled";

export const StatsBlock = styled.div`
  padding: 40px;
  display: grid;
  gap: 20px;
  text-align: center;
  border-radius: 4px;
  box-shadow: 4px 4px 8px ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.bgCard};

  > h2 {
    color: ${({ theme }) => theme.colors.text};
  }

  li {
    background-color: skyblue;
    color: ${({ theme }) => theme.colors.bgCard};
  }

  li span:last-child {
    color: inherit;
  }

  li:nth-of-type(2n) {
    background-color: palevioletred;
  }

  li:nth-of-type(3n) {
    background-color: plum;
  }

  li:nth-of-type(4n) {
    background-color: turquoise;
  }
`;