import { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      click: false
    }
  }

  handleClick = () => {
    this.props.handleReport(this.props.item)
    this.setState({
      click: true
    })
  }

  handleShow = () => {
    this.props.handleReport(this.props.item)
    this.setState({
      click: false
    })
  }

  render() {
    const { handleClick, handleShow } = this
    return (
      <div className='cards'>
        {!this.state.click ? <><p>{this.props.item}</p>
          <button onClick={handleClick}>X</button> </>
          :
          <button onClick={handleShow}>Show</button>}
      </div>
    )
  }
}

export default Card