import styled from '@emotion/styled';
import { Colors } from './Colors';
import { down } from 'styled-breakpoints';

export const Background = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${Colors.Back};
  color: white;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 10vh;
`;
