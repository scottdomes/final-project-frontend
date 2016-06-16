export const _testAction = (text) => ({ type: TEST_REDUCER, text })

export function testAction(text) {
    return (dispatch, getState) => {
        dispatch(_testAction(text))
    }
}