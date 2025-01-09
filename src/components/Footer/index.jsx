import './index.style.css'
import footerLogoData from './footerLogoData'

export default function Footer() {
  return (
    <>
      <div className='footer-container'>
        {
          footerLogoData.map((logo, index) => {
            return (
              <a className="footer-logo"key={index} href={logo.href} target='_blank' rel='noreferrer'>
                <img src={logo.src} alt={logo.alt} />
              </a>
            )
          })
        }
      </div>
    </>
  )
}