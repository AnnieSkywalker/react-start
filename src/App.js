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
import { getPageCount, getPagesArray } from "./utils/pages";

function App() {

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);
  let pagesArray = getPagesArray(totalPages);



  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  })

  useEffect(()=>{
    fetchPosts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page);
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

      <div className="page__wrapper"></div>

      {pagesArray.map(p =>
        <span onClick={() => changePage(p)} key={p} className={p === page? 'page page__current' : 'page'}>{p}</span>
      )}

      <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={createPost}></PostForm>
      </MyModal>
    </div>
  );
}

export default App;
