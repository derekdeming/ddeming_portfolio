import React from 'react'
import { motion, useScroll } from 'framer-motion'

const LiIcons = ({ reference, time }) => {
    const { scrollYProgress } = useScroll({
      target: reference,
      offset: ["center end", "center center"],
      layoutEffect: false,
    });

  return (
    <figure className="stroke-dark left-0 absolute">
      <svg className='-rotate-90' width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary  stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="fill-light stroke-[5px] dark:fill-dark"
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="animate-pulse stroke-1 fill-primary dark:fill-primaryDark"
        />
      </svg>
    </figure>
  )
}

export default LiIcons