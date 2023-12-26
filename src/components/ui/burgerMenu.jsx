import { motion } from "framer-motion";

const variantUp = {
  open: {
    y: 7,
    rotate: 45,
    transition: { rotate: { delay: 0.3 } },
  },
  closed: {
    y: 0,
    rotate: 0,
    transition: { y: { delay: 0.3 } },
  },
};
const variantDown = {
  open: {
    y: -7,
    rotate: -45,
    transition: { rotate: { delay: 0.3 } },
  },
  closed: {
    y: 0,
    rotate: 0,
    transition: { y: { delay: 0.3 } },
  },
};

export default function BurgerMenu({ isOpen, handleOpen }) {
  return (
    <div
      className="w-8 h-7 flex flex-col justify-around absolute right-5 lg:hidden"
      onClick={handleOpen}
    >
      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={variantUp}
        className="w-full h-[2px] bg-[#888888]"
      />
      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={variantDown}
        className="w-full h-[2px] bg-[#888888]"
      />
    </div>
  );
}
