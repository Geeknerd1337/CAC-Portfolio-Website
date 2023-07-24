import styled from "@emotion/styled";
import { Colors } from "./Colors";
import { down } from "styled-breakpoints";
import { motion } from "framer-motion";

export const Background = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${Colors.Back};
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 5vh;
  flex-direction: column;
`;

export const TitleHolder = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5vh;
  font-size: 4rem;
  position: relative;
  z-index: 0;
`;

export const Title = styled(motion.div)`
  color: ${Colors.PianoBlack};
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
`;

export const TitleLinesHolder = styled(motion.div)`
  width: 100%;
  height: 100%;
  z-index: -1;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: black;
  position: absolute;
  top: 0;
  left: 0;
  flex-direction: column;
`;

export const TitleLine = styled(motion.div)`
  width: 100%;
  height: 1px;
  background-color: ${Colors.LightCharcoal};
  opacity: 0.4;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 25px;
`;

export const TitleNote = styled(motion.img)`
  width: 4vh;
  bottom: 0px;
  opacity: 0;
  display: none;
  transform: translateY(-29%);
`;

export const VideoHolder = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 5vh;
  width: 40%;
`;

export const NavBarHolder = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 80px;
`;

//Nav bar button props
interface NavButtonProps {
  selected: boolean;
}

export const NavButton = styled(motion.button)<NavButtonProps>`
  background-color: transparent;
  border: none;
  padding-top: 20px;
  padding-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 2rem;
  color: ${Colors.PianoBlack};
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
  }

  //Increase font size if selected
  ${(props) =>
    props.selected &&
    "transform: scale(1.1); font-weight: 600; text-decoration: underline;"}
`;
