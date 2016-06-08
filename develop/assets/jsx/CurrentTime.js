{
	/*
	・現在時間を表示する。
	・スタイルはインラインで指定する。
	*/
}

import React, {Component, PropTypes} from 'react'

export default class CurrentTime extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render(){
    let currentDate = new Date()
    let strTime = currentDate.toLocaleDateString() + ' ' + currentDate.toLocaleTimeString()
      return <time>{strTime}</time>
  }
}
