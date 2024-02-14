import { Link } from 'react-router-dom'
import PostAuthor from '../components/PostAuthor'
import postDtailImage from '../assets/img1.jpg'
export default function PostDtail() {
  return (
 <section>
  <div className='container PostDtail-container'>
    <div className='postdtail-top'>
      <PostAuthor/>
      <div className="postdtail-buttons">
        <div className="post-dtail-buttons">
          <Link to={'/posts/werwer/edit'} className='btn btn-sm btn-primary' >Edit</Link>
          <Link to={'/posts/werwer/delete'} className='btn btn-sm btn-danger' >Delete</Link>
          
        </div>
      </div>
    </div>
  </div>

 </section>  )
}
