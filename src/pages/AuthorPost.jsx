import React from 'react'

export default function AuthorPost() {
  return (
    <section className="authorPosts">
      {
        posts.length > 0 ? 
        <div className="container posts-container">
        {
            posts.map(({id,Image, authorId, category, title, des},index) => <PostItem key={index} Image={Image} category={category} authorId={authorId} title={title} des={des} postId={id}/>)
        }
 
        </div> : <h2 className="error-center">No posts found</h2>}
    </section>
  )
}
