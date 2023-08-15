import styled from '@emotion/styled';
import { Colors } from './Colors';
import { down } from 'styled-breakpoints';
import { motion } from 'framer-motion';

export const WorkVideoHolder = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

export const WorkItemHolder = styled(motion.div)`
  display: flex;
  justify-content: center;
  min-height: 20vh;
  flex-direction: column;
  align-items: flex-start;
  gap: 1vw;
  padding: 1vw;
  border: 1px solid ${Colors.PianoBlack};
`;

export const ItemDescriptionHolder = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const WorkItemTitle = styled(motion.div)`
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 0.8rem;
  color: ${Colors.PianoBlack};
`;

export const WorkItemDescription = styled(motion.div)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
  color: ${Colors.PianoBlack};
`;

export const Spacer = styled(motion.div)`
  height: 2.5vh;
`;

//2 column grid, center last item if odd number of items
export const WorkGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 1vw;
  justify-content: center;
  align-items: center;
  padding: 1vw;
`;
