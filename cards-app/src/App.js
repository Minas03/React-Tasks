import { Component } from "react";
import Card from "./Components/Card";
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      cardArr: [1, 2, 3, 4, 5, 6],
      report: {},
      showReport: false
    }
  }

  handleShow = () => {
    this.setState({
      showReport: true
    })
  }

  handleReport = (elem) => {
    this.setState({
      report: { ...this.state.report, [elem]: this.state.report[elem] ? this.state.report[elem] + 1 : 1 }
    }, () => console.log(this.state.report))
  }

  render() {
    const { handleReport } = this
    return (
      <div className='main'>
        {this.state.cardArr.map((item) => <Card item={item} handleReport={handleReport} />)}
        <button onClick={this.handleShow}>Report</button>
        <div className="render">
          {this.state.showReport && this.state.cardArr.map((item) =>
            (<div>Card {item}  rendered  {this.state.report[item] ? this.state.report[item] : 0} times</div>))}
        </div>
      </div>
    )
  }
}

export default App