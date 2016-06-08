{/*
	・項目番号と入力ボックスを1行で表示する
*/}

import React, {Component, PropTypes, defaultProps} from 'react'
import ContentEditable from './ContentEditable.js'
import classNames from 'classnames'

export default class InputLine extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      inputValue: this.props.inputValue
    };
  }
  render(){

  	return(
  	  <div className={this.props.line}>
  	  <label className={this.props.no}>{this.props.value.no}：</label>
  	  <ContentEditable
  	    role={'memo'}
  	    className={this.props.classes}
  	    addLine={this.props.addLine}
  	    no={this.props.value.no}
  	    fontType={this.props.memo__contentFont}
  	    allowEnter={this.props.allowEnter}
  	    placeholder={'メモの内容を入力してください'}
  	    inputValue={this.props.value.value}
        dispatch={this.props.dispatch}  />
  	  </div>
  	);
  }
}

InputLine.propTypes = {
  allowEnter: PropTypes.bool.isRequired
}
InputLine.defaultProps = {
  line: 'memo__line',
  no: 'memo__no',
  allowEnter: true,
  inputValue: ''
}
