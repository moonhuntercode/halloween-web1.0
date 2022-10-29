import './NavbarStyles.css'
import reactLogo from '../../assets/react-lila.svg'

export default function Navbar() {
  return (
    <div className="containerNavbar">
      <div className="logo">
       <a href="https://reactjs.org"
         target="_blank">
          <img src={reactLogo} 
          className="logo react" 
          alt="React logo" />
        </a>
       </div>
        <div className="navbar_children">information</div>
        
        <div className="navbar_children">contact</div>
    </div>
  )
}
