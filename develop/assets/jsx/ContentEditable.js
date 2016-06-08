{/*
　・ContentEditableを有効にする
　・placeholderの値を動的に設定出来るようにする。
　・値が入力された場合、placeholderの値が消えること。
　・値がなくなった場合、placeholderの値が表示されること。
 ・ENTERを押しても、Cancelされること。
*/}

import React, {Component, PropTypes, defaultProps} from 'react'
import ContentEditableLine from './ContentEditableLine.js'
import {updateTitle} from '../js/action/index.js'

export default class ContentEditable extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  getDefaultValue() {
    if(this.props.inputValue === ''){
      return this.props.placeholder
    }
    return ''
  }

  handleChange(e){
    let line = ''  
    if(e.target.firstChild === null){
      this.setState({isShowDefaultValue: true});
    }else{
      this.setState({isShowDefaultValue: false});
    }

    if(this.props.role === 'memo'){
      let i, values = []
      for(i = 0; i < e.target.childNodes.length; i++){
        if(e.target.childNodes[i].textContent === "" && this.enter_flg === 1){
          values.push('');
        }else{
          values.push(e.target.childNodes[i].textContent);
        }
      }
      updateMemo({memo:values, dispatch: this.props.dispatch})
    }
        
    if(this.props.role === 'title'){
      updateTitle({title:e.target.firstChild.textContent.toString(), dispatch: this.props.dispatch})
    }
  }

  // Actionで行数を増やし、Storeに保存
  keyDown(e){
    let target = e.target
    if(this.props.addLine!==undefined){
      if((e.which && e.which === 9) || (e.keyCode && e.keyCode === 9)){
        this.props.addLine(this.props.no)
      }
      if((e.which && e.which === 13) || (e.keyCode && e.keyCode === 13)){
        this.enter_flg = 1
      }             
    }
  }

  componentWillReceiveProps(){
    if(this.props.role === 'memo'){
      let i;
      for(i = 0; i < React.findDOMNode(this).childNodes.length; i++){
        if(React.findDOMNode(this).childNodes[i].toString() === "[object Text]"){
          React.findDOMNode(this).childNodes[i].remove()
        }else{
          if(React.findDOMNode(this).childNodes[i].childElementCount !== 0){
            if(React.findDOMNode(this).childNodes[i].childNodes[0].getAttribute("data-reactid") === null){
              if(React.findDOMNode(this).childNodes[i].childNodes[0].nodeName === "BR" || 
                React.findDOMNode(this).childNodes[i].childNodes[0].nodeName === "br" ){
                React.findDOMNode(this).childNodes[i].remove()
                i--
              }
            }
          }
        }
      }
    }
    console.log("test3")
  }

  renderTmp(values){
    let i, lines = []
    if(typeof values === 'string'){
      lines.push(<ContentEditableLine data={values}></ContentEditableLine>);
    } else {
      if(values.length === 0 || values === undefined){
        lines.push(<ContentEditableLine></ContentEditableLine>);
      }
      for(i=0; i < values.length; i++){
        lines.push(<ContentEditableLine data={values[i]}></ContentEditableLine>);
      }
    }
    return lines
  }

  render(){
    if(this.props.role === 'title'){
      return (
        <div contentEditable
          className={this.props.classes}
          effectAllowed="move"
          data-placeholder={this.getDefaultValue()} 
          onInput={this.handleChange.bind(this)}>
          onKeydown={this.keyDown.bind(this)}
          {this.props.inputValue}
        </div>
      )
    }
    if(this.props.role === 'memo'){
      return (
        <div contentEditable
          className={this.props.classes}
          effectAllowed="move"
          data-placeholder={this.getDefaultValue()} 
          onInput={this.handleChange.bind(this)}>
          {this.renderTmp(this.props.inputValue)}
        </div>
      )
    }
  }
}

ContentEditable.propTypes = {
  placeholder: PropTypes.string.isRequired,
  classes: PropTypes.func.isRequired,
  no: PropTypes.number.isRequired
}
ContentEditable.defaultPorps = {
  placeholder: 'メモの題名を入力してください',
  allowEnter: false
}