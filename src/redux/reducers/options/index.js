import actions from '../../actions/options'

const INITIAL_STATE = {
  ano: new Date().getFullYear(),
  orgao: 0,
  formVisible: false,
}

export default (state = INITIAL_STATE, action) => {
  if (action.type === actions.CHANGE_OPTIONS_ANO) {
    return { ...state, ano: action.ano }
  } else if (action.type === actions.CHANGE_OPTIONS_ORGAO) {
    return { ...state, orgao: action.orgao }
  } else if (action.type === actions.TOGGLE_OPTIONS_FORM) {
    return { ...state, formVisible: !state.formVisible }
  } else {
    return state
  }
}
