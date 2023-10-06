import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/profile1.jpg'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'


const AnimatedNumbers = ({value}) => {
const ref = useRef(null);

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, { duration: 3000})
const isInView = useInView(ref, {once: true})

useEffect(() => {
    if(isInView){
        motionValue.set(value)
    }}, 
    [isInView, value, motionValue])

useEffect(() => {
    springValue.on("change", (latest) => {
        if(ref.current && latest.toFixed(0) <= value ){
            ref.current.textContent = latest.toFixed(0)
        }
    })
}
, [springValue, value])

    
    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
        <Head>
            <title> Derek Deming | About Page </title>
            <meta name="description" content="any description" />
        </Head>
        
        <main className='flex w-full flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text="Passion Fuels Purpose!" className='mb-16' />   
                <div className='grid w-full grid-cols-8 gap-16'>
                    <div className='col-span-3 flex flex-col items-start justify-start'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>
                            About Me
                        </h2>
                            <p className='my-1 font-medium'>
                            Hi, I'm Derek Deming, a Machine Learning Engineer with 5 years of experience, specializing in ML, MLOps, and Generative AI. I passionately automate manual processes and drive innovations in the realm of data and statistics.
                            </p>

                            <p className='my-2 font-medium'>
                            Mastering ML and MLOps involves not just automation but also creativity, a deep grasp of software architecture, and a commitment to continual learning, especially with the ever-evolving tech landscape.
                            </p>

                            <p className='my-1.5 font-medium'>
                            Throughout my career, I've transformed legacy systems into advanced ML solutions by collaborating with diverse teams. My core areas include Natural Language Processing, Computer Vision, Predictive Analytics, and scalable ML infrastructures.
                            </p>

                            <p className='my-1.5 font-medium'>
                            I adopt a holistic approach to ML, balancing deep technicality with effective communication and user-centric design, ensuring all voices are considered and user needs prioritized.
                            Beyond the code, I contribute to the ML community and advocate for ethical AI, ensuring my work remains transparent and unbiased.
                            </p>

                            <p className='my-1.5 font-medium'>
                            Outside of work, I enjoy nature, keep updated with tech literature, and mentor future tech enthusiasts.
                            Ready for new adventures and collaborations in AI and ML? Let's connect and co-create the future.
                            </p>
                    </div>

                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
                    
                    <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'/>
                        <Image src={profilePic} alt="DerekDeming" className='w-full h-auto rounded-2xl' />
                    </div>

                    <div className='col-span-2 flex flex-col items-end justify-between'>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-6xl font-bold'>
                                <AnimatedNumbers value={50} />+
                            </span>
                            <h2 className='text-2xl font-medium capitalize text-dark/75'>satisfied clients</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-6xl font-bold'>
                                <AnimatedNumbers value={75} />+
                            </span>
                            <h2 className='text-2xl font-medium capitalize text-dark/75'>projects completed</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-6xl font-bold'>
                                <AnimatedNumbers value={5} />+
                            </span>
                            <h2 className='text-2xl font-medium capitalize text-dark/75'>years of experience</h2>
                        </div>
                    </div>

                </div>

                <Skills />
            </Layout>

        </main>
    </>
  )
}

export default about