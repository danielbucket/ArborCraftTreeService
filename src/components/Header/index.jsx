import './index.style.css'
import logo from '../../assets/images/arborcraft.png'
const mailto = 'mailto:daniel@arborcrafttreeservice.com'
const phonenumber = '303-847-5786'

export default function Header() {
  return (
    <>
      <div className='header-container'>
        <div className="header-logo-container">
          <img src={logo} alt='ArborCraft logo' />
        </div>
        <div className='contact-container'>
          <p className='contact-content'><span>{phonenumber}</span></p>
          <a className='contact-content phone-number' href={mailto}>Click to Email</a>
        </div>
      </div>
    </>
  )
}