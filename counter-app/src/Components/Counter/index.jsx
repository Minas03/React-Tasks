import { Component } from 'react';

class Counter extends Component {
  constructor() {
    super()
    this.state = {
      maxCount: 7,
      minCount: -7,
      step: 0
    }
  }

  handleMax = (e) => {
    this.setState({
      maxCount: e.target.value
    })
  }

  handleMin = (e) => {
    this.setState({
      minCount: e.target.value
    })
  }

  handleStep = (e) => {
    this.setState({
      step: e.target.value
    })
  }

  render() {

    const { count, handleAdd, handleSub, setCount } = this.props

    return (
      <>
        <div className='counter'>
          <button onClick={handleAdd} disabled={count + 1 > this.state.maxCount}>+</button>
          <h1>{this.props.title} Counter {count}</h1>
          <button onClick={handleSub} disabled={count - 1 < this.state.minCount}>-</button>
        </div>
        <div className='inputs'>
          <input placeholder='Max Count is 7' onChange={(e) => this.handleMax(e)}></input>
          <input placeholder='Min Count is -7' onChange={(e) => this.handleMin(e)}></input>
          <input placeholder='Step' onChange={(e) => this.handleStep(e)}></input>
          <button onClick={() => setCount(this.state.step)}>Ok</button>
        </div>
      </>
    )
  }
}

export default Counter