import { CommentsModelsDTO } from "./Comments.models";
import * as ReactBootstrap from 'react-bootstrap';
import { Link } from "react-router-dom";

interface ListCommentsProps{
    model?: CommentsModelsDTO[],
    showModal: any
}

export default function ListCommentsPosts(props: ListCommentsProps){
    return(
        <>
            <h3>List of comments</h3>
            <Link className="btn btn-danger mb-2" to={"/"}>Back</Link>
            <button className="btn btn-primary mb-2 mx-sm-3" onClick={props.showModal}>Add new comment</button>
                <ReactBootstrap.Table striped bordered hover>
                    <thead className="">
                        <tr>
                            <th>postId</th>
                            <th>id</th>
                            <th>name</th>
                            <th>email</th>
                            <th>body</th>
                        </tr>
                    </thead>
                    <tbody>

                        {props.model?.map(val =>
                            <tr key={val.id}>
                                <td>{val.postId}</td>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td>{val.body}</td>
                            </tr>
                        )}
                    </tbody>
                </ReactBootstrap.Table>
        </>
    )
}

