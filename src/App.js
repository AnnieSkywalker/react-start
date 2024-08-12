import React, { useState} from "react";
import PostForm from "./components/PostForm";


import './stales/App.css'
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";

import { usePosts } from "./hooks/usePosts";

function App() {

  const [posts, setPosts] = useState([
      {id: 1, title: 'javascript', body: 'discription' },
      {id: 2, title: 'javascript2', body: 'discription' },
      {id: 3, title: 'javascript3', body: 'discription' },
    ]
  )

  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">

      <MyButton style={{marginTop: 30}} onClick={()=>setModal(true)}>
        Открыть модальное окно
      </MyButton>


      <hr style = {{margin: '15px 0'}}></hr>

      <PostFilter
        filter={filter}
        setFilter={setFilter}
      ></PostFilter>

      <PostList remove={removePost} posts={sortedAndSearchPosts} title='Список постов'/>

      <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={createPost}></PostForm>
      </MyModal>
    </div>
  );
}

export default App;
