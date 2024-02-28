import { useState } from 'react'
import './Card.css'
import ReactMarkdown from 'react-markdown';

function Card(props) {

  return (
    <>
    <div class="max-w-3xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow"
    >
      <div className="flex justify-between">
        <h5 class="w-3/4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
        <a href={props.ghLink} className='px-3 justify-end' target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github fa-2x" style={{color: "#18181b", size: "500px"}}aria-hidden="true"></i>
        </a>
      </div>
      
      <h3 className="text-xl font-semibold underline text-blue-500 hover:text-indigo-500"><a href={props.link} target="_blank" rel="noopener noreferrer">{props.link}</a></h3>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"><ReactMarkdown children={props.desc}/></p>
      <img src={props.src} className='w-max rounded-lg'></img>
      <p class="my-3 font-normal text-gray-700 dark:text-gray-400"><ReactMarkdown children={props.desc2}/></p>
      <p className='text-lg text-emerald-500 font-bold pb-5'>Technologies: {props.tech}</p>
      {props.learnMore == "" ? <></> : 
        <a href={props.learnMore} class={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
          Read more
          <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      }
      
    </div>
    </>
  )
}

export default Card
