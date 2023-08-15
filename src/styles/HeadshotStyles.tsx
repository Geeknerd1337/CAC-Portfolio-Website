import styled from "@emotion/styled";
import { Colors } from "./Colors";
import { down } from "styled-breakpoints";
import { motion } from "framer-motion";

export const HeadshotHolder = styled(motion.div)`
  display: flex;
  width: 40%;
  gap: 20px;

  ${down("lg")} {
    width: 80%;
  }

  ${down("sm")} {
    width: 80%;
    flex-direction: column;
  }
`;

export const Headshot = styled(motion.img)`
  height: 30vh;
  border: 2px solid ${Colors.LightCharcoal};
  //Drop shadow
  box-shadow: -3px 3px 5px 0px rgba(0, 0, 0, 0.75);

  ${down("sm")} {
    height: auto;
    width: 100%;
  }
`;

export const AboutHolder = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AboutTitle = styled(motion.div)`
  font-size: 2rem;
  font-weight: 500;
  color: ${Colors.PianoBlack};
  font-family: "Montserrat", sans-serif;
  padding-bottom: 2vh;
`;

export const AboutText = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 300;
  color: ${Colors.PianoBlack};
  font-family: "Montserrat", sans-serif;
  padding-bottom: 2vh;
  text-align: left;
`;
