import Posts from "./Posts"
import { Link } from "react-router-dom"
import PostAuthor from "./PostAuthor"
export default function PostItem({Image, authorId, category, title, des, postId}) {
     const shortTitle =title.length>30?title.substring(0,30)+'...':title;
     const shortDes =des.length> 140?des.substring(0,140)+'...':des;
    return (
    <article className="post">
        <div className="post-image">
            <img src={Image} alt="" />

            </div>
            <div className="post-content">
                <Link to={'posts/${postId}'}>
                    <h3>{shortTitle}</h3>
                </Link>
                <p>{shortDes}</p>
                <div className="post-footer">
                    <PostAuthor/>
                    <Link to={'/posts/categories/${category}'}className="btn btn-category">{category}</Link>
                </div>
            </div>
             </article>
        
  )
}
