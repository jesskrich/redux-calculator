export default function(state = null, action) {
    switch(action.type) {
        case 'BUTTON_SELECTED':
            return action.payload

    }
    return state
}
