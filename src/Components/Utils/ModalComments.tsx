import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { addNewComment, fetchComments } from "../../redux/actions/CommentsActions";
import {connect} from 'react-redux'
import { Form } from "react-bootstrap";

function ModalComments(props: any){
    
    const [modalShow, setModalShow] = useState(false);

    const [newComentModal, setNewComentModal] = useState<any>();
    
    const postId = props.postId;
 
    useEffect(()=>{
        setModalShow(props.onHide);
    },[modalShow])

    const AddComment = (e: React.FormEvent<HTMLFormElement>) =>{  
        e.preventDefault();   
        let newComment: any = [];
        setNewComentModal({...newComentModal, postId: props.postId});
        newComment.push(newComentModal);
        props.dispatch(addNewComment([...props.additionalComments, ...newComment]));
        setModalShow(false);      
    }

    return(
        <>
        <Modal
                size="lg"
                show={props.lgShow}
                onHide={modalShow}
                aria-labelledby="example-modal-sizes-title-lg">

                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Add new comment
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(e) => AddComment(e)}>
                        <div className="form-group">
                            <label>ID</label>
                            <input className="form-control" required onChange={(e) => {
                                setNewComentModal({ ...newComentModal, postId, id: e.currentTarget.value })
                            }} type="text" />
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input className="form-control" required onChange={(e) => {
                                setNewComentModal({ ...newComentModal, name: e.currentTarget.value })
                            }} type="text" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input className="form-control" required onChange={(e) => {
                                setNewComentModal({ ...newComentModal, email: e.currentTarget.value })
                            }} type="text" />
                        </div>
                        <div className="form-group">
                            <label>Body</label>
                            <input className="form-control" required onChange={(e) => {
                                setNewComentModal({ ...newComentModal, body: e.currentTarget.value })
                            }} type="text" />
                        </div>
                        <button type="submit" className="btn btn-primary">Add</button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )

}

export default connect((state) => {
    return state
})(ModalComments)