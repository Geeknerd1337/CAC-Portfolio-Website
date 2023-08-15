import WorkItem from "./WorkItem";
import { Spacer, WorkGrid } from "@/styles/WorkStyles";
import { motion } from "framer-motion";
export default function () {
  return (
    <div>
      <Spacer></Spacer>
      <WorkGrid>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          <WorkItem
            title={"Sea Gull Lake (Solo Piano)"}
            description=""
            href="https://www.youtube.com/embed/RPU-vLoN5pw"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <WorkItem
            title="Improv on a Rainy Evening"
            description=""
            href="https://www.youtube.com/embed/WWgVe4obh30"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <WorkItem
            title="Improv on a Tuesday in Spring"
            description=""
            href="https://www.youtube.com/embed/freYCjF9Dyk"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <WorkItem
            title="The Legend of Estermeria - Theme and Omen"
            description=""
            href="https://www.youtube.com/embed/Fn2-MdIKJKM"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <WorkItem
            title="Simple Riffs (Bean Farmer Extreme 2 Theme)"
            description=""
            href="https://www.youtube.com/embed/azl0xuR4nJ8"
          />
        </motion.div>
      </WorkGrid>
    </div>
  );
}
