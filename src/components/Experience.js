import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcons from './LiIcons'


const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null);

    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <LiIcons reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}>
            <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a href={companyLink}
            target='_blank'
            className='capitalize'
            style={{ color: '#47C6B5' }}
            >@{company}</a> </h3>
            <span className='capitalize font-medium text-dark/75'>
                {time} | {address}
            </span>
            <p className='font-medium w-full'>
                {work}
            </p>
        </motion.div>
    </li>
}
const Experience = () => {
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
            Experience
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative'>

            <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top' />

            <ul className="w-full flex flex-col items-start justify-between ml-4">
            <Details
                    position="Data Platform Software Engineer"
                    company="Securian Financial Group"
                    companyLink="https://www.securian.com/"
                    time="04/2023-Present"
                    address="Remote"
                    work="Worked on the MLOps team responsible for developing automated cloud solutions for data scientists, including migrating projects from hadoop servers to AWS cloud, building out tools for ML model inference and monitoring. Cross-team collaboration on most projects, ensuring best practices for network connections and security. Worked with a variety of tools including: AWS (Sagemaker, R-studio, Cloud9, Redshift, Bedrock, etc.), Docker, CloudFormation, Github Actions, CI/CD, Kubernetes, Airflow, MLflow, CyberArk security, Jfrog Artifactory, and more."
                />

            <Details
                    position="Open-Source Gen AI Software Engineer"
                    company="Open-Source Community"
                    companyLink="https://github.com/"
                    time="2022 - Present"
                    address="Remote"
                    work="Worked on and with open-source software within the Gen AI space. Specifically working on building advanced retrieval augmented search engines using Llama 2, Llama Index, Langchain, MLflow, and other open-source tools for production. Projects included full stack development, ML engineering (ETL and streaming for LLMs) and fine-tuning of LLMs."
                />  
                    
                <Details
                    position="ML Data Scientist II"
                    company="Coca Cola"
                    companyLink="https://us.coca-cola.com/"
                    time="2022-2023"
                    address="Salt Lake City, UT"
                    work="First hire for a 'start-up' within Coca Cola. Work contained three main pillars: 1) building out a data platform for the data scientists to use (i.e., Snowflake/Snowpark or Databricks), 2) building ML models around business use-cases, and 3) deploying the models for end-to-end automation (MLOps centric)."
                />

                <Details
                    position="Applied ML Researcher, Computational Biophysics Lab"
                    company="UC Irvine"
                    companyLink="https://uci.edu/"
                    time="2020-2022"
                    address="Irvine, CA"
                    work="Worked on a team that used atomistic computer simulation techniques based on empirical and electronic structure-derived potentials to study the structure and dynamics of biological molecules and biomimetic materials, and aqueous and organic interfaces with air that are important in atmospheric chemical processes. A substantial portion of our work is devoted to the development, implementation, and optimization of novel simulation methodology and analysis tools."
                />

                <Details
                    position="Teaching Assistant"
                    company="UC Irvine"
                    companyLink="https://uci.edu/"
                    time="2020-2022"
                    address="Irvine, CA"
                    work="Taught multiple course on within the Physical Science Department, held office hours to help students with assignments, and graded exams and assignments. Tutored students outside of the classroom. Courses tutored included: General Chemistry, Inorganic Chemistry, Computational Chemistry, Organic Chemistry, Physical Chemistry, Applied Statistics, Calculus 3 and Linear Algebra."
                />

                <Details
                    position="Research Data Engineer, Computational Inorganic Chemistry Lab"
                    company="Washington State University"
                    companyLink="https://wsu.edu/"
                    time="2018-2020"
                    address="Pullman, WA"
                    work="In collaboration with Pacific Northwest National Laboratory, I led several groundbreaking research projects, establishing a robust data pipeline between WSU and the National Laboratory. This ensured uninterrupted research analytics for our advanced computational models. My work particularly shines in the computational design of Metal-Organic Frameworks (MOFs). I've leveraged a range of statistical methodologies and computational techniques – from regression analysis and PCA to machine learning models, Bayesian approaches, Monte Carlo methods, molecular dynamics, genetic algorithms, and ANNs – all aimed at accurate property prediction and structural optimization.
                    "
                />
            </ul>
        </div>
    </div>
  )
}

export default Experience