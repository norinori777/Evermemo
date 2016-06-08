const constants = {
  ADD_MEMO: "ADD_MEMO",
  UPDATE_MEMO: "UPDATE_MEMO",
  UPDATE_TITLE: "UPDATE_TITLE"
}

function memo(state = {},	action){
  switch(action.type) {
    case constants.UPDATE_TITLE:
      return Object.assign({}, state, {
      	title: action.title
      })
    case constants.UPDATE_MEMO:
      state.memoes[action.memo.no - 1] = {
        no: action.memo.no,
        value: action.memo.value
      }
      return Object.assign({}, state, {
        data: state.memoes
      })
    case constants.ADD_MEMO:
      return Object.assign({}, state, {
      	title: '',
      	memoes: [],
      	line: 1
      })
    default:
      return state;

  }
}

export default memo