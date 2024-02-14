import { Link } from 'react-router-dom'
import PostAuthor from '../components/PostAuthor'
import postdtailImage from '../assets/img1.jpg'

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
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
   <div className="postdtail-image">
    <img src={postdtailImage} alt="" />
   </div>
   <div className="postdtail-para">
   <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ex, qui praesentium fugiat deleniti consequuntur excepturi quasi ipsum debitis incidunt cupiditate iusto mollitia cumque ratione quos officiis quam pariatur soluta.
   </p>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit el itur? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae pariatur sapiente maxime repellat atque voluptate reprehenderit quo explicabo qui veritatis! Impedit officia et obcaecati tempore, dolorem tempora hic possimus deserunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime cumque saepe esse voluptatum. Exercitationem non voluptate nisi unde qui, explicabo reiciendis enim, soluta autem, id deleniti quam nesciunt dolorem veritatis.
  </p>
  </div>
  </div>

 </section>  )
}
