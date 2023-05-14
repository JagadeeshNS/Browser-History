import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onClickDelete = () => {
    deleteHistory(id)
  }
  return (
    <li className="list-item">
      <div className="row-container">
        <div className="row">
          <p className="time">{timeAccessed}</p>
          <img src={logoUrl} alt="domain logo" className="image" />
          <p className="title">{title}</p>
          <p className="domain">{domainUrl}</p>
          <div>
            <button type="button" className="button" onClick={onClickDelete}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/delete-ing.png"
                alt="delete"
                className="delete"
              />
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default HistoryItem
