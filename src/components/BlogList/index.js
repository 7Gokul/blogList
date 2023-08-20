import './index.css'
import BlogItem from '../BlogItem'

const BlogsList = props => {
  const {blogsList} = props
  return (
    <ul className="blogs-container">
      {blogsList.map(each => (
        <BlogItem blog={each} key={each.id} />
      ))}
    </ul>
  )
}

export default BlogsList
