import './index.style.css';
import portfolioPhoto from '../../../assets/images/portfolio.jpg';

export default function Portfolio() {

  return (
    <>
      <div className="portfolio-container card-body">
        <p className='component-header'>Our Portfolio</p>
        <img src={portfolioPhoto} alt="Portfolio" className="portfolio-photo" />
        <div className="portfolio-text">
          <p>Daniel Ludwick</p>
          <p>Owner / Operator / Arborist</p>
        </div>
      </div>
    </>
  )
}