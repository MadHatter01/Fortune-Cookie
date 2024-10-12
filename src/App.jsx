import { useState } from 'react'

import './App.css'

const fortunes = {
  'funny':[
    'Life is what happens to you while you are busy making other plans.',
    'Borrow money from a pessimist. They don\'t expect it back.',
    'Beware of funny seagulls',
    'In a past life, you were a tomato',
    'You will soon invent a new kind of salad',
    'Careful! You might step on gum today'
  ],

  'inspirational':[
    'The sky is the limit. You go for it!',
    'Whatever you are waiting to start, do it today',
    'Do one item from your bucket list today!',
    'You are capable of amazing things',
    'You need to believe in yourself!'
  ]
}

const keys = ['funny', 'inspirational']

function App() {
  const [fortune, setFortune] = useState('');

  const getFortune = ()=>{
    const randIndex = Math.floor(Math.random()* keys.length)
    // const randIndex = Math.floor(Math.random()*Object.keys(fortunes).length);
    setFortune(fortunes[keys[randIndex]][0])
  }

  return (
    <>
      <div className='cookie' onClick={getFortune}> 🥠</div> 
      <p>{fortune}</p>
    </>
  )
}

export default App
