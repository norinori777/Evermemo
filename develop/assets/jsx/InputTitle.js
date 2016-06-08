{/*
	・項目番号と入力ボックスを1行で表示する
*/}

import React, {Component, PropTypes, defaultProps} from 'react'
import ContentEditable from './ContentEditable.js'
import classNames from 'classnames'

export default class InputTitle extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      inputValue: this.props.inputValue
    };
  }

  render(){
    let title = classNames({InputTitle: true})
  	return(
  	  <div>
  	    <ContentEditable
   	      classes={title}
          role={'title'}
          addLine={this.props.addLine}
          allowEnter={this.props.allowEnter}
          placeholder={'メモの題名を入力してください'}
          inputValue={this.props.data}
          dispatch={this.props.dispatch} />
  	  </div>
  	);
  }
}

InputTitle.propTypes = {
  data: PropTypes.string.isRequired
}
InputTitle.defaultProps = {
  allowEnter: false,
  inputValue: ''
}