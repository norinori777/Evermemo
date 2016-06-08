{/*

*/}

import React, {Component, PropTypes} from 'react'

export default class ContentEditableLine extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render(){
    return (
      <div>{this.props.data}</div>
    )
  }
}

ContentEditableLine.propTypes = {
  data: PropTypes.string.isRequired
}