{/*
	・propsで指定した数分、複数の入力項目を表示すること。
	・末尾の入力項目には、項目を追加するインターフェースを設けること。
*/}

import React, {Component, PropTypes, defaultProps} from 'react'
import InputLine from './InputLine.js'
import {updateMemo} from '../js/action/index.js'

export default class InputMultiLines extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }
  handleAdd(no){
    let data = {isShowDefaultValue: false, no: no + 1, vlaue: ""}
    updateMemo({data, dispatch: this.props.dispatch})
  }

  renderLine(values){
    let lines=[], temp, i
    temp = values === undefined ? [] : values
    for(i=0; i < temp.length; i++){
      if(i+1 == temp.length){
        lines.push(<InputLine value={temp[i]} addLine={this.handleAdd} dispatch={this.props.dispatch} />)
      }else{
      	lines.push(<InputLine value={temp[i]} dispatch={this.props.dispatch}  />)
      }
    }
    return lines
  }

  render(){
  	return <div>{this.renderLine(this.props.data)}</div>
  }
}

InputMultiLines.propTypes = {
	data: PropTypes.array.isRequired
}

