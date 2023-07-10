// Write your JS code here
import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {listDet} = props

  return (
    <ul className="blogs-list">
      {listDet.map(eachList => (
        <BlogItem key={eachList.id} listItems={eachList} />
      ))}
    </ul>
  )
}
export default BlogList
