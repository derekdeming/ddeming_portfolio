import Head from 'next/head'
import Layout from '@/components/Layout'
import { LinkArrow } from "@/components/Icons";
import Image from 'next/image'
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';



export default function Home() {
  return (
    <>
      <Head>
        <title>Career Portfolio</title>
        <meta
          name="description"
          content="Explore Derek Deming's Next.js developer portfolio and 
        discover the latest AI engineering projects and software engineering articles. 
        Showcase your skills as a full-stack developer and software engineer."
        />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'> 
        <Layout className='pt-0'>
            <div className='flex items-center justify-between w-full'>
              <div className='w-1/2'>
                  <Image                 
                    src={profilePic}
                    alt="DerekDeming"
                    className="w-full h-auto"
                    sizes="100vw"
                    priority
                  />
              </div>
              <div className='w-1/2 flex flex-col items-center self-center'>
                <AnimatedText text="Turning Vision Into Reality With Code and Automation." className="!text-6xl !text-left" />
                <p className='my-4 text-base font-medium'>
                As a skilled full-stack ML Engineer, I am dedicated to turning ideas into innovative automated solutions. Explore my latest projects and articles, showcasing my expertise in full stack engineering specializing in ML and LLM integration.
                </p>
              <div>
                <Link
                    // whileHover={{
                    //   cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='font-size:24px;'><text y='50%'>👆</text></svg>"), auto`,
                    // }}
                    href="/All-Texts/Derek-Deming-Resume.pdf"
                    target={"_blank"}
                    className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
              capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
              dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
              md:p-2 md:px-4 md:text-base`}
                    download> Resume <LinkArrow className="ml-1 !w-6 md:!w-4" />
              </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
