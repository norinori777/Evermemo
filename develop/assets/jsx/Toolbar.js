{/*

*/}

import React, {Component, PropTypes} from 'react'
import HorizonMenu from 'HorizonMenu.js'

export default class Toolbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div class="title">
          <h1><a href={this.props.title.url}>{this.props.title.title}</a></h1>
        </div>
        <div class="menu">
          <HorizonMenu menu={this.props.menu}></HorizonMenu>
        </div>
      </div>
    )
  }
}

