import ControlData from '../util/ControlData.js'

const constants = {
  ADD_MEMO: "ADD_MEMO",
  UPDATE_MEMO: "UPDATE_MEMO",
  UPDATE_TITLE: "UPDATE_TITLE"
}

Let updateMemo = (data) => {
  data.dispatch({type:constants.UPDATE_MEMO}, momo: data.memo)
}

let updateTitle = (data) => {
  data.dispatch({type:constants.UPDATE_TITLE}, title: data.title)
}

let addMemo = (data) => {
  ControlData('POST',
    '/memo',
    false,
    data,
	(inLineData) => {
      data.dispatch({type:constants.ADD_MEMO)
    }
  )
}

export {
  updateMemo,
  updateTitle,
  addMemo
}