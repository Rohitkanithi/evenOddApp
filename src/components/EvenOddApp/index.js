// Write your code here

import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(temp => ({
      count: temp.count + Math.floor(Math.random() * 100),
    }))
  }

  evenOdd = () => {
    const {count} = this.state

    return count % 2 === 0 ? 'Even' : 'Odd'
  }

  render() {
    const {count} = this.state
    const countNumber = this.evenOdd()
    return (
      <div className="bgTheme">
        <h1 className="heading">
          Count <span className="time">{count}</span>
        </h1>
        <p>
          Count is <span>{countNumber}</span>
        </p>
        <button
          type="button"
          className="buttonIncrement"
          onClick={this.onIncrement}
        >
          Increment
        </button>
        <p className="para">*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
