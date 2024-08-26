import head from '../assets/head.svg'
import "./Card.css"

const Card = ({card, handleCardClick, disabled}) => {

  return (
    <button className={`card ${card.matchFound ? "matched" : ""}`} disabled={disabled} onClick={handleCardClick} data-id={card.id}>
      <div className="front side">
        <img src={head} alt="head" width="60" />
      </div>
      <div className="side back">{card.emoji}</div>
    </button>
  )
}
export default Card