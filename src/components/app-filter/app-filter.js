import './app-filter.css'

  const buttonState = {
      pressed: "btn-light",
      nonPressed: 'btn-outline-light'
  }

  const buttons = [
    { name: 'All', label: 'All Employees', isActive: true },
    { name: 'isUpgrade', label: 'Employees to upgrade', isActive: false  },
    { name: 'isBenefit', label: 'Employees to benefit', isActive: false  },
    { name: 'moreThan1000%', label: 'Wage more than 1000$', isActive: false  },
  ]

const onUpdateMode = (e, props) => {
    e.preventDefault()
    if (e.currentTarget.classList === buttonState.pressed) {
      return
    }
   buttons.map(button => {
    return button.name !== e.currentTarget.value
    ? button.isActive = false
    : button.isActive = true
    })
    props.onUpdateMode(e.currentTarget.value)
}
  
const AppFilter = (props) => {
  

  const renderButtons = () => {
    return buttons.map((button, id) => {
      const clazz = button.isActive ? ('btn ' + buttonState.pressed) : ('btn ' + buttonState.nonPressed)
      return (
        <button className={clazz}
          type='button'
          onClick={(e) => onUpdateMode(e, props)}
          value={button.name}
          key={id}>
          {button.label}
        </button>
      )
    })
  }
  
  return (

    <div className="btn-group">
        {renderButtons()}
    </div>
  )
}


export default AppFilter