import { PostsModelsDTO } from "./Posts.models";
import * as ReactBootstrap from 'react-bootstrap';
import { useHistory } from "react-router-dom";

export default function ListPosts(props: ListPostsProps) {

    const history = useHistory();

    const routeChange = (postId: any) =>{ 
      let path = `CommentsPosts/${postId}`; 
      history.push(path);
    }

    return (
        <>
            <h3>Post's List</h3>    
                <ReactBootstrap.Table striped bordered hover>
                    <thead className="">
                        <tr>
                            <th>UserId</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>

                        {props.model?.map(val =>
                            <tr style={{cursor: "pointer"}} key={val.id} onClick={() => routeChange(val.id)}>
                                <td>{val.userId}</td>
                                <td>{val.id}</td>
                                <td>{val.title}</td>
                                <td>{val.body}</td>
                            </tr>
                        )}
                    </tbody>
                </ReactBootstrap.Table>          
        </>
    )
}

interface ListPostsProps {
    model?: PostsModelsDTO[]
}