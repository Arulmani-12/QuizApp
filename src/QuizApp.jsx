import React, { useState } from 'react'
import { qui } from './Data'
import './QuizStyle.css'


export default function QuizApp() {

    const [index, setIndex] = useState(0);
    const [option, setOption] = useState('');
    const [finish, setFinish] = useState(false);
    const [score, setScore] = useState(0);
  const correctAns = ['Option1','Option1','Option1','Option1','Option1','Option1','Option1','Option1','Option1','Option1'];

    const handleNext = () => {
      if (index < qui.length-1) {
        if(correctAns[index] === option) {
          setScore(score+1);
        }
        setIndex(index+1);
        setOption('');
      } else {
        if(correctAns[index] === option) {
          setScore(score+1);
        }
        setFinish(true);
      }
    }

    if (finish) {
      return (
        <div className='scorecard'>
          <h3>Quizz Finished..</h3>
          <p>Your score is {score} out of {qui.length}</p>
          {/* <img src='download.jpg' alt='none'></img> */}
        {/* <p><img src='download.jpg'></img></p> */}
        </div>
      )
    }
    
    const handleOption = (opt) => {
        setOption(opt);
        // alert(opt)
    }

  return (

    <div className='quiz'>
      
      <h3>{qui[index].Question}</h3>
      <ul>
     <li className={option === 'Option1'?'select':''}
     onClick={()=> handleOption('Option1')}> {qui[index].Option1}</li>
     <li className={option === 'Option2'?'select':''}
     onClick={()=> handleOption('Option2')}> {qui[index].Option2}</li>
     <li className={option === 'Option3'?'select':''}
     onClick={()=> handleOption('Option3')}> {qui[index].Option3}</li>
     <li className={option === 'Option4'?'select':''}
     onClick={()=> handleOption('Option4')}> {qui[index].Option4}</li>
     
      </ul>

      <button onClick={handleNext} disabled={!option}>Next</button>
      <p>Question {index+1} out of {qui.length}</p>
    </div>
  )
}
