import { motion } from "framer-motion";

import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constant";

interface FeedbackCardProps {
  index: number;
  testimonial: {
    testimonial: string;
    name: string;
    designation: string;
    company: string;
    image: string;
  };
}

const FeedbackCard = ({ index, testimonial }: FeedbackCardProps) => {
  return (
    <motion.div
      variants={fadeIn("", "'spring", index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <p className="text-white font-black text-[48px]">"</p>
      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">
          {testimonial.testimonial}
        </p>
        <div className="mt-7 flex items-center justify-between gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {testimonial.name}
            </p>
            <p className="text-secondary text-[12px]">
              {testimonial.designation} of {testimonial.company}
            </p>
          </div>
          <img
            src={testimonial.image}
            alt={`feedback-by-${testimonial.name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What other say</p>
          <h2 className={styles.sectionHeadText}>Testimonials</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard index={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

const FeedbackWrapper = SectionWrapper(Feedbacks, "feedbacks");
export default FeedbackWrapper;
