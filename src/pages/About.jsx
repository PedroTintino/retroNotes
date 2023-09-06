import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>About the project</h1>
    </motion.div>
  );
}

export default About;
