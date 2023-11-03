import './index.css'

const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props

  return (
    <div className="pro">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div>
          <p>Score: {currentScore}</p>
          <p>Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
