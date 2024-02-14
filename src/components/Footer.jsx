import {Link} from 'react-router-dom'
export default function Footer() {
  return (
    <footer>
      <div className="container foooter-categories"><ul className='foooter-categories'>
      <li><Link to={'/posts/categories/Education'}>Education</Link></li>
      <li><Link to={'/posts/categories/Technology'}>Technology</Link></li>
      <li><Link to={'/posts/categories/Fashion'}>Fashion</Link></li>
      <li><Link to={'/posts/categories/Business'}>Business</Link></li>
      <li><Link to={'/posts/categories/Ecommerce'}>Ecommerce</Link></li>
      <li><Link to={'/posts/categories/Psychology'}>Psychology</Link></li>
      <li><Link to={'/posts/categories/Travel'}>Travel</Link></li>
      <li><Link to={'/posts/categories/Trading'}>Trading</Link></li>
      <li><Link to={'/posts/categories/Stocks'}>Stocks</Link></li>
      <li><Link to={'/posts/categories/Weather'}>Weather</Link></li>
      <li><Link to={'/posts/categories/Science'}>Science</Link></li>
      <li><Link to={'/posts/categories/Art'}>Art</Link></li>
      <li><Link to={'/posts/categories/Music'}>Music</Link></li>

      </ul>
      <div className='footer-copyright'>
        <small>
          &copy; Copyright All Rights Reserved|| abhi panchami 12113731 
        </small>

      </div></div>
      
    </footer>
  )
}
