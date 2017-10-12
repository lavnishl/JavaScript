// state is not app state , but oly reducer state this is responsible for
export default function(state = null,action) {
    // when app first starts ... then action type is not BOOK_SELECTED , state is returned so is null
    switch (action.type) {
        case 'BOOK_SELECTED' : return action.payload;
    }
    return state;
}