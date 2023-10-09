import React from 'react'
import {motion} from 'framer-motion'


const Skill = ({name, x, y}) => {

  return (
      <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light 
      py-3 px-6 shadow-dark cursor-pointer absolute'
      whileHover={{scale:1.05}}
      initial={{x:0, y:0}}
      whileInView={{ x:x, y:y }}
      transition={ { duration:1.5 } }
      viewport={{ once: true }} //-- use for only animating once 
      >
          {name}
      </motion.div>
  )
}



const Skills = () => {
  return (
    <>
    <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
    <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer'
        whileHover={{scale:1.05}}>
          Machine Learning
        </motion.div>
        <Skill name="Python" x="-20vw" y="2vw" />
        <Skill name="Large Language Models" x="-5vw" y="-10vw" />
        <Skill name="JavaScript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="ML Infrastructure" x="15vw" y="-12vw" />
        <Skill name="LLM Finetuning and Deployment" x="-35vw" y="-5vw" />
        <Skill name="ML Algorithms" x="32vw" y="-5vw" />
        <Skill name=" CI/CD " x="0vw" y="-20vw" />
        <Skill name=" C++ " x="-8vw" y="22vw" />
        <Skill name=" MLOps " x="0vw" y="-30vw" />
        <Skill name="Data Science" x="5vw" y="30vw" />
        <Skill name=" SQL " x="-25vw" y="18vw" />
        <Skill name="Deep Learning" x="17vw" y="21vw" />

    </div>

    </>
  )
}

export default Skills