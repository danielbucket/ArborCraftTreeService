import './index.style.css'
import logo from '../../assets/images/arborcraft.png'

export default function Header() {
  return (
    <>
      <div className='header-container'>
        <div className="header-logo-container">
          <img src={logo} alt='ArborCraft logo' />
        </div>
        <div className="email-container">
          <a className="email"
            href="mailto:daniel@arborcrafttreeservice.com">
              Click Here to Request a Quote!
          </a>
        </div>
      </div>
    </>
  )
}