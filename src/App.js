import React, {useRef, useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {

    const [posts, setPosts] = useState(
        [
            {id:1,title:'JavaScript',body:'Description'},
            {id:2,title:'Ruby',body:'Description'},
            {id:3,title:'C++',body:'Description'},
            {id:4,title:'C++',body:'Description'},
            {id:4,title:'C++',body:'Description'},
        ]
    )

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }





  return (
    <div className="App">
       <PostForm create={createPost}/>
       <PostList posts={posts} title={'Список постов'}/>
    </div>
  );
}

export default App;

