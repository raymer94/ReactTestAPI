import {FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR, ADD_COMMENT} from '../actions/CommentsActions'

const initialState = {
    comments: [],
    isFetching: false,
    additionalComments: []
}

type Action = {
    type: string,
    payload: [] 
}

function comments (state = initialState, action: Action){
    switch(action.type){
        case ADD_COMMENT:
            return {
                ...state,
                additionalComments: action.payload
            }
        case FETCH_POSTS_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                comments: action.payload
            }
        
        case FETCH_POSTS_ERROR:
            return {
                ...state,
                isFetching: false,
                error: 'ERROR'
            }

        default:
            return state
    }
}
export default comments