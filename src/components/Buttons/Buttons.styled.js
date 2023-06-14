import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  grid-gap: 16px;
  width: 400px;
  align-items: center;
  margin-left: 40px;
`;

export const Item = styled.li`
  width: 75px;
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  padding-top: 4px;
  padding-bottom: 4px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid rgba(128, 128, 128, 0.486);
  border-radius: 4px;
  background-color: rgba(236, 240, 243, 0.301);
  cursor: pointer;
  transition: background-color 250ms linear, color 250ms linear,
    box-shadow 250ms linear, border 250ms linear;
  &:hover,
  &:focus {
    background-color: rgb(42, 120, 165);
    color: rgb(255, 255, 255);
    box-shadow: 10px 5px 5px rgba(201, 200, 200, 0.541);
    border: 1px solid rgb(42, 120, 165);
  }
`;
