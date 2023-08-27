import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconGithub from './components/IconGithub'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <div className={`min-h-screen min-w-screen bg-gradient-to-br from-slate-900 to-indigo-500 flex flex-col w-screen `}>
      <div className='flex justify-between'>
        <div className='lg:basis-2/3 sm:basis-5/6 lg:pl-36 sm:pl-8 pt-16 lg:w-1/2 sm:w-3/4'>
          <h1 className="font-semibold text-transparent lg:text-8xl sm:text-6xl bg-clip-text bg-gradient-to-r from-rose-500 to-yellow-300 py-10">
          Kieran Khan_
          </h1>
          {/* <img className='photo' src="../public/grad1.jpg" ></img> */}
        </div>
        <div class="lg:basis-1/4 sm:basis-1/6 flex justify-end right-0 h-1/6 lg:p-10 sm:p-0 sm:pt-3">
          <a href="https://github.com/kierankhan" className='pr-3' target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github fa-4x" style={{color: "#f1f5f9", size: "500px"}}aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/in/kieran-khan-8b6b381a2/" className='pl-3' target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin fa-4x" style={{color: "#f1f5f9", size: "500px"}}aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <p className='text-slate-100 text-2xl lg:pl-36 sm:pl-8 lg:w-1/2 sm:w-11/12'>
      I'm a motivated and dynamic college student studying Computer Science and Math at the University of Maryland, College Park. 
      With a strong interest in AI/ML, data science, and web development, I'm seeking valuable experience to gain practical knowledge and insights to build 
      skills for future endeavors. 
          </p>
      
      <div className='flex flex-row pb-20'>
        <div className='bottom-0 h-1/2 w-screen lg:px-16 sm:px-5'>
        <div className="flex justify-center items-center py-10">
          <div className="text-center flex flex-row">
            <h1 className='text-6xl font-bold text-slate-100 justify-center'>
              Portfolio 
            </h1>
            <i className="fa-solid fa-arrow-turn-down fa-2x pl-4 pt-7" style={{color: "#f1f5f9"}}aria-hidden="true"></i>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-16 content-start">
          <Card 
              title="TestudoAI 🐢🔗" 
              desc="TestudoAI is an AutoGPT app that helps UMD students chooses courses, professors, and sections."
              desc2="Built in Python with [__LangChain__](https://python.langchain.com/docs/get_started/introduction.html), 
              TestudoAI is dynamic in that it is able to use custom built tools that call the [__umd.io__](https://beta.umd.io) 
              and [__PlanetTerp__](https://planetterp.com/api/) APIs and supply up-to-date data to the MRKL Agent based on a user query. 
              I built a total of eight different tools including a course, professor, and section search, grade data finder (with a custom 
                pie chart made with [__Matplotlib__](https://matplotlib.org/3.5.3/api/_as_gen/matplotlib.pyplot.html)), an aggregate 
                reviews search, and more. I implemented conversational memory for a natural flow of conversation, and used [__Embeddings__](https://cloud.google.com/blog/topics/developers-practitioners/meet-ais-multitool-vector-embeddings), 
                [__Vector Stores__](https://python.langchain.com/docs/modules/data_connection/vectorstores/), and [__FAISS__](https://engineering.fb.com/2017/03/29/data-infrastructure/faiss-a-library-for-efficient-similarity-search/) 
                to leverage large amounts of data to give the Agent only the relevant sections. The frontend 
                was made with [__Streamlit__]() Community Cloud. Developed 100% by yours truly."
              src="static/images/ss_3.png"
              link="https://testudoai.streamlit.app/"
              ghLink="https://github.com/kierankhan/TestudoAI"
              tech="LangChain, Python, OpenAI, LangSmith, Streamlit, Matplotlib, FAISS, Embeddings, Vector Stores, REST APIs"
              learnMore="https://github.com/kierankhan/TestudoAI"
            />
            <Card 
              title="StudyBrew☕" 
              desc="StudyBrew is a [__pomodoro__](https://www.forbes.com/sites/bryancollinseurope/2020/03/03/the-pomodoro-technique/?sh=294512cd3985) 
              timer that replaces the traditional countdown with a visualization of tea gradually pouring."
              desc2="StudyBrew users can set their desired study and break time, and unique to StudyBrew, if a user signs in with Google, StudyBrew 
              will track their past study habits and display that data so students can further optimize their study habits. StudyBrew uses 
              [__Firebase__](https://firebase.google.com/docs) for the backend and Google authentication, and [__React__](https://react.dev/) for 
              the frontend. We made custom liquid animations and a digital [__mask__](https://elovatestudios.com/digital-art-layers-and-masking/) was 
              used to overlay the teacup with the liquid. We used [__Bulma__](https://bulma.io/documentation/) to help with styling some of the 
              components. This was built with a team of four and was a winning project at the [__Bitcamp 2023 Hackathon__](https://bit.camp/)."
              src="static/images/sb_1.png"
              link="https://studybrew.netlify.app/"
              ghLink="https://github.com/ericx1e/StudyBrew"
              tech="React, Javascript, Firebase Bulma, HTML/CSS"
              learnMore="https://devpost.com/software/studybrew"
            />
            <Card 
              title="Poker Equity Calculator API🃏"
              desc="This is an API that calculates the equity of two poker hands given the option of community cards. 'Equity' in poker is defined as
               your current chance of winning the hand as a share of the pot."
              src="static/images/p_ss.png"
              desc2="Over the last year I've gotten into poker, and one of the most important things to learn early on is the concept of equity. 
              Equity determines your strategy, how much you bet, and is something good players are always aware of when they are in a hand. This project 
              was built in Java with the [__Spring Boot__](https://spring.io/projects/spring-restdocs) REST Framework. To calculate equity, I first 
              had to code poker, which I took an object oriented approach to. I then wrote an algorithm to randomly choose potential community cards and find the best 
              hand (out of the two given), and do that process 30,000 times to get an accurate equity percentage. I made this an API so that any 
              frontend could get a quick and accurate equity calculation."
              ghLink="https://github.com/kierankhan/Poker-Equity-Calculator-API"
              tech="Java, Spring Boot, REST APIs"
            />
          </div>
        </div>
        
          </div>
      </div>
        
      
    </div>
  )
}

export default App
