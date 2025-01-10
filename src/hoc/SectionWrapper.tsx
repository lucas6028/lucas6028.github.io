import { motion } from "framer-motion";
import { styles } from "../style";
import { staggerContainer } from "../utils/motion";
import { FunctionComponent } from "react";

// interface SectionWrapperProps {
//     idName: string;
// }

const SectionWrapper = (Component: FunctionComponent, idName: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer({ staggerChildren: 0.1 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
