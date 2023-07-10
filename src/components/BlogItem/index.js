// Write your JS code here

import './index.css'

const BlogItem = props => {
  const {listItems} = props
  const {id, title, description, publishedDate} = listItems

  return (
    <li key={id} className="blog-list-cont">
      <div className="title-date">
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>
      <hr className="line" />
    </li>
  )
}

export default BlogItem
