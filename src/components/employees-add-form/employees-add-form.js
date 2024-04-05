import { Component } from 'react'
import './employee-add-form.css'

class EmployeeAddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      wage: ''
    }
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    const {onAdd} = this.props
    const { name, wage} = this.state
      return (
    <div className="app-add-form">
      <h3>Add new employee</h3>
      <form className="add-form d-flex">
      <div className="control">     
        <input type="text"
              className="form-control new-post-label"
              placeholder="Enter Name"
              name='name'
              value={name}
              onChange={this.onValueChange}
              minLength={3}
              required />
        <div className="error-msg-name">Must be more than 3 chars!</div>
      </div>
      <div className="control"> 
        <input type="number"
              className="form-control new-post-label"
              placeholder="Enter Wage"
              name='wage'
              value={wage}
              onChange={this.onValueChange}
              min={500}
              required
            />
              <div className="error-msg-wage">Must be more than 500$!</div>
      </div>
        <button type="submit"
              className="btn btn-outline-light" onClick={((e) => {
                e.preventDefault()
                if (name.length >= 3 && wage >= 500) {
                  onAdd(name, wage)
                  this.setState({
                    name: '',
                    wage: ''
                  })
                }
              })}>Add </button>
      </form>
    </div>
  )
  }
}

export default EmployeeAddForm