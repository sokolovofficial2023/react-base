import React from 'react';
import Posts from "./Posts";

const PostList = ({posts, title}) => {
    return (
        <div>
            <h1 style={{textAlign:'left', marginTop:'15px', color:'teal'}}>{title}</h1>
            {posts.map((post, index) =>
                <Posts number={index + 1} post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;