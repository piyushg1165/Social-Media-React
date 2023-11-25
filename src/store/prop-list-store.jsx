import { createContext ,useEffect, 
     useState, useReducer} from 'react';



export const PostList = createContext({
    postList : [],
    fetching : false,
    addPost : () => {},
    deletePost : () => {}
});

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if(action.type === 'DELETE_POST'){
        newPostList = currPostList.filter((post) => (post.id !== action.payload.postId));
    }
    else if(action.type === 'ADD_POST'){
        newPostList = [action.payload ,  ...currPostList];
    }
    else if(action.type === 'ADD_INITIAL_POST'){
        newPostList = action.payload.posts;
    }
    return newPostList;
}

const PostListProvider = ({children}) => {
    
    const [postList, dispatchPostList] = useReducer(postListReducer, []);
    
    const addPost = (post) => {
        dispatchPostList({
            type : 'ADD_POST',
            payload : 
                    post,
        });
        };

        const addInitialPosts = (posts) => {
            dispatchPostList({
                type : 'ADD_INITIAL_POST',
                payload : {
                        posts
                },
            });
            };

    const deletePost = (postId) => {
        dispatchPostList({
            type : 'DELETE_POST',
            payload : {
                postId
            },
        });
    };

    const [fetching, setFetching] = useState(false);

    useEffect(() => {
        const controller = new AbortController;
        const signal = controller.signal;

        setFetching(true);
        fetch('https://dummyjson.com/posts?limit=10' , {signal})
        .then(res => res.json())
        .then(obj => {
            addInitialPosts(obj.posts);
            setFetching(false);
        }); 


        return () => {
            controller.abort();
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return <PostList.Provider value={
        {postList, addPost, deletePost, fetching}
    }>{children}</PostList.Provider>
};




export default PostListProvider;