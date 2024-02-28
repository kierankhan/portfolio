import React from 'react'
import Card from './Card'

const Projects = () => {
  return (
    <div>
        <div className="flex items-center justify-center">
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-16 content-start px-5">
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
              title="WillHeSave" 
              desc="A machine learning project to predict whether my friend [__Eric__](https://learnsatmath.com/) will save a song to his Spotify
              library."
              desc2="A running joke amongst my friends is that I cannot pin down Eric's music taste - so I made a Machine Learning algorithm
              to do it for me. Used Spotify's proprietary audio features to train the algorithm. To do this, I had to make custom functions to
              turn a simple spotify playlist link into a [__Pandas dataframe__](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.html). 
              Once I had enough labeled training data I then performed feature engineering and supervised learning using five of [__sci-kit learn's__](https://scikit-learn.org/stable/)
              classification algorithms, including Decision Trees, Support Vector Machines, Random Forests, Naive Bayes, and KNN. Comparing these algorithms, 
              Random Forests performed the best when analyzed for accuracy and precision, so I used this as the final model. Users can plug in a song or playlist 
              and see if Eric would save it or not! You can also train the model on your own data - see the GitHub for details!"
              src="static/images/whs.png"
              ghLink="https://github.com/kierankhan/WillHeSave"
              tech="Pandas, Sklearn, NumPy, Seaborn, Spotipy, Jupyter Notebook"
              learnMore=""
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
              title="Diamondback Innovators 🐢💎" 
              desc="The website for Diamondback Innovators, UMD's first student-run engineering consulting club."
              desc2="Diamondback Innovators advance the skills they are taught at the University. With guest speakers from some of 
              the most prestigious companies, complex design challenges, and a seemingly infinite number of workshops, DBI 
              engineers learn technical and productivity skills that simply are not learned in class. Built with 
              [__Next.js__](https://nextjs.org/) on ReactJS with [__TailwindCSS__](https://tailwindcss.com/) as the styling framework. 
              "
              src="static/images/dbi.png"
              link="https://diamondbackinnovators.org/"
              ghLink="https://github.com/kierankhan/Diamondback-Innovators-Updated"
              tech="Next.js, TailwindCSS, ReactJS, Vercel"
              learnMore=""
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
              learnMore=""
            />
          </div>
        </div>
    </div>
  )
}

export default Projects