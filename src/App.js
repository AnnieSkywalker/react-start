import React, {useMemo, useState} from "react";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/MySelect";
import MyInput from "./components/UI/input/MyInput";

import './stales/App.css'
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";

function App() {

  const [posts, setPosts] = useState([
      {id: 1, title: 'javascript', body: 'discription' },
      {id: 2, title: 'javascript2', body: 'discription' },
      {id: 3, title: 'javascript3', body: 'discription' },
    ]
  )
  // const [selectedSort, setSelectedSort] = useState('');
  // const [searchQuery, setSearchQuery] = useState('');

  const [filter, setFilter] = useState({sort: '', query: ''})



  const sortedPosts = useMemo(()=> {
    if(filter.sort) {
      console.log('nen')
      return [...posts].sort((a, b)=> a[filter.sort].localeCompare(b[filter.sort]));
    } else {
      return posts;
    }
  }, [filter.sort, posts]);

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}></PostForm>

      <hr style = {{margin: '15px 0'}}></hr>

      <PostFilter
        filter={filter}
        setFilter={setFilter}
      ></PostFilter>

      {
      sortedAndSearchPosts.length !== 0
      ?
       <PostList remove={removePost} posts={sortedAndSearchPosts} title='Список постов'/>
      :
        <h1 style={{textAlign: 'center'}}>
          Посты не найдены!
        </h1>
      }

    </div>
  );
}

export default App;
