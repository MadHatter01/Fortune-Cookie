import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

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
  const [cracked, setCracked] = useState(false);

  const getFortune = ()=>{
    const randIndex = Math.floor(Math.random()* keys.length);
    const cat = fortunes[keys[randIndex]]
    setFortune(cat[Math.floor(Math.random()*cat.length)]);
    setCracked(true);

    setTimeout(() => {
      setCracked(false);
    }, 1000);
    
  }

  return (
    <>
      <div className={`cookie ${cracked ? 'cracked': ''}`} onClick={getFortune}> 🥠</div> 
 
      <animated.div className="fortune-paper">
        
      <p>{fortune? fortune :''}</p>
        </animated.div>
    </>
  )
}

export default App
