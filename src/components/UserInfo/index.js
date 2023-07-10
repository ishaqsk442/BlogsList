// Write your JS code here
import './index.css'

const UserInfo = props => {
  const {name, des} = props
  return (
    <div className="user-info">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        alt="profile"
        className="profile"
      />
      <h1>{name}</h1>
      <p>{des}</p>
    </div>
  )
}
export default UserInfo
