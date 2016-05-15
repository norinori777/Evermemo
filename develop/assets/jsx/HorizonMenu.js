{/*

*/}

import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default HorizonMenu extends Component {
  renderItem(vlaues) {
    let items = []
    values.map(function(url,title){
      items.push(<li className='navi__item'><a href={this.proprs.menu[i].url}>{this.props.menu[i].title}</a></li>);
    })
    return items;
  }
  render() {
  	let nav = classNames('nav': true)

  	return (
  	  <navi>
  	    <ul className={nav}>
  	      {this.renderItem(this.props.menu)}
  	    </ul>
  	  </navi>
  	)
  }
}
