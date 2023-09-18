import styled from "@emotion/styled";

export const Thumb = styled.div`
  width: ${({size='mid', theme}) => (theme.iconSize[size])};
  height: ${({size='mid', theme}) => theme.iconSize[size]};
  // margin: 0 auto 20px;
`;

export const Img = styled.img`
  border-radius: 50%;
  object-fit: cover;
`;