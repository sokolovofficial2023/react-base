import React, {useRef, useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {

    const [posts, setPosts] = useState(
        [
            {id:1,title:'JavaScript',body:'Description'},
            {id:2,title:'Ruby',body:'Description'},
            {id:3,title:'C++',body:'Description'},
            {id:4,title:'C++',body:'Description'},
            {id:5,title:'C++',body:'Description'},
        ]
    )

    const [selectSort, setSelectSort] = useState()
    const [searchQuery, setSearchQuery] = useState('')
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (remPost) => {
        setPosts(posts.filter(post => post.id !== remPost.id))
    }

    const sortPost = (sort) =>{
        setSelectSort(sort)
        setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
        console.log(selectSort)
    }
    
  return (
    <div className="App">
        <PostForm create={createPost}/>
        <MyInput
            value={searchQuery}
            placeholder='Поиск....'
            onChange={e => setSearchQuery(e.target.value)}
        />
        <MySelect
            value={selectSort}
            onChange={sortPost}
            defaultValue={'Сортировать по'}
            option={[
                {value:'body', name:'По описанию'},
                {value:'title', name: 'По названию'}
            ]}
        />

        <PostList posts={posts} remove={removePost} title={'Список постов'}/>
    </div>
  );
}

export default App;

