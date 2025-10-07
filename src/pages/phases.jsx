import React, { useEffect, useState, useRef } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const BootcampPhases = [
  { phase: 'Phase 1: Python Foundations', goal: 'Build comfort with Python syntax, data structures, and basic programming logic.' },
  { phase: 'Phase 2: Python for Data', goal: 'Learn to work with data using libraries like NumPy, Pandas, Matplotlib, and Seaborn.' },
  { phase: 'Phase 3: Math for Machine Learning', goal: 'Master math concepts behind ML — linear algebra, probability, calculus, stats.' },
  { phase: 'Phase 4: Core Machine Learning', goal: 'Learn ML algorithms, evaluation, and applications.' },
  { phase: 'Phase 5: Deep Learning & Neural Networks', goal: 'Advanced DL frameworks, architectures, neural models.' }
]

const phaseResources = [
  {
    categories: [
      {
        type: "YouTube (free)",
        platformInstructor: ["CodeWithHarry", "FreeCodeCamp", "CampusX"],
        resourceName: [
          "Python for Beginners (Hindi Full Course)",
          "Python for Beginners (4 hours Full Course)",
          "Complete Python Playlist"
        ],
        links: [
          { text: "Watch on YouTube", url: "https://www.youtube.com/watch?v=gfDE2a7MKjA" },
          { text: "Watch on YouTube", url: "https://www.youtube.com/watch?v=rfscVS0vtbw" },
          { text: "Watch Playlist", url: "https://www.youtube.com/playlist?list=PLKnIA16_RmvbOPGO0FvFCyRJxvY0A02jd" }
        ],
      },
      {
        type: "Coursera (free)",
        platformInstructor: ["University of Michigan"],
        resourceName: ["Programming for Everybody (Getting Started with Python)"],
        links: [
          { text: "Join on Coursera", url: "https://www.coursera.org/learn/python" }
        ]
      },
      {
        type: "Udemy (Paid)",
        platformInstructor: ["Jose Portilla"],
        resourceName: ["Complete Python Bootcamp: Go from Zero to Hero in Python 3"],
        links: [
          { text: "Enroll on Udemy", url: "https://www.udemy.com/course/complete-python-bootcamp/" }
        ]
      },
      {
        type: "Official Docs (free)",
        platformInstructor: [],
        resourceName: ["Python Official Documentation"],
        links: [
          { text: "Read Docs", url: "https://docs.python.org/3/" }
        ]
      }
    ]
  },
  {
    categories: [
      {
        type: "YouTube (free)",
        platformInstructor: ["FreeCodeCamp", "Krish Naik", "CampusX"],
        resourceName: [
          "Data Analysis with Python (Full Course)",
          "Python for Data Science",
          "Data Science Series"
        ],
        links: [
          { text: "Watch on YouTube", url: "https://www.youtube.com/watch?v=r-uOLxNrNk8" },
          { text: "Watch on YouTube", url: "https://www.youtube.com/watch?v=LHBE6Q9XlzI" },
          { text: "Watch Playlist", url: "https://www.youtube.com/playlist?list=PLKnIA16_RmvbMrGYBdaS0J_3Pj05V7yFU" }
        ],
      },
      {
        type: "Coursera (free)",
        platformInstructor: ["IBM"],
        resourceName: ["Data Analysis with Python"],
        links: [
          { text: "Join on Coursera", url: "https://www.coursera.org/learn/data-analysis-with-python" }
        ]
      },
      {
        type: "Udemy (Paid)",
        platformInstructor: ["Jose Portilla"],
        resourceName: ["Python for Data Science and Machine Learning Bootcamp"],
        links: [
          { text: "Enroll on Udemy", url: "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/" }
        ]
      },
      {
        type: "Official Docs (free)",
        platformInstructor: [],
        resourceName: ["Pandas & NumPy"],
        links: [
          { text: "Pandas Docs", url: "https://pandas.pydata.org/docs/" },
          { text: "NumPy Docs", url: "https://numpy.org/doc/stable/" }
        ]
      }
    ]
  },
  {
    categories: [
      {
        type: "YouTube (free)",
        platformInstructor: ["3Blue1Brown", "CampusX", "Krish Naik"],
        resourceName: [
          "Essence of Linear Algebra & Calculus",
          "Math for Machine Learning",
          "Statistics for Data Science"
        ],
        links: [
          { text: "Watch on YouTube", url: "https://www.youtube.com/c/3blue1brown" },
          { text: "Watch Playlist", url: "https://www.youtube.com/playlist?list=PLKnIA16_Rmvbp0xO0VxZ2xJ1qSmqF2Y2M" },
          { text: "Watch Playlist", url: "https://www.youtube.com/watch?v=JvS2triCgOY" }
        ],
      },
      {
        type: "Coursera (free)",
        platformInstructor: ["Imperial College London"],
        resourceName: ["Mathematics for Machine Learning Specialization"],
        links: [
          { text: "Join on Coursera", url: "https://www.coursera.org/specializations/mathematics-machine-learning" }
        ]
      },
      {
        type: "Udemy (Paid)",
        platformInstructor: ["Lazy Programmer Inc."],
        resourceName: ["Mathematics for Data Science and Machine Learning using Python"],
        links: [
          { text: "Enroll on Udemy", url: "https://www.udemy.com/course/mathematics-for-data-science-and-machine-learning/" }
        ]
      },
      {
        type: "Official Docs (free)",
        platformInstructor: [],
        resourceName: ["Khan Academy Math for ML (Linear Algebra, Stats, Probability)"],
        links: [
          { text: "Learn on Khan Academy", url: "https://www.khanacademy.org/math/linear-algebra" }
        ]
      }
    ]
  },
  {
    categories: [
      {
        type: "YouTube (free)",
        platformInstructor: ["StatQuest (Josh Starmer)", "CampusX", "Krish Naik"],
        resourceName: [
          "Machine Learning Simplified Concepts",
          "Complete Machine Learning Playlist",
          "Machine Learning Basics"
        ],
        links: [
          { text: "Watch on YouTube", url: "https://www.youtube.com/user/joshstarmer" },
          { text: "Watch Playlist", url: "https://www.youtube.com/playlist?list=PLKnIA16_Rmvbntrc6xG5i6n8lTqT2Fsvs" },
          { text: "Watch Playlist", url: "https://www.youtube.com/watch?v=cKxRvEZd3Mw" }
        ],
      },
      {
        type: "Coursera (free)",
        platformInstructor: ["Andrew Ng (Stanford)"],
        resourceName: ["Machine Learning"],
        links: [
          { text: "Join on Coursera", url: "https://www.coursera.org/learn/machine-learning" }
        ]
      },
      {
        type: "Udemy (Paid)",
        platformInstructor: ["Kirill Eremenko"],
        resourceName: ["Machine Learning A Z™: Hands-On Python & R In Data Science"],
        links: [
          { text: "Enroll on Udemy", url: "https://www.udemy.com/course/machinelearning/" }
        ]
      },
      {
        type: "Official Docs (free)",
        platformInstructor: [],
        resourceName: ["Scikit-learn Machine Learning in Python Documentation"],
        links: [
          { text: "Read Docs", url: "https://scikit-learn.org/stable/" }
        ]
      }
    ]
  },
  {
    categories: [
      {
        type: "YouTube (free)",
        platformInstructor: ["Krish Naik", "3Blue1Brown", "CampusX"],
        resourceName: [
          "Deep Learning Complete Course",
          "Neural Networks Visualized",
          "Deep Learning & Neural Networks Series"
        ],
        links: [
          { text: "Watch on YouTube", url: "https://www.youtube.com/playlist?list=PLZoTAELRMXVPGU70ZGsckrMdr0FteeRUi" },
          { text: "Watch Playlist", url: "https://www.youtube.com/watch?v=aircAruvnKk" },
          { text: "Watch Playlist", url: "https://www.youtube.com/playlist?list=PLKnIA16_RmvbszG_FY5u73b9d3aP4L4s7" }
        ],
      },
      {
        type: "Coursera (free)",
        platformInstructor: ["DeepLearning.AI (Andrew Ng)"],
        resourceName: ["Deep Learning Specialization"],
        links: [
          { text: "Join on Coursera", url: "https://www.coursera.org/specializations/deep-learning" }
        ]
      },
      {
        type: "Udemy (Paid)",
        platformInstructor: ["Kirill Eremenko"],
        resourceName: ["Deep Learning A-Z™: Hands On Artificial Neural Networks"],
        links: [
          { text: "Enroll on Udemy", url: "https://www.udemy.com/course/deeplearning/" }
        ]
      },
      {
        type: "Official Docs (free)",
        platformInstructor: [],
        resourceName: ["TensorFlow / PyTorch"],
        links: [
          { text: "TensorFlow Docs", url: "https://www.tensorflow.org/learn" },
          { text: "PyTorch Docs", url: "https://pytorch.org/tutorials/" }
        ]
      }
    ]
  }
]

const useOnScreen = (ref, rootMargin = '0px') => {
  const [isIntersecting, setIntersecting] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { rootMargin }
    )
    if (ref.current) observer.observe(ref.current)
    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [ref, rootMargin])
  return isIntersecting
}

const Phases = () => {
  return (
    <main className='w-full min-h-screen bg-white flex flex-col'>
      <nav className='h-[10vh]'>
        <Navbar />
      </nav>
      <section className='w-full flex flex-col items-center py-10 px-4 md:px-16'>
        <header className='mb-12 text-center'>
          <h1 className='text-3xl md:text-4xl font-[pankh] mb-2'>🧩 Bootcamp Timeline</h1>
        </header>
        <Timeline />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  )
}

const Timeline = () => {
  return (
    <div className='relative w-full max-w-3xl flex flex-col justify-start md:items-center gap-16 mx-auto'>
      <div className='absolute md:left-8 left-1/2 top-0 bottom-0 w-2 bg-blue-300 rounded z-0'></div>

      {BootcampPhases.map((phase, idx) => (
        <TimelineItem
          key={phase.phase}
          index={idx}
          phase={phase}
          isLast={idx === BootcampPhases.length - 1}
          resources={phaseResources[idx]}
        />
      ))}
    </div>
  )
}

const TimelineItem = ({ index, phase, isLast, resources }) => {
  const ref = useRef()
  const visible = useOnScreen(ref, '-100px')
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef(null)
  const [maxHeight, setMaxHeight] = useState('0px')

  const toggleAccordion = () => setIsOpen(prev => !prev)

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px')
    }
  }, [isOpen])

  const animationClass = visible
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-10'

  return (
    <div
      ref={ref}
      className={`relative flex flex-col md:flex-row md:items-start md:px-4 transition-all duration-700 ease-out ${animationClass}`}
    >
      <div className='absolute left-2 hidden md:block top-2 md:top-0 w-14 h-14 rounded-full bg-blue-600 border-4 border-blue-400 text-white md:flex items-center justify-center text-2xl font-bold'>
        {index + 1}
      </div>
      {!isLast && (
        <div className='absolute left-8 hidden top-16 md:top-16 w-1 h-full bg-gradient-to-b from-blue-400 to-blue-600 rounded'></div>
      )}
      <div className='bg-white border border-blue-300 shadow-lg rounded-xl p-6 text-left w-full md:ml-20'>
        <h3 className='font-[galabix] text-xl text-blue-700 mb-2'>{phase.phase}</h3>
        <p className='font-[roboto] text-gray-700 mb-4'>{phase.goal}</p>
        {resources && (
          <div>
            <button
              onClick={toggleAccordion}
              className='w-full focus:outline-none text-blue-600 font-semibold mb-2'
              aria-expanded={isOpen}
              aria-controls={`phase${index + 1}-resources`}
            >
              {isOpen ? 'Hide Resources ▲' : 'Show Resources ▼'}
            </button>
            <div
              id={`phase${index + 1}-resources`}
              ref={contentRef}
              style={{
                maxHeight: maxHeight,
                overflow: 'hidden',
                transition: 'max-height 0.5s ease, opacity 0.5s ease, padding 0.5s ease',
                opacity: isOpen ? 1 : 0,
                paddingBottom: isOpen ? '1rem' : '0',
              }}
              className='space-y-4'
            >
              {resources.categories.map((category, i) => (
                <div key={i}>
                  <h4 className='font-bold text-blue-800 mb-1'>{category.type}</h4>
                  <table className='w-full text-sm border border-gray-200 rounded'>
                    <thead>
                      <tr className='bg-blue-100 text-blue-900'>
                        <th className='px-2 py-1 border'>Platform / Instructor</th>
                        <th className='px-2 py-1 border'>Resource Name</th>
                        <th className='px-2 py-1 border'>Link</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.resourceName.map((res, idx) => (
                        <tr key={idx} className='even:bg-blue-50'>
                          <td className='px-2 py-1 border'>
                            {category.platformInstructor[idx] || '-'}
                          </td>
                          <td className='px-2 py-1 border'>{res}</td>
                          <td className='px-2 py-1 border text-blue-600 font-medium'>
                            <a href={category.links[idx].url} target="_blank" rel="noopener noreferrer">
                              {category.links[idx].text}
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Phases
