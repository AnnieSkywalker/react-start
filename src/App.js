import React, {useMemo, useState} from "react";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/MySelect";
import MyInput from "./components/UI/input/MyInput";

import './stales/App.css'
import PostList from "./components/PostList";

function App() {

  const [posts, setPosts] = useState([
      {id: 1, title: 'javascript', body: 'discription' },
      {id: 2, title: 'javascript2', body: 'discription' },
      {id: 3, title: 'javascript3', body: 'discription' },
    ]
  )
  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');



  const sortedPosts = useMemo(()=> {
    if(selectedSort) {
      console.log('nen')
      return [...posts].sort((a, b)=> a[selectedSort].localeCompare(b[selectedSort]));
    } else {
      return posts;
    }
  }, [selectedSort, posts]);

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
  }, [searchQuery, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPost = (sort) => {
    setSelectedSort(sort);
  }

  return (
    <div className="App">
      <PostForm create={createPost}></PostForm>
      <hr style = {{margin: '15px 0'}}></hr>
      <div>
        <MyInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder='Поиск...'
        ></MyInput>
        <MySelect
          defaultValue='Сортировка'
          value={selectedSort}
          onChange={sortPost}
          options={[
            {value: 'title', name: 'по заголовку' },
            {value: 'body', name: 'по телу' }
          ]}
        >
        </MySelect>
      </div>
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
