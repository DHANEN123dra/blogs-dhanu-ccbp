import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogDetails

  return (
    <li className="list-container">
      <Link className="link-class" to={`/blogs/${id}`}>
        <div className="blog-details-container">
          <div>
            <img className="blog-img" src={imageUrl} alt={`item${id}`} />
          </div>
          <div className="blog-text-container">
            <p className="topic">{topic}</p>
            <h1 className="title">{title}</h1>
            <div className="avatar-container">
              <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
              <p className="author">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
