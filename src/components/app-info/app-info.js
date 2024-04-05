import './app-info.css'

const AppInfo = (props) => {
  const {count, countBenefits} = props
  return (
    <div className="app-info">
      <h1 className="app-info-h1">Gazoz ltd's Employee acconting</h1>
      <h2 className="app-info-employee-counter">Employee count: {count}</h2>
      <h2 className="app-info-employee-benefits">Benefits get: {countBenefits}</h2>
    </div>
  )
}

export default AppInfo