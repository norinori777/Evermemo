import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Toolbar from './Toolbar.js'
import ContentEditable from './ContentEditable.js'
import InputMultiLines from './InputMultiLines.js'
import InputTitle from './InputTitle.js'
import CurrentTime from './CurrentTime.js'
import {addMemo} from '../js/action/index.js'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  handleAdd(){
  	let data = {title: this.props.title, memo: this.props.memoes}
  	addMemo({data, dispatch:this.props.dispatch})
  }
  render(){
    let
    title = {title:'Evermemo',url:'http://localhost:5555/'},
    menu = [{title:'test1',url:'http://localhost/'},{title:'test2',url:'http://localhost/'},{title:'test3',url:'http://localhost/'}]
    return(
      <div>
        <Toolbar title={title}
        		menu={menu} />
        <InputTitle　data={this.props.title} dispatch={this.props.dispatch} />
        <CurrentTime></CurrentTime>
        <article>
        	<InputMultiLines data={this.props.memoes} dispatch={this.props.dispatch} ></InputMultiLines>
        </article>
        <input type="button" id="add" value="登録" onClick={this.handleAdd}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Main)
