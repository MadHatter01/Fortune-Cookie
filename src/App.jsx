import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { fortunes } from './data';
import './App.css'



const keys = ['funny', 'inspirational']

function App() {
  const [fortune, setFortune] = useState('');
  const [cracked, setCracked] = useState(false);



  const getFortune = () => {
    const randIndex = Math.floor(Math.random() * keys.length);
    const cat = fortunes[keys[randIndex]]
    setFortune(cat[Math.floor(Math.random() * cat.length)]);
    setCracked(true);

    setTimeout(() => {
      setCracked(false);
    }, 2400);

  }

  const FortunePaper = ()=>{

    const props = useSpring({ 
   opacity: cracked ? 1 : 0,
   display: cracked ? 'block':'none',
    transform: cracked ? "translate(0px, 0px)" : "translate(-20px, -20px)",
    config: { duration: 1200 }
    })

    return (
      <animated.div className="fortune-paper" style={props}>
      <p>{fortune}</p>
    </animated.div>
    )
  }

  return (
    <div className='container'>
      <div className={`cookie ${cracked ? 'cracked' : ''}`} onClick={getFortune}> 🥠</div>

      {fortune && <FortunePaper />}
    </div>
  )
}

export default App
