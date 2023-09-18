import React, {useMemo, useRef, useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/myModal/MyModal";

function App() {

    const [posts, setPosts] = useState(
        [
            {id: 1, title: 'JavaScript', body: 'Description'},
            {id: 2, title: 'Ruby', body: 'Description'},
            {id: 3, title: 'C++', body: 'Description'},
            {id: 4, title: 'C++', body: 'Description'},
            {id: 5, title: 'C++', body: 'Description'},
        ]
    )


    const [filter, setFilter] = useState({sort: '', query: ''})

    const [modal, setModal] = useState(false)



    const sortedAndSearchPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.includes(filter.query))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (remPost) => {
        setPosts(posts.filter(post => post.id !== remPost.id))
    }


    return (
        <div className="App">
            <MyButton
                style={{marginTop:'30px'}}
                onClick={()=>setModal(!modal)}

            >
                Создать пост
            </MyButton>
            <MyModal
                visible={modal}
                setVisible={setModal}
            >
                <PostForm create={createPost}/>
            </MyModal>


            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />

            <PostList posts={sortedAndSearchPosts} remove={removePost} title={'Список постов'}/>
        </div>
    );
}

export default App;

