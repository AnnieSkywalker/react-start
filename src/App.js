import React, { useEffect, useState} from "react";
import PostForm from "./components/PostForm";
import './stales/App.css'
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";

import { usePosts } from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/loader/Loader";
import {useFetching} from "./hooks/useFetching"

function App() {

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
  const posts = await PostService.getAll();
    setPosts(posts);
  })

  useEffect(()=>{
    fetchPosts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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

      {postError && <h1>Произошла ошибка ${postError}</h1>}

      {isPostsLoading ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div> : <PostList remove={removePost} posts={sortedAndSearchPosts} title='Список постов'/>}

      <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={createPost}></PostForm>
      </MyModal>
    </div>
  );
}

export default App;
