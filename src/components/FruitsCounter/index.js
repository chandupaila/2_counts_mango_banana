import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  onIncrement = () => {
    this.setState(prevStates => {
      console.log('button clicked')
      return {count1: prevStates.count1 + 1}
    })
  }

  onIncrementBanana = () => {
    this.setState(prevStates => {
      console.log('button banana clicked')
      return {count2: prevStates.count2 + 1}
    })
  }

  render() {
    const {count1, count2} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading">
            Bob ate {count1} mangoes {count2} bananas
          </h1>
          <div className="image-container">
            <img
              className="image"
              alt="mango"
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
            />
            <img
              className="image"
              alt="banana"
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
            />
          </div>
          <div className="button-container">
            <button className="button" onClick={this.onIncrement} type="button">
              Eat Mango
            </button>
            <button
              className="button"
              onClick={this.onIncrementBanana}
              type="button"
            >
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
