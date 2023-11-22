import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import {PostList} from "../store/prop-list-store";


const Post = ({post}) => {

  const {deletePost} = useContext(PostList);
    return (
        <div className="card post-card" style={{width: "30rem"}}>
  <div className="card-body">
    <h5 className="card-title position-relative">{post.title}</h5>
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      <MdDelete onClick={() => {deletePost(post.id)}}/>
      </span>
    <p className="card-text">{post.body}</p>
    {post.tags.map((tag) =>  (<span key={tag} className="badge bg-primary rounded-pill m-1" >{tag}</span>))}
    <div className="alert alert-success reactions" role="alert">
  This post has been reacted by {post.reactions} people.
</div>
  </div>
</div>
    );
};

export default Post;