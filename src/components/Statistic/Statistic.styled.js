import styled from '@emotion/styled';

export const List = styled.ul`
  width: 400px;
  margin-left: 40px;
  margin-top: 40px;
`;

export const Item = styled.li`
  font-size: 20px;
  font-weight: 500;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
