import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import ToolBar from 'Toolbar.js'
import ContentEditable from 'ContentEditable.js'
import ContentEditableLine from 'ContentEditableLine.js'
import InputLine from 'InputLine.js'
import InputMultiLines from 'InputMultiLine.js'
import CurrentTime from 'CurrentTime.js'
import {addMemo} from '../js/action/index.js'

class Main extends Component {
	constructor(props) {
	  super(props);
	}
	handleAdd(){
		let data = {title: this.props.title, memo: this.props.memoes}
		addMemo({data, dispatch:this.props.dispatch})
	}
	render(){
		let
		title = {title:'Memoer',url:'http://localhost:5555/'},
		menu = [{title:'test1',url:'http://localhost/'},{title:'test2',url:'http://localhost/'},{title:'test3',url:'http://localhost/'}]

		return(
			<div>
				<Toolbar title={this.title}
						menu={this.menu} />
				<ContentEditable className='memo__titleFont' 
					role={'title'}
					allowEnter={false}
					placeholder={'タイトルを入力してください'}
					inputValue={this.state.title.value} />
				<CurrentTime></CurrentTime>
				<article>
				</article>
				<input type="button" id="add" value="登録" onClick={this.handleAdd}/>
			</div>
		)
	}
});

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Main)
