

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';
export const ADD_COMMENT = 'ADD_COMMENT';

export const fetchComments = () => (dispatch: any) => {

    dispatch({type: FETCH_POSTS_REQUEST})

    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res => res.json())
    .then(comments => {
        dispatch({
            type: FETCH_POSTS_SUCCESS,
            payload: comments
        })
    })
    .catch(error =>{
        dispatch({
            type: FETCH_POSTS_ERROR,
            error: error.toString()
        })
    })
}

export const addNewComment = (newComment: any) => (dispatch: any) =>{
    dispatch({
        type: ADD_COMMENT,
        payload: newComment
    })
}