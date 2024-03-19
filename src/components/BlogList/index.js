import {Component} from 'react'
import BlogItem from '../BlogItem'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogList extends Component {
  state = {blogsList: [], iSSpinnerLoading: true}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    this.setState({blogsList: updatedData, iSSpinnerLoading: false})
  }

  render() {
    const {blogsList, iSSpinnerLoading} = this.state
    return (
      <div className="blogs-container">
        {iSSpinnerLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          blogsList.map(eachItem => (
            <BlogItem blogDetails={eachItem} key={eachItem.id} />
          ))
        )}
      </div>
    )
  }
}
export default BlogList
