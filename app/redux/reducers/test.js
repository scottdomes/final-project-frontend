import {
    Text as TextActions 
} from '../actions'

const initialState = {
  text: ''
}

function testReducer(state = initialState, action) {
    console.log(arguments)
    // switch (action.type) {
    //     case TextActions.TEST_REDUCER:
    //             return Object.assign({}, state, {
    //                 text: action.texxt
    //             })
    //     console.log(state)
    //     return state
    // }
    // return state
}

export default testReducer