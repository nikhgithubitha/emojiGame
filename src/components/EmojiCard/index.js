import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiUrl, emojiName} = emojiDetails

  const onCLickEmojiCard = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-item">
      <button type="button" className="emoji-btn" onClick={onCLickEmojiCard}>
        <img src={emojiUrl} alt={emojiName} className="image-icon" />
      </button>
    </li>
  )
}

export default EmojiCard
