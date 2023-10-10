import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcons from './LiIcons'


const Details = ({type, time, place, info}) => {
    const ref = useRef(null);

    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <LiIcons reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}>
            <h3 className='capitalize font-bold text-2xl'>{type}</h3>
            <span className='capitalize font-medium text-dark/75'>
                {time} | {place}
            </span>
            <p className='font-medium w-full'>
                {info}
            </p>
        </motion.div>
    </li>
}
const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref, 
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
            Education
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative'>

            <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top' />

            <ul className="w-full flex flex-col items-start justify-between ml-4">
            <Details
                    type="Bachelors In Biology and Chemistry"
                    time="2014-2018"
                    place="Concordia University Irvine"
                    info="Graduated with honors performing 4 years of research including 4 years worth of Summer research positions. Placed top 5 in the Presidential Academic Research Showcase 2 years in a row. Relevant courses included: Molecular Biology, Applied Biostatistics, Organic Chemistry, Inorganic Chemistry, Physical Chemistry, Biochemistry, Calculus, Linear Algebra, and Applied Statistics."
                />

            <Details
                    type="Masters of Science in Chemistry with emphasis in Machine Learning and Solid State Physics"
                    time="2018-2020"
                    place="Washington State University"
                    info="Completed master's project in the field of applied Inorganic Chemistry and Solid State Physics, using statistical models and machine learning to predict the properties of novel materials. This also included in-lab research work of the synthesis of the materials we were modeling. Relevant courses included: Machine Learning, Deep Learning, Data Science, Data Mining, Applied Python in ML, and courses related to Inorganic Chemistry and Solid State Physics."
                />
            <Details
                    type="Online Courses and Certifications"
                    time="Always Learning"
                    place="MIT, Harvard, Databricks Academy, Udemy, Coursera, and more"
                    info="Completed coursework in advanced topics such as MIT 6.5940 TinyML and Efficient Deep Learning Computing, Computer Science Data Structure and Algorithms, Reinforcement Learning, Natural Language Processing, Pytorch for Deep Learning, Computer Vision, and Machine Learning Engineering. Certifications include: AWS Certified Deverloper Associate, Databricks Lakehouse Platform Fundamentals, AWS Databricks Platform Architect, AWS Databricks Networking and Security Fundamentals, Technical Sales: Sales Engineer."
                />
            </ul>
        </div>
    </div>
  )
}

export default Education