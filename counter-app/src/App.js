import { Component } from 'react';
import Counter from './Components/Counter';
import './App.css'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0

    }
  }

  handleAdd = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  handleSub = () => {
    this.setState({
      count: this.state.count - 1
    })
  }


  resetCounter = () => {
    this.setState({
      count: 0
    })
  }

  setCount = (count) => {
    this.setState({
      count: Number(count)
    })
  }

  render() {
    const { handleSub, handleAdd, setCount } = this
    return (
      <div className='main'>
        <button className='button' onClick={this.resetCounter}>Reset Counter</button>
        <Counter
          handleAdd={handleAdd}
          handleSub={handleSub}
          count={this.state.count}
          setCount={setCount} />
      </div>
    )
  }
}

export default App