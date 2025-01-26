import './index.style.css'
import logo from '../../assets/images/arborcraft.png';
import phoneIcon from '../../assets/images/phone.png';
import copyIcon from '../../assets/images/clipboards.png';

const email = 'daniel@arborcrafttreeservice.com'
const phonenumber = '303-847-5786'

export default function Header() {
  const handleClick = (e) => {
    e.preventDefault();

    navigator.clipboard.writeText(email)
    .then(() => {
      console.log('Copied to clipboard')
      window.alert('Email copied to clipboard')
    })
    .catch(err => {
      console.log('Failed to copy: ', err)
    });
  };
  
  return (
    <>
      <div className='header-container'>
        <div className="header-logo-wrapper">
          <img src={logo} alt='ArborCraft logo' />
        </div>
        <div className='contact-container'>
          <div className='contact-content phone-wrapper'>
            <p>{phonenumber}</p>
            <img src={phoneIcon}/>
          </div>
          <div className='contact-content email-wrapper'>
            <p>{email}</p>
            <img className='copy-icon' src={copyIcon} onClick={handleClick}/>
          </div>
        </div>
      </div>
    </>
  );
};