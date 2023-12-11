// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isShowFirstname: false, isShowLastname: false}

  firstName = () => {
    this.setState(prevState => ({
      isShowFirstname: !prevState.isShowFirstname,
    }))
  }

  lastName = () => {
    this.setState(prevState => ({
      isShowLastname: !prevState.isShowLastname,
    }))
  }

  render() {
    const {isShowFirstname, isShowLastname} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-container">
          <div class="card-container">
            <button type="button" className="button" onClick={this.firstName}>
              Show/Hide Firstname
            </button>
            {isShowFirstname ? <p className="name-conatainer">Joe</p> : ''}
          </div>
          <div class="card-container">
            <button type="button" className="button" onClick={this.lastName}>
              Show/Hide Lastname
            </button>
            {isShowLastname ? <p className="name-conatainer">Jonas</p> : ' '}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
