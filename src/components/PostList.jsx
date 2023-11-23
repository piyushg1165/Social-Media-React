import { useContext , useEffect, useState} from "react";
import Post from "./Post";
import {PostList as PostListData} from "../store/prop-list-store"
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";



const PostList = () => {

const {postList, addInitialPosts} = useContext(PostListData);
const [fetching, setFetching] = useState(true);

    useEffect(() => {
        const controller = new AbortController;
        const signal = controller.signal;

        // setFetching(true);
        fetch('https://dummyjson.com/posts?limit=10' , {signal})
        .then(res => res.json())
        .then(obj => {
            obj.posts.map((post) => (addPost(post.id, post.title, post.body, post.userId, post.tags, post.reactions)));
            setFetching(false);
        }); 


        return () => {
            controller.abort();
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

   

    return (
        <>
        {fetching && <LoadingSpinner/>}
        { !fetching &&postList.length === 0 && <WelcomeMessage />}
        {!fetching &&postList.map((post) => <Post key={post.id} post={post}/>)}
        </>
    );
};

export default PostList;
