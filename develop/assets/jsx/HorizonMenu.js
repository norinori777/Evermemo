{/*

*/}

import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class HorizonMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  renderItem(values) {
    let items = []
    values.map(function(url,title){
      items.push(<li className='horizonMenu__item'><a href={url}>{title}</a></li>);
    })
    return items;
  }
  render() {
  	return (
  	  <navi>
  	    <ul className='horizonMenu'>
  	      {this.renderItem(this.props.menu)}
  	    </ul>
  	  </navi>
  	)
  }
}

HorizonMenu.propTypes = {
  menu: PropTypes.array.isRequired
}
