import { useState } from 'react'
import './Home.css'
import calabaza1 from '../../assets/imgs/calabaza1 copia.png';
import Navbar from '../../Components/navbar/Navbar'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="containerHome">
       
     <Navbar/>
     <h2 id='portada_1'>
      HALLOWEEN
     </h2>
     <div id='calabaza1'>
     <img  src={calabaza1} alt="calabaza1"/>
     </div>
    </div>
  )
}

export default Home
