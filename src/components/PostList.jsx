import React from 'react';
import Posts from "./Posts";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, remove}) => {
    if(!posts.length){
        return <h1 style={{textAlign:'left', marginTop:'15px', color:'teal'}}>Посты не найдены</h1>
    }
    return (
        <div>
            <h1 style={{textAlign:'left', marginTop:'15px', color:'teal'}}>{title}</h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        nodeRef={null}
                        timeout={500}
                        classNames="post"
                    >
                        <Posts number={index + 1} post={post} removePost={remove}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;