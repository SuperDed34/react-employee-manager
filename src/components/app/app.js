import { Component } from 'react'

import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import EmployeeList from '../employee-list/employee-list'
import EmployeeAddForm from '../employees-add-form/employees-add-form'
import SearchPanel from '../search-panel/search-panel'

import './app.css'
import data from './data'

export default class App extends Component{
  
  constructor(props, ) {
    super(props)
    this.state = JSON.parse(localStorage.getItem('data')) ?? {
      data,
      term: '',
      mode: 'All'
    }
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addItem = (name, wage) => {
    this.setState(({ data }) => {
      const dataCopy = data.slice()
      let ids = data.length <= 0 ? 0 : data[data.length - 1].id
      dataCopy.push({
          name: name,
          wage: wage,
          isBenefit: false,
          isUpgrade: false,
          id: ids + 1
        })
      return {
        data: dataCopy
      }
    })
  }

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop]}
        }
        return item
      })
    }))
  }

  searchEmployee = (items, term) => {
    if (term.length === 0) {
      return items
    }

    return items.filter(item => item.name.indexOf(term) > -1)
  }

  onUpdateSearch = (term) => {
    this.setState({term})
    }

  filterEmployee = (items, mode) => {
    if (mode === 'All') {
      return items
    }

    if (mode === 'moreThan1000%') {
      return items.filter(item=>item.wage > 1000)
    }
    
    return items.filter(item=>item[mode]===true)
  }

  onUpdateMode = (mode) => {
    this.setState({mode})
  }

  onWageUpdate = (id, newWage) => {
    const newData = this.state.data.slice()
     newData.map((emp) => {
       return emp.id === id
          ? emp.wage = newWage
          : emp
      })

    this.setState({ data: newData })
  }

  AddItemToLocalStorage = () => {
    localStorage.setItem('data',JSON.stringify(this.state))
  }

  render() {
    const { data, term, mode } = this.state
    const employees = data.length
    const countBenefits = data.filter(item => item.isBenefit).length
    const visibleData = this.filterEmployee(this.searchEmployee(data, term), mode)

    this.AddItemToLocalStorage()

    return (
    <div className='app'>
        <AppInfo count={employees} countBenefits={countBenefits} />
      <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter onUpdateMode={this.onUpdateMode} />
      </div>
      <EmployeeList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
          onWageUpdate={this.onWageUpdate}
        />
      <EmployeeAddForm onAdd={this.addItem}/>
    </div>
  )
  }
}