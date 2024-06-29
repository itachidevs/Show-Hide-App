import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {frstisShow: false, secondisShow: false}

  showhidefirst = () => {
    this.setState(prevState => ({frstisShow: !prevState.frstisShow}))
  }

  showhidesecond = () => {
    this.setState(prevState => ({secondisShow: !prevState.secondisShow}))
  }

  render() {
    const {frstisShow, secondisShow} = this.state
    const firstnameMode = frstisShow ? <p className="name">Joe</p> : ''
    const lastnameMode = secondisShow ? <p className="name">Jonas</p> : ''

    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="btn-container">
          <div className="name-container">
            <button className="btn" type="button" onClick={this.showhidefirst}>
              Show/Hide Firstname
            </button>
            {firstnameMode}
          </div>
          <div className="name-container">
            <button className="btn" type="button" onClick={this.showhidesecond}>
              Show/Hide Lastname
            </button>
            {lastnameMode}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
