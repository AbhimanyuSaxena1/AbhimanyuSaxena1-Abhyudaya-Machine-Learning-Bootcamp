import React from 'react'
import Navbar from '../components/navbar'
import TargetCursor from '../components/TargetCursor';
import SpotlightCard from '../components/spotlightcard';
import Footer from '../components/footer'
import { FaArrowUp } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <main className='w-full relative min-h-screen'>
        <section id="home" className='w-full h-[10vh] bg-white'>
          <Navbar />
        </section>
        <section id="hero" className='w-full px-5 md:px-10 h-[90vh] flex flex-col md:flex-row items-center justify-center bg-white scroll-offset'>
          <TargetCursor  spinDuration={4} hideDefaultCursor={true} />
          <div className="left w-full md:w-1/2 h-auto md:h-full py-10 md:py-20 flex items-start justify-start">
            <h1 className='text-[2.5rem] md:text-[5rem] font-extralight font-[galabix] leading-tight'>
              Welcome to the{' '}
              <span className='cursor-target hover:text-blue-600'>Machine Learning</span>{' '}
              <span className='cursor-target hover:text-orange-600'>Bootcamp!</span>
            </h1>
          </div>
          <div className="right w-full md:w-1/2 h-auto md:h-full py-5 md:py-10 overflow-hidden flex items-center justify-center">
            <img src="./image.png" className='cursor-target max-w-full max-h-[50vh] md:max-h-full object-contain' alt="Machine Learning" />
          </div>
        </section>
  <article id="about" className='w-full flex flex-col gap-10 px-5 md:px-10 py-10 bg-zinc-200 scroll-offset'>
          <div className='w-full flex justify-center items-center'>
            <h1 className='bg-white rounded-full px-3 py-2 font-[pankh] text-[1.5rem] md:text-[2rem] text-black'>About</h1>
          </div>
          <p className='text-black font-[roboto] text-xl md:text-3xl text-center px-2 md:px-0'>
            Over the next few months, we’ll dive deep into Machine Learning — covering everything from basic concepts to model deployment, one step (and one challenge) at a time. This challenge is designed to help participants build consistency, learn by doing, and gain hands-on experience with real-world ML problems.
          </p>
        </article>
     <section className='w-full flex flex-col gap-10 min-h-[90vh] px-4 md:px-10 py-10'>
        <article className='w-full'>
          <h2 className='text-center text-3xl font-[pankh]'>
            Abhyudaya Coding Club - Machine Learning Bootcamp
          </h2>
        </article>
        <article className='w-full'>
          <h3 className='text-center text-2xl font-[galabix] mb-2'>
            Overview
          </h3>
          <p className='text-center text-xl font-[roboto]'>
            The Machine Learning Bootcamp by Abhyudaya Coding Club is a 50-day guided learning journey designed to take participants from zero programming knowledge to building real-world ML projects. 
            This program emphasizes consistency, self-learning, and practical implementation through daily topics, hands-on tasks, phase-end quizzes, and mini projects.
          </p>
        </article>
        
        {/* How It Works Section */}
        <article className='w-full text-black'>
          <h3 className='text-center text-2xl font-[galabix] mb-4'>
            How It Works
          </h3>
          <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {/* Feature Block */}
            <SpotlightCard className='cursor-target custom-spotlight-card min-h-[30vh] w-full rounded-xl p-5 items-center shadow flex flex-col gap-5 text-white' spotlightColor="rgba(0, 229, 255, 1)">
              <h4 className='text-lg font-semibold  mb-2'>Daily Topics & Resources</h4>
              <ul className='list-disc pl-6 text-base font-[roboto]'>
                <li>Every morning, participants receive a topic and curated resources.</li>
                <li>Study is flexible & self-paced.</li>
              </ul>
            </SpotlightCard>
            <SpotlightCard className='cursor-target custom-spotlight-card min-h-[30vh] w-full rounded-xl p-5 items-center shadow flex flex-col gap-5 text-white' spotlightColor="rgba(0, 229, 255, 1)" >
              <h4 className='text-lg font-semibold  mb-2'>Daily Tasks</h4>
              <ul className='list-disc pl-6 text-base font-[roboto]'>
                <li>Apply learning through short exercises.</li>
                <li>Practice-driven consistency.</li>
              </ul>
            </SpotlightCard>
            {/* <div className='cursor-target bg-gray-50 rounded-xl p-5 flex flex-col items-center shadow'> */}
            <SpotlightCard className='cursor-target custom-spotlight-card min-h-[30vh] w-full rounded-xl p-5 items-center shadow flex flex-col gap-5 text-white' spotlightColor="rgba(0, 229, 255, 1)" >

              <h4 className='text-lg font-semibold  mb-2'>Mini Projects</h4>
              <ul className='list-disc pl-6 text-base font-[roboto]'>
                <li>End-of-phase mini projects to implement learnings.</li>
                <li>Top projects featured on official platforms.</li>
              </ul>
            </SpotlightCard>

            {/* </div> */}
            {/* <div className='cursor-target bg-gray-50 rounded-xl p-5 flex flex-col items-center shadow'> */}

            <SpotlightCard className='cursor-target custom-spotlight-card min-h-[30vh] w-full rounded-xl p-5 items-center shadow flex flex-col gap-5 text-white' spotlightColor="rgba(0, 229, 255, 1)" >

              <h4 className='text-lg font-semibold  mb-2'>Quizzes & Assessments</h4>

              <ul className='list-disc pl-6 text-base font-[roboto]'>
                <li>Phase-end quizzes to test understanding.</li>
                <li>Reinforce concepts before advancing.</li>
              </ul>
                          </SpotlightCard>

            {/* </div> */}
            {/* <div className='cursor-target bg-gray-50 rounded-xl p-5 flex flex-col items-center shadow'> */}
            <SpotlightCard className='cursor-target custom-spotlight-card min-h-[30vh] w-full rounded-xl p-5 items-center shadow flex flex-col gap-5 text-white' spotlightColor="rgba(0, 229, 255, 1)" >

              <h4 className='text-lg font-semibold  mb-2'>Mentor Support</h4>
              <ul className='list-disc pl-6 text-base font-[roboto]'>
                <li>Bi-weekly doubt-solving sessions with mentors.</li>
                <li>Discuss challenges & share progress in community.</li>
              </ul>
                          </SpotlightCard>

            {/* </div> */}
            {/* <div className='cursor-target bg-gray-50 rounded-xl p-5 flex flex-col items-center shadow'> */}
            <SpotlightCard className='cursor-target custom-spotlight-card min-h-[30vh] w-full rounded-xl p-5 items-center shadow flex flex-col gap-5 text-white' spotlightColor="rgba(0, 229, 255, 1)" >

              <h4 className='text-lg font-semibold  mb-2'>Mode of Learning</h4>
              <ul className='list-disc pl-6 text-base font-[roboto]'>
                <li>100% online and fully self-paced.</li>
                <li>Catch up at your own pace if you miss days.</li>
              </ul>
            </SpotlightCard>

            {/* </div> */}
          </div>
        </article>
      </section>
      <section id='register' classname=' items-center justify-center w-full flex flex-col gap-10 p-10 min-h-[90vh] px-4 md:px-10 py-10 bg-zinc-200 scroll-offset'>
        <h1 className='text-center font-extrabold font-[pankh] text-3xl md:text-5xl'>Join Now <br />
       <span className='cursor-target font-[roboto] text-xl  font-light hover:text-blue-600'> <a href="https://chat.whatsapp.com/EZ5dq0kWzTULuhgyvFSqGg" className='text-blue-600 underline'>click here</a>/scan the </span></h1>

<div className='w-full h-auto flex items-center justify-center'>
        <a href="https://chat.whatsapp.com/EZ5dq0kWzTULuhgyvFSqGg">
        <img src="./qr.jpg" className='items-center' alt="" />
        </a>
  
  </div>      </section>

  <div className="div hover:scale-90 transition-transform bg-[] fixed bottom-10 right-10 md:bottom-20 md:right-20 bg-white/20 backdrop-blur-lg p-5 rounded-full">
    <a href="#home">

      <FaArrowUp />
    </a>

  </div>
        <Footer id="contact"></Footer>
      </main>
    </>
  )
}

export default Home
