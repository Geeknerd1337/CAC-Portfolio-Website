import styled from "@emotion/styled";
import { Colors } from "./Colors";
import { down } from "styled-breakpoints";
import { motion } from "framer-motion";

export const ContactItemHolder = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Icon Holder
export const ContactIcon = styled(motion.img)`
  width: 2vw;
  height: 2vw;
  padding-right: 1vw;
  ${down("sm")} {
    width: 5vh;
    height: 5vh;
    padding-right: 2vh;
  }
`;

// Link Holder
export const ContactLink = styled(motion.a)`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 1.5vw;
  ${down("sm")} {
    font-size: 4vh;
  }
  color: ${Colors.PianoBlack};
  text-decoration: none;
  transition: 0.2s;
  transform: scale(1);
  &:hover {
    color: ${Colors.Charcoal};
    cursor: pointer;
    transform: scale(1.1);
  }
`;
