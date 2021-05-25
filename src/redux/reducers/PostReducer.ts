import { PostState} from "../types/PostTypes";

const initialState: PostState = {
    data: []
}

const PostReducer = (state = initialState, action: any) =>{
    if (action.type === "POST_COMMENTS"){
            return {
                ...state,
                 data: action.payload 
            }
        }
         return {...state};
    }


export default PostReducer;