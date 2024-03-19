import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetailes extends Component {
  state = {blogsDataList: [], isLoading: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const formatedData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    this.setState({blogsDataList: formatedData, isLoading: false})
  }

  render() {
    const {blogsDataList, isLoading} = this.state

    const {title, imageUrl, content, avatarUrl, author} = blogsDataList
    return (
      <div className="blogs-data-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          <div className="blog-content-container">
            <h1 className="title-heading">{title}</h1>
            <div className="author-container">
              <img className="author-img" src={avatarUrl} alt={author} />
              <p className="author-name">{author}</p>
            </div>
            <img className="blog-image" src={imageUrl} alt={title} />
            <p className="content">{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetailes
