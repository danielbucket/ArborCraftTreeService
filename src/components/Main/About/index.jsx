import AC_Logo from '../../../assets/logos/arborcraftTree.png';
import './index.style.css';

export default function About() {

  return (
    <>
      <div className="about-container card-body">
        <p className="component-header">About Us</p>
        <img src={AC_Logo} alt="ArborCraft Tree Service Logo" className="about-logo" />
        <div className="about-text">We're not your typical do it fast and do it dirty tree care company. At ArborCraft we take the time to do the job thoroughly and do it well. We base our reputation on doing the job right the first time.</div>
      </div>
    </>
  )
}