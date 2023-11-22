import { useContext } from "react";
import Post from "./Post";
import {PostList as PostListData} from "../store/prop-list-store"
import WelcomeMessage from "./WelcomeMessage";



const PostList = () => {

const {postList} = useContext(PostListData);
const {addInitialPosts} = useContext(PostListData);

    const handleGetPostsClick = () => {
        fetch('https://dummyjson.com/posts?limit=10')
        .then(res => res.json())
        .then(obj => addInitialPosts(obj.posts)); 
    }

    return (
        <>
        { postList.length === 0 && <WelcomeMessage onGetPostsClick={handleGetPostsClick}/>}
        {postList.map((post) => <Post key={post.id} post={post}/>)}
        </>
    );
};

export default PostList;