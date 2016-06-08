{/*

*/}

import React, {Component, PropTypes} from 'react'
import HorizonMenu from './HorizonMenu.js'

export default class Toolbar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className='toolbar'>
        <div className='toolbar__title'>
          <h1><a className='toolbar__link' href={this.props.title.url}>{this.props.title.title}</a></h1>
        </div>
        <div className='toolbar__menu'>
          <HorizonMenu menu={this.props.menu}></HorizonMenu>
        </div>
      </div>
    )
  }
}

Toolbar.propTypes = {
  title: PropTypes.object.isRequired,
  menu: PropTypes.array.isRequired
}

