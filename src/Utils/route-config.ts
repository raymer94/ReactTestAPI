import GetListCommentsPosts from "../Components/CommentsComponents/GetListCommentsPosts";
import GetListPosts from "../Components/PostsComponents/GetListPosts";
import RedirectToPosts from "./RedirectToPosts";

const routes = [
    {path: '/', component: GetListPosts, exact: true },
    {path: '/CommentsPosts/:postId(\\d+)', component: GetListCommentsPosts, exact: true},

     {path: '*', component: RedirectToPosts, exact: true}
];

export default routes;