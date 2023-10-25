import { useState } from 'react';
import blogData_42 from '../data/blogData';

const BlogLocalJson_42 = () => {
  const [name, setName] = useState('陳思語');
  const [id, setId] = useState(211410542);
  const [blogs,setBlogs] = useState(blogData_42);
  return (
    
    <section className="blogs">
    <div className="section-title">
      <h2>Blog Form Local Json</h2>
      <h3>{name}, {id}</h3>
    </div>
    <div className="blogs-center">
        {blogs.map((item)=>{
            const{id,img, remote_url,title,category,descrip} =item;
            return(
                <article key={id} className="blog">
                <img
                  src={img}
                  alt="Coffee photo"
                  className="img blog-img"
                />
                <div className="blog-content">
                  <span>{category} <i className="fa-solid fa-mug-saucer"></i></span>
                  <h3>{title}</h3>
                  <p>{descrip}</p>
                  <a href="#">read more</a>
                </div>
              </article>
            )
        })}
    </div>
    </section>
  )
}

export default BlogLocalJson_42