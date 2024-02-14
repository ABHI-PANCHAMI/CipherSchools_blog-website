
import { Link } from 'react-router-dom'
import AuthorImage from '../assets/a1.jpg'

export default function PostAuthor() {
  return (
   <Link to={'/posts/user/:id'} className='post-author'>
    <div className="post-author-image">
      <img src={AuthorImage} alt="authors image to be displayed here"/>  
      </div>
      <div className="post-author-info">
        <h5>Alex James</h5>
        <small>Just now</small>
      </div>
      </Link>

  )
}
