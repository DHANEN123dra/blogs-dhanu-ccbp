import './index.css'
import UserInfo from '../UserInfo'
import BlogList from '../BlogList'

const Home = () => (
  <div className="home-container">
  <UserInfo/>
  <div className="app-container">
   <BlogList/>
  </div>
  </div>
)

export default Home
