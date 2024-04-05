
import './employee-list-item.css'

 const EmployeeListItem = (props) => {

    const { name, surname, wage, onDelete, onToggleProp, onWageUpdate, isBenefit, isUpgrade } = props
    let classNames = "list-group-item d-flex justify-content-between"
    if (isBenefit) {
      classNames += " increase"
    }
    if (isUpgrade) {
      classNames += " like"
    }

    return (
      <li className={classNames}>
        <span
          className="list-group-item-label"
          onClick={onToggleProp}
          data-toggle="isUpgrade">{name} {surname}</span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={wage + '$'}
          onChange={onWageUpdate}
          />
        <div className="d-flex justify-content-center align-items-center">
          <button
            className="btn-cookie btn-sm"
            onClick={onToggleProp}
            data-toggle="isBenefit"
          >
            <i className="fas fa-cookie"></i>
          </button>
          <button className="btn-trash btn-sm" onClick={onDelete}>
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    )
  }

export default EmployeeListItem