const initialState = {
    user: {}
}

//action is n object
//action creator is a function with type n payload

//action 
const UPDATE_USER = 'UPDATE_USER';

//action creator
//this fn needs to be invoked in Private.js
export function updateUser(userObj) {
    return {
        type: UPDATE_USER,
        payload: userObj
    }
}
// 
export default function reducer( state = initialState, action ) {
   switch(action.type) {
       case UPDATE_USER:
       return Object.assign({}, state, { user: action.payload })
       default:
        return state;
   }
}