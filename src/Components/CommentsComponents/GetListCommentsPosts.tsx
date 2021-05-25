import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { CommentsModelsDTO } from "./Comments.models";
import ListComments from "./ListCommentsPosts";
import {connect} from 'react-redux'
import { fetchComments } from "../../redux/actions/CommentsActions";
import ModalComments from "../Utils/ModalComments";

function GetListCommentsPosts(props: any){

    const [listComments, setListComments] = useState<CommentsModelsDTO[]>([]);
    const {postId}: any = useParams();
    const [lgShow, setLgShow] = useState(false);

    useEffect(()=>{
       
       if(listComments.length <= 0) props.dispatch(fetchComments());         
       setListComments([...props.comments.filter((p: any)=>p.postId == postId), 
        ...props.additionalComments]);
    
    },[props.comments, props.additionalComments])
 
    return(
        <>      
           <ModalComments postId={postId} lgShow={lgShow} onHide={() => setLgShow(false)}/>
           <ListComments model={listComments} showModal={() => setLgShow(true)}/>
           </>
    )
}

export default connect((state) => {
    return state
})(GetListCommentsPosts)