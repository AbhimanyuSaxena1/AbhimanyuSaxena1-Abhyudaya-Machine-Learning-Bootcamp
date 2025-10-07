import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import TargetCursor from '../components/TargetCursor'
import SpotlightCard from '../components/spotlightcard'
const Guidelines = () => {
  return (
    <main className='w-full '>
        <TargetCursor spinDuration={4} hideDefaultCursor={'true'} />

      <nav className='h-[10vh] text-black'>
        <Navbar />
      </nav>
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
            The Machine Learning Bootcamp by Abhyudaya Coding Club is a 90-day guided learning journey designed to take participants from zero programming knowledge to building real-world ML projects. 
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
      <footer>
        <Footer />
      </footer>
    </main>
  )
}

export default Guidelines
