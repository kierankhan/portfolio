import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconGithub from './components/IconGithub'
import './App.css'
import Card from './components/Card'
import Projects from './components/Projects'
import Resume from './components/Resume'


function App() {
  const [tab, setTab] = useState("projects")
  return (
    <div className={`min-h-screen min-w-full bg-gradient-to-br from-slate-800 to-black flex flex-col animate-shiftbg`} style={{backgroundSize: '200%'}}>
      <div className='flex flex-col'>
        <div class="lg:basis-1/4 sm:basis-1/6 flex justify-end right-0 h-1/6 lg:pt-10 lg:pr-10 sm:pr-5 sm:pt-3 animate-slidein">
          <a href="https://github.com/kierankhan" className='pr-3' target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github fa-4x" style={{color: "#f1f5f9", size: "500px"}}aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/in/kieran-khan-8b6b381a2/" className='pl-3' target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin fa-4x" style={{color: "#f1f5f9", size: "500px"}}aria-hidden="true"></i>
          </a>
        </div>
        <div className='lg:basis-2/3 sm:basis-5/6 lg:pl-36 sm:pl-8 lg:w-3/4 sm:w-11/12'>
          <h1 className="flex font-semibold text-transparent lg:text-8xl sm:text-5xl bg-clip-text bg-gradient-to-r from-rose-500 to-yellow-300 py-10 animate-slidein">
          Kieran Khan <h1 className="font-semibold text-white lg:text-8xl sm:text-5xl animate-blink">_</h1>
          </h1>
          {/* <img className='photo' src="../public/grad1.jpg" ></img> */}
        </div>
      </div>
      <div className='lg:pl-36 sm:pl-8'>
        <p className='text-slate-100 lg:text-2xl sm:text-xl lg:w-2/3 sm:w-11/12 animate-slidein'>
          Hi I'm Kieran, a student at the University of Maryland studying CS and Statistics. I have a strong interest in LLMs,
          data science/ML, and web development. I'm seeking experience in SWE and Data Science roles to build skills for future endeavors. 
          Aside from school/career, I enjoy playing violin, travelling, eating good food, and listening to jazz. Feel free to get in touch!
        </p>
      </div>

      
      <div className='flex flex-row pb-20'>
        <div className='bottom-0 h-1/2 w-screen'>
          <div className="flex justify-center items-center py-10">
            <div className="text-center flex flex-row animate-slidein">
              <button className={`lg:text-6xl sm:text-4xl font-bold text-slate-100 justify-center px-2 ${tab == "projects" ? 'opacity-100' : 'opacity-50 hover:opacity-70'}`} onClick={() => setTab("projects")}>
                Portfolio 
              </button>
              <h1 className='lg:text-6xl sm:text-5xl font-bold text-slate-100'>|</h1>
              <button className={`lg:text-6xl sm:text-4xl font-bold text-slate-100 justify-center px-2 ${tab == "resume" ? 'opacity-100' : 'opacity-50 hover:opacity-70'}`} onClick={() => setTab("resume")}>
                Resume 
              </button>
              <i className="fa-solid fa-arrow-turn-down fa-2x pl-4 pt-7" style={{color: "#f1f5f9"}}aria-hidden="true"></i>
            </div>
          </div>
          
          <div className='animate-slidein'>{tab == "projects" ? <Projects /> : <Resume />}</div>
        </div>
      </div>
        
      
    </div>
  )
}

export default App
